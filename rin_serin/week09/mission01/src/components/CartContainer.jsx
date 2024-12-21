// import CartItem 
import {useSelector} from "react-redux"
import cartItems from "../constants/cartItems";

const CartContainer = () => {
    const state = useSelector((store => console.log(store)))
    return(
        <section className="cart">
            <header>
                <h2>당신이 선택한 음반</h2>
            </header>
            <div>
                {cartItems.map((item)=>{
                    return<CartItem key={item.id} {...item}/>
                })}
            </div>
            <footer>
                <hr/>
                <div className="cart-total">
                    <h4>총 가격 <span>\7777원</span></h4>
                </div>
                <button className="btn clear-btn" onClick={()=>{}}>
                    장바구니 초기화
                </button>
            </footer>
        </section>
    )
}

export default CartContainer;