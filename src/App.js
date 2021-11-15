import logo from "./logo.svg";
import "./App.css";

function App() {
    return (
        <div className="App">
            <Nav />
            <div className="BottomElements">
                <ProductList />
                <Basket />
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

function ProductList() {
    return (
        <section className="ProductList">
            <Product title="Bike" />
            <Product title="Car" />
            <Product title="Shoes" />
            <Product title="Bag" />
            <Product title="Pencil" />
            <Product title="Rabbit" />
        </section>
    );
}

function Product(props) {
    // console.log(props);
    return (
        <article className="Product">
            <h2>{props.title}</h2>
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
        <>
            <h2>Checkout form</h2>
            <form className="CheckoutForm"></form>
        </>
    );
}

function Basket() {
    return (
        <section className="Basket">
            <MyBasket />
            <CheckoutForm />
        </section>
    );
}

export default App;
