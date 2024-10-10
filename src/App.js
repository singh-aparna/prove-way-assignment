import "./index.css";
import BillingInfo from "./Webview/BillingInfo/BillingInfo";
import Box from "./Webview/Components/Box/Box";
import Button from "./Webview/Components/Button/Button";
import ColourDropDown from "./Webview/Components/ColourDropDown/ColourDropDown";
import SizeDropDown from "./Webview/Components/SizeDropDown/SizeDropDown";
import Footer from "./Webview/Footer/Footer";
import Header from "./Webview/Header/Header";

function App() {
  return (
    <div>
      <Header />
      <Box quantity="1 Unit" discount="10% Off" type="Standard Price" price="$10.00 USD" actualPrice="$24.00 USD" />
      <Box quantity="2 Unit" discount="20% Off" price="$18.00 USD" actualPrice="$24.00 USD" size="Size" colour="Colour" list1="#1" list2="#2" colourDropDown1={<ColourDropDown />} colourDropDown2={<ColourDropDown />} sizeDropDown1={<SizeDropDown />} sizeDropDown2={<SizeDropDown />} />
      <Box quantity="3 Unit" discount="30% Off" price="$24.00 USD" actualPrice="$24.00 USD" />
      <BillingInfo />
      <Button />
      <Footer />
    </div>
  );
}

export default App;
