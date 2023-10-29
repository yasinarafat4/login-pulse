import styled from "styled-components";

const Form = styled.form`
  width: 960px;
  padding: 10rem;
  margin: 3rem auto;
  box-shadow: 10px 10px 10px 10px rgba(216, 215, 215, 0.5);
  border-radius: 10px;
  font-family: poppins;
  
  @media only screen and (max-width: 778px) {
      width: 100%;
      margin: auto;
  }

  @media only screen and (max-width: 1024px) {
    width: 400px;
    margin: auto;
}
  }
`;

export default Form;
