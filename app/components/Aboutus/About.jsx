"use client";
import { Button } from "@mui/material";
import Stack from "@mui/material/Stack";
import Image from "next/image";
import React from "react";
import img from "../../../public/img/aboutus.jpg";
import Wrapper from "../Wrapper";
export const AboutUs = () => {
  return (
    <Stack
      sx={{ width: "100%" }}
      spacing={{ xs: 10, md: 2 }}
      justifyContent={"space-between"}
      alignItems={"center"}
      direction={{ md: "row", xs: "column" }}
      minHeight={"50vh"}
      p={2}
    >
      <Stack
        sx={{ width: { xs: "100%", md: "45%" } }}
        spacing={4}
        alignItems={"start"}
      >
        <h2 className="section-title text-2xl font-bold">About us</h2>
        <p>
          We're a platform that connects home bakers with customers who want
          delicious cakes delivered to their doorstep. Our easy-to-use online
          shop creation tools and supply chain partnerships make it simple for
          bakers to expand their reach and access high-quality ingredients.
          We're passionate about supporting local businesses and creating
          meaningful connections in the baking community. Join us in our mission
          to digitize the industry!
        </p>
        <Button
          className="about-btn"
          variant="contained"
          size="medium"
          style={{
            background: "#ef6565",
            fontWeight: "bold",
            borderRadius: "20px",
            color: "#fff",
            border: "1px solid transparent",
            transition: "all 0.5s ease",
          }}
        >
          Read more
        </Button>
      </Stack>
      <Stack sx={{ width: { xs: "100%", md: "45%" } }}>
        <Image src={img} alt="about us image" />
      </Stack>
    </Stack>
  );
};
export default AboutUs;
