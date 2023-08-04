import React from "react";
import ProductTable from "../components/dashboard/ProductTable";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function page() {
  return (
    <div className="  w-[90%] mx-auto min-h-screen ">
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3 }}
        className="flex flex-col justify-between md:flex-row w-full flex-wrap"
      >
        <div className="w-[90%] md:w-[calc(90%/3)] bg-white rounded-lg shadow-lg h-[100px] mb-5 p-2">
          Order
        </div>
        <div className="w-[90%] md:w-[calc(90%/3)] bg-white rounded-lg shadow-lg h-[100px] mb-5 p-2">
          costumer
        </div>
        <div className="w-[90%] md:w-[calc(90%/3)] bg-white rounded-lg shadow-lg h-[100px] mb-5">
          box
        </div>
      </Box>

      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3 }}
        className="flex flex-col justify-between md:flex-row w-full flex-wrap"
      >
        <div className="bg-white  rounded-lg w-[90%] md:w-[calc(90%/2)] mb-5">
          <h3 className="w-full bg-[#ef6466] font-bold p-2 text-white">
            Costumer
          </h3>
          <ProductTable />
        </div>
        <div className="bg-white  rounded-lg w-[90%] md:w-[calc(90%/2)] mb-5">
          <h3 className="w-full bg-[#ef6466] font-bold p-2 text-white">
            Products
          </h3>
          <ProductTable />
        </div>
      </Box>
    </div>
  );
}
