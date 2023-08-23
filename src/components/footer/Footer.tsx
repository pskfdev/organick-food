import React from "react";
import { Button, Container } from "react-bootstrap";
import { FaPinterest, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-custom-white">
      <Container>
        <section className="d-flex flex-column flex-md-row justify-content-between py-3">
          <div className="w-100 text-center text-md-end pe-0 pe-lg-5 pe-md-3">
            <h3 className="text-custom-primary">Contact Us</h3>
            <div className="mt-4">
              <p>
                E-mail <br />
                needhelp@Organia.com
              </p>
              <p>
                Phone <br />
                666 888 888
              </p>
              <p>
                Address <br />
                88 road, borklyn street, USA
              </p>
            </div>
          </div>
          <hr className="border border-secondary" />

          <div className="w-100 text-center px-0 px-lg-5 px-md-2">
            <h3 className="text-custom-primary">
              Organick
            </h3>

            <div className="mt-4">
              <p>
                Simply dummy text of the printing and typesetting industry.
                Lorem Ipsum simply dummy text of the printing
              </p>
            </div>

            <div className="mt-5 px-5">
              <ul className="d-flex justify-content-between">
                <li>
                  <a href=""><FaInstagram /></a>
                </li>
                <li>
                  <a href=""><FaFacebook /></a>
                </li>
                <li>
                  <a href=""><FaTwitter /></a>
                </li>
                <li>
                  <a href=""><FaPinterest /></a>
                </li>
              </ul>
            </div>
          </div>
          <hr className="border border-secondary" />

          <div className="w-100 text-center text-md-start ps-0 ps-lg-5 ps-md-3">
            <h3 className="text-custom-primary">Utility Pages</h3>
            <div className="mt-4">
              <p>Style Guide</p>
              <p>Password Protected</p>
              <p>Licences</p>
              <p>Changelog</p>
            </div>
          </div>
        </section>
        <hr className="border border-secondary" />

        <section className="py-2">
            <p className="text-center">Copyright © Organick | Designed by VictorFlow Templates - Powered by Webflow</p>
        </section>
      </Container>
    </footer>
  );
}

export default Footer;
