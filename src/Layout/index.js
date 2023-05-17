import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Container from "../components/Container";

function Layout(props) {
  return (
    <>
      <Navbar />
      <main>
        <Container>{props.children}</Container>
        <Footer />
      </main>
    </>
  );
}
export default Layout;
