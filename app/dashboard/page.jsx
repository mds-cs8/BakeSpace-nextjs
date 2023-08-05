import React from "react";
import ProductTable from "../components/dashboard/ProductTable";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import PeopleIcon from "@mui/icons-material/People";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
export default function page() {
  return (
    <div className="w-[100%] md:w-[90%] mx-auto min-h-screen ">
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3 }}
        className="flex flex-col justify-center lg:flex-row w-full flex-wrap lg:justify-between items-center"
      >
        <div className="w-[90%] lg:w-[calc(90%/3)] bg-white rounded-lg shadow-lg h-[100px] mb-5 p-4 flex items-center">
          <Box className="mr-10 bg-[#4179da] rounded-full w-[70px] h-[70px] flex justify-center items-center">
            <ShoppingCartRoundedIcon className="text-[#fff] text-[50px] " />
          </Box>
          <Box>
            <Typography
              className="font-extralight text-gray-400"
              variant="h6"
              gutterBottom
            >
              Orders
            </Typography>

            <Typography variant="h5" display="block" gutterBottom>
              2000
            </Typography>
          </Box>
        </div>
        <div className="w-[90%] lg:w-[calc(90%/3)] bg-white rounded-lg shadow-lg h-[100px] mb-5 p-4 flex items-center">
          <Box className="mr-10 bg-[#41da50] rounded-full w-[70px] h-[70px] flex justify-center items-center">
            <PeopleIcon className="text-[#fff] text-[50px]" />
          </Box>
          <Box>
            <Typography
              className="font-extralight text-gray-400"
              variant="h6"
              gutterBottom
            >
              Costumer
            </Typography>

            <Typography variant="h5" display="block" gutterBottom>
              2000
            </Typography>
          </Box>
        </div>

        <div className="w-[90%] lg:w-[calc(90%/3)] bg-white rounded-lg shadow-lg h-[100px] mb-5 p-4 flex items-center">
          <Box className="mr-10 bg-[#e66248] rounded-full w-[70px] h-[70px] flex justify-center items-center">
            <ShoppingBasketIcon className="text-[#fff] text-[50px]" />
          </Box>
          <Box>
            <Typography
              className="font-extralight text-gray-400"
              variant="h6"
              gutterBottom
            >
              Products
            </Typography>

            <Typography variant="h5" display="block" gutterBottom>
              2000
            </Typography>
          </Box>
        </div>
      </Box>

      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3 }}
        className="flex flex-col justify-center lg:flex-row w-full flex-wrap md:justify-between items-center"
      >
        <div className="bg-white  rounded-lg w-[90%] lg:w-[calc(90%/2)] mb-5 overflow-hidden">
          <h3 className="w-full bg-[#ef6466] font-bold p-2 text-white">
            Costumer
          </h3>
          <ProductTable />
        </div>
        <div className="bg-white  rounded-lg w-[90%] lg:w-[calc(90%/2)] mb-5 overflow-hidden">
          <h3 className="w-full bg-[#ef6466] font-bold p-2 text-white">
            Products
          </h3>
          <ProductTable />
        </div>
      </Box>
    </div>
  );
}
