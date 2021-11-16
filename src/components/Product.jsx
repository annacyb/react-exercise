export default function Product(props) {
    // console.log(props);
    function handleClick() {
        console.log(props.id);
    }

    return (
        <article className="Product" style={{
            border: props.soldOut ? "green 2px solid" : "red  2px solid"
        }}>
            <h2>{props.productdisplayname}</h2>
            <p>ID: {props.id}</p>
            <p>Price: {props.price}</p>
            <button onClick={handleClick}>Click me</button>
        </article>
        
    );
}

