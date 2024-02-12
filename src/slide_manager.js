import React from "react";
import "./index.css";
import Slide1 from "./slide_templates/slide1";
import Slide2 from "./slide_templates/slide2";
import Slide3 from "./slide_templates/slide3";
import { ReactMic } from "react-mic";

async function speechblob_to_gcloud(recordedBlob) {
  let response = await fetch("http://localhost:5000/speechblob_to_gcloud", {
    method: "POST",
    body: recordedBlob,
  });
  //response = await response.json();
}

export default class SLIDE_MANAGER extends React.Component {
  constructor(props) {
    super(props);
    
    this.slides = [Slide1, Slide2, Slide3];
    this.state = {
      slide_index: 0,
      record: false,
    };

    this.switchSlide = this.switchSlide.bind(this);
  }


  startRecording = () => {
    this.setState({ record: true });
  };

  stopRecording = () => {
    this.setState({ record: false });
  };

  onData(recordedBlob) {
    console.log("chunk of real-time data is: ", recordedBlob);
    speechblob_to_gcloud(recordedBlob);
  }

  onStop(recordedBlob) {
    console.log("recordedBlob is: ", recordedBlob);
  }

  switchSlide() {
    this.setState((prevState) => {
      const nextIndex = (prevState.slide_index + 1) % 3; 
      return { slide_index: nextIndex };
    });
  }

  render() {
    const CurrentSlide = this.slides[this.state.slide_index];

    return (
      <div className="border_constraints">
        <CurrentSlide />
        <ReactMic
          record={this.state.record}
          onStop={this.onStop}
          onData={this.onData}
          mimeType="audio/webm"
          timeSlice={20000}
        />
        <button onClick={this.startRecording} type="button">
          Start
        </button>
        <button onClick={this.stopRecording} type="button">
          Stop
        </button>
        <button onClick={this.switchSlide} type="button">
          Switch Slide
        </button>
      </div>
    );
  }
}
