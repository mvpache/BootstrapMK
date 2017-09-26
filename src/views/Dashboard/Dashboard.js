import React, { Component } from 'react';
import './dash.scss';

class Dashboard extends Component {
  render() {
    return (
        <div className="animated fadeIn">
            <div className="mkMission">
                <h2>MK's mission has always been to make the tough decisions ─ determining creditworthy from non-creditworthy consumers ─ look easy with our proprietary risk scoring methodology.</h2>
            </div>
            <div className="rethinking">
                <div className="rethinkText">
                <h2>Rethinking Underwriting with ADS</h2>
                <h3>MK's crowning achievement was the development of our 'black box', Automated Decisioning SystemTM (ADS).</h3>
                </div>
                <div className="features">
                <div className="ADSfeature">
                    <p>With ADS, MK has the capacity to deliver scalable, consumer credit risk management without the overhead normally required for such an operation ─ no software engineers or underwriters required.</p>
                </div>
                <div className="ADSfeature">
                    <p>Financial institutions can now start or grow their consumer credit portfolio in a lean and sustainable fashion. It's safe to say, MK's automation has put a lot of clocks out of business with the time ADS saves.</p>
                </div>
                <div className="ADSfeature">
                    <p>With easy connection to the major credit bureaus and the advanced ADS in place, MK streamlines objective decision-making ─ rewarding financial institutions with time while managing their risk.</p>
                </div>
            </div>
            </div>
            <div className="fourSquare">
                <div className="row1">
                    < img className = "fourSquarePic"
                    src = {
                        require('../../../public/img/section3.jpg')
                    }
                    />
                <div className="fourSquareText">
                    <h2>Make Data-Driven Decisions. Information is Currency.</h2>
                    <p>Make Data-Driven Decisions. Information is Currency.</p>
                    <p>Gone are the days where transactional data went more or less unused. In today's data-driven world, MK understands that information is currency.</p>
                </div>
                </div>
                <div className="row2">
                <div className="fourSquareText">
                    <h2>Securing the Future of Credit.</h2>
                    <p>MK respects the privacy of consumer data. Implementing the latest firewall and encryption techniques, MK protects sensitive consumer information.</p>
                    <ul>
                        <li>Application and network firewalls</li>
                        <li>Intrusion detection/prevention systems</li>
                        <li>Database and other storage solutions</li>
                        <li>Encryption</li>
                        <li>Security audit logs</li>
                        <li>File integrity monitoring</li>
                        <li>Anti-virus</li>
                        <li>Vulnerability scanning services</li>
                    </ul> 
                </div>
                    < img className="fourSquarePic" src={
                        require('../../../public/img/section4.jpg')
                    }
                    />
                </div>
            </div>
            <div className="whyRisk">
                <h2>Why risk losing time or money?</h2>
                <p>Using credit as a means to grow business is an agile and quick way to drive revenue and increase profitability. However, meeting the increasingly difficult compliance requirements in the highly regulated financial services industry can be near impossible. For this reason, MK offers a unique partnership by bridging the gap between banks, businesses, Credit Officers and credit bureaus.</p>
                <div className="whyRiskBox">
                    <h3>MK has built its reputation in the financial services industry by offering underwriting solutions that are geared towards:</h3>
                </div>
                <p>Our automated underwriting services extend from Private Label Credit Cards (PLCC) and Mortgage Loans to Automotive Loans. MK takes time to understand the needs of its Financial Institution partners.</p>
            </div>
            <div className="letsBuild">
                <div className="letsBuildText">
                    <h2>Let's build the future of credit together</h2>
                    <p>MK understands that the market is flooded with credit opportunities for consumers. It's this reality that drives MK to deliver immediate underwriting decisions.</p>
                    <p>By giving consumers immediate purchasing power with automated credit decisioning, they will happily sign on the dotted line.</p>
                </div>
                    < img className = "letsBuildPic"
                    src = {
                        require('../../../public/img/section6.jpg')
                    }
                    />
            </div>
            <div className="contact">
                <div className="contactText">
                    <h1>Contact Us</h1>
                    <p>Use our underwriting service to offer your consumer an MK Decision.</p>
                    <p>Contact us for further details.</p>
                    <p>MK Decisioning Systems</p>
                    <p>3200 N Central Ave #1150</p>
                    <p>Phoenix, AZ 85012</p>
                </div>
                <div className="contactForm"></div>
            </div>
        </div>
    )
  }
}

export default Dashboard;
