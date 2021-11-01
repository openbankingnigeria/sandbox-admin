# Securing Consumer Information

TPPs and APs _must_ comply with the provisions of Nigeria Data Protection Regulation, 2019 administered by the NITDA including the statutory assessment and reporting requirements. If there are any discrepancies between this framework and the prescriptions of the NDPR, those of the NDPR supersede and should be adopted by the participant. Similarly, in the case of any overlaps in the standards, the strictest standard should be adhered to by the participant.

### Data Ownership <a href="securingconsumerinformation-dataownership" id="securingconsumerinformation-dataownership"></a>

As data could potentially be transmitted across multiple organizations in the Open Banking system it is necessary to define guidelines regarding how the data is accessed and used. The objective is to assure consumers of the security and privacy of their information to engender trust. The following types of data are considered in this framework.

#### Consumer Profile Information <a href="securingconsumerinformation-consumerprofileinformation" id="securingconsumerinformation-consumerprofileinformation"></a>

This includes personal data such as date of birth, name, email address, phone number or any other piece of information that can be used to identify or qualify a user on the network. This data ultimately belongs to the consumer and should not be used in any way the consumer has not given consent. However, APs and TPPs act as custodians of this data and ownership in this sense should be seen as stewardship. The owner of this data is the entity to which the consumer has provided the data directly. In most cases, this starts with APs. In the course of data exchange, a TPP could become privy to information initially provided to the AP. Such data cannot be used as primary data by the TPP unless explicitly confirmed by the customer. For instance, in the course of retrieving statement data, a user's date of birth is returned to a TPP who previously did not have this information. The TPP can only use the date of birth in birthday greetings, age estimation etc. after providing the information to the customer to 1) confirm that this is their date of birth 2) consent to enlisting it within the application. This process is not applicable to processes of credential transfers where the customer consents to permitting a provider copy or clone their credentials from other providers. However, the credentials to be copied must be explicitly enumerated for the consumer's consent.

#### Consumer Financial Data <a href="securingconsumerinformation-consumerfinancialdata" id="securingconsumerinformation-consumerfinancialdata"></a>

Details such as account number, account balance, BVN, and account statements fall within this category. Within these guidelines, a TPP may retrieve this data from APs of the consumer but is not permitted to store or utilize as primary data subsequently. For the avoidance of doubt, the duration of storage should not exceed the user's session time within the TPP's environment such that once a session is concluded, the information is expunged. This data may be analyzed by TPPs on a per-user basis and the results of such analysis stored as long as such results do not contain contiguous sets of primary data or user activity. System initiated requests for data, for instance, checking the user's balance on a regular basis, should be explicitly consented to as well.

#### Consumer Transaction Data <a href="securingconsumerinformation-consumertransactiondata" id="securingconsumerinformation-consumertransactiondata"></a>

Transactional data in this context refers to actions performed within the TPP domain that may or may not be of financial consequence against the consumers' funds within an AP's domain. Such data is available to the TPP to utilize and manipulate within the context of their operations. Note that if such activity is recorded in the AP's domain such as a debit or credit to the account, the record of data held by the AP falls within the custody of the AP and is subsequently categorized as Consumer Financial Data.

It should be noted that data such as service and operational charges levied against customers by their APs are under the explicit ownership of the AP and may not be used for any analysis independently, called out or highlighted by the TPP. Such data may only be displayed as part of a standard transaction history listing if the feature is supported.

### Consumer Consent Framework <a href="securingconsumerinformation-consumerconsentframework" id="securingconsumerinformation-consumerconsentframework"></a>

The thrust of the consent framework is to provide a governing structure covering types of access that require consent, how consent is obtained and recorded. All consumer profile and financial data represent information for which consent must be sought before accessing.

The following guidelines should be followed in requesting, obtaining and recording consent by TPPs and APs:

1. Consent should be explicitly requested.
   1. It should state the elements of data the consumer would be giving the TPP access to
   2. The prompt for consent should indicate the periodicity of the access where applicable
   3. It should also state what the data would be used for and permit the customer to select functions or services for which they wish to subscribe/unsubscribe within the context of the data access requested.
   4. No pre-selections should be done by the application. The user must actively perform an action to indicate consent.
   5. The option to NOT proceed or deny consent must be given and stand out as a clear choice.
2. Consent should not be hidden within elaborate and verbose text such as contractual terms. It should be called out, legible, unambiguous and data objects presented in a list with familiar terminology.
3. Consent for compound data such as statement information, by inference is taken as consent to access the sub-elements contained within. However, the consent prompt should indicate the intended use and remain within those confines.
4. Consent should be recorded for the lifetime of the access and for audit purposes, 180 days afterwards.
5. Records should indicate the time at which consent was given and the details of permissions granted especially where selections are available for the consumer to opt in or out.

TPPs and APs must also comply with all of the provisions within Section 8 of the NDPR 2019 regarding data consent.
