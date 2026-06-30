import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Hero from "./Hero";
import PopularCategories from "./PopularCategories";
import BestOffers from "./BestOffers";
import NewGoods from "./NewGoods";
import AppleShopping from "./AppleShopping";
import HomeAppliance from "./HomeAppliance";
import MicroSoft from "./MicroSoft";
import Footer from "./Footer";
import BestOffersDetails from "./BestOffersDetails";
import NewGoodsDetails from "./NewGoodsDetails";
import HomeApplianceDetails from "./HomeApplianceDetails";
import AppleShoppingDetails from "./AppleShoppingDetails";
import SignIn from "./SignIn";
import Gaming from "./Gaming";
import Headset from "./HeadSet";
import Camera from "./Camera";
import PopularCategoriesDetails from "./PopularCategoriesDetails";
import AppleButton from "./AppleButton";
import Promotions from "./Promotions";
import Stores from "./Stores";
import Contact from "./Contact";
import Cart from "./Cart";
import SearchResults from "./SearchResults";

import { useState } from "react";
import AppleButtonDetails from "./AppleButtonDetails";
import ProductRouter from "./ProductRouter";



function App() {
  const [search, setSearch] = useState("");
  return (
    <BrowserRouter>


      <Routes>
      <Route path="/" element={<SignIn />} />
        <Route
          path="/home"
          element={
            <>
              <NavBar search={search} setSearch={setSearch} />
              <SearchResults search={search} />
              <Hero />
              
              <PopularCategories />
              <BestOffers />
              <NewGoods />
              <AppleShopping />
              <HomeAppliance />
              <MicroSoft />
              <Footer />
            </>
          }
        />

        <Route path="/bestoffers" element={<BestOffers />} />
        <Route path="/bestoffers/:id" element={<><NavBar /><BestOffersDetails /><Footer /></>} />

        <Route path="/popularcategories" element={<><NavBar /><PopularCategories /><Footer /></>} />
        <Route path="/popularcategories/:id" element={<><NavBar /><PopularCategoriesDetails /><Footer /></>} />

        <Route path="/newgood" element={<><NavBar /><NewGoods /><Footer /></>} />
        <Route path="/newgood/:id" element={<><NavBar /><NewGoodsDetails /><Footer /></>} />

        <Route path="/homeappliance" element={<><NavBar /><HomeAppliance /><Footer /></>} />
        <Route path="/homeappliance/:id" element={<><NavBar /><HomeApplianceDetails /><Footer /></>} />

        <Route path="/appleshopping" element={<><NavBar /><AppleShopping /><Footer /></>} />
        <Route path="/appleshopping/:id" element={<><NavBar /><AppleShoppingDetails /><Footer /></>} />

        
        <Route path="/gaming" element={<><NavBar /><Gaming /><Footer /></>} />
        <Route path="/headset" element={<><NavBar /><Headset /><Footer /></>} />
        <Route path="/camera" element={<><NavBar /><Camera /><Footer /></>} />
        <Route path="/applebutton" element={<><NavBar /><AppleButton /><Footer /></>} />
        <Route path="/applebutton/:id" element={<><NavBar /><AppleShoppingDetails /><Footer /></>} />

        <Route path="/promotions" element={<><NavBar /><Promotions /><Footer /></>} />
        <Route path="/stores" element={<><NavBar /><Stores /><Footer /></>} />
         <Route path="/stores" element={<><NavBar /><Stores /><Footer /></>} />
         <Route path="/contact" element={<><NavBar /><Contact /><Footer /></>} />


          <Route path="/cart" element={<><NavBar /><Cart /><Footer /></>} />
          <Route
              path="/product/:id"
              element={
                <>
                  <NavBar search={search} setSearch={setSearch} />
                  <ProductRouter/>
                  <Footer />
                </>
              }
            />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
