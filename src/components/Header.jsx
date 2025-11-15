import React, { useEffect } from "react";
import { Link } from "react-router-dom"; 
import AOS from "aos";
import "aos/dist/aos.css";

// Local images
import Flag from "../assets/img/flag.svg";
import Logo from "../assets/img/logo.svg";
import Katalog from "../assets/img/katalog.png";
import Bts from "../assets/img/bts.png.svg";
import Savdo from "../assets/img/savdo.svg";
import School2 from "../assets/img/school-2.png.svg";

const Header = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white shadow-sm border-b px-8 md:px-16 ">
      <div className="container">

        <div
          className="conatiner2 flex flex-wrap items-center justify-between px-4 md:px-10 py-2 text-sm bg-gray-100"
          data-aos="fade-down"
        >
          <div className="flex items-center space-x-2">
            <img
              src="https://cdn-icons-png.flaticon.com/512/684/684908.png"
              alt="Location"
              className="w-4 h-4"
            />

            <span>
              Shahar:{" "}
              <Link to="/toshkent" className="hover:underline cursor-pointer">
                Toshkent
              </Link>
            </span>

            <span className="hidden sm:inline text-gray-400">|</span>

            <Link
              to="/topshirish-punktlari"
              className="hidden sm:inline hover:text-blue-600 transition cursor-pointer"
            >
              Topshirish punktlari
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link
              to="/uzumda-soting"
              className="text-purple-600 hover:underline cursor-pointer"
            >
              Uzumda soting
            </Link>

            <Link
              to="/faq"
              className="hover:text-blue-600 transition cursor-pointer"
            >
              Savol-javoblar
            </Link>

            <Link
              to="/buyurtmalarim"
              className="hover:text-blue-600 transition cursor-pointer"
            >
              Buyurtmalarim
            </Link>

            <div className="flex items-center space-x-1 cursor-pointer">
              <img src={Flag} className="w-5 h-5 rounded-sm" alt="Flag" />
              <select className="bg-transparent text-sm focus:outline-none cursor-pointer appearance-none">
                <option>O'zbekcha</option>
                <option>Русский</option>
              </select>
            </div>
          </div>
        </div>

        {/* Middle section */}
        <div
          className="flex flex-wrap items-center justify-between px-4 md:px-10 py-3 bg-white"
          data-aos="fade-up"
        >
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src={Logo} alt="Logo" />
          </Link>

          {/* Search */}
          <div className="flex items-center w-full md:w-1/2 mt-3 md:mt-0 space-x-2">
            <img src={Katalog} className="rounded w-[120px] h-10" alt="" />

            <div className="flex items-center border border-gray-300 rounded-md overflow-hidden flex-1 focus-within:ring-2 focus-within:ring-purple-300">
              <input
                type="text"
                placeholder="Mahsulotlar va turkumlar izlash"
                className="w-full px-3 py-2 outline-none text-gray-700"
              />
              <button className="px-3 py-2 hover:bg-gray-100 transition">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/622/622669.png"
                  className="w-4 h-4"
                  alt=""
                />
              </button>
            </div>
          </div>

          {/* User Icons */}
          <div className="flex items-center space-x-4 mt-3 md:mt-0">
            <Link
              to="/login"
              className="flex items-center cursor-pointer hover:scale-105 transition"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/747/747376.png"
                className="w-5 h-5"
                alt="Login"
              />
              <span className="ml-1 hidden sm:inline">Kirish</span>
            </Link>

            <Link
              to="/FavoritesPage"
              className="flex items-center cursor-pointer hover:scale-105 transition"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/535/535285.png"
                className="w-5 h-5"
                alt="Like"
              />
              <span className="ml-1 hidden sm:inline">Saralangan</span>
            </Link>

            <Link
              to="/savat"
              className="flex items-center cursor-pointer hover:scale-105 transition"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/833/833314.png"
                className="w-5 h-5"
                alt="Cart"
              />
              <span className="ml-1 hidden sm:inline">Savat</span>
            </Link>
          </div>
        </div>

        {/* Navigation */}
        <nav
          className="flex flex-wrap items-center justify-between px-4 md:px-10 pb-3 text-sm text-gray-700"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <Link className="flex items-center hover:text-purple-600 cursor-pointer transition" to="/maktab-bozori">
            <img src={Bts} alt="" /> Maktab bozori
          </Link>

          <Link className="flex items-center hover:text-purple-600 cursor-pointer transition" to="/yozgi-savdo">
            <img src={Savdo} alt="" /> Yozgi savdo
          </Link>

          <Link className="flex items-center hover:text-purple-600 cursor-pointer transition" to="/kanselyariya">
            <img src={School2} alt="" /> Kanselyariya
          </Link>

          <Link className="flex items-center hover:text-purple-600 cursor-pointer transition" to="/nasiya">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2810/2810401.png"
              className="w-5 h-5 mr-1"
              alt=""
            />
            Nasiya
          </Link>

          <Link to="/elektronika" className="hover:text-purple-600 cursor-pointer transition">Elektronika</Link>
          <Link to="/maishiy-texnika" className="hover:text-purple-600 cursor-pointer transition">Maishiy texnika</Link>
          <Link to="/kiyim" className="hover:text-purple-600 cursor-pointer transition">Kiyim</Link>
          <Link to="/poyabzallar" className="hover:text-purple-600 cursor-pointer transition">Poyabzallar</Link>
          <Link to="/aksessuarlar" className="hover:text-purple-600 cursor-pointer transition">Aksessuarlar</Link>
          <Link to="/gozallik" className="hover:text-purple-600 cursor-pointer transition">Go'zallik va parvarish</Link>
          <Link to="/salomatlik" className="hover:text-purple-600 cursor-pointer transition">Salomatlik</Link>
          <Link to="/yana" className="hover:text-purple-600 cursor-pointer transition">Yana</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
