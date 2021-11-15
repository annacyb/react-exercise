import logo from "./logo.svg";
import "./App.css";

function App() {
    return (
        <>
            <nav className="navigation">
                <a href="#/">HTML</a>
                <a href="#/">CSS</a>
                <a href="#/">JavaScript</a>
            </nav>
            <div className="bottomElements">
                <section className="productList">
                    <article className="product">
                        <div className="productDetails"></div>
                    </article>
                    <article className="product">
                        <div className="productDetails"></div>
                    </article>
                    <article className="product">
                        <div className="productDetails"></div>
                    </article>
                    <article className="product">
                        <div className="productDetails"></div>
                    </article>
                    <article className="product">
                        <div className="productDetails"></div>
                    </article>
                    <article className="product">
                        <div className="productDetails"></div>
                    </article>
                </section>

                <section className="basket">
                    <article className="myBasket">
                        <p>Basket here</p>
                    </article>
                    <article className="checkoutForm">
                        <p>Checkout Form here</p>
                    </article>
                </section>
            </div>
        </>
    );
}

// function Nav() {
//     return();
// }

export default App;
