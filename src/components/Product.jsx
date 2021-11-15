export default function Product(props) {
    // console.log(props);

    const styles = {
        // if true then green if false red
        backgroundColor: props.soldOut ? "green" : "red"
      };
    
    return (
        <article className="Product" style={styles}>
            <h2>{props.productdisplayname}</h2>
            <p>ID: {props.id}</p>
            <p>Price: {props.price}</p>
        </article>
    );
}

