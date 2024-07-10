import { useSelector } from "react-redux";
import { products } from "../data/products";
import { useDispatch } from "react-redux";
import { remOrder } from "../app/features/cartSlice";
import { useEffect, useState } from "react";
import { emptyCart } from "../app/features/cartSlice";
export default function CartPage() {
  let dispatch = useDispatch();
  let cart = useSelector((state) => {
    return state.orders;
  });
  let carthtml = cart.map((item) => {
    return products.map((product) => {
      if (product.id == item.id) {
        return (
          <div
            key={product.id}
            style={{ height: "450px" }}
            className="w-80 border mb-2 mx-auto flex flex-col justify-between"
          >
            <div className="h-full flex justify-center items-center p-2">
              <img src={require(`../assets/${product.src}`)} alt="" />
            </div>
            <div className="p-2 border-t">
              <h2 className="whitespace-nowrap text-ellipsis overflow-hidden">
                {product.title}
              </h2>
              <p>
                {product.price} x {item.quantity} =
                {product.price * item.quantity}$
              </p>
              <p>
                after tax =
                {product.price * item.quantity +
                  product.price * item.quantity * 0.1}{" "}
                $
              </p>
              <div className="mt-auto">
                <button
                  onClick={() => {
                    dispatch(remOrder({ id: product.id }));
                    console.log(product.id);
                  }}
                  className="hover:bg-red-700 duration-300 w-full bg-red-500 p-1 rounded-2xl text-white"
                >
                  Remove from cart
                </button>
              </div>
            </div>
          </div>
        );
      }
    });
  });
  let check = true;
  if (cart.length != 0) {
    check = false;
  }
  let [text,settext]= useState("cart is empty")
  return (
    <div className="max-w-6xl mt-3 relative mx-auto flex flex-col justify-between px-1 md:px-24">
      {carthtml}
      {check  ? (
        <h1 className="mx-auto text-3xl">{text}</h1>
      ) : (
        <button
          onClick={() => {
            dispatch(emptyCart());
            settext("order sent")
          }}
          className="bg-green-500 w-80 mb-4 mx-auto rounded-2xl text-white p-1"
        >
          Place Order
        </button>
      )}
    </div>
  );
}
