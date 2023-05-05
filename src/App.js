import React, { useState } from "react";
import { ReactMic } from "react-mic";

function App() {
  const [isRecording, setIsRecording] = useState(false);
  const [recordingData, setRecordingData] = useState(null);

  const startRecording = () => {
    setIsRecording(true);
  };

  const stopRecording = () => {
    setIsRecording(false);
  };

  const onData = (recordedData) => {
    setRecordingData(recordedData);
  };

  return (
    <div className="App">
      <h1>Noise Tracker</h1>
      <button onClick={startRecording} disabled={isRecording}>
        Start Recording
      </button>
      <button onClick={stopRecording} disabled={!isRecording}>
        Stop Recording
      </button>
      <ReactMic
        record={isRecording}
        className="sound-wave"
        onStop={onData}
        strokeColor="#000000"
        backgroundColor="#ffffff"
      />
      {recordingData && (
        <audio controls>
          <source src={recordingData.blobURL} type="audio/wav" />
        </audio>
      )}
    </div>
  );
}

export default App;