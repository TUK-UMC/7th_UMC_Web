import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Navbar() {
  const { user, isAuthenticated, logout } = useContext(AuthContext);

  return (
    <nav className="navbar">
      <div className="navbar-brand">YONGCHA</div>
      <div className="navbar-links">
        {isAuthenticated ? (
          <>
            <span>{user.email.split("@")[0]}님 반갑습니다</span>
            <button onClick={logout}>로그아웃</button>
          </>
        ) : (
          <>
            <button>로그인</button>
            <button>회원가입</button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
