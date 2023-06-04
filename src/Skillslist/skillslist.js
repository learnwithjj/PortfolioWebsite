import Skills from "../Skills/skills";
import {skills} from "../Skills/skillsdata";
function SkillList()
{
    return (
        <div >
           <div className="leftalign" style={{width:"100%"}} >  
            {skills.map((item)=>
            (
                <Skills icon={item.icon} data={item.data}/>
            ))};
            </div>   
            {/* <div  className="rightalign ">
               <div style={{fontSize:"80px",fontWeight:"200px",letterSpacing:"8px",lineHeight:"35px",color:"wheat",textShadow:"20px 20px 8px rgba(0, 0, 0, 1)",marginTop:"20px"}}> SKILLS</div>
               <div style={{fontSize:"40px",fontWeight:"150px",letterSpacing:"4px",lineHeight:"35px",color:"wheat",textShadow:"20px 20px 8px rgba(0, 0, 0, 1)",marginTop:"40px"}}></div>
                 </div> */}
        </div>
    );
}

export default SkillList;