import React, { Component } from 'react';
import './dash.scss';

class Dashboard extends Component {

  render() {
    return (
      <div className="animated fadeIn">
        <div className="Home ng-scope">
            <div className="header">
                <div className="container">
                    <div className="navbar">
                        < a className = "logo" href = "/" > < img src ={require("/home/michael/CoreUI-React/React_Starter/public/img/logo.png")}/> MKDecision.com </a>
                        <a className="navigation" href="#contact" data-plugin="navscroll">Contact</a>
                    </div>
                </div>
                <div className="home-header">
                    <div className="slogan">
                        <h1 className="slogan-title">Automated Decisioning Systems<sup>TM</sup></h1>
                        <div className="slogan-desc">Cloud-Based Credit Risk Management</div>
                        <span className="slogan-icon bounce fa fa-chevron-down"></span>

                    </div>
                </div>
              </div>

                <div className="mk-computer" data-plugin="mkcomputer">
                    <div className="container">
                        <div className="inner">
                            <div className="inner-inner">
                                <div className="browser">
                                    <div className="file-type">
                                        <i className="fa fa-globe"></i> Browser
                                    </div>
                                    <div className="controls">
                                    </div>
                                    <div className="tabs hidden-xs hidden-sm">
                                        <ul>
                                            <li className="visible-lg-inline-block visible-md-inline-block">
                                                <img src ={require("/home/michael/CoreUI-React/React_Starter/public/img/logo-01.svg")}/> MKdecision.com
                                            </li>
                                            <li className="active">
                                                <span className="fa fa-shopping-basket"></span> BuyStuff.com
                                            </li>
                                            <li><span className="fa fa-plus"></span></li>
                                        </ul>
                                    </div>
                                    <div className="address-bar hidden-xs hidden-sm">
                                        <div>
                                            <span className="back"><span className="fa fa-arrow-left"></span></span>
                                            <span className="url">https://buystuff.com/checkout/</span>
                                        </div>
                                    </div>
                                    <div className="mock-site">
                                        <div className="mock-cursor" data-cursor="" style="visibility: hidden; transform: matrix(1, 0, 0, 1, 0, 0);"></div>
                                        <div className="mock-modal-backdrop" data-backdrop="" style="display: block;"></div>
                                        <div className="mock-modal" data-modal="" style="display: block;">
                                            <div className="mock-modal-head">
                                                <img src ={require("/home/michael/CoreUI-React/React_Starter/public/img/logo-01.svg")}/> Apply Financing
                                            </div>
                                            <div className="mock-modal-div">
                                                <div className="mock-loading" data-modal-loading="" style="display: none;">
                                                    <p><span className="fa fa-circle-o-notch fa-spin fa-2x fa-fw"></span></p>
                                                    <p>Using your profile info to <strong>Apply Instantly</strong>.</p>
                                                </div>
                                                <div className="mock-approved" data-modal-approved="" style="display: block;">
                                                    <div className="clearfix">
                                                        <div className="col-xs-12 col-md-6">
                                                            <div>You're
                                                                <span className="mock-label">
                                                            <span className="fa fa-check"></span>                                                        Approved!
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="col-xs-12 col-md-6">
                                                            <a href="#contact" className="mk-button" data-plugin="navscroll">
                                                            Continue <span className="visible-lg-inline">Checkout</span>
                                                            <span className="fa fa-arrow-right"></span>
                                                        </a>
                                                        </div>
                                                    </div>

                                                    <div className="replay" data-replay="" style="display: block;">
                                                        <span className="fa fa-play"></span> Play Again?
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mock-header">
                                            <span className="fa fa-shopping-basket"></span> BuyStuff

                                            <span className="hidden-xs hidden-sm">
                                        <span className="pull-right">
                                            / SHOP  / CHECKOUT
                                        </span>
                                            </span>

                                            <span className="hidden-lg hidden-md">
                                        <span className="pull-right">
                                            <span className="fa fa-ellipsis-v"></span> MENU
                                            </span>
                                            </span>
                                        </div>
                                        <div className="col-xs-12 col-md-6 no-pad">
                                            <div className="mock-item">

                                                <span className="fa-stack fa-5x">
                                            <i className="fa fa-circle fa-stack-2x"></i>
                                            <i className="fa fa-diamond fa-stack-1x"></i>
                                        </span>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-md-6 no-pad">
                                            <div className="mock-container">
                                                <div className="mock-h1">
                                                    <table className="table">
                                                        <tdiv>
                                                            <tr>
                                                                <td className="text-left"><span className="fa fa-cart-plus"></span> Checkout
                                                                </td>
                                                                <td className="text-right"><span className="fa fa-dollar"></span> 1,200.00</td>
                                                            </tr>
                                                        </tdiv>
                                                    </table>
                                                </div>
                                                <div className="mock-pay">
                                                    Pay:
                                                    <table className="table">
                                                        <tdiv>
                                                            <tr>
                                                                <td className="text-left">
                                                                    <button type="button" className="mock-button">Debit</button>
                                                                </td>
                                                                <td className="text-right">
                                                                    <button type="button" className="mk-button mock-button-hover" data-financing-button="" data-hover-className="mock-button-hover">
                                                                <span className="visible-lg-inline">Apply</span>
                                                                Financing
                                                            </button>
                                                                </td>
                                                            </tr>
                                                        </tdiv>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div ng-include="'/sections/section1.html'" className="ng-scope">
                <div layout="row" className="section1 ng-scope">
                    <div layout="column" flex="">

                        <div flex="">
                            <div className="mk-inner">
                                <div className="container">
                                    <p>
                                        MK's mission has always been to <strong>make the tough decisions</strong> ─ determining creditworthy
                                        from non-creditworthy consumers ─ look easy <strong>with our proprietary risk scoring
                                methodology.</strong></p>
                                </div>
                                <p></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div ng-include="'/sections/section2.html'" className="ng-scope">
                <div className="row section2 ng-scope">
                    <div className="container">
                        <div className="col s12">
                            <h2>Rethinking Underwriting with ADS</h2>
                            <h3>MK's crowning achievement was the development of our 'black box', Automated Decisioning SystemTM (ADS).</h3>
                        </div>

                        <div className="col s12 m4">
                            <p>
                                <span className="icon fa fa-line-chart"></span> With <strong>ADS</strong>, MK has the capacity to deliver
                                <strong>scalable, consumer credit
                    risk management</strong> without the overhead normally required for such an operation
                                ─ <strong>no software
                    engineers or underwriters required</strong>.
                            </p>
                        </div>
                        <div className="col s12 m4">
                            <p>
                                <span className="icon fa fa-clock-o"></span> Financial institutions can now <strong>start or grow their consumer credit portfolio</strong>                        in a lean and sustainable fashion. It's safe to say, MK's automation has put a lot of clocks out
                                of business <strong>with the time ADS saves</strong>.
                            </p>
                        </div>
                        <div className="col s12 m4">
                            <p>
                                <span className="icon fa fa-balance-scale"></span> With easy connection to the major credit bureaus and
                                the advanced ADS in place, <strong>MK streamlines
                        objective decision-making</strong> ─ rewarding financial institutions with time while managing their risk.
                            </p>
                        </div>
                    </div>

                </div>
            </div>

            <div ng-include="'/sections/section3.html'" className="ng-scope">
                <script type="text/javascript" src="/javascripts/jquery.min.js" className="ng-scope"></script>
                <script type="text/javascript" src="/javascripts/main.bundle.js" className="ng-scope"></script>

                <div className="row section3 ng-scope">
                    <div className="col s12 m6 section3-a">
                    </div>

                    <div className="col s12 m6">
                        <div className="section3-b">
                            <h2>Make Data-Driven Decisions.<br/> Information is Currency.</h2>
                            <p>MK provides decision makers with advanced Reports and Analytics. Our reports offer insights that are
                                critical to long term success.</p>
                            <p> Gone are the days where transactional data went more or less unused. In today's data-driven world, MK
                                understands that information is currency.</p>
                            <div className="section-button">
                                <a className="mk-button-white" href="#contact" data-plugin="navscroll">
                    <span className="fa fa-bar-chart fa-lg fa-fw"></span>
                    I want to monetize my data today
                </a><img className="white-arrow" src="../images/arrow-left-light.png"/></div>
                        </div>
                    </div>
                </div>
            </div>
          
            <div ng-include="'/sections/section4.html'" className="ng-scope">
                <div className="row ng-scope">
                    <div className="section4">
                        <div className="col s12 m6">
                            <div className="section4-a">
                                <h2>
                                    Securing the Future of Credit.
                                </h2>

                                <p>
                                    MK respects the privacy of consumer data. Implementing the latest firewall and encryption techniques, MK <strong>protects sensitive consumer information</strong>.
                                </p>

                                <ul>
                                    <li>
                                        <span className="slogan-icon fa fa-fw fa-angle-right"></span> Application and network firewalls
                                    </li>
                                    <li>
                                        <span className="slogan-icon fa fa-fw fa-angle-right"></span> Intrusion detection/prevention
                                        systems
                                    </li>
                                    <li>
                                        <span className="slogan-icon fa fa-fw fa-angle-right"></span> Database and other storage solutions
                                    </li>
                                    <li>
                                        <span className="slogan-icon fa fa-fw fa-angle-right"></span> Encryption
                                    </li>
                                    <li>
                                        <span className="slogan-icon fa fa-fw fa-angle-right"></span> Security audit logs
                                    </li>
                                    <li>
                                        <span className="slogan-icon fa fa-fw fa-angle-right"></span> File integrity monitoring
                                    </li>
                                    <li>
                                        <span className="slogan-icon fa fa-fw fa-angle-right"></span> Anti-virus
                                    </li>
                                    <li>
                                        <span className="slogan-icon fa fa-fw fa-angle-right"></span> Vulnerability scanning services
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col s12 m6">
                            <div className="section4-b">

                            </div>
                        </div>
                    </div>
                </div>
                
            </div>

            <div ng-include="'/sections/section5.html'" className="ng-scope">
                <div className="row section5 ng-scope">

                    <div className="container">
                        <h2>
                            Why risk losing time or money?
                        </h2>
                        <p>
                            Using credit as a means to grow business is an agile and quick way to drive revenue and increase profitability. However,
                            meeting the increasingly difficult compliance requirements in the highly regulated financial services
                            industry can be near impossible. For this reason, <strong>MK offers a unique partnership</strong>                    by bridging the gap between
                            <strong>banks, businesses, Credit Officers and credit bureaus</strong>.
                        </p>


                        <div className="mk-partnership-list">
                            <div className="row">
                                <div className="col-xs-12 col-md-6">
                                    <p>
                                        MK has built its reputation in the <strong>financial services industry</strong> by offering
                                        <strong>underwriting solutions</strong> that are geared towards:
                                    </p>
                                </div>
                                <div className="col-xs-12 col-md-6">
                                    <ul>
                                        <li>
                                            <span className="slogan-icon fa fa-fw fa-bank"></span> Retail Banks
                                        </li>
                                        <li>
                                            <span className="slogan-icon fa fa-fw fa-dollar"></span> Finance Companies
                                        </li>
                                        <li>
                                            <span className="slogan-icon fa fa-fw fa-building"></span> Large Investment Firms
                                        </li>
                                        <li>
                                            <span className="slogan-icon fa fa-fw fa-users"></span> Merchants
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <p>
                            Our <strong>automated underwriting services</strong> extend from <strong>Private Label
                        Credit Cards (PLCC)</strong> and <strong>Mortgage Loans</strong> to <strong>Automotive Loans</strong>. MK
                            takes time to understand the needs of its Financial Institution partners.
                        </p>

                        < img className="dark-arrow" src={require(src="../../../public/img/arrow-right-dark.png")}/> <a className="section5-button" href="#contact" data-plugin = "navscroll">

                    <span className="fa fa-user-plus fa-lg fa-fw"></span>
                        Become a partner
                    </a>
                    </div>
                    
                </div>
            </div>
          
            <div ng-include="'/sections/section6.html'" className="ng-scope">
                <div className="row section6 ng-scope">
                    <div className="col s12 m6">
                        <div className="section6-a">
                            <h2>
                                Let's build the future
                                <br/> of credit together
                            </h2>
                            <p>
                                MK understands that the market is flooded with credit opportunities for consumers. It's this reality that drives MK to deliver
                                <strong> immediate underwriting decisions.</strong></p>
                            <p className="p2">
                                By giving consumers <strong>immediate purchasing power</strong> with <strong>automated credit decisioning</strong>,
                                they will happily sign on the dotted line.
                            </p>
                            <a className="section6-button" href="#contact" data-plugin="navscroll">
                        <span className="fa fa-gears fa-lg fa-fw"></span>
                        I want Automation
                    </a>
                        </div>
                        
                    </div>
                    <div className="col s12 m6 section6-b">

                    </div>
                </div>
                
            </div>
            
            <div ng-include="'/sections/section7.html'" className="ng-scope">
                <div className="row section7 ng-scope">
                    <div className="container">
                        <div className="col s12 m6">
                            <div className="section7-a">
                                <div className="contact-details">
                                    <h2>
                                        <img className="right-arrow" src={require("../../../public/img/arrow-left-light.png")}/>Contact Us
                                    </h2>
                                    <p>
                                        <strong>Use our underwriting service to offer your consumer an MK Decision.</strong>
                                    </p>
                                    <p>
                                        Contact us for further details.
                                    </p>
                                    <address>
                                        MK Decisioning Systems<br/> 3200 N Central Ave #1150<br/> Phoenix, AZ 85012<br/>
                                    </address>
                                    <p className="call">
                                        or call us ─
                                        <a className="phone" href="tel:+16024072810">
                                    <span className="slogan-icon fa fa-fw fa-phone"></span>
                                    (602) 407-2810
                                </a>
                                    </p>
                                </div>
                            </div>
                          
                        </div>
                        
                        <div id="contact" className="col s12 m6">
                        </div>
                    </div>
                </div>
            </div>

            <footer>
                <div className="footer-bar">
                    <div className="footer-bar-inner">
                        <div id="copyright" className="copyright">

                            <div className="container">
                                <div className="row-fluid">
                                    <div className="col-xs-12 col-md-6">
                                        <div className="not-subtle">
                                            © Copyright 2016 <a className="underline" href="/">MKdecision.com</a>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-md-6">
                                        Designed by <a href="http://www.verticolabs.com" target="_blank">VerticoLabs</a>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>

            </footer>

            <div id="kwikchat" className="kwikchat" style="display: block;">
                <div className="kwikchat__launcher">
                    <div className="launcher__button" style="background-color: rgb(89, 153, 24); display: block;">
                        <div className="launcher__badge"></div>
                    </div>
                    <div className="launcher__preview" style="display: block;">
                        <div className="preview__div launcher__preview__div ">Hi! How can we help you?</div>
                        <div className="preview__caret"></div>
                    </div>
                    <div className="launcher__hovercard hide launcher__hovercard--caret-side-right" style="right: 65px; bottom: 10px; display: none;">
                        <div className="hovercard__close">Close</div>
                        <div className="hovercard__welcome">
                            <div className="welcome__text">
                                <div className="welcome__text--small">Ask us anything. We would love to hear from you</div>
                            </div>
                        </div>
                        <div className="hovercard__textarea"> <strong className="textarea__button"></strong> <textarea placeholder="Send a message..."></textarea> </div>
                    </div>
                </div>
                <div className="kwikchat__messenger" style="display: none;">
                    <div className="messenger__conversation">
                        <div className="conversation__header">
                            <a href="#" className="header__button header__button--conversations">
                                <div className="button__icon"></div>
                            </a>
                            <div className="header__title">
                                <div className="title__conversation"></div>
                                <div className="title__admin"><b className="admin__name"></b>
                                    <div className="admin__last-seen"></div>
                                </div>
                            </div>
                            <a href="#" className="header__button header__button--close">
                                <div className="button__icon"></div>
                            </a>
                            <a href="#" className="header__button header__button--minimize">
                                <div className="button__icon"></div>
                            </a>
                        </div>
                        <div className="conversation__div"></div>
                        <div className="conversation__content">
                            <div className="content__container">
                                <div className="container__profile">
                                    <div className="profile__app">
                                        <div className="app__team">
                                            <div className="team__text--big">Support Team</div>
                                        </div>
                                        <div className="app__admins">
                                            <div className="admins__admin">
                                                <div className="admin__avatar"> <img src="https://secure.gravatar.com/avatar/c024c9cb275ff3e28e861d0bc0f2b699.jpg?s=72&amp;d=https%3A%2F%2Fa.slack-edge.com%2F66f9%2Fimg%2Favatars%2Fava_0013-72.png"
                                                        className="hoverZoomLink"/> </div>
                                                <div className="admin__name">MK Support</div>
                                            </div>
                                        </div>
                                        <div className="app__text">We are happy to have you here!</div>
                                    </div>
                                </div>
                                <div className="container__conversations" id="drop_zone_id">
                                    <div className="conversations__parts"> </div>
                                </div>
                            </div>
                        </div>
                        <div className="conversation__input">
                            <div className="input__textarea">
                                <div className="input__textarea--upload-menu">
                                    <ul className="textarea__menu">
                                        <li className="menu__button textarea__menu--capture">Capture screen</li>
                                        <li className="menu__button textarea__menu--upload">Upload file</li>
                                    </ul>
                                    <div className="textarea__caret"></div>
                                </div> <strong className="textarea__button textarea__button--emoji"></strong> <textarea placeholder="Send a message..."
                                    style="display: none;"></textarea>
                                <div className="emoji-wysiwyg-editor" contenteditable="true"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="kwikchat__messenger--conversations" style="display: none;">
                    <div className="messenger__conversation">
                        <div className="conversation__header">
                            <div className="header__title">Our Team</div>
                            <a href="#" className="header__button header__button--close">
                                <div className="button__icon"></div>
                            </a>
                        </div>
                        <div className="conversation__div"></div>
                        <div className="conversation__footer"> <a href="#" className="footer__button"><i></i>New conversation</a> </div>
                    </div>
                </div>
                <audio className="kwikchat__sounds--onmessage" src="https://cdn.chatkwik.com/slack/kwikchat/sounds/onmessage_5.mp3"></audio>
            </div>
            <script type="text/javascript">
                console.log("Initializing");
            </script>
        </div>
    )
  }
}

export default Dashboard;
