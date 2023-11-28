import { studentImg } from "../util/StudentWorkImg";
import '../util/studentWork.css'

const StudentWork = () =>{
    return(
        <div className="studentWork">   
            <div className="row1">
                <img src={studentImg[0].img} alt="img" />
                <img src={studentImg[1].img} alt="img" />
                <img src={studentImg[2].img} alt="img" />
                <img src={studentImg[3].img} alt="img" />
            </div>
            <div className="row2">
                <img src={studentImg[4].img} alt="img" />
            </div>
            <div className="row3">
                <img src={studentImg[5].img} alt="img" />
                <img src={studentImg[6].img} alt="img" />
            </div>
            <div className="row4">
                <img src={studentImg[7].img} alt="img" />
                <img src={studentImg[8].img} alt="img" />
                <img src={studentImg[9].img} alt="img" />
            </div>
            <div className="row5">
                <img src={studentImg[10].img} alt="img" />
                <img src={studentImg[11].img} alt="img" />
                <img src={studentImg[12].img} alt="img" />
            </div>
            <div className="row6">
                <img src={studentImg[13].img} alt="img" />
                <img src={studentImg[14].img} alt="img" />
                <img src={studentImg[15].img} alt="img" />
                <img src={studentImg[16].img} alt="img" />
            </div>
            <div className="row7">
                <img src={studentImg[17].img} alt="img" />
                <img src={studentImg[18].img} alt="img" />
                <img src={studentImg[19].img} alt="img" />
                <img src={studentImg[20].img} alt="img" />
            </div>
            <div className="row8">
                <img src={studentImg[21].img} alt="img" />
            </div>
            
        </div>
        
    )
}
export default StudentWork;