# Service Management

### Communication Management <a href="servicemanagement-communicationmanagement" id="servicemanagement-communicationmanagement"></a>

The focal point for communication requirements in this standard is in the area of incident management and resolution. APs are expected to provide or prescribe secure real-time communication platforms for first level incident responders within their organizations and respective TPPs for incident notification, investigation and resolution. The platform _is required to_ accommodate text, voice and video conferencing modes of communication to support various scenarios. Broadcast groups can be set up to communicate to all TPPs which an AP supports.

Note that separate from this channel, formal channels (such as help and support systems or ticketing solutions) should still be used for incident reporting and management and would be the true source of data for SLA assessment. Emails are not a sufficient method of incident management within the OBN standard.

### Configuration Management <a href="servicemanagement-configurationmanagement" id="servicemanagement-configurationmanagement"></a>

Detailed inventory of Open Banking systems configuration items must be kept in accordance with ITIL (version 4 or the most recent) standards for posterity, ease of impact assessment and general management. At the minimum, the inventory must be electronically searchable.\
As a guide, the architecture of the configuration or inventory database may be designed as follows:

1. Logical listing of system types i.e. systems containing identical software and configuration elements are essentially the same "type"
2. Definition of configuration items and per system type. This could be coded with a serial or preferably a pseudo name or anagram that allows the configuration item to be deduced easily.
3. Physical listing of systems and specifications of each configuration item per system type
4. Diagramming tool that reads off the inventory to typify the architecture of the systems showing connections and dependencies.
5. An assessment tool that can be trained to diagnose the health status of the configuration items and provide visual aids to possible points of failure in the system.

### Service Monitoring <a href="servicemanagement-servicemonitoring" id="servicemanagement-servicemonitoring"></a>

Monitoring is a required operational service for APs and should be performed at the API level. APs may internally monitor hardware, hypervisor, operating system, application environment metrics for good measure.

Open APIs are to be monitored at the functional level. Performance metrics as defined in this document should be collected contiguously for all processing done by the APIs. These metrics should be persisted to permanent storage by the minute so useful information is available for investigation if there is a crash or interruption.

APs are required to implement monitoring processes that alert (visually or otherwise) first-level support personnel to suspect and critical level occurrences as defined in OBN performance levels. Incident management procedures should be triggered with such alerts.

### Incident Management <a href="servicemanagement-incidentmanagement" id="servicemanagement-incidentmanagement"></a>

Open banking incidents are classified as:

1. **Functional:** involving or affecting the good path of a single operation or function. Where such a function is critical to a major offering of the system for instance, a problem with the authentication procedure which effectively bars everyone from accessing the system, then the classification graduates to systemic. Function-level incidents are likely to be spotted via declining metrics such as % successful calls, average total processing time and API availability or while investigating user complaints.
2. **Performance:** incidents relating to performance may be gradual or acute. In general, they are characterized by degradation of service levels and may be spotted with metrics such as long avg. processing times, fluctuating % success rates without any corresponding changes in volume and fluctuating availability.
3. **Systemic:** cover issues that prevent one or all installations or instances of the Open Banking API infrastructure from offering service, a degradation of service levels across a majority of the functions, or unavailability of a major system function.

A general procedure to incidents:

1. Determine the scope of the incident and impact i.e. functional, performance or systemic. Notify/Alert TPPs relying on services via the recommended communication channel.
2. Assess if a fail-over is necessary, if the failover system is ready and will not exhibit the same symptoms.
3. Consider workarounds. The objective is to restore service in a timely manner. However, workarounds should not impair the integrity of the system or result in loss of data.
4. Determine if a failover is less costly than the loss experienced from the incident. Cost may be determined by estimating the disruption due to the failover process (in terms of time or transaction loss) weighed against the criticality of the service(s) to be restored.
5. Make go/no-go decision and commence investigation into root cause and resolution. Follow documented procedure if a "go" decision is made.

APs are required to adhere to the following guidelines:

1. Provide personnel to monitor and support Open Banking API infrastructure on 24x7 basis. Contacts for such personnel should be made available to TPPs within SLA documentation.
2. Ensure personnel providing support to the infrastructure have access to detailed documentation of Open Banking systems, functions and internal dependencies. This documentation should be maintained synchronously with any system changes.
3. Design and review on a quarterly basis an incident management and response manual indicating failover and failback steps to be undertaken for a critical incident. The manual should be appendix-ed with lessons learnt from previous critical incidents.
4. An incident logging and ticket management platform is not required in strict sense but is very much encouraged.

The following generic performance levels form the minimum standard for Open Banking systems:

| Metric                          | Operational | Suspect  | Critical |
| ------------------------------- | ----------- | -------- | -------- |
| Availability                    | >98%        | >=95%    | <95%     |
| Avg. API Total. Processing Time | <3 secs     | <=7 secs | >7 secs  |
| Success Rate                    | >95%        | >=90%    | <90%     |

| Incident-type | Response SLA | Resolution | Fail-over   |
| ------------- | ------------ | ---------- | ----------- |
| Functional    | 2 hours      | 4 hours    | +30 minutes |
| Performance   | 30 minutes   | 2 hours    | +30 minutes |
| Systemic      | 15 minutes   | 30 minutes | +30 minutes |

### &#x20;Problem Management <a href="servicemanagement-problemmanagement" id="servicemanagement-problemmanagement"></a>

This refers to management of issues known to be recurring or which are not resolved within the window of the SLAs per type of incident. A problem register is required of APs to indicate:

1. The date/time a problem was discovered
2. Characteristics of the problem such as system symptoms and impact.
3. Any interim measures that have been applied to manage the problem while keeping the system operational
4. Plans for a resolution or description of the intended solution
5. Deployment date – date the change is applied to the systems to implement the identified solution.
6. Review and problem resolution date – problem finally closed after reviewing the effects of the change. Should also indicate steps and outcomes of review.

This problem register should be available to Regulators, Auditors, Risk and Control teams within the organization and provided in reports to TPPs according to schedule stipulated in the Reporting section of this document.

### Change Management <a href="servicemanagement-changemanagement" id="servicemanagement-changemanagement"></a>

Changes, and notices thereof are recommended to be managed on a monthly basis. This implies that APs should collate their change requirements and plan the changes for the next month except in cases where the change is expected to resolve a critical incident or problem.

All changes (either preempted or responsive) should be reported in sufficient detail as specified by the reporting guidelines. Changes should also be accompanied with notifications to any organizations within the Open Banking systems that could be affected by the change:

1. 24 hours before the intended change
2. 1 hour before the intended change
3. Immediately the change has been completed and services have been confirmed restored or thirty minutes after the change should have been completed but has been prolonged or the change failed.
4. At the point of commencing a change rollback.
5. When services have been restored.

The framework expects an initial change report with content as specified in the reporting section, subsequent notices can simply reference the initial report and a final updated report provided after the change activity.

For ease, organizations are advised to employ mechanisms and systems that help identify individuals to be notified and create templates for reports and notifications with placeholders for the variables.

### Business Continuity Planning <a href="servicemanagement-businesscontinuityplanning" id="servicemanagement-businesscontinuityplanning"></a>

APs and TPPs should provide sufficient redundancies and fail-safe/recovery procedures to match their SLAs. The gaps and level of risk in providing redundancy can be estimated by considering:

1. Possibility of in-flight data loss and if such losses occur, the viability of recovery procedures to maintain integrity.
2. If replication is employed to maintain redundant processing infrastructure,
   * the replication time-lag between OLTP systems and on the average, the nature and quantity of data processed in that time frame; and
   * the replication time-lag from OLTP to OLAP systems.

APs are required to maintain a Business Continuity Plan that includes quarterly failover exercises and review of processes. Plans should indicate the architecture of the OLTP and OLAP infrastructure, physical and logical redundancies, replication intervals, processes for failover and fail-back, responsible individuals and/or roles and trigger events

As indicated, the threshold defined for failover and fail-back procedures is 30 minutes of downtime. While the OBN standard does not specify technologies or architectures employed for redundancy, the procedures adopted by APs should fall within this stipulation. In future, Business Continuity Plans may be assessed by qualified professionals as complaint with this standard.
