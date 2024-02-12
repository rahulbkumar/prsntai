import { useState, useEffect } from "react";

function BulletPoints(props) {
  const [data, setData] = useState({});

  async function cohere_search() {
    let response = await fetch(
      "http://localhost:5000/summarize?cohere_query=" + props.query
    );
    response = await response.json();

    if ("summary" in response) {
      setData({ points: response.summary });
    }
  }
  
  useEffect(() => {
    if ("points" in data) {
      return;
    } else {
      cohere_search();
    }
  }, []);

  let points_div;
  if ("points" in data) {
    points_div = (
      <div className="points-container">
        {data.points.map((point, index) => (
          <p key={index}>{point}</p>
        ))}
      </div>
    );
  } else {
    points_div = "";
  }

  return points_div;
}

export default BulletPoints;
