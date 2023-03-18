function Hello(props) {
    return (
        <div class = "hello">
            <h2>{props.film} </h2>
            <p> Film ini {props.deskripsi}</p>
        </div>
    );
}
export default Hello;