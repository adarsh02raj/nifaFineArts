import { studentImg } from "../util/StudentWorkImg";
import Imagecard from "./ImageCard";

const StudentWork = () =>{
    return(
        <div className="studentWork">   
            {studentImg.map((res)=>{
                return(
                    <Imagecard key={res.id} data={res}/>
                )
            })}
        </div>
    )
}
export default StudentWork;