import React from "react";
import { Container } from "react-bootstrap";
import BannerSm from "../../components/header/BannerSm";
import bgLeft from "../../assets/img/bg-sh-l.png";
import bgRight from "../../assets/img/bg-sh-r.png";
import SectionProductAll from "../../components/content/Section-Product/SectionProductAll";
import Subscribe from "../../components/content/SectionSubscribe/Subscribe";

function Shop() {
  return (
    <div>
      <BannerSm title="Shop" bgLeft={bgLeft} bgRight={bgRight} />

      <section className="py-7">
        <Container>
          <SectionProductAll />
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

export default Shop;
