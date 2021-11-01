# Messaging Standard

### Message Headers <a href="messagingstandard-messageheaders" id="messagingstandard-messageheaders"></a>

Each payload in the Open Banking system may include the following header elements:

|    | Header                                  | Description                                                                                                                                                                                                     | Requirement |
| -- | --------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 1  | On-behalf-of Participant                | If several TPPs participate in the messaging chain, this field indicates the name of the originating TPP assigned or known to the last-mile TPP                                                                 | Conditional |
| 2  | Client ID                               | ID of the TPP assigned by the AP. This only applies to the last mile connection of TPPs to APs                                                                                                                  | Conditional |
| 3  | Daily Message Serial Number             | A serial number for tracking messages sent/received between two participants daily                                                                                                                              | Optional    |
| 4  | Unique Message Key (or idempotency key) | The key is the single unique reference across all systems and should be maintained across the value chain (even across multiple TPPs)                                                                           | Mandatory   |
| 5  | Logical Message Sequence Number         | Used only if the payload is part of a sequence of messages                                                                                                                                                      | Optional    |
| 6  | Message Signature                       | The content of the message signature differs for each payload depending on fields categorized as sensitive. Please see the section on Message Security for further details on how to deduce and use this field. | Mandatory   |
| 7  | Request Message Sent Epoch Time         | Populated by the initiator (typically a TPP) in a request message                                                                                                                                               | Mandatory   |
| 8  | Request Message Received Epoch Time     | Populated by the recipient (typically an AP) in a response message                                                                                                                                              | Mandatory   |
| 9  | Request Processing Completed Epoch Time | Populated by the recipient. Identifies the time at which the request has passed the API screening and forwarded to perform the requested system function.                                                       | Optional    |
| 10 | Response Processing Started Epoch Time  | Populated by the recipient. Identifies the time at which the system function has been completed and control handed back to the API to respond.                                                                  | Optional    |
| 11 | Response Message Sent Epoch Time        | Populated by the recipient in the response payload                                                                                                                                                              | Mandatory   |
| 12 | Response Message Received Epoch Time    | Populated by the initiator in the response payload                                                                                                                                                              | Mandatory   |
| 13 | Next Page                               | Used to populate the URL to the next page in a paged response payload                                                                                                                                           | Conditional |
| 14 | Key / Group ID                          | A numeric identifier indicating the version of security credentials that apply to this API call. Refer to the Security Guidelines for a list of these credentials.                                              | Mandatory   |

\
The viability and usefulness of a numeric identifier per institution assigned by OBN is also under consideration. The objective is to identify the initiating and recipient institutions across the complete message trajectory. If determined to be viable, the fields will be updated in future releases of the API specifications. Currently APs and TPPs are advised to support the placeholders indicated in the API specifications but allow for them to be blank or null populated.

The timestamp headers help institutions, particularly TPPs identify and analyze transient delays in message processing to proactively identify any processing bottlenecks. Other essential message header fields are indicated in the API specifications.

### Message Integrity <a href="messagingstandard-messageintegrity" id="messagingstandard-messageintegrity"></a>

Participants must unequivocally receive and validate responses before an exchange can be deemed complete. Where an exchange is incomplete either by way of a response time-out, erroneous response structure, or content validation errors, remedial steps must be taken by the initiating participant to ensure that any financial changes within the recipient's system are rolled back _immediately_ and where not immediately possible, maintain a retry mechanism with frequencies tailored to the sensitivity of the operation to a maximum of **6 hours**. Finally, where these steps fail, the records should be escalated for manual treatment by personnel of the organization. Recovery action varies for different APIs and may not be necessary altogether for Open Data and META Directory type of APIs which are inherently READ APIs.\
Payment APIs or other APIs involved in change operations such as INSERT, UPDATE or DELETE operations, notwithstanding their financial significance, should indicate the state of completion of the operation. State definitions are subject to internal system operated by the participant but at the minimum should indicate:

1. Request-in and Request-out status: captures the state of the request received by the entity and the request sent to any other participating entity in the value chain (if relevant)
2. Response-in and Response-out status: shows whether the entity in question has received a response for the operation from the upstream provider (where relevant) and also whether a response has been sent to the downstream requester.

As a guide, a simple prescription for a database structure is to maintain 7 columns per operational record that indicates with timestamps or null values the request/response in and out timestamps (taking up 4 columns), one column for the response state i.e. either valid or invalid or non-existent and the last 2 columns as the retry/cancellation request and response timestamps. Operations that have exceeded their permissible timeout periods or respond with format or validation errors should update the response status accordingly which could trigger an asynchronous process to start a retry/cancellation call based on the status and type of operation.

### Idempotency <a href="messagingstandard-idempotency" id="messagingstandard-idempotency"></a>

The APIs support idempotency for safely retrying POST transactions without accidentally performing the same operation twice. This is useful when an API call is disrupted, and no response has been received. For example, _request\_time\_out_ or _response\_received\_too\_late_. Therefore, if a response message is not received for a transaction, the request can be retried (if suitable for the transaction) with the same idempotency key, with a guarantee that no more than one transaction would be posted.

To perform an idempotent request, an Idempotency-Key: header must be included in each request.

Idempotency works by saving the resulting status code and body of the first request made for any given idempotency key, regardless of whether it succeeded or failed. Subsequent requests with the same key should return the same result, including Server (500) errors.

An idempotency key is a unique value generated by the initiating TPP which the server uses to recognize subsequent transaction retries of the same request. It is up to the TPP to determine how these idempotency keys would be generated. Whatever it is, it must have enough entropy to avoid collisions. Idempotency keys are not time-limited and should be unique for the lifetime of the connected endpoints.

Furthermore, Idempotency keys should only be stored by the receiving AP endpoint if the payload passes initial screening for structure, format and key-field validation and has commenced internal processing within the API function that was called. If incoming parameters failed validation, or the request conflicted with another that was executing concurrently, no idempotent result is saved because no API endpoint began execution. It is safe to retry these requests.

All POST requests accept idempotency keys and all transaction API calls must have idempotency keys. Sending idempotency keys in GET and DELETE requests has no effect and should be avoided, as these requests are idempotent by definition.

### Timeouts <a href="messagingstandard-timeouts" id="messagingstandard-timeouts"></a>

The maximum allowable timeout period for each API call is defined per API category/group. Registration and Meta Directory operations have a maximum timeout of 90 seconds, Open Data operations 45 seconds and Payment operations 30 seconds. Subject to SLAs, stricter timeout settings can be employed between TPPs and APs and may vary per API if those variations are easily managed by both parties.

### Paging <a href="messagingstandard-paging" id="messagingstandard-paging"></a>

For endpoints that provide a potentially long list of records, the response may be paged depending on the total number of records that the server can return at a time. This maximum setting is subject to the server capabilities. Within open banking specifications, APIs that are to be paged are implemented with http GET verb.

To retrieve the full dataset in this category, the requester may need to submit several requests. The first request would typically assume the complete data set will be returned and therefore make no reference to paging. If the server determines that paging is required, the server participant will be required to populate a NextPage response header with a URI link to the next page which should indicate the _**start\_id**, **limit**_ and \*_enum_

* Paging details should go in the Message Response Header section query parameters already pre-populated by the server. The enum parameter is a temporary GUID that provides a reference to the object being queried which the server may have cached or mapped to a database query. The initiator (typically a TPP) could easily use this link as the request URI to fetch subsequent pages. OBN recommends that servers retain result sets or cached query maps for at least 5 minutes before purging from memory. Where a paged request is made with a GUID that has been purged, the server should return a HTTP 50Xor just 404.50X implies the data might be there once the server has rectified error. requiring the initiator to restart the query with the initial payload.

This architecture requires that cached paged records on the server-side are ordered with serial numeric identifiers which could be dynamically allocated to a dataset based on date/time-sorting or some other method of ordering the dataset records. Dynamic sorting or filtering is not supported by OBN APIs. The TPP may employ sorting and filtering logic to cached data within the user's session after pulling from APs.

### Naming Convention <a href="messagingstandard-namingconvention" id="messagingstandard-namingconvention"></a>

Most fields in the API specifications are designated in lowercase with underscores separating each parameter-word to keep the fields easily readable and as close to their representative meaning as possible. All field names are strictly alphanumeric. No other notable conventions are applied in this version.

### Data Types and Formats <a href="messagingstandard-datatypesandformats" id="messagingstandard-datatypesandformats"></a>

The following data types and format conventions will be used in OBN APIs:

| Type            | Format                         | Description                                                                                                                                                                                         |
| --------------- | ------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| String          | \[A-Z]\[a-z]\[0-9]             | Does not include special or non-printable characters.                                                                                                                                               |
| Boolean         | Enum                           | Valid values are ("true",”1”) or ("false",”0”)                                                                                                                                                      |
| Amount          | \[0-9].\[0-9],length:2\|3      | Amounts must always be represented with dot and proceeded with the number decimals for the currency in question even where no decimal values are present. A maximum of 12 major digits are allowed. |
| AccountType     | Enum                           | CURRENT, SAVINGS, CREDIT, INVESTMENT, MORTGAGE, WALLET, PREPAID, LOAN, OTHER                                                                                                                        |
| AccountNumber   | \[0-9], length:10              | The NUBAN Account format                                                                                                                                                                            |
| PhoneNumber     | +\[0-9], length:1-3, ”-“\[0-9] | Must be in international format e.g. +234-8032148373                                                                                                                                                |
| CurrencyCode    | \[A-Z]\[0-9], length:3         | Currency code in ISO 4217 format in either numeric or alphanumeric format                                                                                                                           |
| CurrencySymbol  | \[A-Z], length:1-3             | Display symbol for the currency e.g. “N” or “NGN” used to render the amount on screen or in receipts.                                                                                               |
| Date            | yyyyMMdd                       | These date formats should be applied to API exchanges to limit errors.                                                                                                                              |
| DateTime        | yyyyMMddHHmmssfff              |                                                                                                                                                                                                     |
| JulianDate      | YDDD                           |                                                                                                                                                                                                     |
| Timestamp       | YDDDnnnnnnnnn                  |                                                                                                                                                                                                     |
| DisplayDate     | yyyy/MM/dd                     | These date formats should be applied for display purposes only                                                                                                                                      |
| DisplayTime     | HH:mm:ss (fff) - optional      |                                                                                                                                                                                                     |
| DisplayDateTime | yyyy/MM/dd HH:mm:ss fff        |                                                                                                                                                                                                     |
| EpochDateTime   | \[0-9]                         | UTC date in epoch milliseconds. i.e. time between current millisecond and 1970-01-01 00:00:00 000                                                                                                   |
| CountryCode2    | \[A-Z], length:2               | Country code in ISO 3166-1 alpha-2 format, e.g. "NG"                                                                                                                                                |
| CountryCode3    | \[A-Z], length:3               | Country code in ISO 3166-1 alpha-3 format, e.g. "NGA"                                                                                                                                               |

### Message Security <a href="messagingstandard-messagesecurity" id="messagingstandard-messagesecurity"></a>

OBN APIs are secured at multiple levels in the data exchange stack ranging from identity verification, access and permission management to network, message and field level security mechanisms. This section describes the security protocols employed at the message and field levels only. For more information regarding the complete security framework, please refer to _the OBN Security Framework and Guidelines_ section within this document.

Message Level Security is accomplished with _Message_ _Signing_. _Message_ _Signing_ involves generating a SHA512 hash of data that distinctly qualifies a message payload. This typically is a collection of message fields that are considered a distinct representation of the message and its contents in addition to certain control fields. _Message_ _Signing_ is required to ensure that if the message payload is intercepted either before the Transport layer encryption or within, the recipient can validate the authenticity of the message content before processing and decline if not found to match the indicated request details. Note that this feature is not to be confused with _Message_ _Encryption_ where the full API payload is encrypted with an asymmetric key pair. The underlying reason is that OBN has decided NOT to encrypt the full payload to eliminate the decryption overhead required to log such message exchanges and also to allow requisite fields to be easily identifiable in the logs.

To prevent replay attacks, the signature includes the time at which the message was sent and the idempotency key. After signature validation, the timestamp is checked to ensure that the message is current and does not exceed the system time by more or less than 3 minutes allowing for marginal system time disparities. The payload from the sending party is expected to contain the Message Signature header which will be recalculated by the recipient with the same agreed fields and compared for validation. Note that fields must be combined in the order in which they are documented prior to encryption.

Message Signing is defined on a "per-API" basis because all payloads do not require this level of scrutiny. The API specifications indicate APIs that require message signing. At the field level, sensitive fields (prefixed with 'x') are also to be encrypted directly by the sender using the public key provided and decrypted by the recipient's application for verification and further processing.

### Event Logging <a href="messagingstandard-eventlogging" id="messagingstandard-eventlogging"></a>

To keep a reasonable trail of API activity, logs are required for all requests and responses to be kept for at least 180 days by APs and TPPs. Participants will need to assess the requirements and provide sufficient infrastructure given the volumes they expect and peak period loads.

Logs should be kept for ALL messages received in raw first, and optionally log in formatted layout before any business logic processing is performed. Likewise, outgoing messages should be logged once constructed after all internal processing just before being sent.\
