import * as React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

interface IPrivacyPolicyProps {
}

const PrivacyPolicy: React.FunctionComponent<IPrivacyPolicyProps> = (props) => {
  return(
    <>
      <Container className='mt-5'>
        <Row>
          <Col lg={12} md={12} sm={12}>
            <h1 className='service__name'>Privacy And Policy</h1>
            <hr />
              <p className='service__discription'>
                  SERVICOM is an acronym derived from the words SERVICE COMPACT.  Compact is a formal agreement between two or more people.  In this case SERVICOM is a Service Compact (Agreement) between the Federal Government including all its organs and the Nigerian people. During his address to the inaugural session of the National Assembly the former President Chief Olusegun Obasanjo GCFR declared:
                  <br /><br />
                  “Public offices are the shopping floor for government business.  Regrettably, Nigerians have  for long been feeling short-changed by the quality of public service delivery, by which decisions are not made without undue outside influence and files do not move without being pushed with inducements.  Our public offices have for too long been show-cases for the combined evils of inefficiency and corruption, whilst being impediments to effective implementation of government policies.  Nigerians deserve better.  And we will ensure they get what is better.”
                  <br /><br />
                  Following his re-election for a second term in 2003, the former President underscored his administration’s commitment to improving service delivery when he listed the issue as a priority for his second term in office.  SERVICOM is therefore a public service reform conceived to be the engine for Service Delivery programme.  It is mounted on the imperative to change the system of service delivery and driven by Government’s commitment to deliver service and citizens’ expectations of service delivery.<br /><br />

                  <h5>THE GENESIS</h5>
                  In June 2003, the Federal Executive Council (FEC) arrived at the conclusion that no reform process will be credible and sustainable if government cannot demonstrate any leadership commitment with a public declaration about service delivery among other essentials. In this context, the former president set up a Nigerian Service Delivery Research Team which visited the United Kingdom (UK) in 2003 to investigate how the British government has gone about improving its service delivery.  Based on their feedback, the FEC supported the implementation of Service Delivery programme for Nigeria.  The President and British Prime Minister tasked a team to analyze key service delivery issues and develop a road map for practical, targeted and achievable service delivery.
                  <br /><br />
                  The technical team was commissioned in January 2004 headed by U.K Prime Minister’s Adviser on Public Service Reform Dr. Wendy Thomson.  Other members of the team included members of the office of Public Service Reforms (OPRS), Center for Management and Policy Studies (CMPS) in the Cabinet Office, Consultant from the U.K and South Africa and service delivery team nominated by the Nigerian Government.  The research was also carried out with the assistance of the Department for International Development (DFID) in Nigeria which made resources and expertise available.
                  <br /><br />
                  At the conclusion of the Special Presidential Retreat on Service Delivery in Nigeria, the President and his Ministers entered into Service Compact with all Nigerians – hence the birth of SERVICOM on 21st March 2004.  The Compact’s Core provision says: “We dedicate ourselves to providing the basic services to which each citizen is entitled, timely, fairly, honestly, effectively and transparently”.  By SERVICOM, all Ministries, Parastatals and Agencies were mandated to prepare and publish not later than 1st July 2004, SERVICOM Charter which will provide the following information:

                  Quality services designed around customers’ requirements<br />
                  Set out citizens’ entitlements in ways they can readily understand<br />
                  List of fees payable and prohibit illegal demands<br />
                  Commitment to provision of services within realistic time- frames<br />
                  Specified officials to whom complaints may be addressed<br />
                  Publish these details in conspicuous places accessible to the public<br />
                  Conduct and publish surveys of customer satisfaction.<br /><br />

                 <h5> Among the major objectives of SERVICOM include:</h5>

                  To provide quality service to the people<br />
                  To set out the entitlement of the citizens<br />
                  To ensure good leadership<br />
                  To educate the citizens (customers) on their rights<br />
                  To empower public officers to be alert to their responsibilities in providing improved, efficient, timely and transparent service.<br /><br />
                  SERVICOM office in the Presidency was therefore established for this purpose.  Similarly, the Ministries, Department and Agencies (MDA’s) were directed to create SERVICOM Units and appoint Nodal Officers to promote initiative.
              </p>
          </Col>
        </Row>
      </Container>
    </>
  ) ;
};

export default PrivacyPolicy;
