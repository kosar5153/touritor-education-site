import React, { useEffect, useReducer, useState } from 'react'
import { ADD_TO_CART, CART_COST, REMOVE_FROM_CART, RENDER_TO_CART, WALLET_BALANCE, WALLET_REDUCE } from './shoppingCard-actions'
import ShoppingCardContext from './shoppingCard-context'
import shoppingCardReducer from './shoppingCard-reducer'

import { confirmAlert } from "react-confirm-alert";
import { toastifuyErr, toastifuySuccess } from '../../helperFunctions/toastifuy/toastifuy';


const ShoppingCardState = ({ children }) => {


    const initialState = {
        renderCart: false,
        cart: localStorage.getItem('cart') == null
            ? []
            : JSON.parse(localStorage.getItem('cart')),
        cartCost: 0,
        WalletBalance: localStorage.getItem('walletBalance') == null
            ? 0
            : JSON.parse(localStorage.getItem('walletBalance')),

    }



    const [state, dispatch] = useReducer(shoppingCardReducer, initialState);



    // ADD_TO_CART
    const addToCart = (product) => {

        let cartItem = state.cart.some(it => it["_id"] === product["_id"])
        if (!cartItem) {
            dispatch({
                type: ADD_TO_CART,
                payload: product
            })
            toastifuySuccess('دوره مورد نظر با موفقیت به سبد خرید اضافه شده')
        }
        else {
            return null
        }

    }

    // Remove_From_CART
    const removeFromCart = (product) => {
        confirmAlert({
            customUI: ({ onClose }) => {
                return (
                    <div

                        className="p-10 py-7 rounded-lg  border-orange-400
                           bg-Main-Blue dark:bg-Dark-MainBg  shadow-lg  border-dotted
                             absolute top-[300px]  left-[2%] sm:left-[30%] md:left-[10%]  lg:static
                            z-[1000]
                           "
                    >
                        <h1 className=' text-2xl text-orange-400' >پاک کردن مخاطب</h1>
                        <p className=' text-xl my-7 mb-10 text-gray-300'>
                            مطمئنی که میخوای مخاطب  رو پاک کنی ؟
                        </p>
                        <button
                            onClick={() => {
                                dispatch({
                                    type: REMOVE_FROM_CART,
                                    payload: product
                                })
                                onClose();
                                toastifuyErr('دوره مورد نظر از سبد خرید حذف شد')
                            }}
                            className=" shadow rounded p-2 ml-4 text-gray-200 bg-Dark-Teal dark:bg-Main-Blue mx-2"
                        >
                            مطمئن هستم
                        </button>
                        <button
                            onClick={onClose}
                            className=" shadow rounded p-2 text-gray-200  bg-rose-700"
                        >
                            انصراف
                        </button>
                    </div>
                );
            },
        });


    }

    // Remove_From_CART
    const removeFromCartAfterBuy = (product) => {
        dispatch({
            type: REMOVE_FROM_CART,
            payload: product
        })
    }


    // RENDER_TO_CART
    const renderToCart = () => {
        console.log("state.renderCart", state.renderCart)
        dispatch({
            type: RENDER_TO_CART,
            payload: state.renderCart
        })

    }

    // CERT_COST
    const chargeWallet = (pay) => {

        const handelAddCharge = (pay) => {
            dispatch({
                type: WALLET_BALANCE,
                payload: pay
            })
            localStorage.setItem('walletBalance', pay)
            toastifuySuccess("شارژ کیف پول با موفقیت انجام شد.");
        }
        confirmAlert({
            customUI: ({ onClose }) => {
                return (
                    <div
                        className="p-10 py-7 rounded-lg  border-orange-400
                  bg-Main-Blue dark:bg-Dark-MainBg  shadow-lg  border-dotted
                  absolute top-[300px]  left-[2%] sm:left-[30%] md:left-[10%]  lg:static"
                    >
                        <h1 className=" text-2xl text-orange-400">شارژ کیف پول</h1>
                        <p className=" text-xl my-7 mb-10 text-gray-300">
                            مطمعنی میخوای حسابتو شارژ کنی ؟؟
                        </p>
                        <button
                            onClick={() => {
                                handelAddCharge(pay);
                                onClose();
                            }}
                            className=" shadow rounded p-2 ml-4 text-gray-200 bg-Dark-Teal dark:bg-Main-Blue mx-2"
                        >
                            مطمئن هستم
                        </button>
                        <button
                            onClick={onClose}
                            className=" shadow rounded p-2 text-gray-200  bg-rose-700"
                        >
                            انصراف
                        </button>
                    </div>
                );
            },
        });

    }

    // reduce the price
    const reducePrice = (pay) => {

        dispatch({
            type: WALLET_REDUCE,
            payload: Number(pay)
        })
        localStorage.setItem('walletBalance', pay)
    }
    // Add the price
    const AddPrice = (pay) => {

        dispatch({
            type: WALLET_BALANCE,
            payload: pay
        })
        localStorage.setItem('walletBalance', pay)
        toastifuySuccess("50% از پول دوره به کیف پول اضافه شد");
    }


    // localStorage
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(state.cart))
    }, [state.cart])

    // localStorage
    useEffect(() => {
        const shopCart = localStorage.getItem('cart')
        const cartItem = JSON.parse(shopCart)
        if (cartItem.lenght > 0) {
            addToCart(cartItem)
        }

        // const walletBalance = localStorage.getItem('walletBalance')
        // if (walletBalance && walletBalance !== null) {
        //     dispatch({
        //         type: WALLET_BALANCE,
        //         payload: Number(walletBalance)
        //     })
        // }

    }, [])




    console.log(state)
    return (
        <ShoppingCardContext.Provider value={{
            cart: state.cart,
            cartCost: state.cartCost, renderCart: state.renderCart,
            addToCart, removeFromCart, renderToCart, removeFromCartAfterBuy,
            WalletBalance: state.WalletBalance, chargeWallet, reducePrice, AddPrice
        }}>
            {children}
        </ShoppingCardContext.Provider>
    )
}

export default ShoppingCardState