import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const AudioPlayerComponent = ({ url }) => {
  return (
    <div className="w-full md:w-10/12 mx-auto mt-6 rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-[#1e1e1e] to-[#292929] p-2">
      <AudioPlayer
        src={url}
        onPlay={() => console.log("Playing...")}
        showJumpControls={false}
        customAdditionalControls={[]}
        className="custom-audio-player"
        layout="horizontal"
      />
    </div>
  );
};

export default AudioPlayerComponent;
