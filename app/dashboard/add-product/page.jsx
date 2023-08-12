"use client";
import { Button } from "@mui/material";
import { React, useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import Extra from "../../components/Extras/Extra";
import axios from "axios";

export default function AddProduct() {
  const [staticData, SetStaticData] = useState({
    name: "",
    description: "",
    price: 1,
    deivery_time: 1,
    image: "",
    extras: [],
  });
  console.log(staticData);
  const [extrasData, setExtrasData] = useState([]);
  const add = () => {
    setExtrasData([
      ...extrasData,
      {
        name: "",
        price: 1,
        type: "",
      },
    ]);
    return extrasData;
  };

  //   async function insert(e) {
  //     e.preventDefault();

  //     const res = await axios.post(
  //       "http://143.110.235.25/api/bakery/products",
  //       {
  //         name: staticData.name,
  //       },

  //       {
  //         headers: {
  //           "Content-Type": "multipart/application/json",
  //           Authorization: "Bearer CXtxAG82zMB0JOIUYtKHjRBIIjSrTnFVsS8sPHvU",
  //         },
  //       }
  //     );
  //     const user = await res.json();

  //     // If no error and we have user data, return it
  //     if (res.ok && user) {
  //       console.log(user);
  //       return user;
  //     }
  //     // Return null if user data could not be retrieved
  //     console.log("error");
  //     return null;
  //   }
  return (
    <div className="w-[80%] md:w-[50%] h-auto flex flex-col justify-center items-center bg-white rounded-lg shadow-xl overflow-hidden">
      <h1 className="w-full p-4 bg-gray-800 text-white ">Add products</h1>
      <form
        method="POST"
        className="w-full flex flex-col justify-center items-center "
      >
        <div className="relative z-0 w-[80%] my-4 group mx-auto">
          <input
            type="text"
            name="product-name"
            id="product-name"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
            onChange={(e) => {
              let newName = staticData;
              SetStaticData({ ...newName, name: e.target.value });
            }}
          />
          <label
            for="product-name"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Product name
          </label>
        </div>
        <div className="relative z-0 w-[80%] my-4 group mx-auto">
          <input
            type="discription"
            name="discription"
            id="discription"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
            onChange={(e) => {
              let newName = staticData;
              SetStaticData({ ...newName, description: e.target.value });
            }}
          />
          <label
            for="discription"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            discription
          </label>
        </div>
        <div className="relative z-0 w-[80%] my-4 group mx-auto">
          <input
            type="number"
            name="price"
            id="price"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
            min={1}
            onChange={(e) => {
              let newName = staticData;
              SetStaticData({ ...newName, price: e.target.value });
            }}
          />
          <label
            for="price"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            price
          </label>
        </div>
        <div className="relative z-0 w-[80%] my-4 group mx-auto">
          <input
            type="number"
            name="deivery_time"
            id="deivery_time"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
            min={1}
            onChange={(e) => {
              let newName = staticData;
              SetStaticData({ ...newName, deivery_time: e.target.value });
            }}
          />
          <label
            for="deivery_time"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            deivery time
          </label>
        </div>
        <div className="relative z-0 w-[80%] my-4 group mx-auto">
          <input
            type="file"
            name="image"
            id="deivery_time"
            className="block py-2.5 px-0 text-sm text-gray-900 bg-transparent"
            placeholder=" "
            required
            min={1}
            onChange={(e) => {
              let newName = staticData;
              SetStaticData({ ...newName, image: e.target.files[0] });
            }}
          />
          <label
            for="deivery_time"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            image
          </label>
        </div>
        {extrasData.map((item) => {
          return <Extra key={item.name} name={item.name} />;
        })}
        <div className="w-[80%] h-[100px] my-4 mx-auto flex flex-col md:flex-row justify-evenly items-center">
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm w-full md:w-[150px] px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
          <Button
            onClick={add}
            className="bg-[#ef6565] hover:bg-[#e25e5e] text-white font-bold w-full md:w-[150px] px-5 text-center rounded-lg"
            endIcon={<SendIcon />}
          >
            Add more
          </Button>
        </div>
      </form>
    </div>
  );
}
