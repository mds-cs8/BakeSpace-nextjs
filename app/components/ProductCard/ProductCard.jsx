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
import img from "../../../public/img/slide1.jpg";

import React from "react";
import Image from "next/image";
import Link from "next/link";
export const ProductCard = () => {
  return (
    <Card
      sx={{
        position: "relative",
        maxWidth: 400,
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
      <CardMedia
        height="200"
        sx={{
          objectFit: "contain",
        }}
      >
        <Image
          style={{ objectFit: "contain" }}
          class="img w-full "
          src={img}
          alt="Sunset in the mountains"
        />
      </CardMedia>

      <Chip
        icon={<DeliveryDiningIcon color="white" />}
        label="2 days delivery "
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
              Cake
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              SACCHARO
            </Typography>
          </Box>

          <Typography gutterBottom variant="h6" component="div">
            100SAR
          </Typography>
        </Stack>

        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
          accusantium autem, quo perspiciatis, nam non dolorem
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
        <Link href={""}>
          <Button
            variant="contained"
            endIcon={<AddShoppingCartIcon />}
            size="small"
            sx={{
              background: "transparent",
              color: "#4cc0ff",
              border: "1px solid #fff",
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
        </Link>
        <Rating
          name="half-rating-read"
          defaultValue={4.5}
          precision={0.5}
          readOnly
        />
      </CardActions>
    </Card>
  );
};
