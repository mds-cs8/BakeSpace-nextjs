"use client";
import { Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import { ProductCard } from "../ProductCard/ProductCard";
import Link from "next/link";
import axios from "axios";

const Main = () => {
  const [data, setData] = useState([]);

  // useEffect(() => {
  //   axios.get("//192.168.100.133:8000/api/cakes").then((res) => {
  //     setData(res.data.data);
  //     console.log(res);
  //   });
  // }, []);
  console.log(data);

  return (
    <Stack
      sx={{ width: "100%" }}
      spacing={0}
      justifyContent={"space-around"}
      alignItems={"center"}
      minHeight={"50vh"}
      p={2}
      mt={10}
    >
      <Stack sx={{ width: "100%" }} spacing={0} alignItems={"start"}>
        <h2 className="section-title text-2xl font-bold">Product</h2>
      </Stack>
      <Stack sx={{ width: "100%" }}>
        <div className="flex w-full justify-center items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5 px-5 md:px-0">
            {["1", "2", "3", "4", "5", "6"].map((item) => {
              return (
                <Link href={`/product/${item.id}`} key={item}>
                  <ProductCard  />
                </Link>
              );
            })}
          </div>
        </div>
      </Stack>
    </Stack>
  );
};

export default Main;
