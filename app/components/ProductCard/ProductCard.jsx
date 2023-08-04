"use client";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import img from "../../../public/img/slide3.jpg";

import React from "react";
import Image from "next/image";
import Link from "next/link";
export const ProductCard = () => {
  return (
    <Card
      sx={{
        position: "relative",
        maxWidth: 300,
        mt: 8,
        ":hover .img": {
          scale: "1.1",
          transition: "all 0.5s ease",
        },
        ":hover .MuiChip-root": {
          background: "#4cc0ff",
          transition: "all 0.5s ease",
        },
      }}
    >
      <Image
        style={{ width: "100%", height: "100%" }}
        className="img "
        src={img}
        alt="Sunset in the mountains"
      />

      <Chip
        icon={<DeliveryDiningIcon color="white" />}
        label={"2 days"}
        sx={{
          borderRadius: "2px",
          background: "#ef6565",
          color: "#fff",
          position: "absolute",
          top: "0",
          left: "0",
        }}
      />
      <CardContent>
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Box>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ fontWeight: "bold" }}
            >
              name
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              Lorem ipsum
            </Typography>
          </Box>

          <Typography gutterBottom variant="h6" component="div">
            100$
          </Typography>
        </Stack>

        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos
          excepturi natus enim inventore, itaque nemo ipsa expedita fugiat quasi
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button
          variant="contained"
          endIcon={<AddShoppingCartIcon />}
          size="small"
          sx={{
            background: "transparent",
            color: "#4cc0ff",
            border: "2px solid #fff",
            boxShadow: "none",
            "&:hover": {
              border: "1px solid #4cc0ff",
              background: "#fff",
              boxShadow: "none",
            },
          }}
        >
          Add to cart
        </Button>
        <Rating
          name="half-rating-read"
          defaultValue={3}
          precision={0.5}
          readOnly
        />
      </CardActions>
    </Card>
  );
};
