import logo from "./logo.svg";
import "./App.css";

function App() {
    return (
        <div className="App">
            <nav className="Navigation">
                <a href="#/">Home</a>
                <a href="#/">Link 2</a>
                <a href="#/">Link 3</a>
            </nav>
            <div className="BottomElements">
                <section className="ProductList">
                    <article className="Product">
                        <h2>Product 1</h2>
                        <p>Lorem ipsum</p>
                    </article>
                    <article className="Product">
                        <h2>Product 1</h2>
                        <p>Lorem ipsum</p>
                    </article>
                    <article className="Product">
                        <h2>Product 1</h2>
                        <p>Lorem ipsum</p>
                    </article>
                    <article className="Product">
                        <h2>Product 1</h2>
                        <p>Lorem ipsum</p>
                    </article>
                    <article className="Product">
                        <h2>Product 1</h2>
                        <p>Lorem ipsum</p>
                    </article>
                    <article className="Product">
                        <h2>Product 1</h2>
                        <p>Lorem ipsum</p>
                    </article>
                </section>

                <section className="Basket">
                    <article className="MyBasket">
                        <h2>Basket</h2>
                        <p>3 items</p>
                        <p>420$</p>
                    </article>
                    <form className="CheckoutForm">
                        <p>Checkout Form here</p>
                    </form>
                </section>
            </div>
        </div>
    );
}

// function Nav() {
//     return();
// }

export default App;
