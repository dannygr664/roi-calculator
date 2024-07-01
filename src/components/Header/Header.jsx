import "./Header.css";

import logoImgUrl from "@assets/images/zschool-logo.png";

function Header() {
  return (
    <header className="App-header">
      <img id="logo" src={logoImgUrl} alt="Zschool logo"></img>
    </header>
  );
}

export default Header;
