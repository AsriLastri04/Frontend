import styled from "styled-components";
const StyledNavbar = styled.div`
  background-color: #06d6a0;
  padding: 1rem;
  color: #fff;

  nav {
    display: flex;
    flex-direction: column;
  }
  h1 {
    font-size: 2.4rem;
    margin-bottom: 1rem;
  }
  ul {
    display: flex;
    flex-direction: column;
    list-style: none;
  }
  li {
    margin-bottom: 1rem;
  }
  a {
    text-decoration: none;
    color: #fff;
  }
  @media (min-width: 768px) {
    nav {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
    h1 {
      margin-bottom: 0;
    }
    ul {
      flex-direction: row;
    }
    li {
      margin: 0 1rem;
    }
  }
  @media (min-width: 992px) {
  }
`;
export default StyledNavbar;
