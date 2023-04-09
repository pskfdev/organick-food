import React from "react";
import { Button, Container, Image } from "react-bootstrap";
import BannerSm from "../../components/header/BannerSm";
import bgLeft from "../../assets/img/bg-ab-l.png";
import bgRight from "../../assets/img/bg-ab-r.png";
import SectionProduct from "../../components/content/Section-Product/SectionProduct";
import Icontext from "../../components/content/Section-About/Icontext";
import { SectionAbout } from "../../styleElement";
import { Link } from "react-router-dom";
import salad from "../../assets/img/ab-salad.png";
import iconvegan from "../../assets/img/vegan.png";
import iconmailbox from "../../assets/img/mailbox.png";
import vagetable from "../../assets/img/vegetable.jpg";
import Subscribe from "../../components/content/SectionSubscribe/Subscribe";
import Cardtext from "../../components/content/Section-About/Cardtext";
import { FiShoppingCart, FiAward, FiPhoneCall, FiShield } from "react-icons/fi";

function About() {
  return (
    <div>
      <BannerSm title="About Us" bgLeft={bgLeft} bgRight={bgRight} />

      <section className="py-5">
        <Container>
          <SectionAbout>
            <div>
              <Image
                src={salad}
                alt="img1"
                style={{
                  height: "500px",
                  width: "100%",
                  objectFit: "cover",
                  objectPosition: "right",
                }}
              />
            </div>

            <div className="w-100 py-4 text-custom-primary">
              <h4 className="fst-italic text-custom-secondary">About us</h4>
              <h1>We Believe in Working Accredited Farmers</h1>
              <p>
                Simply dummy text of the printing and typesetting industry.
                Lorem had ceased to been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley.
              </p>
              <div className="d-flex my-5 flex-column flex-md-row">
                <Icontext
                  icon={iconvegan}
                  title="Modern Agriculture Equipment"
                  des=""
                /> <br />
                <Icontext icon={iconmailbox} title="No growth hormones are used" des="" />
              </div>

              <Link
                role="button"
                to="/shop"
                className="btn btn-custom-primary text-white"
              >
                Shop now
              </Link>
            </div>
          </SectionAbout>
        </Container>
      </section>

      <section className="bg-custom-banner py-5">
        <Container>
          <SectionAbout>
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
              <p
                className="p-3 bg-custom-gray rounded-5 text-custom-primary fw-bold"
                style={{ width: "fit-content" }}
              >
                100% Natural Product
              </p>
              <p className="w-75">
                Simply dummy text of the printing and typesetting industry Lorem
                Ipsum
              </p>
              <p
                className="p-3 bg-custom-gray rounded-5 text-custom-primary fw-bold"
                style={{ width: "fit-content" }}
              >
                Increases resistance
              </p>
              <p className="w-75">
                Filling, and temptingly healthy, our Biona Organic Granola with
                Wild Berries is just the thing
              </p>
            </div>

            <div>
              <Image
                src={vagetable}
                alt="img1"
                style={{
                  height: "auto",
                  width: "100%",
                  objectFit: "cover",
                  borderRadius: "30px",
                }}
              />
            </div>
          </SectionAbout>

          <div className="my-5 d-flex flex-wrap justify-content-center">
            <Cardtext
              icon={FiShoppingCart}
              title="Return Policy"
              des="Simply dummy text of the printintypesetting industry."
            />
            <Cardtext
              icon={FiAward}
              title="100% Fresh"
              des="Simply dummy text of the printintypesetting industry."
            />
            <Cardtext
              icon={FiPhoneCall}
              title="Support 24/7"
              des="Simply dummy text of the printintypesetting industry."
            />
            <Cardtext
              icon={FiShield}
              title="Secured Payment"
              des="Simply dummy text of the printintypesetting industry."
            />
          </div>
        </Container>
      </section>

      <section className="py-7 bg-custom-primary">
        <Container>
          <SectionProduct category="fruit" />
        </Container>
      </section>

      <section className="py-7">
        <Container>
          <Subscribe />
        </Container>
      </section>
    </div>
  );
}

export default About;
