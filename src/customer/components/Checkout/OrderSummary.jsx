import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import { Button, Divider } from "@mui/material";
import CartItem from "../Cart/CartItem";

const OrderSummary = () => {
  return (
    <div>
      <div className="p-5 shadow-lg rounded-md border">
        <AddressCard />
      </div>

      <div>
        <div className="lg:grid grid-cols-3 relative">
          <div className="col-span-2">
            {[1, 1, 1, 1, 1].map((item, index) => (
              <CartItem key={index} />
            ))}
          </div>

          <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
            <div className="border">
              <p className="uppercase font-bold opacity-60 pb-4">
                Price Details
              </p>
              <Divider />

              <div className="space-y-3 font-semibold mb-5">
                <div className="flex justify-between pt-3 text-black">
                  <span className="">Price</span>
                  <span className="">4697</span>
                </div>
                <div className="flex justify-between pt-3">
                  <span className="">Discount</span>
                  <span className=" text-green-600">4697</span>
                </div>
                <div className="flex justify-between pt-3 ">
                  <span className="">Delivery Charge</span>
                  <span className=" text-green-600">Free</span>
                </div>
                <div className="flex justify-between pt-3  ">
                  <span className="">Total Amount</span>
                  <span className=" text-green-600">4697</span>
                </div>
              </div>
              <Button
                variant="contained"
                className="w-full "
                sx={{
                  px: "2.5rem",
                  py: "0.7rem",
                  bgcolor: "#9155fd",
                  mt: "1rem",
                  ":hover": { bgcolor: "#9155e1" },
                }}
              >
                Checkout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
