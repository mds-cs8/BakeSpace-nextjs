import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function DashboardNumber(props) {
  return (
    <div className="w-[90%] md:w-[calc(90%/2)] lg:w-[calc(90%/3)] bg-white rounded-lg shadow-lg h-[100px] mb-5 p-4 flex items-center">
      {props.icon}
      <Box>
        <Typography
          className="font-extralight text-gray-400"
          variant="h6"
          gutterBottom
        >
          {props.label}
        </Typography>

        <Typography variant="h5" display="block" gutterBottom>
          {props.value}
        </Typography>
      </Box>
    </div>
  );
}
