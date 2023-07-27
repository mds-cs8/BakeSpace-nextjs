// MENU IN NAVBAR FOR LARGE SCREEN

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// list in nav 
const data = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "Products", url: "/products" },
  { id: 3, name: "Bakeries", url: "/bakeries" },
  { id: 4, name: "Open Your Bakery", url: "/contact" },
];

const Menu = () => {
  {
    /* Get the current route */
  }
  const currentRoute = usePathname();

  return (
    <ul className="hidden md:flex items-center gap-8 font-medium text-black">
      {data.map((item) => {
        return (
          <React.Fragment key={item.id}>
            <li
              style={{
                transition: "all 0.5s ease",
              }}
              className="cursor-pointer hover:text-[#ef6466] text-black"
            >
              <Link
                style={{ padding: "10px" }}
                className={
                  currentRoute === item.url ? "activeLink" : "non-activeLink"
                }
                href={item?.url}
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

export default Menu;
