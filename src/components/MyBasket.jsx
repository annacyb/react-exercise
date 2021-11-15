export default function MyBasket(props) {
    return (
        <article className="MyBasket">
            <h2>Basket</h2>
            <p>{props.basket.length} items</p>
            <p>420$</p>
        </article>
    );
}