# Pre-production Setup

Similar credential exchanges are required for the pre-production environment setup. If lost, misplaced or compromised, the framework allows new credentials to be generated with a grouping schema. A security profile group consists of a collection of credentials. A group ID is assigned to each group and will be sent along with all calls to the APIs. Only two (2) group IDs can be active per time and the security admin can enable new security groups or disable an older group as required.

Once the simulated tests have been passed in sandbox, a "move to pre-production" link is activated to transition the AP into pre-production. It is expected that the AP has also migrated API and internal services into their production environment at this time. Similar callback URL and certification account details are required to commence the self-service certification program.

![Figure: Pre-production Progress Tracker](<../../../.gitbook/assets/image (3).png>)

This program performs good-path, exception and performance tests of the production APIs that helps confirm the features have been migrated correctly and are working as expected in production. In addition, and most importantly, the performance tests would reveal if any APIs are functioning below capacity given the simulated load. These metrics would be red flagged for the AP to tune and rerun the certification. If all metrics pass, the certification program is deemed complete.
