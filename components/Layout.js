import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => (
  <>
    {/* <Spinner /> */}
    <Header />
    {children}
    <Footer />
  </>
);

export default Layout;
