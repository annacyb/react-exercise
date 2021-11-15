import "./App.css";

import Nav from "./components/Nav";
import ProductList from "./components/ProductList";
import Basket from "./components/Basket";

function App() {
    const product = {
        id: 1143,
        productdisplayname: "Round Neck Jersey",
        price: 432,
        soldOut: 1,
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

export default App;
