
import data from "../Data.json";
import "../components/Menu.css"

export default function Menu() {
  return (
    <div className="container">
      <div className="menu">
        <ol className="item">
          <li>Skill</li>
          <li>About</li>
        </ol>
      </div>
      <div>
          <h1 className="title">
            {data.title}
            <h2 style={{ color: "aqua", fontSize: "30px",fontFamily: "fantasy" }}>`Musa Rahd`</h2>
          </h1>
          <h3 className="subtitle"> {data.subtitle}</h3>

        </div>


    </div>
  );
}
