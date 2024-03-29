import styled from "styled-components";
const StyledHero = styled.div`
  margin: 1rem;

  section {
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  h2 {
    color: #06d6a0;
    margin-bottom: 1rem;
    font-size: 2.44rem;
  }
  h3 {
    color: #06d6a0;
    margin-bottom: 1rem;
    font-size: 1.59rem;
  }
  p {
    color: #64748b;
    margin-bottom: 2rem;
    
  }

  img {
    max-width: 100%;
    height: auto;
    border-radius: 25px;
    margin-top: 3rem;
  }
  @media (min-width: 768px) {
    flex-direction: row;
    text-align: left;
    .poster {
      flex-basis: 30%;
    }
    .info {
      flex-basis: 60%;
    }
  }
  }

  /* Large Screen */
  @media (min-width: 992px) {
    max-width: 1200px;
    margin: 3rem auto;

    section {
      margin: 0 1rem;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      text-align: left;
    }
  }
`;

export default StyledHero;
