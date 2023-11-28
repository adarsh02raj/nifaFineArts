const Imagecard = ({data}) => {
    const {id, img} = data;
    return(
        <div className="imagecard">
            <img src={img} alt={id} />
        </div>
    )
}

export default Imagecard;