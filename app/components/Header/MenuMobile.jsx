// MENU FOR MOBILE SCREEN

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";


// LIST IN NAVBAR
const data = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "Products", url: "/products" },
  { id: 3, name: "Bakeries", url: "/bakeries" },
  { id: 4, name: "Open Your Bakery", url: "/contact" },
];

const MenuMobile = () => {
  const currentRoute = usePathname();

  return (
    <ul className="flex flex-col md:hidden font-bold absolute top-[60px] left-0 w-full bg-white text-black">
      {data.map((item) => {
        return (
          <React.Fragment key={item.id}>
            <li
              style={{
                transition: "all 0.5s ease",
              }}
              className="py-4 px-5 border-b  hover:text-[#ef6466] text-black"
            >
              <Link
                href={item?.url}
                onClick={() => setMobileMenu(false)}
                className={
                  currentRoute === item.url ? "activeLink" : "non-activeLink"
                }
              >
                {item.name}
              </Link>
            </li>
          </React.Fragment>
        );
      })}
    </ul>
  );
};

export default MenuMobile;
