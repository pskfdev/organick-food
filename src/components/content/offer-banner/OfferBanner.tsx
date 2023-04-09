import React from 'react'
import { Button, Container } from "react-bootstrap";
import OfferItems from "../offer-banner/OfferItems";
import offer1 from "../../../assets/img/bg-of-1.jpg";
import offer2 from "../../../assets/img/bg-of-2.jpg";

function OfferBanner() {
  return (
    <div className="w-100 py-5">
      <Container
        className="d-flex flex-column flex-lg-row"
        style={{
          columnGap: "20px",
          rowGap: "20px"
        }}
      >
        <OfferItems
          bg={offer1}
          img="Natural!"
          text="Get Garden Fresh Fruits"
          color="text-white"
          to="/shop"
        />

        <OfferItems
          bg={offer2}
          img="Offer!"
          text="Get 10% off on Vegetables"
          color="text-custom-primary"
          to="/shop"
        />
      </Container>
    </div>
  )
}

export default OfferBanner
