import React, { useEffect } from "react";
import CartItem from "./CartItem";
import { Button, Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../../State/Cart/Action";

const Cart = () => {
  const navigate = useNavigate();
  const { cart } = useSelector((store) => store);
  const dispatch = useDispatch();
  const handleCheckout = () => {
    navigate("/checkout?step=2");
  };

  useEffect(() => {
    dispatch(getCart());
  }, [cart.updateCartItems, cart.removeCartItems]);

  return (
    <div>
      <div className="lg:grid grid-cols-3 lg:px-16 relative">
        <div className="col-span-2">
          {cart.cart?.cartItems.map((item, index) => (
            <CartItem key={index} item={item} />
          ))}
        </div>

        <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
          <div className="border">
            <p className="uppercase font-bold opacity-60 pb-4">Price Details</p>
            <Divider />

            <div className="space-y-3 font-semibold mb-5">
              <div className="flex justify-between pt-3 text-black">
                <span className="">Price</span>
                <span className="">₹{cart.cart?.totalPrice}</span>
              </div>
              <div className="flex justify-between pt-3">
                <span className="">Discount</span>
                <span className=" text-green-600">₹{cart.cart?.discounts}</span>
              </div>
              <div className="flex justify-between pt-3 ">
                <span className="">Delivery Charge</span>
                <span className=" text-green-600">Free</span>
              </div>
              <div className="flex justify-between pt-3  ">
                <span className="">Total Amount</span>
                <span className=" text-green-600">
                  ₹{cart.cart?.totalDiscountedPrice}
                </span>
              </div>
            </div>
            <Button
              onClick={handleCheckout}
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
  );
};

export default Cart;
