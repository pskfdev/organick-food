import styled from "styled-components";

const SectionAbout = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 20px;
  grid-gap: 30px;
  @media (max-width: 991px) {
    grid-template-columns: 1fr;
  }
`;

export { SectionAbout };