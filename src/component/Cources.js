import '../util/card.css'
import { courcesData } from "../util/courcesData"
import CourcesCard from "./CourcesCard"
const Cources = () => {
    return(
        <div className='cources-container'>
            <h1>Our Courses</h1>
        <div className="cources">
            {
                courcesData.map((res) => {
                    return(
                        <CourcesCard key={res.id} data={res} />
                    )
                })
            }
        </div>
        </div>
    )
}
export default Cources