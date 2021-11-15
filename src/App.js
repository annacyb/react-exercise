import logo from "./logo.svg";
import "./App.css";

function App() {
    const product = {
        id: 1143,
        productdisplayname: "Round Neck Jersey",
        price: 432,
        soldOut: 0,
    };
    let basket = ["Sth", "Sth2"];

    return (
        <div className="App">
            <Nav />
            <div className="BottomElements">
                <ProductList product={product} />
                <Basket basket={basket} />
            </div>
        </div>
    );
}

function Nav() {
    return (
        <nav className="Navigation">
            <a href="#/">Home</a>
            <a href="#/">Link 2</a>
            <a href="#/">Link 3</a>
        </nav>
    );
}

function ProductList(props) {
    return (
        <section className="ProductList">
            <Product {...props.product} />
            <Product {...props.product} />
            <Product {...props.product} />
            <Product {...props.product} />
            <Product {...props.product} />
            <Product {...props.product} />
        </section>
    );
}

function Product(props) {
    // console.log(props);
    return (
        <article className="Product">
            <h2>{props.productdisplayname}</h2>
            <p>ID: {props.id}</p>
            <p>Price: {props.price}</p>
        </article>
    );
}

function Basket(props) {
    return (
        <section className="Basket">
            <MyBasket basket={props.basket} />
            <CheckoutForm />
        </section>
    );
}

function MyBasket(props) {
    return (
        <article className="MyBasket">
            <h2>Basket</h2>
            <p>{props.basket.length} items</p>
            <p>420$</p>
        </article>
    );
}

function CheckoutForm() {
    return (
        <>
            <h2>Checkout form</h2>
            <form className="CheckoutForm"></form>
        </>
    );
}

export default App;
