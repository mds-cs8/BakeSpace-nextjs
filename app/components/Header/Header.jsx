"use client";
// IMPORT UI LIBRARY AND IMG AND ICONS
import { Wrapper } from "../Wrapper";
import { React, useState, useEffect } from "react";
import Logo from "../../../public/img/logo2.png";
import Link from "next/link";
import { BiUserCircle } from "react-icons/bi";
import { BsCart } from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";
import Image from "next/image";

// IMPORT COMPONENTS
import Menu from "./Menu";
import MenuMobile from "./MenuMobile";

const Header = () => {
  // const { data: session } = useSession();
  // console.log("session", session);
  // const se = session ? (
  //   <Link href={"/user"}>
  //     <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative">
  //       <p
  //         onClick={() => {
  //           signOut();
  //         }}
  //       >
  //         logout
  //       </p>
  //     </div>
  //   </Link>
  // ) : (
  //   <p>login</p>
  // );
  // USE STATE
  const [mobileMenu, setMobileMenu] = useState(false);
  const [show, setShow] = useState("translate-y-0");
  const [lastScrollY, setLastScrollY] = useState(0);
  //----------------------------------------------------
  //   const { cartItems } = useSelector((state) => state.cart);

  // FUNCTION FOR SCROLL ANIMATION
  const controlNavbar = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY && !mobileMenu) {
        setShow("-translate-y-[90px]");
      } else {
        setShow("shadow-sm");
      }
    } else {
      setShow("translate-y-0");
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  //----------------------------------------------------

  //   useEffect(() => {
  //     fetchCategories();
  //   }, []);

  //   const fetchCategories = async () => {
  //     const { data } = await fetchDataFromApi("/api/categories?populate=*");
  //     setCategories(data);
  //   };

  return (
    <header
      className={`p-5 w-full h-[60px] md:h-[90px] bg-white flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 shadow-sm ${show}`}
    >
      <Wrapper className="h-[60px] flex justify-between items-center ">
        <Link href="/">
          <Image src={Logo} className="w-[60px] md:w-[80px]" alt="logo" />
        </Link>

        {/* DISPLAY MENU HERE (MOBILE SIZE OR LARGE SCREEN) */}
        <Menu />

        {mobileMenu && <MenuMobile setMobileMenu={setMobileMenu} />}

        {/* DISPLAY MENU HERE (MOBILE SIZE OR LARGE SCREEN) */}

        <div className="flex items-center gap-2 text-black">
          {/* Icon start (LOGIN ICON) */}
          {se}
          {/* Icon end */}

          {/* Icon start (CART ICON) */}
          <Link href="/cart">
            <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative">
              <BsCart className="text-[15px] md:text-[20px]" />

              {/* NUMBER OF ITEM IN CART */}
              <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">
                {/* {cartItems.length} */}1
              </div>
            </div>
          </Link>
          {/* Icon end */}

          {/* Mobile icon start */}
          <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex md:hidden justify-center items-center hover:bg-black/[0.05] cursor-pointer relative -mr-2">
            {mobileMenu ? (
              <VscChromeClose
                className="text-[16px]"
                onClick={() => setMobileMenu(false)}
              />
            ) : (
              <BiMenuAltRight
                className="text-[20px]"
                onClick={() => setMobileMenu(true)}
              />
            )}
          </div>
          {/* Mobile icon end */}
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
