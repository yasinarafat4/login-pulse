import styled from "styled-components";

const Image = styled.img`
  width: 90%;
  display: block;
  @media only screen and (max-width: 1024px) {
    width: 100%;
  }
  @media only screen and (max-width: 778px) {
    display: none;
  }
`;

export default Image;
