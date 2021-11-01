# Data Management and Exchange

The following guidelines may be employed organizations intending to participate in the Open Banking system, however, these represent strict requirements for APs. Organizations should:

1. Be ISO 9001 and 27001 certified or obtain equivalent or similar Quality and Information Security management accreditation.
2. Place Open Banking APIs in a distinct network DMZ from other systems within the provider's network.
3. Implement system level firewalls to manage the exchange of information between Open Banking APIs and internal systems; limited to very specific functions allowed.
4. Implement requisite controls against denial of service attacks, malware, viruses and other digital threats.
5. Likewise restrict any exchanges from internal systems to the Open Banking API-hosted servers to the required minimum and essential personnel only.
6. All communication to and from Open Banking APIs must be over an SSL TLS v1.2 connections with mutual certificate authentication at each end of the line. Organizations that prefer to host certificates on a proxy device such as a firewall or network load balancer must ensure that internal communication between the proxy system and the system hosting the APIs is secure.
7. File exchanges must occur over SFTP; never emails even if password protected. APs are required to provide such infrastructure or leverage cloud solutions.

### Network or Transport Layer Security <a href="datamanagementandexchange-networkortransportlayersecurity" id="datamanagementandexchange-networkortransportlayersecurity"></a>

For Open Banking APIs, ASN X.509 certificates provide transport level security to API calls with TLS 1.2 two-way mutual SSL authentication.

TPPs who expect to connect with APs will be required to submit a Certificate Signing Request to the AP via SFTP at the minimum or over any secure portal provided. The CSR is signed by the AP and the signed certificate returned to the TPP to be loaded securely into a keystore.

All API exchanges between the TPP and AP require mutual authentication before data can be exchanged. Details on generating a CSR, signing a CSR, importing a signed Certificate and enabling mutual authentication on the client and server sides are provided with the API specifications.

### Endpoint Security <a href="datamanagementandexchange-endpointsecurity" id="datamanagementandexchange-endpointsecurity"></a>

APs are required to maintain identifiers such as the public and private IP addresses and application meta-data of connected TPPs. This information should be used to create endpoint signatures of the respective TPPs. Operating within the Open Banking network requires APs to carry out endpoint-level assessment to the tune that credentials of the TPP application and users may only be permitted when used from an endpoint matching the compiled TPP signature.

If a data breach occurs at the TPP, this prevents any pilfered data from being used publicly or from another domain to access information relating to the TPP within the AP domain. The algorithm for building endpoint signatures is provided in the API specifications.

### Message Level Security <a href="datamanagementandexchange-messagelevelsecurity" id="datamanagementandexchange-messagelevelsecurity"></a>

Refer to message and field level security implementations in the _Messaging Standards_ section.

![Figure: Open Banking Data Exchange Security Architecture](<../../.gitbook/assets/image (2).png>)

### Data Security <a href="datamanagementandexchange-datasecurity" id="datamanagementandexchange-datasecurity"></a>

APs must secure data storage environments by ensuring:

1. Physical measures are put in place to prevent unauthorized access to the servers or operating environments of Open Banking systems
2. Certificates, keys and any security related credentials are conveyed with the strictest security measures, handled only by authorized personnel within the security, risk and/or IT control teams and securely dispose of any copies created once the credential has been applied, stored or outdated.
3. Sensitive credentials are stored securely with the use of a HSM (hardware or software), Keystore, Truststore, Certificate Management System or other security apparatus that manages credential inventory and provides measures to prevent unauthorized access.
4. Any file-system stores for security credentials are encrypted and password-protected
5. Passwords are not stored in clear, placed in files or directly in code.
6. File system copies are restricted, and any files copied into the systems are screened with up-to-date antivirus and intrusion prevention software.
7. Database and system files are rendered unreadable if copied out of the primary operating systems except through an application with requisite security credentials.
8. Open banking application and database servers are placed within different operating system environments and different DMZs
9. Access to database and application servers (at the operating system level) is provisioned to separate groups of individuals.
10. User access at the application level is segmented according to roles. The following roles should be defined as required: monitor, view, audit, configuration, admin, superadmin.
11. Application roles are defined separate from user roles to access the database.
12. Database access must be segmented by user roles similar to segmentation at the application level. In addition, user profile data, financial data and transactional data must be further segmented, and access provisioned on an as-needs basis.
13. Access to user profile and financial data is restricted at the database level to users with administrative level access.
14. All activity, including that of the administrators is audited (at application and database levels) and audit records remain inaccessible to all but the designated audit/control personnel. Audit records are also retained for a minimum of 90 days
15. Sensitive user profile and financial data must be stored in encrypted format in the database.
16. Database users may not view such sensitive data directly except application users provisioned with security clearance to decrypt such data.

### Data Storage <a href="datamanagementandexchange-datastorage" id="datamanagementandexchange-datastorage"></a>

The definition of physical database architecture is not within the of scope of the OBN standard. The following requirements relate to logical organization of data processing systems for optimal operations:

1. **Data Storage Layout:** In principle, the storage design should cater to OLTP and OLAP data types, and both systems should be kept separate at the application and hardware levels. Real-time processing would naturally occur within the OLTP environment and asynchronously transitioned to the OLAP environment almost immediately.
2. **Data Types:** Organizations may store only data which they own as defined within the ownership framework. API request and response pairs may be stored with the exception of account statements or similar data that may prove too cumbersome and not provide any operational benefit if stored.
3. **Retention:** In general, data owned by each party should be stored and made available for investigation for a minimum of 180 days. Specifically,
   1. Transactional data with financial impact is required to be stored for **10 years** according to requirements of the regulators.
   2. User consent information and profile information must be stored for at least **90 days but no longer than 180 days** after the user is deactivated on the system.
   3. Audit Trail records should be kept by all providers for a minimum of **1 year from the time of the change.**
   4. Systems configuration data does not fall within this category, but as good practice may be backed up regularly or according to the schedule of planned changes and the inventory maintained for rollback purposes.
