export default function Product(props) {
    // console.log(props);
    return (
        <article className="Product">
            <h2>{props.productdisplayname}</h2>
            <p>ID: {props.id}</p>
            <p>Price: {props.price}</p>
        </article>
    );
}