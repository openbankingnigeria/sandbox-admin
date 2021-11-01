# Account Provider Certification

OBN provides a sandbox environment that simulates TPP messages against AP endpoints as a way to assess the AP's API functionality and performance. Financial Institutions will have to pass all test cases of the self-assessment or provide reasonable justification for any exceptions to be accredited by OBN as qualified APs.

Updates to OBN API specifications will be released in 6-month cycles except security related releases which may be published ad-hoc. APs are required to update and re-certify their endpoints within a year of the published update date, following which the latest OBN update will make the previous changes mandatory which may invalidate non-compliant AP integrations. Security updates will be effected along with the last update before the security patch except critical updates which will be communicated by OBN to certified APs. In addition, any major changes to an AP's environment such as changes to API endpoints, software platform including SDKs, runtime environments and libraries, or major internal service functionality should warrant APs to recertify their integrations.\
The certification process takes the institution through sandbox, pre-production and in-production stages.\


![Figure: OBN AP Onboarding stages](<../../../.gitbook/assets/image (6).png>)

**Getting Started**

{% hint style="info" %}
The OBN self-certification process is under development. The process below is therefore not applicable until otherwise communicated by OBN.
{% endhint %}

To get started with self-certification, commercial banks and other FPSPs that qualify as APs will need to register on OBN portal ([https://openbankingng.org](https://openbankingng.org)), select and provide the required details under the "Account Provider" tab. The profile should be created with an abstract or group email address, for example [_obnadmin@abcbank.com_](mailto:obnadmin@abcbank.com). This is required for posterity in case the primary individual(s) working on the project are no longer with the institution. At most two individuals, but preferably one per time should be included in this group as admins of the FPSP. To update the admin personnel credentials, simply remove older user(s) from the mail group and add the new user(s), perform a password reset on OBN portal so the new user receives the reset link. Alternatively, OBN can be contacted through formal channels to update the credentials against the FPSP's profile.

Subsequently, the AP administrator will need to create roles and assign individuals within the organization that will be responsible for:

1. **Security:** This role is responsible for managing access credentials related to the APIs including session keys, certificates and encryption key pairs. While OBN portal only participates in the sandbox testing, it is expected that the procedures employed here should prepare this user for their role in the production environment.
2. **Development:** This role is in charge of API development and would have access to setup relevant configuration such as the base URL, simulator parameters for functional, exception and load tests.
3. **Communication:** APs, once certified, can leverage the OBN portal to communicate developments regarding their OBN services and offerings to the general public. This has the advantage of aggregating and presenting information from all participants within a single portal to constantly engage with followers of the network.

Designated personnel for these roles will receive emails from OBN to provide access credentials.
