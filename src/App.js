import logo from "./logo.svg";
import "./App.css";

function App() {
    return (
        <div className="App">
            <Nav />
            <div className="BottomElements">
                <section className="ProductList">
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                </section>

                <section className="Basket">
                    <MyBasket />
                    <CheckoutForm />
                </section>
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

function Product() {
    return (
        <article className="Product">
            <h2>Product 1</h2>
            <p>Lorem ipsum</p>
        </article>
    );
}

function MyBasket() {
    return (
        <article className="MyBasket">
            <h2>Basket</h2>
            <p>3 items</p>
            <p>420$</p>
        </article>
    );
}

function CheckoutForm() {
    return (
        <form className="CheckoutForm">
            <p>Checkout Form here</p>
        </form>
    );
}

export default App;
