import { useDispatch } from "react-redux";
import { useState } from "react";
import { addOrder } from "../app/features/cartSlice";
import { products } from "../data/products";
export default function ProductRow({ title, type, best = false }) {
  let dispatch = useDispatch();
  let [item, setitem] = useState({ quantity: 0, id: 0 });
  function addToCart(productid) {
    let error = document.querySelector(".error");
    if (item.quantity == 0 || item.quantity == "") {
      error.classList.remove("hidden");
      return;
    }
    dispatch(addOrder(item));
  }
  if (best) {
    return (
      <>
        <h1 className="text-5xl uppercase pl-2">{title}</h1>
        <div className="px-8 relative ">
          <span className="right-scroll hidden md:block">
            <i className="fa-solid fa-angle-right absolute right-0 top-1/2 hover:bg-slate-700 hover:opacity-100 -translate-y-1/2 text-xl bg-slate-500 rounded-full px-2 z-30 opacity-90 cursor-pointer text-white"></i>
          </span>
          <span className="left-scroll hidden md:block">
            <i className="fa-solid fa-angle-left absolute left-0 top-1/2 hover:bg-slate-700 hover:opacity-100 -translate-y-1/2 text-xl bg-slate-500 rounded-full px-2 z-30 opacity-90 cursor-pointer text-white"></i>
          </span>
          <div
            style={{ height: "430px" }}
            className="scrollable dragging flex mt-2 gap-2 no-scroll overflow-x-scroll"
          >
            {products.map((product) => {
              if (product.bestSeller)
                return (
                  <div
                    key={product.id}
                    className="min-w-72 flex flex-col gap-2 border relative"
                  >
                    {product.bestSeller ? (
                      <span className="absolute left-0 top-0 uppercase bg-amber-600 text-white px-1">
                        Best seller
                      </span>
                    ) : (
                      ""
                    )}
                    <div className="min-h-64 w-full max-h-64 p-2 pointer-events-none flex justify-center items-center">
                      <img
                        className="max-h-full"
                        src={require(`../assets/${product.src}`)}
                      />
                    </div>
                    <div className="text-container px-2 border-t">
                      <h3 className="whitespace-nowrap relative text-ellipsis overflow-hidden">
                        {product.title}
                        <div className="absolute left-1/2 bottom-full">
                          {product.title}s
                        </div>
                      </h3>
                      <p>{product.price}$</p>
                    </div>
                    <div className="flex items-center justify-center">
                      <input
                        id={product.id}
                        onChange={(e) => {
                          e.target.value = Math.floor(e.target.value);
                          setitem({
                            quantity: e.target.value,
                            id: e.target.id,
                          });
                        }}
                        type="number"
                        className="border outline-none px-2"
                        placeholder="quantity"
                      />
                    </div>
                    <div className="px-2 mt-auto mb-2">
                      <button
                        onClick={() => {
                          addToCart(product.id);
                        }}
                        className="w-full bg-red-500 p-2 rounded-3xl text-white hover:bg-red-700 duration-150 "
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                );
            })}
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <h1 className="text-5xl uppercase pl-2">{title}</h1>
      <div className="px-8 relative ">
        <span className="right-scroll hidden md:block">
          <i className="fa-solid fa-angle-right absolute right-0 top-1/2 hover:bg-slate-700 hover:opacity-100 -translate-y-1/2 text-xl bg-slate-500 rounded-full px-2 z-30 opacity-90 cursor-pointer text-white"></i>
        </span>
        <span className="left-scroll hidden md:block">
          <i className="fa-solid fa-angle-left absolute left-0 top-1/2 hover:bg-slate-700 hover:opacity-100 -translate-y-1/2 text-xl bg-slate-500 rounded-full px-2 z-30 opacity-90 cursor-pointer text-white"></i>
        </span>
        <div
          style={{ height: "430px" }}
          className="scrollable dragging flex mt-2 gap-2 no-scroll overflow-x-scroll"
        >
          {products.map((product) => {
            if (product.type == type)
              return (
                <div
                  key={product.id}
                  className="min-w-72 flex flex-col gap-2 border relative"
                >
                  {product.bestSeller ? (
                    <span className="absolute left-0 top-0 uppercase bg-amber-600 text-white px-1">
                      Best seller
                    </span>
                  ) : (
                    ""
                  )}
                  <div className="min-h-64 max-h-64 p-2 pointer-events-none flex justify-center items-center">
                    <img
                      className="max-h-full"
                      src={require(`../assets/${product.src}`)}
                    />
                  </div>
                  <div className="text-container px-2 border-t">
                    <h3 className="whitespace-nowrap relative text-ellipsis overflow-hidden">
                      {product.title}
                      <div className="absolute left-1/2 bottom-full">
                        {product.title}s
                      </div>
                    </h3>
                    <p>{product.price}$</p>
                  </div>
                  <div className="flex items-center justify-center">
                    <input
                      id={product.id}
                      onChange={(e) => {
                        e.target.value = Math.floor(e.target.value);
                        setitem({
                          quantity: e.target.value,
                          id: e.target.id,
                        });
                      }}
                      type="number"
                      className="border outline-none px-2"
                      placeholder="quantity"
                    />
                  </div>
                  <div className="px-2 mt-auto mb-2">
                    <button
                      onClick={() => {
                        addToCart(product.id);
                      }}
                      className="w-full bg-red-500 p-2 rounded-3xl text-white hover:bg-red-700 duration-150 "
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              );
          })}
        </div>
      </div>
    </>
  );
}
