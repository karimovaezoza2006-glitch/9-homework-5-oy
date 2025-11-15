import React from "react";
import { Link } from "react-router-dom";

// Rasmlarni import qilamiz
import appStore from "../assets/img/SVG.svg";
import instagram from "../assets/img/instagram.svg";
import telegram from "../assets/img/telegram.svg";
import facebook from "../assets/img/facebook.svg";
import youtube from "../assets/img/youtobe.svg";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-16">
      <div className="container px-8 py-8 md:px-16 grid grid-cols-2 md:grid-cols-5 gap-6 text-sm text-gray-700">
        {/* Biz haqimizda */}
        <div>
          <h3 className="font-semibold mb-3">Biz haqimizda</h3>
          <ul className="space-y-1">
            <li>
              <Link to="/topshirish-punktlari" className="hover:underline">
                Topshirish punktlari
              </Link>
            </li>
            <li>
              <Link to="/vakansiyalar" className="hover:underline">
                Vakansiyalar
              </Link>
            </li>
          </ul>
        </div>

        {/* Foydalanuvchilarga */}
        <div>
          <h3 className="font-semibold mb-3">Foydalanuvchilarga</h3>
          <ul className="space-y-1">
            <li>
              <Link to="/biz-bilan-boglanish" className="hover:underline">
                Biz bilan bog'lanish
              </Link>
            </li>
            <li>
              <Link to="/savol-javob" className="hover:underline">
                Savol-javob
              </Link>
            </li>
          </ul>
        </div>

        {/* Tadbirkorlarga */}
        <div>
          <h3 className="font-semibold mb-3">Tadbirkorlarga</h3>
          <ul className="space-y-1">
            <li>
              <Link to="/sotuvchi-kabineti" className="hover:underline">
                Sotuvchi kabinetiga kirish
              </Link>
            </li>
          </ul>
        </div>

        {/* Ilovani yuklab olish */}
        <div>
          <h3 className="font-semibold mb-3 ">Ilovani yuklab olish</h3>
          <div className="flex space-x-3 items-center">
            <a href="#" aria-label="App Store" className="inline-block">
              <img src={appStore} alt="App Store" className="h-8" />
            </a>
            <span className="flex items-center">Google Play</span>
          </div>
        </div>

        {/* Ijtimoiy tarmoqlar */}
        <div>
          <h3 className="font-semibold mb-3">Uzum ijtimoiy tarmoqlarda</h3>
          <div className="flex space-x-3 mt-2">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <img src={instagram} alt="Instagram" />
            </a>
            <a
              href="https://telegram.org/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
            >
              <img src={telegram} alt="Telegram" />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <img src={facebook} alt="Facebook" />
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <img src={youtube} alt="YouTube" />
            </a>
          </div>
        </div>
      </div>

      {/* Pastki chiziq */}
      <div className="border-t border-gray-300 mt-6">
        <div className="container px-8 py-8 md:px-16 text-xs text-gray-500 flex flex-wrap gap-4 justify-between">
          <div className="space-x-4">
            <Link to="/maxfiylik-kelishuvi" className="hover:underline">
              Maxfiylik kelishuvi
            </Link>
            <Link to="/foydalanuvchi-kelishuvi" className="hover:underline">
              Foydalanuvchi kelishuvi
            </Link>
          </div>
          <div>
            ©2024 MCHJ «UZUM MARKET». STIR 309376127. Barcha huquqlar himoyalangan
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
