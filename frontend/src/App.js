import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


// Components
import Navbar from "./components/Navbar";
import SideDrawer from "./components/SideDrawer";
import Backdrop from "./components/Backdrop";
import Footer from "./components/Footer";

// Screens
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import MainScreen from "./screens/MainScreen";
import ContactScreen from "./screens/ContactScreen";
import AboutScreen from "./screens/AboutScreen";
import AllProductsScreen from "./screens/AllProductsScreen";
import DermotologyScreen from "./screens/DermotologyScreen";
import DepressionScreen from "./screens/DepressionScreen";
import DentalScreen from "./screens/DentalScreen";

import FractureScreen from "./screens/FractureScreen";
import WomensCareScreen from "./screens/WomensCareScreen";
import AdminScreen from "./screens/AdminScreen";
// import

//adminpannel

import MedicineReport from './adminpannel/components/MedicineReport';
import AddMedicine from './adminpannel/components/AddMedicine';
import Edit from './adminpannel/components/Edit';
import Details from './adminpannel/components/Details';

import SellsReport from './customer/SellsReport';
import AddSells from './customer/AddSells';
import EditSell from './customer/EditSells';
import SellsDetails from './customer/SellsDetails';

import Login from './Login';

function App() {
  const [sideToggle, setSideToggle] = useState(false);

  return (
    <Router>
      <Navbar click={() => setSideToggle(true)} />
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
      <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
      <main className="app">
        <Switch>
          <Route exact path="/" component={MainScreen} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/allProducts" component={AllProductsScreen} />
          <Route exact path="/product" component={HomeScreen} />
          <Route exact path="/product/:id" component={ProductScreen} />
          <Route exact path="/products/dermatology" component={DermotologyScreen}/>
          <Route exact path="/products/depression" component={DepressionScreen}/>
          <Route exact path="/products/dental" component={DentalScreen} />
          <Route exact path="/products/fracture" component={FractureScreen} />
          <Route exact path="/products/womensCare"component={WomensCareScreen}/>
          <Route exact path="/about" component={AboutScreen} />
          <Route exact path="/contact" component={ContactScreen} />
          <Route exact path="/admin" component={AdminScreen} />
          <Route exact path="/cart" component={CartScreen} />

      <Route exact path="/MedicineReport" component={MedicineReport} />
      <Route exact path="/AddMedicine" component={AddMedicine} />
      <Route exact path="/edit/:id" component={Edit} />
      <Route exact path="/view/:id" component={Details} />

      <Route exact path="/SellsReport" component={SellsReport} />
      <Route exact path="/AddSells" component={AddSells} />
      <Route exact path="/edit-sell/:id" component={EditSell} />
      <Route exact path="/view-sell/:id" component={SellsDetails} />
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
