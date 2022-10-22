import * as React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

interface ITermsAndConProps {
}

const TermsAndCon: React.FunctionComponent<ITermsAndConProps> = (props) => {
  return (
    <>
       <Container className='mt-5'>
        <Row>
          <Col lg={12} md={12} sm={12}>
            <h1 className='service__name'>Terms And Condition</h1>
            <hr />
              <p className='service__discription'>
                The facilitation of investments in and entry into the Nigerian market for provision and supply of communications services, equipment and facilities. <br /><br />
                The protection and promotion of the interests of consumers against unfair practices including but not limited to matters relating to tariffs and charges for and the availability and quality of communications services, equipment and facilities.
                <br /><br />
                Ensuring that licensees implement and operate at all times the most efficient and accurate billing system.
                <br /><br />
                The promotion of fair competition in the communications industry and protection of communications services and facilities providers from misuse of market power or anti-competitive and unfair practices by other service or facilities providers or equipment suppliers.
                <br /><br />
                Advising the Minister on the formulation of the general policies for the communications industry and generally on matters relating to the communications industry in the exercise of the Minister’s functions and responsibilities under this Act.
                <br /><br />
                Implementation of the Government’s general policies on communications industry and the execution of all such other functions and responsibilities as are given to the Commission under this Act or are incidental or related thereto.
                <br /><br />
                Generally advising and assisting communications industry stakeholders and practitioners with a view to the development of the industry and attaining the objectives of this Act and its subsidiary legislation.
                <br /><br />
                Representation of Nigeria at proceedings of international organisations and fora on matters relating to regulation of communications and matters ancillary and connected thereto.
                <br /><br />
                The general responsibility for economic and technical regulation of the communications industry.
                <br /><br />
                Granting and renewing communications licences whether or not the licences themselves provide for renewal in accordance with the provisions of this Act and monitoring and enforcing compliance with licence terms and conditions by licensees.
                <br /><br />
                The development and monitoring of performance standards and indices relating to the quality of telephone and other communications services and facilities supplied to consumers in Nigeria having regard to the best international performance indicators.
                <br /><br />
                Management and administration of frequency spectrum for the communications sector and assisting the National Frequency Management (NFM) Council in developing a national frequency plan.
                <br /><br />
                Development, management and administration of a national numbering plan and electronic addresses plan and the assignment of numbers and electronic addresses there from to licensees.
                <br /><br />
                Proposing, adopting, publishing and enforcing technical specifications and standards for the importation and use of communications equipment in Nigeria and for connecting or interconnecting communications equipment and systems.
                <br /><br />
                The formulation and management of Nigeria's inputs into the setting of international technical standards for communications services and equipment.
                <br /><br />
                Carrying out type approval tests on communications equipment and issuing certificates on the basis of technical specifications and standards prescribed from time to time by the Commission.
                <br /><br />
                Encouraging and promoting infrastructure sharing amongst licensees and providing regulatory guidelines thereon.
                <br /><br />
                Examining and resolving complaints and objections filed by and disputes between licensed operators, subscribers or any other person involved in the communications industry, using such dispute-resolution methods as the Commission may determine from time to time including mediation and arbitration.
                <br /><br />
                Preparation and implementation of programmes and plans that promote and ensure the development of the communications industry and the provision of communications services in Nigeria.
                <br /><br />
                Designing, managing and implementing Universal Access strategy and programme in accordance with Federal Government’s general policy and objectives thereon.
                <br /><br /><br />
                The Commission is committed to work with its customers towards the growth and development of the telecommunications industry in Nigeria. In discharging its services to its customers the Commission commits to attend to its customers' needs promptly, courteously, professionally and excellently. We shall give appropriate consideration to customers’ viewpoints and take cognizance of customers with special needs or disabilities in line with the core values of the Commission.
              </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default TermsAndCon;
