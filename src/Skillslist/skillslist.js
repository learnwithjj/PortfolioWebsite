import "./skillslist.css"
import Skills from "../Skills/skills";
import {skills} from "../Skills/skillsdata";
function SkillList()
{
    return (
        <div className="skilllist">
  
            {skills.map((item)=>
            (
                <Skills icon={item.icon} data={item.data}/>
            ))};
        </div>
    );
}

export default SkillList;