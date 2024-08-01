// import React from 'react';
// import { ReactComponent as Logo } from './logo.svg';

import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./App.css";



import rozetkaLogo from "./assets/rozetka_logo.svg";
// import rozetkaLogoFull from "./assets/rozetka_logo_full.svg";
import catalogIcon from "./assets/catalog.svg";
import menuIcon from "./assets/menu.svg";
import microphoneIcon from "./assets/microphone.svg";
import searchIcon from "./assets/search.svg";
import chevronDownIcon from "./assets/chevron_down.svg";
import userIcon from "./assets/user.svg";
import basketIcon from "./assets/basket.svg";

import laptop from "./assets/laptop.svg";
import phone from "./assets/phone.svg";
import gamepad from "./assets/gamepad.svg";
import washer from "./assets/washer.svg";
import armchair from "./assets/armchair.svg";
import tool from "./assets/tool.svg";
import bath from "./assets/bath.svg";
import garden from "./assets/garden.svg";
import sport from "./assets/sport.svg";
import clothes from "./assets/clothes.svg";
import parfume from "./assets/parfume.svg";
import toy from "./assets/toy.svg";
import animal from "./assets/animal.svg";
import paperClip from "./assets/paperClip.svg";
import glass from "./assets/glass.svg";
import spray from "./assets/spray.svg";

import info from "./assets/info.svg";
import telegramGreen from "./assets/telegram-green.svg";
import shops from "./assets/shops.svg";
import myLocation from "./assets/my-location.svg";
import parcelTracking from "./assets/parcel-tracking.svg";

import appStore from "./assets/app-store.svg";
import googlePlay from "./assets/google-play.svg";

import facebook from "./assets/facebook.svg";
import x from "./assets/x.svg";
import youtube from "./assets/youtube.svg";
import instagram from "./assets/instagram.svg";
import viber from "./assets/viber.svg";
import telegram from "./assets/telegram.svg";

import mastercard from "./assets/mastercard.svg";
import visa from "./assets/visa.svg";

import slide1 from "./assets/slides/slide-1.jpg";
import slide2 from "./assets/slides/slide-2.jpg";
import slide3 from "./assets/slides/slide-3.jpg";
import slide4 from "./assets/slides/slide-4.jpg";
import slide5 from "./assets/slides/slide-5.jpg";
import slide6 from "./assets/slides/slide-6.jpg";
import slide7 from "./assets/slides/slide-7.jpg";
import slide8 from "./assets/slides/slide-8.jpg";
import slide9 from "./assets/slides/slide-9.jpg";
import slide10 from "./assets/slides/slide-10.jpg";
import slide11 from "./assets/slides/slide-11.jpg";
import slide12 from "./assets/slides/slide-12.jpg";
import slide13 from "./assets/slides/slide-13.jpg";
import slide14 from "./assets/slides/slide-14.jpg";
import slide15 from "./assets/slides/slide-15.jpg";

// import viteLogo from '/vite.svg'

function App() {
  return (
    <div className="App">
      <div className="layout w-full bg-stone-900">
        <header className="App-header px-[32px] mx-auto flex flex-row h-min items-center justify-between py-4 max-w-[1600px]">
          <div className="header_menu-button w-10 mr-4 flex justify-center hover:bg-stone-600 hover:rounded h-10 cursor-pointer">
            <button className="">
              <img src={menuIcon} alt="menu" />
            </button>
          </div>

          <div className="header_logo mr-4">
            <a href="#">
              <img src={rozetkaLogo} className="App-logo" alt="logo" />
            </a>
          </div>
          <div className="header_catalog-button mr-4">
            <button className="flex justify-center rounded-lg py-2 bg-stone-600 w-32 hover:bg-stone-500">
              <img className="mr-2" src={catalogIcon} alt="catalog_button" />
              <span className="text-white">Каталог</span>
            </button>
          </div>

          <div className="header_search-form flex-auto mr-4">
            <form className="relative flex flex-row items-center justify-center">
              <div className="h-10 absolute left-2">
                <img className="" src={searchIcon} alt="search icon" />
              </div>
              <input
                className="rounded-l h-10 px-11 py-1 my-0 w-full"
                type="text"
                placeholder="Я шукаю..."
              />
              <button
                className="h-10 flex justify-center items-center w-16 border-l bg-white"
                type="button"
              >
                <img className="w-4" src={microphoneIcon} alt="voice input" />
              </button>
              <button
                className="h-10 rounded-r bg-green-600 text-white w-28"
                type="submit"
              >
                Знайти
              </button>
            </form>
          </div>

          <div className="header_choose-language mr-2 cursor-pointer">
            <button className="flex text-white">
              <span className="mr-2">UA</span>{" "}
              <img src={chevronDownIcon} alt="Choose language button" />
            </button>
          </div>

          <div className="header_user-cabinet flex w-10 hover:bg-stone-600 hover:rounded h-10 justify-center items-center mr-2 cursor-pointer">
            <button>
              <img className="h-6" src={userIcon} alt="User Cabinet" />
            </button>
          </div>

          <div className="header_user-card flex w-10 hover:bg-stone-600 hover:rounded h-10 justify-center items-center cursor-pointer">
            <button className="">
              <img className="h-6" src={basketIcon} alt="User Card" />
            </button>
          </div>
        </header>
      </div>
      <div className="layout px-[32px] flex mx-auto max-w-[1600px] overflow-hidden">
        <aside className="sidebar border-r border-stone-200 w-[404px]">
          <ul className="sidebar_menu pt-5 pb-3">
            <li className="">
              <a className="flex px-3 h-8" href="#">
                <img className="mr-2 h-6 fill-blue-500" src={laptop} alt="Laptops and PCs" />
                <span className="text-stone-700">Ноутбуки та комп'ютери</span>
              </a>
            </li>
            <li className="">
              <a className="flex px-3 h-8" href="#">
                <img className="mr-2 h-6" src={phone} alt="Laptops and PCs" />
                <span className="text-stone-700">
                  Смартфони, ТВ та електроніка
                </span>
              </a>
            </li>
            <li className="">
              <a className="flex px-3 h-8" href="#">
                <img className="mr-2 h-6" src={gamepad} alt="Laptops and PCs" />
                <span className="text-stone-700">Товари для геймерів</span>
              </a>
            </li>
            <li className="">
              <a className="flex px-3 h-8" href="#">
                <img className="mr-2 h-6" src={washer} alt="Laptops and PCs" />
                <span className="text-stone-700">Побутова техніка</span>
              </a>
            </li>
            <li className="">
              <a className="flex px-3 h-8" href="#">
                <img
                  className="mr-2 h-6"
                  src={armchair}
                  alt="Laptops and PCs"
                />
                <span className="text-stone-700">Товари для дому</span>
              </a>
            </li>
            <li className="">
              <a className="flex px-3 h-8" href="#">
                <img className="mr-2 h-6" src={tool} alt="Laptops and PCs" />
                <span className="text-stone-700">
                  Інструменти та автотовари
                </span>
              </a>
            </li>
            <li className="">
              <a className="flex px-3 h-8" href="#">
                <img className="mr-2 h-6" src={bath} alt="Laptops and PCs" />
                <span className="text-stone-700">Сантехніка та ремонт</span>
              </a>
            </li>
            <li className="">
              <a className="flex px-3 h-8" href="#">
                <img className="mr-2 h-6" src={garden} alt="Laptops and PCs" />
                <span className="text-stone-700">Дача, сад і город</span>
              </a>
            </li>
            <li className="">
              <a className="flex px-3 h-8" href="#">
                <img className="mr-2 h-6" src={sport} alt="Laptops and PCs" />
                <span className="text-stone-700">Спорт і захоплення</span>
              </a>
            </li>
            <li className="">
              <a className="flex px-3 h-8" href="#">
                <img className="mr-2 h-6" src={clothes} alt="Laptops and PCs" />
                <span className="text-stone-700">Одяг, взуття та прикраси</span>
              </a>
            </li>
            <li className="">
              <a className="flex px-3 h-8" href="#">
                <img className="mr-2 h-6" src={parfume} alt="Laptops and PCs" />
                <span className="text-stone-700">Краса та здоров'я</span>
              </a>
            </li>
            <li className="">
              <a className="flex px-3 h-8" href="#">
                <img className="mr-2 h-6" src={toy} alt="Laptops and PCs" />
                <span className="text-stone-700">Дитячі товари</span>
              </a>
            </li>
            <li className="">
              <a className="flex px-3 h-8" href="#">
                <img className="mr-2 h-6" src={animal} alt="Laptops and PCs" />
                <span className="text-stone-700">Зоотовари</span>
              </a>
            </li>
            <li className="">
              <a className="flex px-3 h-8" href="#">
                <img
                  className="mr-2 h-6"
                  src={paperClip}
                  alt="Laptops and PCs"
                />
                <span className="text-stone-700">Офіс, школа, книги</span>
              </a>
            </li>
            <li className="">
              <a className="flex px-3 h-8" href="#">
                <img className="mr-2 h-6" src={glass} alt="Laptops and PCs" />
                <span className="text-stone-700">
                  Алкогольні напої та продукти
                </span>
              </a>
            </li>
            <li className="">
              <a className="flex px-3 h-8" href="#">
                <img className="mr-2 h-6" src={spray} alt="Laptops and PCs" />
                <span className="text-stone-700">Побутова хімія</span>
              </a>
            </li>
          </ul>
          <div>
            <a className="flex px-3 border-t py-2" href="#">
              <img className="mr-2 h-6" src={info} alt="Довідковий центр" />
              <span className="text-stone-700">Довідковий центр</span>
            </a>
          </div>
          <div>
            <a className="flex px-3 border-t py-2" href="#">
              <img
                className="mr-2 h-6"
                src={telegramGreen}
                alt="Чат з ROZETKA"
              />
              <span className="text-green-600">Чат з ROZETKA</span>
            </a>
          </div>
          <div>
            <a className="flex px-3 border-t py-2" href="#">
              <img className="mr-2 h-6" src={shops} alt="Магазини ROZETKA" />
              <span className="text-stone-700">Магазини ROZETKA</span>
            </a>
          </div>
          <div>
            <a className="flex px-3 border-t py-2" href="#">
              <img
                className="mr-2 h-6"
                src={myLocation}
                alt="Мітка місцезнаходження"
              />
              <span className="text-stone-700">[Моє місцезнаходження]</span>
            </a>
          </div>
          <div>
            <a className="flex px-3 border-t py-2" href="#">
              <img
                className="mr-2 h-6"
                src={parcelTracking}
                alt="Чат з ROZETKA"
              />
              <span className="text-stone-700">Відстежити посилку</span>
            </a>
          </div>
          <div>
            <div className="m-4 bg-gray-100 rounded-lg p-4 text-stone-703">
              <p>
                Увійдіть, щоб отримувати рекомендації, персональні бонуси і
                знижки.
              </p>
              <button
                className="mt-4 p-2 bg-[#3e77aa] text-white rounded-lg"
                type="button"
              >
                Увійти в особистий кабінет
              </button>
            </div>
          </div>
          <div className="border-t px-6 py-4">
            <h1 className="font-bold text-gray-500">
              Встановлюйте наші застосунки
            </h1>
            <div className="flex justify-start mt-4">
              <a className="mr-4" href="#">
                <img className="h-[32px]" src={appStore} alt="App store shop" />
              </a>
              <a href="#">
                <img
                  className="h-[32px]"
                  src={googlePlay}
                  alt="Google store shop"
                />
              </a>
            </div>
          </div>
          <div className="border-t px-6 py-4">
            <h1 className="font-bold text-gray-500">Ми в соціальних мережах</h1>
            <div className="flex justify-start mt-4">
              <a className="mr-4" href="#">
                <img className="h-6" src={facebook} alt="Facebook" />
              </a>
              <a className="mr-4" href="#">
                <img className="h-6" src={x} alt="X (Twitter)" />
              </a>
              <a className="mr-4" href="#">
                <img className="h-6" src={youtube} alt="YouTube" />
              </a>
              <a className="mr-4" href="#">
                <img className="h-6" src={instagram} alt="Instagram" />
              </a>
              <a className="mr-4" href="#">
                <img className="h-6" src={viber} alt="Viber" />
              </a>
              <a className="mr-4" href="#">
                <img className="h-6" src={telegram} alt="Telegram" />
              </a>
            </div>
          </div>
          <div className="px-6 py-4">
            <div className="border-t py-4">
              <h1 className="font-bold text-gray-500 px-2">
                Інформація про компанію
              </h1>
              <ul className="mt-4 text-sm text-stone-700">
                <li className="h-[32px] px-2 py-[2px] hover:underline">
                  <a href="#" className="hover:text-green-600">
                    Про нас
                  </a>
                </li>
                <li className="h-[32px] px-2 py-[2px] hover:underline">
                  <a href="#" className="hover:text-green-600">
                    Умови використання сайту
                  </a>
                </li>
                <li className="h-[32px] px-2 py-[2px] hover:underline">
                  <a href="#" className="hover:text-green-600">
                    Контакти
                  </a>
                </li>
                <li className="h-[32px] px-2 py-[2px] hover:underline">
                  <a href="#" className="hover:text-green-600">
                    Усі категорії
                  </a>
                </li>
                <li className="h-[32px] px-2 py-[2px] hover:underline">
                  <a href="#" className="hover:text-green-600">
                    Карта сайту
                  </a>
                </li>
              </ul>
            </div>
            <div className="border-t py-4">
              <h1 className="font-bold text-gray-500 px-2">Допомога</h1>
              <ul className="mt-4 text-sm text-stone-700">
                <li className="h-[32px] px-2 py-[2px] hover:underline">
                  <a href="#" className="hover:text-green-600">
                    Доставка та оплата
                  </a>
                </li>
                <li className="h-[32px] px-2 py-[2px] hover:underline">
                  <a href="#" className="hover:text-green-600">
                    Кредит
                  </a>
                </li>
                <li className="h-[32px] px-2 py-[2px] hover:underline">
                  <a href="#" className="hover:text-green-600">
                    Гарантія
                  </a>
                </li>
                <li className="h-[32px] px-2 py-[2px] hover:underline">
                  <a href="#" className="hover:text-green-600">
                    Повернення товару
                  </a>
                </li>
                <li className="h-[32px] px-2 py-[2px] hover:underline">
                  <a href="#" className="hover:text-green-600">
                    Сервісні центри
                  </a>
                </li>
              </ul>
            </div>
            <div className="border-t border-b mb-1 py-4">
              <h1 className="font-bold text-gray-500 px-2">Сервіси</h1>
              <ul className="mt-4 text-sm text-stone-700">
                <li className="h-[32px] px-2 py-[2px] hover:underline">
                  <a href="#" className="hover:text-green-600">
                    Бонусний рахунок
                  </a>
                </li>
                <li className="h-[32px] px-2 py-[2px] hover:underline">
                  <a href="#" className="hover:text-green-600">
                    Rozetka Premium
                  </a>
                </li>
                <li className="h-[32px] px-2 py-[2px] hover:underline">
                  <a href="#" className="hover:text-green-600">
                    Подарункові сертифікати
                  </a>
                </li>
                <li className="h-[32px] px-2 py-[2px] hover:underline">
                  <a href="#" className="hover:text-green-600">
                    Rozetka обмін
                  </a>
                </li>
                <li className="h-[32px] px-2 py-[2px] hover:underline">
                  <a href="#" className="hover:text-green-600">
                    Тури та відпочинок
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="px-6 py-5 border-t">
            <div className="flex justify-evenly mb-4">
              <a href="">
                <img src={mastercard} alt="MastCard" />
              </a>
              <a href="">
                <img src={visa} alt="Visa" />
              </a>
            </div>
            <p className="text-gray-500">
              ТМ використовується на підставі ліцензії правовласника RozetkaLTD
            </p>
            <p className="text-gray-900">
              {/* <Logo fill="red" /> */}
              © 2001–2024 Інтернет-магазин «Розетка™» — Щоразу що треба
            </p>
          </div>
        </aside>
        <main className="pt-10 pl-10 w-full overflow-x-hidden">
          <Swiper
            pagination={true}
            navigation={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: true,
            }}
            modules={[Navigation, Pagination, Autoplay]}
            // className="mySwiper"
            className="mySwiper h-auto"
          >
            <SwiperSlide className="">
              <a href="#">
                <img src={slide1} alt="Slide 1" />
              </a>
            </SwiperSlide>
            <SwiperSlide className="">
              <a href="#">
                <img src={slide2} alt="Slide 2" />
              </a>
            </SwiperSlide>
            <SwiperSlide className="">
              <a href="#">
                <img src={slide3} alt="Slide 3" />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#">
                <img src={slide4} alt="Slide 4" />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#">
                <img src={slide5} alt="Slide 5" />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#">
                <img src={slide6} alt="Slide 6" />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#">
                <img src={slide7} alt="Slide 7" />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#">
                <img src={slide8} alt="Slide 8" />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#">
                <img src={slide9} alt="Slide 9" />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#">
                <img src={slide10} alt="Slide 10" />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#">
                <img src={slide11} alt="Slide 11" />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#">
                <img src={slide12} alt="Slide 12" />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#">
                <img src={slide13} alt="Slide 13" />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#">
                <img src={slide14} alt="Slide 14" />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#">
                <img src={slide15} alt="Slide 15" />
              </a>
            </SwiperSlide>
          </Swiper>
        </main>
      </div>
    </div>
  );
}

export default App;
