import '../util/card.css'
const CourcesCard = ({data}) => {
    const {txt, img} = data; 
    return(
        <div className="courcesCard">
            <div className="cards">
                <img src={img} alt="image" />
                <p>{txt}</p>
                <button className="commonBtn">Read More</button>
            </div>
        </div>
    )
}
export default CourcesCard;