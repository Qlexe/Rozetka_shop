// import { useState } from 'react'
// import rozetkaLogo from "./assets/rozetka_logo.svg";
import rozetkaLogoFull from "./assets/rozetka_logo_full.svg";
import catalogIcon from "./assets/catalog.svg";
import menuIcon from "./assets/menu.svg";
import microphoneIcon from "./assets/microphone.svg";
import searchIcon from "./assets/search.svg";
import chevronDownIcon from "./assets/chevron_down.svg";
import userIcon from "./assets/user.svg";
import basketIcon from "./assets/basket.svg";

// import viteLogo from '/vite.svg'
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header flex flex-row h-16 items-center justify-between bg-stone-900 px-8 py-4">
        <div className="header_menu-button">
          <button className="">
            <img src={menuIcon} alt="menu" />
          </button>
        </div>
        <div className="header_logo">
          <img src={rozetkaLogoFull} className="App-logo" alt="logo" />
        </div>
        <div className="header_catalog-button">
          <button className="flex justify-center rounded-lg py-2 bg-stone-600 w-32">
            <img className="mr-2" src={catalogIcon} alt="catalog_button" />
            <span className="text-white">Каталог</span>
          </button>
        </div>
        <div className="header_search-form ">
          <form className="relative flex flex-row items-center justify-center">
            <div className="h-10 absolute left-2">
              <img className="" src={searchIcon} alt="search icon" />
            </div>
            <input
              className="rounded-l h-10 px-11 py-1 my-0"
              type="text"
              placeholder="Я шукаю..."
            />
            <button
              className="h-10 flex justify-center items-center w-10 border-l bg-white"
              type="button"
            >
              <img className="w-3" src={microphoneIcon} alt="voice input" />
            </button>
            <button
              className="h-10 rounded-r bg-green-600 text-white w-20"
              type="submit"
            >
              Знайти
            </button>
          </form>
        </div>

        <div className="header_choose-language">
          <button className="flex text-white">
            UA <img src={chevronDownIcon} alt="Choose language button" />
          </button>
        </div>
        <div className="header_user-cabinet">
          <button className="flex w-6">
            <img src={userIcon} alt="User Cabinet" />
          </button>
        </div>
        <div className="header_user-card">
          <button className="flex w-6">
            <img src={basketIcon} alt="User Card" />
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
