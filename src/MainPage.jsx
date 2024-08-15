/* eslint-disable react/no-unescaped-entities */
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./slider.css"

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

import product1 from "./assets/goods-pics/396528095.webp";
import product3 from "./assets/goods-pics/412244496.webp";
import product2 from "./assets/goods-pics/416152711.webp";
import product4 from "./assets/goods-pics/438832176.webp";

import heart from "./assets/heart.svg";

function MainPage() {
  return (
    <div className="layout mx-auto px-[32px]">
      <section className="flex max-w-[1600px] overflow-hidden pt-16">
        <aside className="sidebar w-[404px] border-r border-stone-200">
          <ul className="sidebar_menu pb-3 pt-8">
            <li className="">
              <a className="flex h-8 px-3" href="#">
                <img
                  className="mr-2 h-6 fill-blue-500"
                  src={laptop}
                  alt="Laptops and PCs"
                />
                <span className="text-stone-700 hover:text-green-500">
                  Ноутбуки та комп'ютери
                </span>
              </a>
            </li>
            <li className="">
              <a className="flex h-8 px-3" href="#">
                <img className="mr-2 h-6" src={phone} alt="Laptops and PCs" />
                <span className="text-stone-700 hover:text-green-500">
                  Смартфони, ТВ та електроніка
                </span>
              </a>
            </li>
            <li className="">
              <a className="flex h-8 px-3" href="#">
                <img className="mr-2 h-6" src={gamepad} alt="Laptops and PCs" />
                <span className="text-stone-700 hover:text-green-500">
                  Товари для геймерів
                </span>
              </a>
            </li>
            <li className="">
              <a className="flex h-8 px-3" href="#">
                <img className="mr-2 h-6" src={washer} alt="Laptops and PCs" />
                <span className="text-stone-700 hover:text-green-500">
                  Побутова техніка
                </span>
              </a>
            </li>
            <li className="">
              <a className="flex h-8 px-3" href="#">
                <img
                  className="mr-2 h-6"
                  src={armchair}
                  alt="Laptops and PCs"
                />
                <span className="text-stone-700 hover:text-green-500">
                  Товари для дому
                </span>
              </a>
            </li>
            <li className="">
              <a className="flex h-8 px-3" href="#">
                <img className="mr-2 h-6" src={tool} alt="Laptops and PCs" />
                <span className="text-stone-700 hover:text-green-500">
                  Інструменти та автотовари
                </span>
              </a>
            </li>
            <li className="">
              <a className="flex h-8 px-3" href="#">
                <img className="mr-2 h-6" src={bath} alt="Laptops and PCs" />
                <span className="text-stone-700 hover:text-green-500">
                  Сантехніка та ремонт
                </span>
              </a>
            </li>
            <li className="">
              <a className="flex h-8 px-3" href="#">
                <img className="mr-2 h-6" src={garden} alt="Laptops and PCs" />
                <span className="text-stone-700 hover:text-green-500">
                  Дача, сад і город
                </span>
              </a>
            </li>
            <li className="">
              <a className="flex h-8 px-3" href="#">
                <img className="mr-2 h-6" src={sport} alt="Laptops and PCs" />
                <span className="text-stone-700 hover:text-green-500">
                  Спорт і захоплення
                </span>
              </a>
            </li>
            <li className="">
              <a className="flex h-8 px-3" href="#">
                <img className="mr-2 h-6" src={clothes} alt="Laptops and PCs" />
                <span className="text-stone-700 hover:text-green-500">
                  Одяг, взуття та прикраси
                </span>
              </a>
            </li>
            <li className="">
              <a className="flex h-8 px-3" href="#">
                <img className="mr-2 h-6" src={parfume} alt="Laptops and PCs" />
                <span className="text-stone-700 hover:text-green-500">
                  Краса та здоров'я
                </span>
              </a>
            </li>
            <li className="">
              <a className="flex h-8 px-3" href="#">
                <img className="mr-2 h-6" src={toy} alt="Laptops and PCs" />
                <span className="text-stone-700 hover:text-green-500">
                  Дитячі товари
                </span>
              </a>
            </li>
            <li className="">
              <a className="flex h-8 px-3" href="#">
                <img className="mr-2 h-6" src={animal} alt="Laptops and PCs" />
                <span className="text-stone-700 hover:text-green-500">
                  Зоотовари
                </span>
              </a>
            </li>
            <li className="">
              <a className="flex h-8 px-3" href="#">
                <img
                  className="mr-2 h-6"
                  src={paperClip}
                  alt="Laptops and PCs"
                />
                <span className="text-stone-700 hover:text-green-500">
                  Офіс, школа, книги
                </span>
              </a>
            </li>
            <li className="">
              <a className="flex h-8 px-3" href="#">
                <img className="mr-2 h-6" src={glass} alt="Laptops and PCs" />
                <span className="text-stone-700 hover:text-green-500">
                  Алкогольні напої та продукти
                </span>
              </a>
            </li>
            <li className="">
              <a className="flex h-8 px-3" href="#">
                <img className="mr-2 h-6" src={spray} alt="Laptops and PCs" />
                <span className="text-stone-700 hover:text-green-500">
                  Побутова хімія
                </span>
              </a>
            </li>
          </ul>
          <div>
            <a className="flex border-t px-3 py-2" href="#">
              <img className="mr-2 h-6" src={info} alt="Довідковий центр" />
              <span className="text-stone-700 hover:text-green-500">
                Довідковий центр
              </span>
            </a>
          </div>
          <div>
            <a className="flex border-t px-3 py-2" href="#">
              <img
                className="mr-2 h-6"
                src={telegramGreen}
                alt="Чат з ROZETKA"
              />
              <span className="text-green-600 hover:underline">
                Чат з ROZETKA
              </span>
            </a>
          </div>
          <div>
            <a className="flex border-t px-3 py-2" href="#">
              <img className="mr-2 h-6" src={shops} alt="Магазини ROZETKA" />
              <span className="text-stone-700 hover:text-green-500">
                Магазини ROZETKA
              </span>
            </a>
          </div>
          <div>
            <a className="flex border-t px-3 py-2" href="#">
              <img
                className="mr-2 h-6"
                src={myLocation}
                alt="Мітка місцезнаходження"
              />
              <span className="text-stone-700 hover:text-green-500">
                [Моє місцезнаходження]
              </span>
            </a>
          </div>
          <div>
            <a className="flex border-t px-3 py-2" href="#">
              <img
                className="mr-2 h-6"
                src={parcelTracking}
                alt="Чат з ROZETKA"
              />
              <span className="text-stone-700 hover:text-green-500">
                Відстежити посилку
              </span>
            </a>
          </div>
          <div>
            <div className="text-stone-703 m-4 rounded-lg bg-gray-100 p-4">
              <p>
                Увійдіть, щоб отримувати рекомендації, персональні бонуси і
                знижки.
              </p>
              <button
                className="mt-4 rounded-lg bg-[#3e77aa] p-2 text-white"
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
            <div className="mt-4 flex justify-start">
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
            <div className="mt-4 flex justify-start">
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
              <h1 className="px-2 font-bold text-gray-500">
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
              <h1 className="px-2 font-bold text-gray-500">Допомога</h1>
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
            <div className="mb-1 border-b border-t py-4">
              <h1 className="px-2 font-bold text-gray-500">Сервіси</h1>
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

          <div className="border-t px-6 py-5">
            <div className="mb-4 flex justify-evenly">
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
              © 2001–2024 Інтернет-магазин «Розетка™» — Щоразу що треба
            </p>
          </div>
        </aside>
        <main className="w-full overflow-x-hidden pl-10 pt-12">
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
          <ul className="flex w-full justify-end">
            <li className="flex h-10 items-center border-b border-l border-r px-12">
              <a className="text-[#3e77aa] hover:text-red-500" href="#">
                Всі акції
                <span className="ml-2 text-gray-400">183</span>
              </a>
            </li>
          </ul>
          <section className="main-goods">
            <h2 className="mb-4 text-xl font-bold">Акційні пропозиції</h2>
            <ul className="grid grid-cols-4">
              <li className="relative flex h-[315px] flex-col justify-start border-b border-r p-4">
                <a
                  className="mb-4 flex h-[170px] w-full items-center self-center pt-4"
                  href="#"
                >
                  <img
                    className="mx-auto max-h-[140px] max-w-[140px]"
                    src={product1}
                    alt="Product 1"
                  />
                </a>
                <a
                  className="absolute right-4 top-4 h-8 w-8 p-1 hover:rounded hover:bg-slate-100"
                  href=""
                >
                  <img src={heart} alt="Like it" />
                </a>
                <a className="mb-2 hover:text-red-500 hover:underline" href="">
                  Віскі Jameson Irish Whiskey 1 л 40%
                </a>
                <span className="text-sm text-gray-400 line-through">
                  9 999
                  <span className="ml-1 no-underline">₴</span>
                </span>
                <span className="text-2xl text-red-500">8 999</span>
              </li>
              <li className="relative flex h-[315px] flex-col justify-start border-b border-r p-4">
                <a
                  className="mb-4 flex h-[170px] w-full items-center self-center pt-4"
                  href="#"
                >
                  <img
                    className="mx-auto max-h-[140px] max-w-[140px] self-center"
                    src={product2}
                    alt="Product 1"
                  />
                </a>
                <a
                  className="absolute right-4 top-4 h-8 w-8 p-1 hover:rounded hover:bg-slate-100"
                  href=""
                >
                  <img src={heart} alt="Like it" />
                </a>
                <a className="mb-2 hover:text-red-500 hover:underline" href="">
                  Віскі Jameson Irish Whiskey 1 л 40%
                </a>
                <span className="text-sm text-gray-400 line-through">
                  9 999
                  <span className="ml-1 no-underline">₴</span>
                </span>
                <span className="text-2xl text-red-500">8 999</span>
              </li>
              <li className="relative flex h-[315px] flex-col justify-start border-b border-r p-4">
                <a
                  className="mb-4 flex h-[170px] w-full items-center self-center pt-4"
                  href="#"
                >
                  <img
                    className="mx-auto max-h-[140px] max-w-[140px]"
                    src={product3}
                    alt="Product 1"
                  />
                </a>
                <a
                  className="absolute right-4 top-4 h-8 w-8 p-1 hover:rounded hover:bg-slate-100"
                  href=""
                >
                  <img src={heart} alt="Like it" />
                </a>
                <a className="mb-2 hover:text-red-500 hover:underline" href="">
                  Віскі Jameson Irish Whiskey 1 л 40%
                </a>
                <span className="text-sm text-gray-400 line-through">
                  9 999
                  <span className="ml-1 no-underline">₴</span>
                </span>
                <span className="text-2xl text-red-500">8 999</span>
              </li>
              <li className="relative flex h-[315px] flex-col justify-start border-b border-r p-4">
                <a
                  className="mb-4 flex h-[170px] w-full items-center self-center pt-4"
                  href="#"
                >
                  <img
                    className="mx-auto max-h-[140px] max-w-[140px]"
                    src={product4}
                    alt="Product 1"
                  />
                </a>
                <a
                  className="absolute right-4 top-4 h-8 w-8 p-1 hover:rounded hover:bg-slate-100"
                  href=""
                >
                  <img src={heart} alt="Like it" />
                </a>
                <a className="mb-2 hover:text-red-500 hover:underline" href="">
                  Віскі Jameson Irish Whiskey 1 л 40%
                </a>
                <span className="text-sm text-gray-400 line-through">
                  9 999
                  <span className="ml-1 no-underline">₴</span>
                </span>
                <span className="text-2xl text-red-500">8 999</span>
              </li>
            </ul>
            <ul className="flex w-full justify-end">
              <li className="flex h-10 w-[25%] items-center border-b border-l border-r px-12">
                <a className="text-[#3e77aa] hover:text-red-500" href="#">
                  Показати ще +
                </a>
              </li>
            </ul>
          </section>
        </main>
      </section>
    </div>
  );
}

export default MainPage;
