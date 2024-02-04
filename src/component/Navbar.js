import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
const Navbar = ({ authenticate, setAuthenticate }) => {
  const menuList = [
    "여성",
    "Divided",
    "남성",
    "신생아/유아",
    "아동",
    "Scramble Home",
    "Sale",
    "지속가능성",
  ];
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login");
  };

  const search = (event) => {
    if (event.key === "Enter") {
      //입력한 검색어를 읽어와서
      let keyword = event.target.value;
      //url을 바꿔준다
      navigate(`/?q=${keyword}`);
    }
  };
  return (
    <div>
      <div>
        {authenticate ? (
          <div
            className="login-button"
            onClick={() => {
              setAuthenticate(false);
            }}
          >
            <FontAwesomeIcon icon={faUser} />
            <div>로그아웃</div>
          </div>
        ) : (
          <div className="login-button" onClick={goToLogin}>
            <FontAwesomeIcon icon={faUser} />
            <div>로그인</div>
          </div>
        )}
      </div>
      <div className="nav-section">
        <Link to="/">
          <img
            width={200}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/2560px-H%26M-Logo.svg.png"
          ></img>
        </Link>
      </div>
      <div className="menu-area">
        <ul className="menu-list">
          {menuList.map((menu, index) => (
            <li key={index}>{menu}</li>
          ))}
        </ul>

        <div className="search-section">
          <FontAwesomeIcon icon={faSearch} />
          <input type="text" onKeyPress={(event) => search(event)} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
