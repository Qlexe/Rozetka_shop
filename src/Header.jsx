import rozetkaLogo from "./assets/rozetka_logo.svg";
// import rozetkaLogoFull from "./assets/rozetka_logo_full.svg";
import catalogIcon from "./assets/catalog.svg";
import menuIcon from "./assets/menu.svg";
import microphoneIcon from "./assets/microphone.svg";
import searchIcon from "./assets/search.svg";
import chevronDownIcon from "./assets/chevron_down.svg";
import userIcon from "./assets/user.svg";
import basketIcon from "./assets/basket.svg";

function Header() {
  return (
    <div className="layout fixed z-50 w-full bg-stone-900">
      <header className="App-header mx-auto flex h-min max-w-[1600px] flex-row items-center justify-between px-[32px] py-4">
        <div className="header_menu-button mr-4 flex h-10 w-10 cursor-pointer justify-center hover:rounded hover:bg-stone-600">
          <button
            className=""
            onClick={function () {
              document.getElementById("side-menu").classList.toggle("open");
            }}
          >
            <img src={menuIcon} alt="menu" />
          </button>
        </div>

        <div className="header_logo mr-4">
          <a href="#">
            <img src={rozetkaLogo} className="App-logo" alt="logo" />
          </a>
        </div>
        <div className="header_catalog-button mr-4">
          <button className="flex w-32 justify-center rounded-lg bg-stone-600 py-2 hover:bg-stone-500">
            <img className="mr-3" src={catalogIcon} alt="catalog_button" />
            <span className="text-base text-white">Каталог</span>
          </button>
        </div>

        <div className="header_search-form mr-4 flex-auto">
          <form className="relative flex flex-row items-center justify-center">
            <div className="absolute left-3 h-10">
              <img className="" src={searchIcon} alt="search icon" />
            </div>
            <input
              className="my-0 h-10 w-full rounded-l px-11 py-1"
              type="text"
              placeholder="Я шукаю..."
            />
            <button
              className="flex h-10 w-16 items-center justify-center border-l bg-white"
              type="button"
            >
              <img className="w-4" src={microphoneIcon} alt="voice input" />
            </button>
            <button
              className="h-10 w-28 rounded-r bg-green-600 text-white"
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

        <div className="header_user-cabinet mr-2 flex h-10 w-10 cursor-pointer items-center justify-center hover:rounded hover:bg-stone-600">
          <button>
            <img className="h-6" src={userIcon} alt="User Cabinet" />
          </button>
        </div>

        <div className="header_user-card flex h-10 w-10 cursor-pointer items-center justify-center hover:rounded hover:bg-stone-600">
          <button className="">
            <img className="h-6" src={basketIcon} alt="User Card" />
          </button>
        </div>
      </header>
    </div>
  );
}

function MenuBar() {
  return (
    <div className="layout fixed z-50 w-full bg-stone-900">
      <header className="App-header mx-auto flex h-min max-w-[1600px] flex-row items-center justify-between px-[32px] py-4">
        <div className="header_menu-button mr-4 flex h-10 w-10 cursor-pointer justify-center hover:rounded hover:bg-stone-600">
          <button className="">
            <img src={menuIcon} alt="menu" />
          </button>
        </div>
      </header>
    </div>
  );
}

export default Header;
