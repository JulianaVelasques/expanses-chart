import Logo from "../../assets/logo.svg";

import "./Header.scss";

function Header() {
  return (
    <div className="header-container">
      <div className="content">
        <div>
          <p className="title">My balance</p>
          <p className="money">$921.48</p>
        </div>

        <img src={Logo} alt="" width="45px" height="40px" />
      </div>
    </div>
  );
}

export default Header;
