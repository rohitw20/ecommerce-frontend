import React, { useEffect } from "react";
import AddressCard from "../AddressCard/AddressCard";
import { Button, Divider } from "@mui/material";
import CartItem from "../Cart/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { getOrderById } from "../../../State/Order/Action";
import { createPayment } from "../../../State/Payment/Action";

const OrderSummary = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const orderId = searchParams.get("order_id");

  const { order } = useSelector((store) => store);

  useEffect(() => {
    dispatch(getOrderById(orderId));
  }, []);

  const handleCheckout = () => {
    dispatch(createPayment(orderId));
  };

  return (
    <div>
      <div className="p-5 shadow-lg rounded-md border">
        <AddressCard address={order?.order?.shippingAddress} />
      </div>

      <div>
        <div className="lg:grid grid-cols-3 relative">
          <div className="col-span-2">
            {order?.order?.orderItems?.map((item, index) => (
              <CartItem key={index} item={item} />
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
                  <span className="">₹{order?.order?.totalPrice}</span>
                </div>
                <div className="flex justify-between pt-3">
                  <span className="">Discount</span>
                  <span className=" text-green-600">
                    -₹{order?.order?.discount}
                  </span>
                </div>
                <div className="flex justify-between pt-3 ">
                  <span className="">Delivery Charge</span>
                  <span className=" text-green-600">Free</span>
                </div>
                <div className="flex justify-between pt-3  ">
                  <span className="">Total Amount</span>
                  <span className=" text-green-600">
                    ₹{order?.order?.totalDiscountedPrice}
                  </span>
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
                onClick={handleCheckout}
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
