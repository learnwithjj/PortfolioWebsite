import "./skills.css";
const Skills=({data,icon})=>
{
    return(
        <div className="skill">
           {icon} {data}
        </div>

    )
}

export default Skills;