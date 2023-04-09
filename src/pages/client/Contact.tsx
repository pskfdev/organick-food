import React from "react";
import { Button, Container, Image } from "react-bootstrap";
import BannerSm from "../../components/header/BannerSm";
import bgLeft from "../../assets/img/bg-c-l.png";
import bgRight from "../../assets/img/bg-c-r.png";
import friut from "../../assets/img/fruit-contact.jpg";
import bg from "../../assets/img/bg-organic-store.jpg";
import iconmailbox from "../../assets/img/mailbox.png";
import { SectionAbout } from "../../styleElement";
import { FiMail, FiPhone } from "react-icons/fi";
import {
  FaPinterest,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import Subscribe from "../../components/content/SectionSubscribe/Subscribe";
import Icontext from "../../components/content/Section-About/Icontext";
import FormContact from "../../components/content/form/FormContact";

function Contact() {
  return (
    <div>
      <BannerSm title="Contact" bgLeft={bgLeft} bgRight={bgRight} />

      <section className="mt-7 py-5">
        <Container>
          <SectionAbout>
            <div>
              <Image
                src={friut}
                alt="img1"
                style={{
                  height: "500px",
                  width: "90%",
                  objectFit: "cover",
                  borderRadius: "20px",
                }}
              />
            </div>

            <div className="w-100 py-4 text-custom-primary">
              <h4 className="fst-italic text-custom-secondary">
                Why choose us ?
              </h4>
              <h1>We do not buy from the open market & traders.</h1>
              <p>
                Simply dummy text of the printing and typesetting industry.
                Lorem had ceased to been the industry's standard the 1500s, when
                an unknown.
              </p>
              <div
                className="p-2 rounded-4 d-flex align-items-center shadow-lg"
                style={{ width: "fit-content" }}
              >
                <div className="p-3 bg-custom-gray rounded-4">
                  <FiMail size={22} />
                </div>
                <div className="ms-3">
                  <p className="my-auto">
                    <span className="fw-bold">Message</span>
                    <br />
                    subport@organic.com
                  </p>
                </div>
              </div>
              <br />
              <div
                className="p-2 rounded-4 d-flex align-items-center shadow-lg"
                style={{ width: "fit-content" }}
              >
                <div className="p-3 bg-custom-gray rounded-4">
                  <FiPhone size={22} />
                </div>
                <div className="ms-3">
                  <p className="my-auto">
                    <span className="fw-bold">Contact Us</span>
                    <br />
                    +01 123 456 789
                  </p>
                </div>
              </div>
              <br />
              <br />

              <div>
                <ul className="d-flex">
                  <li>
                    <a href="">
                      <FaInstagram />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <FaFacebook />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <FaTwitter />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <FaPinterest />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </SectionAbout>
        </Container>
      </section>

      <section className="my-6">
        <Container
          style={{
            height: "500px",
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            backgroundPosition: "bottom",
            borderRadius: "30px",
          }}
          className="d-flex justify-content-end align-items-center"
        >
          <div
            className="bg-white rounded-5 p-4 text-custom-primary"
            style={{ width: "500px", height: "auto" }}
          >
            <h4 className="fst-italic text-custom-secondary">About us</h4>
            <h1>Our farms</h1>
            <p>
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley.
            </p>
            <Icontext
              icon={iconmailbox}
              title="New York, USA:"
              des="299 Park Avenue New York, New York 10171"
            />
            <Icontext
              icon={iconmailbox}
              title="London, UK:"
              des="30 Stamford Street, London SE1 9LQ"
            />
          </div>
        </Container>
      </section>

      <section className="my-7">
        <Container>
          <FormContact />
        </Container>
      </section>

      <section className="py-5">
        <Container>
          <Subscribe />
        </Container>
      </section>
    </div>
  );
}

export default Contact;
