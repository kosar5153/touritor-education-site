import { ADD_TO_CART, CART_COST, REMOVE_FROM_CART, RENDER_TO_CART, WALLET_BALANCE, WALLET_REDUCE } from './shoppingCard-actions'

const shoppingCardReducer = (state, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return { ...state, cart: [...state.cart, action.payload] }
        case REMOVE_FROM_CART:
            return { ...state, cart: [...state.cart.filter(it => it["_id"] !== action.payload["_id"])] }
        case RENDER_TO_CART:
            return { ...state, renderCart: !action.payload }
        case CART_COST:
            return { ...state, cartCost: state.cartCost + action.payload }
        case WALLET_BALANCE:
            return { ...state, WalletBalance: action.payload + state.WalletBalance }
        case WALLET_REDUCE:
            return { ...state, WalletBalance: state.WalletBalance - action.payload }
        default:
            return state
    }


}

export default shoppingCardReducer