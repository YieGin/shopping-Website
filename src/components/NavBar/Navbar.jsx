import React from "react";
import Dropdown from "./Dropdown";
import { useState } from "react";
import "./styles/NavBar.css";
import { Link } from "react-router-dom";
import Search from "../../SearchBar/Search";

const Navbar = () => {
  const [OpenMen, setOpenMen] = useState(false);
  const [OpenWomen, setOpenWomen] = useState(false);
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  return (
    <div>
      <div className="dropdown-header">
        <Link to="/">
          <div className="contenttt">
            <h2 className="YieShop">YieShop</h2>
          </div>
        </Link>
        <p
          className="Mens"
          onMouseEnter={() => {
            setOpenMen(true);
          }}
          onMouseLeave={() => {
            setOpenMen(false);
          }}
        >
          <div class="button_container">
            <button class="btn">
              <span>Men</span>
            </button>
          </div>
        </p>
        <p
          className="Mens"
          onMouseEnter={() => {
            setOpenWomen(true);
          }}
          onMouseLeave={() => {
            setOpenWomen(false);
          }}
        >
          <div class="button_container">
            <button class="btn">
              <span>Women</span>
            </button>
          </div>
        </p>
        <Link to="./Login">
          <div class="button_container">
            <button class="btn">
              <span>Sign in!</span>
            </button>
          </div>
        </Link>
        <Link to="./Login">
          <div class="button_container">
            <button class="btn">
              <span>Log in</span>
            </button>
          </div>
        </Link>
        <div className="NavBar-Search-flex">
          <Search />
        </div>
        <svg
          onClick={() => {
            setOpen(!open);
          }}
          class={open ? "ham hamRotate ham1 active" : "ham hamRotate ham1 "}
          viewBox="0 0 100 100"
          width="80"
        >
          <path
            class="line top"
            d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40"
          />
          <path class="line middle" d="m 30,50 h 40" />
          <path
            class="line bottom"
            d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40"
          />
        </svg>
      </div>
      {OpenMen && (
        <div
          onMouseEnter={() => {
            setOpenMen(true);
          }}
          onMouseLeave={() => {
            setOpenMen(false);
          }}
          className="OpenMen"
        >
          <div className="Clothing">
            <h3>Clothing</h3>
            <Link to="/$50">
              <p className="Clothing-p">3 for $50 T-Shirts</p>
            </Link>
            <Link to="/Jackets">
              <p className="Clothing-p">Jackets & Coats</p>
            </Link>
            <Link to="/Hoodies">
              <p className="Clothing-p">Hoodies & Sweatshirts</p>
            </Link>
            <Link to="/TShirts">
              <p className="Clothing-p">T-Shirts</p>
            </Link>
            <Link to="/Polo">
              <p className="Clothing-p">Polo Shirts</p>
            </Link>
            <Link to="/Shirts">
              <p className="Clothing-p">Shirts</p>
            </Link>
            <Link to="/Jeans">
              <p className="Clothing-p">Jeans</p>
            </Link>
            <Link to="/Joggers">
              <p className="Clothing-p">Joggers</p>
            </Link>
            <Link to="/Jumpers">
              <p className="Clothing-p">Jumpers</p>
            </Link>
            <Link to="/Loungewear">
              <p className="Clothing-p">Loungewear</p>
            </Link>
            <Link to="/Shorts">
              <p className="Clothing-p">Shorts</p>
            </Link>
            <Link to="/Ski">
              <p className="Clothing-p">Ski & Snowboard</p>
            </Link>
            <Link to="/SportswearMen">
              <p className="Clothing-p">Sportswear</p>
            </Link>
            <Link to="/SwimwearMen">
              <p className="Clothing-p">Swimwear</p>
            </Link>
            <Link to="/TopsMen">
              <p className="Clothing-p">Tops</p>
            </Link>
            <Link to="/TrousersMen">
              <p className="Clothing-p">Trousers & Chinos</p>
            </Link>
          </div>
          <div className="Clothing">
            <h3>Bags & Accessories</h3>
            <Link to="/ViewMen">
              <p className="Clothing-p">View All</p>
            </Link>
            <Link to="/BagsMen">
              <p className="Clothing-p">Bags & Backpacks</p>
            </Link>
            <Link to="/HatsMen">
              <p className="Clothing-p">Hats & Caps</p>
            </Link>
            <Link to="/GlovesMen">
              <p className="Clothing-p">Gloves</p>
            </Link>
            <Link to="/Scarves">
              <p className="Clothing-p">Scarves</p>
            </Link>
            <Link to="/Underwear">
              <p className="Clothing-p">Underwear</p>
            </Link>
            <Link to="/Socks">
              <p className="Clothing-p">Socks</p>
            </Link>
            <Link to="/ReusableMen">
              <p className="Clothing-p">Reusable Water Bottles</p>
            </Link>
          </div>
          <div className="Clothing">
            <h3>Footwear</h3>
            <Link to="/ViewFootwear">
              <p className="Clothing-p">View All</p>
            </Link>
            <Link to="/Trainers">
              <p className="Clothing-p">Trainers</p>
            </Link>
            <Link to="/Vegan">
              <p className="Clothing-p">Vegan Trainers</p>
            </Link>
            <Link to="/Sliders">
              <p className="Clothing-p">Sliders</p>
            </Link>
            <Link to="/FlipFlops">
              <p className="Clothing-p">Flip Flops</p>
            </Link>
          </div>
          <div className="Clothing">
            <h3>Trending</h3>
            <Link to="/BestSellers">
              <p className="Clothing-p">Best Sellers</p>
            </Link>
            <Link to="/MostWanted">
              <p className="Clothing-p">Most Wanted</p>
            </Link>
            <Link to="/School">
              <p className="Clothing-p">Back To School</p>
            </Link>
            <Link to="/Autumn">
              <p className="Clothing-p">Autumn Edit</p>
            </Link>
            <Link to="/Graphic">
              <p className="Clothing-p">Graphic T-Shirts</p>
            </Link>
            <Link to="/Organic">
              <p className="Clothing-p">Organic Essentials</p>
            </Link>
          </div>
        </div>
      )}
      {OpenWomen && (
        <div
          onMouseEnter={() => {
            setOpenWomen(true);
          }}
          onMouseLeave={() => {
            setOpenWomen(false);
          }}
          className="OpenMen"
        >
          <div className="Clothing">
            <h3>Clothing</h3>
            <Link to="/NewWomen">
              <p className="Clothing-p">New In</p>
            </Link>
            <Link to="/JacketsWomen">
              <p className="Clothing-p">Jackets & Coats</p>
            </Link>
            <Link to="/HoddiesWomen">
              <p className="Clothing-p">Hoodies & Sweatshirts</p>
            </Link>
            <Link to="/DressesWomen">
              <p className="Clothing-p">Dresses</p>
            </Link>
            <Link to="/TopsWomen">
              <p className="Clothing-p">Tops & Shirts</p>
            </Link>
            <Link to="/TShirtsWomen">
              <p className="Clothing-p">T-Shirts</p>
            </Link>
            <Link to="/JeansWomen">
              <p className="Clothing-p">Jeans</p>
            </Link>
            <Link to="/JoggersWomen">
              <p className="Clothing-p">Joggers</p>
            </Link>
            <Link to="/TrousersWomen">
              <p className="Clothing-p">Trousers & Chinos</p>
            </Link>
            <Link to="/JumpersWomen">
              <p className="Clothing-p">Jumpers & Cardigans</p>
            </Link>
            <Link to="/LeggingsWomen">
              <p className="Clothing-p">Leggings</p>
            </Link>
            <Link to="/LoungewearWomen">
              <p className="Clothing-p">Loungewear</p>
            </Link>
            <Link to="/PlaysutsWomen">
              <p className="Clothing-p">Playsuits & Jumpsuits</p>
            </Link>
            <Link to="/ShortsWomen">
              <p className="Clothing-p">Shorts</p>
            </Link>
            <Link to="/SkirtsWomen">
              <p className="Clothing-p">Skirts</p>
            </Link>
            <Link to="/SwimwearWomen">
              <p className="Clothing-p">Swimwear</p>
            </Link>
          </div>
          <div className="Clothing">
            <h3>Bags & Accessories</h3>
            <Link to="/ViewWomen">
              <p className="Clothing-p">View All</p>
            </Link>
            <Link to="/BagsWomen">
              <p className="Clothing-p">Bags & Backpacks</p>
            </Link>
            <Link to="/HatsWomen">
              <p className="Clothing-p">Hats & Caps</p>
            </Link>
            <Link to="/GlovesWomen">
              <p className="Clothing-p">Gloves</p>
            </Link>
            <Link to="/ScarvesWomen">
              <p className="Clothing-p">Scarves</p>
            </Link>
            <Link to="/UnderwearWomen">
              <p className="Clothing-p">Underwear</p>
            </Link>
            <Link to="/SocksWomen">
              <p className="Clothing-p">Socks</p>
            </Link>
            <Link to="/ReusableWomen">
              <p className="Clothing-p">Reusable Water Bottles</p>
            </Link>
          </div>
          <div className="Clothing">
            <h3>Footwear</h3>
            <Link to="ViewFootwearWomen">
              <p className="Clothing-p">View All</p>
            </Link>
            <Link to="/TrainersWomen">
              <p className="Clothing-p">Trainers</p>
            </Link>
            <Link to="/VeganWomen">
              <p className="Clothing-p">Vegan Trainers</p>
            </Link>
            <Link to="/SlidersWomen">
              <p className="Clothing-p">Sliders</p>
            </Link>
            <Link to="/FlipFlopsWomen">
              <p className="Clothing-p">Flip Flops</p>
            </Link>
          </div>
          <div className="Clothing">
            <h3>Trending</h3>
            <Link to="/BestsellersWomen">
              <p className="Clothing-p">Best Sellers</p>
            </Link>
            <Link to="/MostWantedWomen">
              <p className="Clothing-p">Most Wanted</p>
            </Link>
            <Link to="/SchoolWomen">
              <p className="Clothing-p">Back To School</p>
            </Link>
            <Link to="/AutumnWomen">
              <p className="Clothing-p">Autumn Edit</p>
            </Link>
            <Link to="/GraphicWomen">
              <p className="Clothing-p">Graphic T-Shirts</p>
            </Link>
            <Link to="/OraganicWomen">
              <p className="Clothing-p">Organic Essentials</p>
            </Link>
          </div>
        </div>
      )}

      <Dropdown open={open} />
    </div>
  );
};

export default Navbar;
