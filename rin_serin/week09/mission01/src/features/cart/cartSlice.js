import {createSlice} from "@reduxjs/toolkit"
import cartItems from "../../constants/cartItems"

const initialState = {
    cartItems: cartItems,
    amount: 0,
    total: 0,
}

const cartSlice = createSlice({
    name:'cart',
    initialState: initialState,
    reducers: {
        //Todo 증가
        //Todo 감소
        //Todo 아이템 제거
        //Todo 모든 아이텐 제거
        //Todo total을 계산 (각각 아이템 * 수량)
    }
})

export default cartSlice.reducer