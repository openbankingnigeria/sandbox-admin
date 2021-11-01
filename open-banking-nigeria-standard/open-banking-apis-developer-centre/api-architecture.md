# API Architecture

{% hint style="info" %}
All APIs within this framework are RESTFUL and support JSON payload formats. The APIs are grouped into four (4) categories based on their functions:
{% endhint %}

### Registration APIs <a href="apiarchitecture-registrationapis" id="apiarchitecture-registrationapis"></a>

This group lists APIs that manage access and permissions within each AP domain. The registration framework requires TPPs and individual consumers to be registered and subsequently access just the services that have been permitted with accompanying proof of consent.

TPPs may apply this set of APIs to onboard with APs or get setup by the APs manually. APs are to perform due diligence after which they can approve TPP registrations, allowing access to groups or specific APIs that the TPP is permitted on behalf of customers. Registration of TPPs provides system-level credentials to the TPP application necessary to access other API categories in the framework.

Customers accessing their accounts through registered TPPs must be registered with their APs by creating TPP specific registration records. Registration for consumers provides tokens that permit only that TPP to access the user-specified Account Number within the AP's domain. Also at the user level, each registration record should specify the APIs and functions the user has provided consent to the TPP to access.

APs are at liberty to permit, deny or revoke access as deemed necessary. This is further elaborated in the Security guidelines and API specifications.

### Meta-Directory APIs <a href="apiarchitecture-meta-directoryapis" id="apiarchitecture-meta-directoryapis"></a>

This group contains APIs that provide cacheable listings including but not limited to financial institution names and assigned codes, product and service identifiers, response code directory and performance information. Data provided by these APIs change less frequently and can be polled on a scheduled basis. Some of these are also static and provided within this documentation.

### Open-Data APIs <a href="apiarchitecture-open-dataapis" id="apiarchitecture-open-dataapis"></a>

This collection of APIs provide access to financial institution data such as channel information, for example ATM, POS and Bank Branch locations. TPPs should be granted access to their required data APIs by APs at the institution level.

### Payment APIs <a href="apiarchitecture-paymentapis" id="apiarchitecture-paymentapis"></a>

This collection of APIs consists of READ and WRITE APIs. READ APIs provide consumer information e.g. Accounts balances, BVN, Transaction History, Indebtedness and debt profile/history, standing instructions etc. WRITE APIs result in the movement of financial value either per transaction (as in the case of individual payments) or in-bulk (e.g. inter-member settlements, disbursements, single debit-multiple credit etc.)
