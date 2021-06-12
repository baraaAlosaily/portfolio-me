/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";
import promo1 from "assets/img/theme/project.png";
import cardImg from "assets/img/theme/salmon-cookies.png";
import ill2 from "assets/img/ill/ill-2.svg";
import team1 from "assets/img/theme/team-1-800x800.jpg";
import team2 from "assets/img/theme/team-2-800x800.jpg";
import team3 from "assets/img/theme/team-3-800x800.jpg";
import team4 from "assets/img/theme/team-4-800x800.jpg";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";

// index page sections
import Download from "../IndexSections/Download.js";

class Landing extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-250">
              <div className="shape shape-style-1 shape-default">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row>
                    <Col lg="6">
                      <h1 className="display-3 text-white">
                        Coding is continual booming{" "}
                        <span>Why I Choose Software Development</span>
                      </h1>
                      <p className="lead text-white">
                        As Bill Gates Talk "Information technology and business
                        are becoming inextricably interwoven. I don't think
                        anybody can talk meaningfully about one without the
                        talking about the other.", the information technology
                        take up the most important business feild in the world
                        and the most companies competing be ease of the life by
                        using software development. So i am so extcited to enter
                        this world and i will try myself in this feild to found
                        new aplication that will be helpffull for people to
                        solve thier proplems easly and to find out new way to
                        doing something difficult to solve.
                      </p>
                      <div className="btn-wrapper">
                        <Button
                          className="btn-icon mb-3 mb-sm-0"
                          color="info"
                          href="https://demos.creative-tim.com/argon-design-system-react/#/documentation/alerts?ref=adsr-landing-page"
                        >
                          <span className="btn-inner--icon mr-1">
                            <i className="fa fa-code" />
                          </span>
                          <span className="btn-inner--text"> My projects</span>
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Container>
              {/* SVG separator */}
              <div className="separator separator-bottom separator-skew">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="fill-white"
                    points="2560 0 2560 100 0 100"
                  />
                </svg>
              </div>
            </section>
            {/* 1st Hero Variation */}
          </div>
          <section className="section section-lg pt-lg-0 mt--200">
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                            <i className="ni ni-check-bold" />
                          </div>
                          <h6 className="text-primary text-uppercase">
                            201 Project
                          </h6>
                          <p className="description mt-3">
                            FoodHub is an application that created to help
                            returant owner to marketing menu and to allow of
                            people to purchase from resturant on line
                          </p>
                          <div>
                            <Badge color="primary" pill className="mr-1">
                              Html
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              CSS
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              JS
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="primary"
                            href="#pablo"
                            // onClick={(e) => e.preventDefault()}
                            href={
                              "https://resume-ready.github.io/resume-ready2/index.html"
                            }
                            target="_blank"
                          >
                            Learn more
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
                            <i className="ni ni-istanbul" />
                          </div>
                          <h6 className="text-success text-uppercase">
                            301 Project
                          </h6>
                          <p className="description mt-3">
                            In project 301 i earg to creat full-stack web site
                            appliction that will serve student from overall
                            world to learn what they won't to learn without
                            bariers , by using react and backend server
                          </p>
                          <div>
                            <Badge color="success" pill className="mr-1">
                              react
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              SQL
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              eact-bootstrap
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="success"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Learn more
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                            <i className="ni ni-planet" />
                          </div>
                          <h6 className="text-warning text-uppercase">
                            401 Project
                          </h6>
                          <p className="description mt-3">
                            In 401 i would like to complete my 301 to be
                            profissinol, by allow of any user to add any course
                            who want and to establish enteaction between user
                            and owner of the course by using full-stack tech
                          </p>
                          <div>
                            <Badge color="warning" pill className="mr-1">
                              Front-End
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              Back-End
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              SQL
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="warning"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Learn more
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section section-lg">
            <Container>
              <Row className="row-grid align-items-center">
                <Col className="order-md-2" md="6">
                  <img alt="..." className="img-fluid floating" src={promo1} />
                </Col>
                <Col className="order-md-1" md="6">
                  <div className="pr-md-5">
                    <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5">
                      <i className="ni ni-settings-gear-65" />
                    </div>
                    <h3>201 Project</h3>
                    <p>Details of out project</p>
                    <ul className="list-unstyled mt-5">
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-settings-gear-65" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">
                              Our project consist of 5 pages
                            </h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-html5" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">
                              Build-in three languages Html,CSS,JS
                            </h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-satisfied" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">Five Software Developer</h6>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section bg-secondary">
            <Container>
              <Row className="row-grid align-items-center">
                <Col md="6">
                  <Card className="bg-default shadow border-0">
                    <CardImg alt="..." src={cardImg} top />
                    <blockquote className="card-blockquote">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="svg-bg"
                        preserveAspectRatio="none"
                        viewBox="0 0 583 95"
                      >
                        <polygon
                          className="fill-default"
                          points="0,52 583,95 0,95"
                        />
                        <polygon
                          className="fill-default"
                          opacity=".2"
                          points="0,42 583,95 683,0 0,95"
                        />
                      </svg>
                      <h4 className="display-3 font-weight-bold text-white">
                        Salmon Cookies Project
                      </h4>
                      <p className="lead text-italic text-white">
                        I was work on salmon cookies project in second week in
                        201
                      </p>
                    </blockquote>
                  </Card>
                </Col>
                <Col md="6">
                  <div className="pl-md-5">
                    <div className="icon icon-lg icon-shape icon-shape-primary shadow rounded-circle mb-5">
                      <i className="ni ni-settings" />
                    </div>
                    <h3>Our plan During Salmon Cookies week</h3>
                    <p className="lead">
                      First day and second we learned to create table to
                      calulate average number of cookies based on three number
                      and how to create constructor and call our data by using
                      varios functions
                    </p>
                    <p>
                      Thired day we wroked on using our tools to create main
                      page and design it by using CSS and JS
                    </p>
                    <p>
                      I was Connect my page with output page to craete full
                      function, and we learn how to ceate function to add new
                      row to tabe
                    </p>
                    <a
                      className="font-weight-bold text-primary mt-5"
                      href="https://baraaalosaily.github.io/cookie-stand/"
                      // onClick={(e) => e.preventDefault()}
                    >
                      Visit My WebApp
                    </a>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section pb-0 bg-gradient-warning">
            <Container>
              <Row className="row-grid align-items-center">
                <Col className="order-lg-2 ml-lg-auto" md="6">
                  <div className="position-relative pl-md-5">
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      src={ill2}
                    />
                  </div>
                </Col>
                <Col className="order-lg-1" lg="6">
                  <div className="d-flex px-3">
                    <div>
                      <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                        <i className="ni ni-building text-primary" />
                      </div>
                    </div>
                    <div className="pl-4">
                      <h4 className="display-3 text-white">Bara'a Al-Osaily</h4>
                    </div>
                  </div>
                  <Card className="shadow shadow-lg--hover mt-5">
                    <CardBody>
                      <div className="d-flex px-3">
                        <div>
                          <div className="icon icon-shape bg-gradient-success rounded-circle text-white">
                            <i className="ni ni-satisfied" />
                          </div>
                        </div>
                        <div className="pl-4">
                          <h5 className="title text-success">My Background</h5>
                          <p>
                            I am former HSE engineer, and i was worked for 3
                            years in different companies as HSE engineer,
                            although i have expeeries in evironment management
                          </p>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                  <Card className="shadow shadow-lg--hover mt-5">
                    <CardBody>
                      <div className="d-flex px-3">
                        <div>
                          <div className="icon icon-shape bg-gradient-warning rounded-circle text-white">
                            <i className="ni ni-active-40" />
                          </div>
                        </div>
                        <div className="pl-4">
                          <h5 className="title text-warning">
                            Personal Pitches
                          </h5>
                          <p>
                            A former HSE who decided to take the high road and
                            become Software Engineer, looking for a highly
                            supportive environment to help develop my Knowledge
                            in this field.
                          </p>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew zindex-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
          <section className="section section-lg">
            <Container>
              <Row className="justify-content-center text-center mb-lg">
                <Col lg="8">
                  <h2 className="display-3">My Goals</h2>
                  <p className="lead text-muted">
                    My Goals is to be competent in the following languages
                  </p>
                </Col>
              </Row>
              <Row>
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={
                        "data:image/png;base64,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"
                      }
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">JavaScript</span>
                        <small className="h6 text-muted">100%</small>
                      </h5>
                    </div>
                  </div>
                </Col>
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={
                        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
                      }
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">react</span>
                        <small className="h6 text-muted">100%</small>
                      </h5>
                    </div>
                  </div>
                </Col>
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={
                        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png"
                      }
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">Vue JS</span>
                        <small className="h6 text-muted">100%</small>
                      </h5>
                    </div>
                  </div>
                </Col>
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={
                        "data:image/png;base64,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"
                      }
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">Angular</span>
                        <small className="h6 text-muted">100%</small>
                      </h5>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section section-lg bg-gradient-default">
            <Container className="pt-lg pb-300"></Container>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew zindex-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
          <section className="section section-lg pt-lg-0 section-contact-us">
            <Container>
              <Row className="justify-content-center mt--300">
                <Col lg="8">
                  <Card className="bg-gradient-secondary shadow">
                    <CardBody className="p-lg-5">
                      <h4 className="mb-1">Want to contact with us?</h4>
                      <p className="mt-0">We can work toghether</p>
                      <FormGroup
                        className={classnames("mt-5", {
                          focused: this.state.nameFocused,
                        })}
                      >
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-user-run" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Your name"
                            type="text"
                            onFocus={() => this.setState({ nameFocused: true })}
                            onBlur={() => this.setState({ nameFocused: false })}
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup
                        className={classnames({
                          focused: this.state.emailFocused,
                        })}
                      >
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-email-83" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Email address"
                            type="email"
                            onFocus={() =>
                              this.setState({ emailFocused: true })
                            }
                            onBlur={() =>
                              this.setState({ emailFocused: false })
                            }
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup className="mb-4">
                        <Input
                          className="form-control-alternative"
                          cols="80"
                          name="name"
                          placeholder="Type a message..."
                          rows="4"
                          type="textarea"
                        />
                      </FormGroup>
                      <div>
                        <Button
                          block
                          className="btn-round"
                          color="default"
                          size="lg"
                          type="button"
                        >
                          Send Message
                        </Button>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </section>
          {/* <Download /> */}
        </main>
        <CardsFooter />
      </>
    );
  }
}

export default Landing;
