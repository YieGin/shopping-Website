import React from "react";
import Navbar from "./components/NavBar/Navbar";
import "./app.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/Landing Page/LandingPage";
import ClothingMens from "./Mens/ClothingMens/ClothingMens";
import Footer from "./components/Footer/Footer";
import JacketsMen from "./Mens/ClothingMens/JacketsMen";
import HoodiesMen from "./Mens/ClothingMens/HoodiesMen";
import TShirtsMen from "./Mens/ClothingMens/TShirtsMen";
import PoloMen from "./Mens/ClothingMens/PoloMen";
import ShirtsMen from "./Mens/ClothingMens/ShirtsMen";
import Jeans from "./Mens/ClothingMens/Jeans";
import Joggers from "./Mens/ClothingMens/Joggers";
import Jumpers from "./Mens/ClothingMens/Jumpers";
import Loungewear from "./Mens/ClothingMens/Loungewear";
import Shorts from "./Mens/ClothingMens/Shorts";
import SkiMen from "./Mens/ClothingMens/SkiMen";
import SportswearMen from "./Mens/ClothingMens/SportswearMen";
import SwimwearMen from "./Mens/ClothingMens/SwimwearMen";
import TopsMen from "./Mens/ClothingMens/TopsMen";
import TrousersMen from "./Mens/ClothingMens/TrousersMen";
import ViewMen from "./Mens/ClothingMens/ViewMen";
import BagsMen from "./Mens/ClothingMens/BagsMen";
import HatsMen from "./Mens/ClothingMens/HatsMen";
import GlovesMen from "./Mens/ClothingMens/GlovesMen";
import Scarves from "./Mens/ClothingMens/Scarves";
import Underwear from "./Mens/ClothingMens/Underwear";
import Socks from "./Mens/ClothingMens/Socks";
import ReusableMen from "./Mens/ClothingMens/ReusableMen";
import ViewFootwear from "./Mens/ClothingMens/ViewFootwear";
import Trainers from "./Mens/ClothingMens/Trainers";
import Vegan from "./Mens/ClothingMens/Vegan";
import Sliders from "./Mens/ClothingMens/Sliders";
import FlipFlops from "./Mens/ClothingMens/FlipFlops";
import BestSellers from "./Mens/ClothingMens/BestSellers";
import MostWanted from "./Mens/ClothingMens/MostWanted";
import School from "./Mens/ClothingMens/School";
import Autumn from "./Mens/ClothingMens/Autumn";
import Graphic from "./Mens/ClothingMens/Graphic";
import Organic from "./Mens/ClothingMens/Organic";
import PhoneMen from "./Mens/PhoneMen/PhoneMen";

import NewWomen from "./Women/ClothingWomen/NewWomen";
import JacketsWomen from "./Women/ClothingWomen/JacketsWomen";
import HoddiesWomen from "./Women/ClothingWomen/HoddiesWomen";
import DressesWomen from "./Women/ClothingWomen/DressesWomen";
import TShirtsWomen from "./Women/ClothingWomen/TShirtsWomen";
import LeggingsWomen from "./Women/ClothingWomen/LeggingsWomen";
import ShirtsWomen from "./Women/ClothingWomen/ShirtsWomen";
import JeansWomen from "./Women/ClothingWomen/JeansWomen";
import JoggersWomen from "./Women/ClothingWomen/JoggersWomen";
import JumpersWomen from "./Women/ClothingWomen/JumpersWomen";
import LoungewearWomen from "./Women/ClothingWomen/LoungewearWomen";
import ShortsWomen from "./Women/ClothingWomen/ShortsWomen";
import SkirtsWomen from "./Women/ClothingWomen/SkirtsWomen";
import SkiWomen from "./Women/ClothingWomen/SkiWomen";
import SportswearWomen from "./Women/ClothingWomen/SportswearWomen";
import SwimwearWomen from "./Women/ClothingWomen/SwimwearWomen";
import TopsWomen from "./Women/ClothingWomen/TopsWomen";
import TrousersWomen from "./Women/ClothingWomen/TrousersWomen";
import ViewWomen from "./Women/ClothingWomen/ViewWomen";
import BagsWomen from "./Women/ClothingWomen/BagsWomen";
import HatsWomen from "./Women/ClothingWomen/HatsWomen";
import GlovesWomen from "./Women/ClothingWomen/GlovesWomen";
import ScarvesWomen from "./Women/ClothingWomen/ScarvesWomen";
import UnderwearWomen from "./Women/ClothingWomen/UnderwearWomen";
import SocksWomen from "./Women/ClothingWomen/SocksWomen";
import ReusableWomen from "./Women/ClothingWomen/ReusableWomen";
import ViewFootwearWomen from "./Women/ClothingWomen/ViewFootwearWomen";
import TrainersWomen from "./Women/ClothingWomen/TrainersWomen";
import VeganWomen from "./Women/ClothingWomen/VeganWomen";
import SlidersWomen from "./Women/ClothingWomen/SlidersWomen";
import FlipFlopsWomen from "./Women/ClothingWomen/FlipFlopsWomen";
import BestSellersWomen from "./Women/ClothingWomen/BestSellersWomen";
import MostWantedWomen from "./Women/ClothingWomen/MostWantedWomen";
import SchoolWomen from "./Women/ClothingWomen/SchoolWomen";
import AutumnWomen from "./Women/ClothingWomen/AutumnWomen";
import GraphicWomen from "./Women/ClothingWomen/GraphicWomen";
import OraganicWomen from "./Women/ClothingWomen/OraganicWomen";
import PlaysutsWomen from "./Women/ClothingWomen/PlaysutsWomen";
import PhoneWomen from "./Women/PhoneWomen/PhoneWomen";
import Search from "./SearchBar/Search";
import Login from "./components/NavBar/Log in page/Login";
const App = () => {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Search" element={<Search />}></Route>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/$50" element={<ClothingMens />}></Route>
        <Route path="/Jackets" element={<JacketsMen />}></Route>
        <Route path="/Hoodies" element={<HoodiesMen />}></Route>
        <Route path="/TShirts" element={<TShirtsMen />}></Route>
        <Route path="/Polo" element={<PoloMen />}></Route>
        <Route path="/Shirts" element={<ShirtsMen />}></Route>
        <Route path="/Jeans" element={<Jeans />}></Route>
        <Route path="/Joggers" element={<Joggers />}></Route>
        <Route path="/Jumpers" element={<Jumpers />}></Route>
        <Route path="/Loungewear" element={<Loungewear />}></Route>
        <Route path="/Shorts" element={<Shorts />}></Route>
        <Route path="/Ski" element={<SkiMen />}></Route>
        <Route path="/SportswearMen" element={<SportswearMen />}></Route>
        <Route path="/SwimwearMen" element={<SwimwearMen />}></Route>
        <Route path="/TopsMen" element={<TopsMen />}></Route>
        <Route path="/TrousersMen" element={<TrousersMen />}></Route>
        <Route path="/ViewMen" element={<ViewMen />}></Route>
        <Route path="/BagsMen" element={<BagsMen />}></Route>
        <Route path="/HatsMen" element={<HatsMen />}></Route>
        <Route path="/GlovesMen" element={<GlovesMen />}></Route>
        <Route path="/Scarves" element={<Scarves />}></Route>
        <Route path="/Underwear" element={<Underwear />}></Route>
        <Route path="/Socks" element={<Socks />}></Route>
        <Route path="/ReusableMen" element={<ReusableMen />}></Route>
        <Route path="/ViewFootwear" element={<ViewFootwear />}></Route>
        <Route path="/Trainers" element={<Trainers />}></Route>
        <Route path="/Vegan" element={<Vegan />}></Route>
        <Route path="/Sliders" element={<Sliders />}></Route>
        <Route path="/FlipFlops" element={<FlipFlops />}></Route>
        <Route path="/BestSellers" element={<BestSellers />}></Route>
        <Route path="/MostWanted" element={<MostWanted />}></Route>
        <Route path="/School" element={<School />}></Route>
        <Route path="/Autumn" element={<Autumn />}></Route>
        <Route path="/Graphic" element={<Graphic />}></Route>
        <Route path="/Organic" element={<Organic />}></Route>
        <Route path="/PhoneMen" element={<PhoneMen />}></Route>
        <Route path="/PhoneWomen" element={<PhoneWomen />}></Route>
        <Route path="/NewWomen" element={<NewWomen />}></Route>
        <Route path="/JacketsWomen" element={<JacketsWomen />}></Route>
        <Route path="/HoddiesWomen" element={<HoddiesWomen />}></Route>
        <Route path="/DressesWomen" element={<DressesWomen />}></Route>
        <Route path="/TShirtsWomen" element={<TShirtsWomen />}></Route>
        <Route path="/LeggingsWomen" element={<LeggingsWomen />}></Route>
        <Route path="/ShirtsWomen" element={<ShirtsWomen />}></Route>
        <Route path="/JeansWomen" element={<JeansWomen />}></Route>
        <Route path="/JoggersWomen" element={<JoggersWomen />}></Route>
        <Route path="/JumpersWomen" element={<JumpersWomen />}></Route>
        <Route path="/LoungewearWomen" element={<LoungewearWomen />}></Route>
        <Route path="/PlaysutsWomen" element={<PlaysutsWomen />}></Route>
        <Route path="/ShortsWomen" element={<ShortsWomen />}></Route>
        <Route path="/SkirtsWomen" element={<SkirtsWomen />}></Route>
        <Route path="/SkiWomen" element={<SkiWomen />}></Route>
        <Route path="/SportswearWomen" element={<SportswearWomen />}></Route>
        <Route path="/SwimwearWomen" element={<SwimwearWomen />}></Route>
        <Route path="/TopsWomen" element={<TopsWomen />}></Route>
        <Route path="/TrousersWomen" element={<TrousersWomen />}></Route>
        <Route path="/ViewWomen" element={<ViewWomen />}></Route>
        <Route path="/BagsWomen" element={<BagsWomen />}></Route>
        <Route path="/HatsWomen" element={<HatsWomen />}></Route>
        <Route path="/GlovesWomen" element={<GlovesWomen />}></Route>
        <Route path="/ScarvesWomen" element={<ScarvesWomen />}></Route>
        <Route path="/UnderwearWomen" element={<UnderwearWomen />}></Route>
        <Route path="/SocksWomen" element={<SocksWomen />}></Route>
        <Route path="/ReusableWomen" element={<ReusableWomen />}></Route>
        <Route
          path="/ViewFootwearWomen"
          element={<ViewFootwearWomen />}
        ></Route>
        <Route path="/TrainersWomen" element={<TrainersWomen />}></Route>
        <Route path="/VeganWomen" element={<VeganWomen />}></Route>
        <Route path="/SlidersWomen" element={<SlidersWomen />}></Route>
        <Route path="/FlipFlopsWomen" element={<FlipFlopsWomen />}></Route>
        <Route path="/BestSellersWomen" element={<BestSellersWomen />}></Route>
        <Route path="/MostWantedWomen" element={<MostWantedWomen />}></Route>
        <Route path="/SchoolWomen" element={<SchoolWomen />}></Route>
        <Route path="/AutumnWomen" element={<AutumnWomen />}></Route>
        <Route path="/GraphicWomen" element={<GraphicWomen />}></Route>
        <Route path="/OraganicWomen" element={<OraganicWomen />}></Route>
      </Routes>
      <Footer />
    </HashRouter>
  );
};

export default App;
