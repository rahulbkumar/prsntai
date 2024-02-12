import { useState, useEffect } from "react";

function Image(props) {
  const [data, setData] = useState({});

  async function image_search() {
    let response = await fetch(
      "http://localhost:5000/image_search?image_query=" + props.query
    );
    response = await response.json();

    if ("image" in response) {
      setData({ image: response.image });
    }
  }
  useEffect(() => {
    if ("image" in data && data.image != null) {
      return;
    } else {
      image_search();
    }
  });
  let image_div;
  if ("image" in data) {
    image_div = (
      <div className="image-container">
        {<img src={data.image} alt="Image" id="image" />}
      </div>
    );
  } else {
    image_div = "no_image";
  }

  return image_div;
}

export default Image;
