# Sandbox Testing

Once a profile has been created for the institution and designated roles filled, the AP security personnel will have access to download the security credentials which should be legibly displayed on the dashboard of their profile. Only the sandbox pane will be active until the institution passes the required tests. Credentials required on the AP's endpoint are:

1. An assigned client ID
2. OAuth access token
3. Client Secret (Base 64 encoded) – applied to message signing.
4. RSA public key for sensitive field encryption.
5. A key-group ID
6. Certificate Signing Request

OBN provides a test Certificate Signing Request (CSR) simulating the functions of a TPP. This should be downloaded, signed within the AP's certificate management environment and the signed certificate uploaded in the provisioned widget.\
The development personnel will need to configure a global API URL which forms the base URL for all API call paths. The user should also ensure that OBN sandbox IP (X.X.X.X / X:X:X:X:X:X:X:X) has been permitted or whitelisted across all necessary network firewalls. A poll button is provided for the user to check connectivity to the **base/poll** URI path. A log of these tests is provided to show any restrictions or errors the poll test encounters. If polling succeeds, the configuration is accepted. The simulator pane becomes enabled. The development personnel should supply all listed credentials such as test accounts, customer IDs etc. that will be used for functional testing.\
Individual API calls can be tested with the "TEST" widget and code samples provided beside each API specification on the web portal. However, the development personnel must run the full simulation to pass all test cases and move to the pre-production environment. The simulation would include good-path and exception tests.\
Sandbox progress and simulation results are published on all user dashboards within the organization across the following stages:

1. Setup
2. API development
3. Functional Testing
4. Exception Testing
5. Migrating to pre-production

![Figure: Sandbox Progress Tracker](<../../../.gitbook/assets/image (8).png>)

