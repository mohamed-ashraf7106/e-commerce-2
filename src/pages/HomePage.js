import React, { useEffect, useState } from "react";
import { products } from "../data/products";
import { useDispatch } from "react-redux";
import { addOrder } from "../app/features/cartSlice";
import ProductRow from "../components/ProductRow";
export default function HomePage() {
  let dispatch = useDispatch();
  useEffect(() => {
    let scollLeft = document.querySelectorAll(".left-scroll");
    let scollRight = document.querySelectorAll(".right-scroll");
    let scrollables = document.querySelectorAll(".scrollable");
    scollLeft.forEach((el, ind) => {
      el.addEventListener("click", () => {
        scrollables[ind].scrollLeft -= 200;
      });
    });
    scollRight.forEach((el, ind) => {
      el.addEventListener("click", () => {
        scrollables[ind].scrollLeft += 200;
      });
    });
    scrollables.forEach((scrollabler) => {
      let dragging = false;
      scrollabler.addEventListener("mousedown", () => {
        dragging = true;
      });
      scrollabler.addEventListener("mousemove", (e) => {
        if (dragging) {
          scrollabler.classList.remove("dragging");
          scrollabler.scrollLeft -= e.movementX / 2;
        }
      });
      scrollabler.addEventListener("mouseup", (e) => {
        scrollabler.classList.add("dragging");
        dragging = false;
      });
    });
  }, []);
  let [item, setitem] = useState({ quantity: 0, id: 0 });
  function addToCart(productid) {
    let error = document.querySelector(".error");
    if (item.quantity == 0 || item.quantity == "") {
      error.classList.remove("hidden");
      return;
    }
    dispatch(addOrder(item));
  }
  return (
    <>
      <div
        onClick={() => {
          let error = document.querySelector(".error");
          error.classList.add("hidden");
        }}
        className="absolute top-0 error hidden w-full z-50 h-screen flex items-center justify-center"
      >
        <div className="w-full h-full absolute bg-black opacity-55"></div>
        <h1 className="text-2xl z-40 bg-red-700 px-4 py-2 text-white">
          Please select a quantity for item
        </h1>
      </div>
      <div className="max-w-6xl relative mx-auto flex justify-between px-1 md:px-24">
        <div className=" flex flex-col w-full">
          <ProductRow title={"best sellers"} best={true} />
          <ProductRow title={"Headsets"} type={"headset"} />
          <ProductRow title={"Phones"} type={"phone"} />
          <ProductRow title={"Monitors"} type={"monitor"} />
          <ProductRow title={"Watches"} type={"watch"} />
          <ProductRow title={"shoes"} type={"shoes"} />
          <ProductRow title={"chairs"} type={"chair"} />
          <ProductRow title={"mice"} type={"mouse"} />
          <ProductRow title={"keyboards"} type={"keyboard"} />
        </div>
      </div>
    </>
  );
}
