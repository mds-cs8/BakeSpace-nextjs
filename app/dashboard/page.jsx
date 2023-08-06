"use client";
import React from "react";
import ProductTable from "../components/dashboard/ProductTable";
import Box from "@mui/material/Box";
import DashboardNumber from "../components/dashboard/DashboardNumber";
import Typography from "@mui/material/Typography";
import PeopleIcon from "@mui/icons-material/People";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";

export default function Dashboard() {
  const numbers = [
    {
      label: "Orders",
      value: 2000,
      icons: (
        <Box className="mr-10 bg-[#0079FF] rounded-full w-[70px] h-[70px] flex justify-center items-center">
          <ShoppingCartRoundedIcon className="text-[#fff] text-[50px] " />
        </Box>
      ),
    },
    {
      label: "Products",
      value: 1999,
      icons: (
        <Box className="mr-10 bg-[#FF6000] rounded-full w-[70px] h-[70px] flex justify-center items-center">
          <ShoppingBasketIcon className="text-[#fff] text-[50px] " />
        </Box>
      ),
    },
    {
      label: "Costumers",
      value: 435,
      icons: (
        <Box className="mr-10 bg-[#95CD41] rounded-full w-[70px] h-[70px] flex justify-center items-center">
          <PeopleIcon className="text-[#fff] text-[50px] " />
        </Box>
      ),
    },
  ];
  return (
    <div className="w-[100%] md:w-[90%] mx-auto min-h-screen ">
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3 }}
        className="flex flex-col justify-center md:flex-row w-full flex-wrap md:justify-between items-center"
      >
        {numbers.map((item) => {
          return (
            <DashboardNumber
              key={item.label}
              label={item.label}
              value={item.value}
              icon={item.icons}
            />
          );
        })}
      </Box>

      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3 }}
        className="flex flex-col justify-center lg:flex-row w-full flex-wrap md:justify-between items-center"
      >
        <div className="bg-white  rounded-lg w-[100%] lg:w-[calc(90%/2)] mb-5 overflow-hidden">
          <h3 className="w-full bg-[#ef6466] font-bold p-2 text-white">
            Costumer
          </h3>
          <ProductTable />
        </div>
        <div className="bg-white  rounded-lg w-[100%] lg:w-[calc(90%/2)] mb-5 overflow-hidden">
          <h3 className="w-full bg-[#ef6466] font-bold p-2 text-white">
            Products
          </h3>
          <ProductTable />
        </div>
      </Box>
    </div>
  );
}
