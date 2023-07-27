"use client";
import { Stack } from "@mui/material";
import React from "react";
import { ProductCard } from "../ProductCard/ProductCard";
import Link from "next/link";

const Main = () => {
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
            {["a", "a", "a", "a", "a", "a"].map((item) => {
              return (
                <Link href={"/"} key={item}>
                  <ProductCard />
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
