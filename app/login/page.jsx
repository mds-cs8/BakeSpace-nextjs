"use client";
import { React, useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";

var regex = new RegExp(
  /^(009665|9665|\+9665|05|5)(5|0|3|6|4|9|1|8|7)([0-9]{7})$/
);

export default function Login() {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const { data: session, status } = useSession();

  console.log(session?.user.phone);
  const router = useRouter();

  const validnum = (x) => {
    if (!regex.test(x)) {
      setError("write saudi number");
      return false;
    } else {
      setError("");
      return true;
    }
  };

  const handleForm = async (e) => {
    e.preventDefault();
    if (!regex.test(phone)) {
      setError("please write saudi namber");
      return;
    }
    try {
      const res = await signIn("credentials", {
        phone,
        redirect: false,
      });
      if (res.error) {
        setError(res.status);
      }

      router.replace("/login/verify");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-md md:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-gray-600 underline">
          Sign in
        </h1>
        <form onSubmit={handleForm} className="mt-6">
          <div className="mb-2">
            <label
              for="password"
              className="block text-sm font-semibold text-gray-800"
            >
              Phone number
            </label>
            <input
              name="phone"
              required
              onChange={(e) => {
                validnum(e.target.value);
                setPhone(e.target.value);
              }}
              type="text"
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
            <span>{error}</span>
          </div>
          <div className="mt-6">
            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-[#ef6466] rounded-md hover:bg-[#0079FF] focus:outline-none">
              Login
            </button>
          </div>
        </form>

        <p className="mt-8 text-xs font-light text-center text-gray-700">
          Don not have an account?
          <a href="#" className="font-medium text-purple-600 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
