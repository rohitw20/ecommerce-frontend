import { AddCircleOutline, RemoveCircleOutline } from "@mui/icons-material";
import { Button, IconButton } from "@mui/material";
import React from "react";

const CartItem = () => {
  return (
    <div className="p-5 shadow-lg border rounded-md">
      <div className="flex items-center">
        <div className="w-[7rem] h-[7rem] lg:w-[9rem] lg:h-[9rem">
          <img
            className="w-full h-full object-cover object-top"
            src="https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/j/a/r/l-poch521835-peter-england-original-imag7jg47g7cxhg3-bb.jpeg?q=70"
            alt="image"
          />
        </div>

        <div className="ml-5 space-y-1">
          <p className="font-semibold">title</p>
          <p className="opacity-70">Size: </p>
          <p className="opacity-70 mt-2">Seller: </p>

          <div className="flex space-x-5 items-center text-gray-900 mt-6">
            <p className="font-semibold">₹199</p>
            <p className="opacity-50 line-through">₹210</p>
            <p className="text-green-600 font-semibold">5% OFF</p>
          </div>
        </div>
      </div>
      <div className="lg:flex items-center lg:space-x-10 pt-4">
        <div className="flex items-center space-x-2">
          <IconButton>
            <RemoveCircleOutline />
          </IconButton>
          <span className="py-1 px-7 border rounded-sm">3</span>
          <IconButton sx={{ color: "RGB(145,85,253)" }}>
            <AddCircleOutline />
          </IconButton>

          <div className="">
            <Button sx={{ color: "RGB(145,85,253)" }}>Remove</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
