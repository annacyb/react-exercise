import MyBasket from "./MyBasket";
import CheckoutForm from "./CkeckoutForm";

export default function Basket(props) {
    return (
        <section className="Basket">
            <MyBasket basket={props.basket} />
            <CheckoutForm />
        </section>
    );
}