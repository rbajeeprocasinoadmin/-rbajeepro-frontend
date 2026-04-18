import MainLayout from "../layout/MainLayout";
import { useState } from "react";

export default function Wallet() {
  const [method, setMethod] = useState("bkash");

  return (
    <MainLayout>
      
      <div className="grid md:grid-cols-2 gap-4">

        {/* Balance */}
        <div className="bg-black/40 p-6 rounded-2xl">
          <h2 className="text-gray-300">Balance</h2>
          <h1 className="text-3xl text-green-400">৳ 10,000</h1>
        </div>

        {/* Actions */}
        <div className="bg-black/40 p-6 rounded-2xl">
          <h2 className="mb-3">Select Payment</h2>

          {/* Payment Methods */}
          <div className="flex gap-2 mb-4">
            
            <button
              onClick={() => setMethod("bkash")}
              className={`px-3 py-2 rounded ${
                method === "bkash" ? "bg-pink-500" : "bg-gray-700"
              }`}
            >
              bKash
            </button>

            <button
              onClick={() => setMethod("nagad")}
              className={`px-3 py-2 rounded ${
                method === "nagad" ? "bg-orange-500" : "bg-gray-700"
              }`}
            >
              Nagad
            </button>

            <button
              onClick={() => setMethod("rocket")}
              className={`px-3 py-2 rounded ${
                method === "rocket" ? "bg-purple-500" : "bg-gray-700"
              }`}
            >
              Rocket
            </button>

          </div>

          {/* Deposit Form */}
          <input
            type="number"
            placeholder="Enter amount"
            className="w-full p-2 bg-gray-800 rounded mb-2"
          />

          <input
            type="text"
            placeholder="Your number"
            className="w-full p-2 bg-gray-800 rounded mb-2"
          />

          <input
            type="text"
            placeholder="Transaction ID"
            className="w-full p-2 bg-gray-800 rounded mb-4"
          />

          <button className="w-full bg-green-500 py-2 rounded shadow-[0_0_10px_#22c55e]">
            Deposit via {method.toUpperCase()}
          </button>

          {/* Withdraw */}
          <button className="w-full mt-3 bg-red-500 py-2 rounded">
            Withdraw Request
          </button>

        </div>

      </div>

    </MainLayout>
  );
}
