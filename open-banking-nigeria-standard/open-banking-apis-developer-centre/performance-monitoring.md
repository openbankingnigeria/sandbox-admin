# Performance Monitoring

To monitor API performance and by inference, the performance of underlying systems, APs and TPPs should provide built-in performance metric gathering into their APIs. For APs, this information _may_ be published in the Meta Directory under the Get Performance API call. If published, TPPs can query this information on a scheduled basis to determine which APs are operating optimally per time and may apply this intelligence to load scheduling and optimal path routing.

However, TPPs can make such decisions using metrics they maintain if not published by APs via APIs. Note that reporting requirements of this standard instruct that APs must provide monthly reports showcasing these performance metrics in daily summary and detailed formats. Alternatively, APs can provide performance monitoring dashboards which registered TPPs can access at any time to generate reports or locate patterns.

The following types of performance information are required from all APIs published by APs:

|    | Metric                 | Description                                                                                                                                                                                      |
| -- | ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|    | ****                   | ****                                                                                                                                                                                             |
| 1  | msg\_validation\_time  | Average time it takes to validate the message e.g. sender authentication, time stamp checking, message signature verification, Authentication token verification, message fields validation etc. |
| 2  | network\_proc\_time    | Network processing time i.e. time between the timestamp in the request message and the timestamp on the API server at the time of receipt.                                                       |
| 3  | avg\_db\_time          | Average time it takes to perform database operations                                                                                                                                             |
| 4  | avg\_ext\_call\_time   | Average time it takes to perform subroutine API calls from within the API                                                                                                                        |
| 5  | avg\_log\_time         | Average time it takes to log API calls.                                                                                                                                                          |
| 6  | avg\_total\_proc\_time | Average total processing time i.e. time between receiving a request and dispatching a response.                                                                                                  |
| 7  | avg\_req\_proc\_time   | Average request processing time i.e. time between when a request is received and dispatched to internal micro-services for processing                                                            |
| 8  | avg\_rsp\_proc\_time   | Average response processing time i.e. time between when a response is received internally, formatted and sent to the client system.                                                              |
| 9  | total\_api\_calls      | Total number of API calls processed                                                                                                                                                              |
| 10 | %\_success             | Relates to messages successfully received, unpacked and responded to                                                                                                                             |
| 11 | %\_approved            | Relates to messages that achieved the function for which the call was made.                                                                                                                      |
| 12 | calls\_per\_sec        | Average calls per second.                                                                                                                                                                        |

\
APs should record individual API performance metrics with at most 5 minute intervals between data points. Any interval missed is assumed to be downtime except within a period coinciding with a scheduled change or maintenance activity. For investigative purposes, these metrics can also be kept on a transactional level at the discretion of the AP.\
In addition, APs are required to provide API availability metrics. These metrics should be collected:

1. From outside the APs' networks
2. Over the internet
3. Through at least two major Internet Service Provider routes.
4. Per API endpoint e.g. one for branch related methods, another for ATM related methods etc.

The metrics give an external view of the organization's availability cutting across network, operating systems and application layers. External solutions or organizations can be engaged to provide and publish this data on behalf of APs.
