import React, { useContext, useEffect, useState } from "react";

import { FaMoneyBillAlt } from "react-icons/fa";
import { FiChevronsLeft } from "react-icons/fi";
import { MdHourglassEmpty } from "react-icons/md";
import Button from "../../commen/Button/Button";
import { NavLink, useLocation } from "react-router-dom";
import ShoppingItem from "./ShoppingItem";
import ShoppingCardContext from "../../../context/shopping-cart-context/shoppingCard-context";
import "./ShoppingStyle.css";

const ShoppingBox = ({ shopClose }) => {
  const { pathname } = useLocation();
  {
    console.log("location", pathname);
  }
  // ---------------------
  const [cost, setCost] = useState(0);
  const { cart, addToCart, removeFromCart, renderToCart } =
    useContext(ShoppingCardContext);

  useEffect(() => {
    setCost(cart.reduce((accr, curr) => accr + Number(curr.cost), 0));
  }, [cart]);

  return (
    <>
      {pathname === "/shoppingpage" ? null : (
        <div
          className={
            shopClose
              ? `TwIN-ShoppingHolder TwIN-ShoppingBox  block lg:hidden`
              : `TwIN-ShoppingHolder TwIN-ShoppingBox hidden`
          }
        >
          <div className=" mb-2 flex justify-between items-center">
            <span className=" text-gray-500 text-[13px]">
              {cart.length} دوره موجود در سبد خرید
            </span>
            <NavLink
              to={"/shoppingpage"}
              className=" text-[13px] text-rose-500 flex items-center gap-1"
            >
              مشاهده سبد خرید
              <FiChevronsLeft />
            </NavLink>
          </div>
          <ul className="TwIN-ShoppingBox overflow-auto  h-56 css-scrollbar-Shop">
            {cart.length > 0 ? (
              cart.map((item) => (
                <ShoppingItem
                  key={item["_id"]}
                  addToCart={() => addToCart(item)}
                  removeFromCart={() => removeFromCart(item)}
                  item={item}
                  renderToCart={renderToCart}
                />
              ))
            ) : (
              <li className=" text-gray-500 text-center mt-[15%] flex  flex-col items-center gap-3">
                <span className=" text-4xl animate-TwCon-round-Anim">
                  <MdHourglassEmpty />
                </span>
                <span> سبد خرید خالیست</span>
              </li>
            )}
          </ul>

          <ul
            className=" flex  flex-col 
       md:flex-row
       justify-between items-center"
          >
            <li className=" text-gray-700 text-[1rem] my-3 md:my-0">
              <span>جمع کل : </span>
              <span className=" ml-1">{cost}</span>
              <span>تومان</span>
            </li>
            <li>
              <NavLink to={"/shoppingpage"}>
                <Button
                  icon={<FaMoneyBillAlt />}
                  customClass={"TwIN-btnShoppingBox"}
                >
                  تسویه حساب
                </Button>
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default ShoppingBox;
