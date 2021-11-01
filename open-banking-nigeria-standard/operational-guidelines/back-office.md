# Back-Office

### Accounting and Settlement <a href="back-office-accountingandsettlement" id="back-office-accountingandsettlement"></a>

No specific commercial structures are recommended between APs and TPPs. As a guide, the following practices may be adopted:

1. Operations involving movement of funds within the AP's domain could be recorded at the account level of the TPP involved, possibly sub-accounting based on the API function in-use.
2. Metrics used for billing should be definitively agreed and indicated in the contract of service between APs and TPPs. Bills may be collected in real-time, near-time, on a scheduled basis daily or on a daily-totals basis after reconciliation. The schedule should also be indicated in the same contract. Any billings from APs should be accompanied with reports providing summary and detailed information for the bill preferably along with the bill, but at most within a business day of passing the bill. The definition of these reports or any related systems integration requirements for exchanging these reports are beyond the scope of this standard.
3. Billing may be effected by direct debits to the TPPs accounts with the AP or initiated by the TPP to the AP over their preferred transfer channels. The preference should also be stated clearly in the underlying contract.
4. APs may support separate principal and fee-collection accounts for TPPs to ease accounting and revenue recognition.

Without switching licenses, TPPs are not expected to engage directly in interbank services, and by inference, settlement. A TPP may debit or credit a consumer's account within an AP domain, but if a corresponding impact is to be performed within another AP domain, the TPP must employ interbank switching channels to facilitate the transfer.

As such the following guidelines apply within this framework for inter-participant settlement:

1. For Debit and Credit operations, the AP may apply real-time impact to the TPP's accounts domicile with the AP along with any fees agreed for the operation. If the model chosen is not a prefunded TPP account, the AP should maintain a distinct suspense account per TPP where all impacts and recorded and the net value posted against the TPP's operational account on the agreed schedule with accompanying reports according to the reporting schedule.
2. For interbank transactions, settlement will be performed by the interbank switching scheme. The TPP will be recognized as an agent or channel of the AP and any instructions by the TPP over the interbank network should cite the AP from which funds were pulled as the settlement entity. Interbank settlement will thus apply the same schema and procedure as the provisions governing the switching license. Any settlements between the AP and TPP for this use-case can be handled as a typical debit operation. In the case of settlement errors or disputes, the TPP must provide records of the payments made through this mechanism for the AP's use.

### Reporting <a href="back-office-reporting" id="back-office-reporting"></a>

APs should provide monthly reports to TPPs indicating:

1. API Performance levels for the month and previous FY months or previous quarter. Metrics may be grouped into the four API categories: Registration, Meta, Data and Payment APIs.
2. Statistics of incidents across the three categories, SLA compliance and aggregate impact in downtime or loss of service if any occurred during the period.
3. Number and category of Fraud and Disputes with accompanying SLA performance
4. Excerpts of the problem register indicating new, existing and resolved problems.
5. Changes made, reason (in sufficient detail), timing and estimated impact.
6. Changes scheduled for the next month and potential impact.

In addition, APs are required to provide the following to account holders that have subscribed to one or more TPPs:

1. Optional notification of a TPP accessing the consumer's account(s) in real-time or near-time via email, SMS or in-app prompts. (Similar to a notice of internet banking login)
2. A transcript of each TPP's activities against the consumer's account up to the last 180 days. Transcript in this sense should show each major operation carried out, the interface or channel signature, the time and status of each major operation showing request and response pairs, and any associated financial movements.
3. Appropriate distinctions in account statement records of TPP related activity versus core business activities.

### Fees <a href="back-office-fees" id="back-office-fees"></a>

OBN does not prescribe fees or commercial settlements of any nature among participants. Any fees are to be negotiated and agreed between each pair of APs and TPPs.

### Reconciliation <a href="back-office-reconciliation" id="back-office-reconciliation"></a>

No reconciliation format is defined within this release of the OBN standard. To reduce the need for lengthy reconciliation efforts, participants are advised to implement event-triggered billing systems where the bills are easily traceable to the activity performed, and also accounting by APs for TPPs should be treated on a transactional level rather than batch process that may prove challenging to reconcile.
