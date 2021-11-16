import { useState } from "react";

export default function Product(props) {

    const initial = 0;
    const [stateVariable, updateFunction] = useState(initial)

    function addValue() {
        //set state to be equal to it's current value + 1
        updateFunction((prevCount) => prevCount + 1);
    }

    function removeValue() {
        //set state to be equal to it's current value - 1
        updateFunction((prevCount) => {
            if (prevCount > 0) {
                return prevCount - 1;
            }
            else {
                return 0;
            }
        })
    }
    

    return (
        <article className="Product" style={{
            border: props.soldout ? "green 2px solid" : "red  2px solid",
            opacity: props.soldout ? "100%" : "50%"
        }}>
            <h2>{props.productdisplayname}</h2>
            <p>ID: {props.id}</p>
            <p>{props.price}$</p>
            <div className="addOrRemoveItem">
                <button onClick={addValue}> + </button>
                <p>{stateVariable}</p>
                <button onClick={removeValue}> - </button>
            </div>

        </article>
        
    );
}

