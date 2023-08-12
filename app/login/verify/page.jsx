"use client";
import { React, useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function OtpPage() {
  const [otpNum, setOtpNum] = useState("");
  const { data: session, status } = useSession();
  let phone = session?.user.phone;
  console.log(phone);
  const router = useRouter();

  let users = {
    phone_number: phone,
    otp: otpNum,
  };
  const handleChange = (newValue) => {
    setOtpNum(newValue);
  };

  async function sendData(e) {
    console.log("before");
    console.log(users);

    e.preventDefault();
    const res = await fetch("//143.110.235.25/api/account/verify-otp", {
      method: "POST",
      body: JSON.stringify(users),
      headers: { "Content-Type": "application/json" },
    });
    console.log("after");

    const user = await res.json();
    if (res.ok && user) {
      console.log(user);
      router.replace("/dashboard");

      return user;
    }

    // Return null if user data could not be retrieved
    console.log(res.error);
    return null;
  }

  return (
    <div className="w-full min-h-screen flex justify-center items-center ">
      <form
        action={"/dashboard"}
        // onSubmit={sendData}
        className="rounded-lg p-[10px] w-[650px] h-[200px] bg-white shadow-md flex flex-col justify-around items-center"
      >
        <h1 className="text-3xl	">Enter verification code</h1>
        <TextField
          id="filled-basic"
          label="OTP"
          variant="filled"
          onChange={(e) => {
            handleChange(e.target.value);
          }}
        />
        <button className="rounded-full bg-[#ef6466] w-[100px] p-[5px] text-white">
          Send
        </button>
      </form>
    </div>
  );
}
