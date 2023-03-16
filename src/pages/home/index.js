import React, { useState } from "react";
import * as emailjs from "emailjs-com";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introdata, 
  meta, 
  dataportfolio, 
  dataabout,
  worktimeline,
  skills,
  services,
  contactConfig,
  school, } from "../../content_option";
import { Container, Row, Col, Alert } from "react-bootstrap";


export const Home = () => {
  const [formData, setFormdata] = useState({
    email: "",
    name: "",
    message: "",
    loading: false,
    show: false,
    alertmessage: "",
    variant: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormdata({ loading: true });

    const templateParams = {
      from_name: formData.email,
      user_name: formData.name,
      to_name: contactConfig.YOUR_EMAIL,
      message: formData.message,
    };

    emailjs
      .send(
        contactConfig.YOUR_SERVICE_ID,
        contactConfig.YOUR_TEMPLATE_ID,
        templateParams,
        contactConfig.YOUR_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setFormdata({
            loading: false,
            alertmessage: "SUCCESS! Thank you for your messege",
            variant: "success",
            show: true,
          });
        },
        (error) => {
          console.log(error.text);
          setFormdata({
            alertmessage: `Faild to send!, ${error.text}`,
            variant: "danger",
            show: true,
          });
          document.getElementsByClassName("co_alert")[0].scrollIntoView();
        }
      );
  };

  const handleChange = (e) => {
    setFormdata({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <HelmetProvider>
      <Container>
      <section id="home" className="home">
        <Helmet>
          <meta charSet="utf-8" />
          <title> {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <div className="intro_sec d-block d-lg-flex align-items-center ">
          <div
            className="h_bg-image order-1 order-lg-2 h-100 "
            style={{ backgroundImage: `url(${introdata.your_img_url})` }}
          ></div>
          <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
            <div className="align-self-center ">
              <div className="intro mx-auto">
                <h2 className="mb-1x">{introdata.title}</h2>
                <h1 className="fluidz-48 mb-1x">
                  <Typewriter
                    options={{
                      strings: [
                        introdata.animated.first,
                        introdata.animated.second,
                        introdata.animated.third,
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 10,
                    }}
                  />
                </h1>
                <p className="mb-1x">{introdata.description}</p>
                <div className="intro_btn-action pb-5">
                  <div id="button_h" className="ac_btn btn">
                      <a href="#portfolio">My Portfolio</a>
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                  </div>
                  <div id="button_h" className="ac_btn btn">
                      <a href="#about">About Me</a>
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                  </div>
                    <div id="button_h" className="ac_btn btn">
                      <a href="#contact">Contact Me</a>
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </Container>
      <Container className="About-header" id="portfolio">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-8 mb-4"> Portfolio </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="mb-5">
            <div key="0" className="po_item">
                <img src={require('../../assets/images/itsgiving.png')} alt="" />
                <div className="content">
                  <p>A website that would help link students to CSP projects with other additional functions like interview slot management, data analytics for hours completed, FAQ chatbot, etc.</p>
                  <a href="https://its-giving.netlify.app/">View website</a>
                </div>
            </div>

            <div key="1" className="po_item">
                <img src={require('../../assets/images/protrack.jpg')} alt="" />
                <div className="content">
                  <p>Tasked to develop a website by myself for the new software my team was developing for the company.<br/><br/>The main idea of the software was streamlining prospect checking from different levels within the company.</p>
                </div>
            </div>

            <div key="2" className="po_item" id="smaller">
                <img src={require('../../assets/images/aloha.png')} alt="" />
                <div className="content">
                  <p><b>IN PROGRESS</b><br/><br/>Developing a website for a start up company<br/><br/>Aloha is re-imagining the future of work. In 3 clicks (browse, choose, book), access meaningful sustainability-minded experiences as you (re)connect with your employees and deliver positive impact to our Planet as a team</p>
                </div>
            </div>

            <div key="3" className="po_item" id="smaller">
                <img src={require('../../assets/images/redstore.png')} alt="" />
                <div className="content">
                <p>Personal practice project to develop a functioning ecommerce online store</p>
                </div>
            </div>

            <div key="4" className="po_item" id="smaller">
                <img src={require('../../assets/images/dbtt.png')} alt="" />
                <div className="content">
                <p><b>IN PROGRESS</b><br/><br/>Prototyping a mobile application to help fishermen streamline loan claims</p>
                <a href="https://www.figma.com/file/6vkMBxGZmA9zQEXY2f7i9w/Bait-and-Hook?node-id=0%3A1&t=Ow9sRH4COpFD9eqF-0">View Figma</a>
                </div>
            </div>

            <div key="5" className="po_item" id="smaller">
                <img src={require('../../assets/images/esd.png')} alt="" />
                <div className="content">
                <p><b>IN PROGRESS</b><br/><br/>Developing a web application for restaurant booking with an integrated split playment</p>
                <a href="https://www.figma.com/file/3P1lKfyhdoQWim6NMHBNic/esd?node-id=4%3A83&t=s7CPRgX1cutSgqVt-0">View Figma</a>
                </div>
            </div>
        </div>
      </Container>

      <Container className="About-header" id="about">
        <Helmet>
          <meta charSet="utf-8" />
          <title> About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-8 mb-4">About me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h4 className="color_sec py-3">{dataabout.title}</h4>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p>{dataabout.aboutme}</p>
            </div>
          </Col>
        </Row>
        <Row className=" sec_sp">
          <Col lg="5">
            <h4 className="color_sec py-3">Work Timline</h4>
          </Col>
          <Col lg="7">
            <table className="table caption-top">
              <tbody>
                {worktimeline.map((data, i) => {
                  return (
                    <tr key={i}>
                      <th scope="row">{data.jobtitle}</th>
                      <td>{data.where}</td>
                      <td>{data.date}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Col>
        </Row>
        <Row className=" sec_sp">
          <Col lg="5">
            <h4 className="color_sec py-3">Education Timline</h4>
          </Col>
          <Col lg="7">
            <table className="table caption-top">
              <tbody>
                {school.map((data, i) => {
                  return (
                    <tr key={i}>
                      <th scope="row">{data.jobtitle}</th>
                      <td>{data.where}</td>
                      <td>{data.date}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Col>
        </Row>
        {/* <Row className="sec_sp">
          <Col lg="5">
            <h4 className="color_sec py-3">Skills</h4>
          </Col>
          <Col lg="7">
            {skills.map((data, i) => {
              return (
                <div key={i}>
                  <h3 className="progress-title">{data.name}</h3>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{
                        width: `${data.value}%`,
                      }}
                    >
                      <div className="progress-value">{data.value}%</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Col>
        </Row> */}
        <Row className="sec_sp">
          <Col lang="5">
            <h4 className="color_sec py-4">Capabilities</h4>
          </Col>
          <Col lg="7">
            {services.map((data, i) => {
              return (
                <div className="service_ py-4" key={i}>
                  <h5 className="service__title">{data.title}</h5>
                  <p className="service_desc">{data.description}</p>
                </div>
              );
            })}
          </Col>
        </Row>
      </Container>

      <Container id="contact">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{meta.title} | Contact</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-8 mb-4">Contact Me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="12">
            <Alert
              //show={formData.show}
              variant={formData.variant}
              className={`rounded-0 co_alert ${
                formData.show ? "d-block" : "d-none"
              }`}
              onClose={() => setFormdata({ show: false })}
              dismissible
            >
              <p className="my-0">{formData.alertmessage}</p>
            </Alert>
          </Col>
          <Col lg="5" className="mb-5">
            <h3 className="color_sec py-4">Get in touch</h3>
            <address>
              <strong>Email:</strong>{" "}
              <a href={`mailto:${contactConfig.YOUR_EMAIL}`}>
                {contactConfig.YOUR_EMAIL}
              </a>
              <br />
              <br />
              {contactConfig.hasOwnProperty("YOUR_FONE") ? (
                <p>
                  <strong>Phone:</strong> {contactConfig.YOUR_FONE}
                </p>
              ) : (
                ""
              )}
            </address>
            <p>{contactConfig.description}</p>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <form onSubmit={handleSubmit} className="contact__form w-100">
              <Row>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Name"
                    value={formData.name || ""}
                    type="text"
                    required
                    onChange={handleChange}
                  />
                </Col>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control rounded-0"
                    id="email"
                    name="email"
                    placeholder="Email"
                    type="email"
                    value={formData.email || ""}
                    required
                    onChange={handleChange}
                  />
                </Col>
              </Row>
              <textarea
                className="form-control rounded-0"
                id="message"
                name="message"
                placeholder="Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <br />
              <Row>
                <Col lg="12" className="form-group">
                  <button className="btn ac_btn" type="submit">
                    {formData.loading ? "Sending..." : "Send"}
                  </button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
      <div className={formData.loading ? "loading-bar" : "d-none"}></div>
    </HelmetProvider>
  );
};
