# Third-Party Provider Integration

OBN provides a self-test environment to simulate AP responses to TPPs. TPPs are however not issued a letter of completion by OBN due to the diverse nature of their offerings, platforms, operations and the lack of end-to-end visibility. Only sandbox procedures are required for TPPs.

To get started, TPPs will need to register on OBN portal designating personnel for the relevant roles and providing the requested information. Any number of users can create profiles as these are independent and do not identify with an institution.\
Simulation credentials are provisioned for each account registered including:

1. An assigned Client ID
2. Client Secret (Base 64 encoded) – applied to message signing.
3. A RSA public key component for encryption
4. A key-group ID
5. A signed certificate

TPPs may run simulations with these credentials against OBN sandbox APIs. A test script is provided for the TPPs to self-validate the exchanges and expectations at their end.\
Test Script: To be determined after agreeing on a working set of APIs and required functionality
