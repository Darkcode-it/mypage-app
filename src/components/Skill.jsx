
import data from '../Data.json'
import "../components/Skill.css"
export default function Skill() {
  return (
    <div className='container'>
      <div className="skill">
                {data.data.map((data) => (
                    <div className="singleSkill" key={data.id}>
                     <img src={data.logo} className="image" />
                        <h4 className="title">{data.title}</h4>
                    </div>
                ))}
            </div>
    </div>
  )
}
