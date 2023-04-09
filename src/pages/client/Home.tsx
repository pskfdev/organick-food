import React from "react";
import { Button, Container, Image } from "react-bootstrap";
import OfferBanner from "../../components/content/offer-banner/OfferBanner";
import Banner from "../../components/header/Banner";
import Icontext from "../../components/content/Section-About/Icontext";
import { SectionAbout } from "../../styleElement.js";
import orange from "../../assets/img/orange.png";
import iconvegan from "../../assets/img/vegan.png";
import iconmailbox from "../../assets/img/mailbox.png";
import juice from "../../assets/img/juice.jpg";
import food from "../../assets/img/food.jpg";
import cookie from "../../assets/img/cookie.jpg";
import { Link } from "react-router-dom";
import SectionProduct from "../../components/content/Section-Product/SectionProduct";
import OrganicStore from "../../components/content/Section-Organic-store/OrganicStore";
import ProductHero from "../../components/content/Section-Product-Hero/ProductHero";
import Subscribe from "../../components/content/SectionSubscribe/Subscribe";

function Home() {
  return (
    <>
      <Banner />
      <OfferBanner />

      <section className="bg-custom-banner py-5">
        <Container>
          <SectionAbout>
            <div>
              <Image
                src={orange}
                alt="img1"
                style={{ height: "500px", width: "100%", objectFit: "cover" }}
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
              <Icontext
                icon={iconvegan}
                title="Organic Foods Only"
                des="Simply dummy text of the printing and typesetting industry. Lorem Ipsum"
              />
              <Icontext
                icon={iconmailbox}
                title="Quality Standards"
                des="Simply dummy text of the printing and typesetting industry. Lorem Ipsum"
              />
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

      <section className="py-7 bg-custom-primary">
        <Container>
          <SectionProduct category="vegetable" />
        </Container>
      </section>

      <section>
        <OrganicStore />
      </section>

      <section
        className="bg-custom-success d-flex flex-column flex-lg-row py-7"
        style={{
          columnGap: "20px",
          rowGap: "20px",
        }}
      >
        <ProductHero bg={juice} text="Organic Juice" />
        <ProductHero bg={food} text="Organic Food" />
        <ProductHero bg={cookie} text="Organic Cookie" />
      </section>

      <section className="py-7">
        <Container>
          <Subscribe />
        </Container>
      </section>
    </>
  );
}

export default Home;
