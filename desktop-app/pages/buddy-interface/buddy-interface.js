// JavaScript to fetch live video and voice output

// Replace 'LiveVideoAPIURL' and 'VoiceAPIURL' with your actual API URLs
const LiveVideoAPIURL = "";
const VoiceAPIURL = "";

// Live Video
async function fetchLiveVideo() {
  try {
    const liveVideoElement = document.getElementById("liveVideo");
    // const response = await fetch(LiveVideoAPIURL);
    // const videoStream = await response.blob();
    // const videoURL = URL.createObjectURL(videoStream);
    const videoURL = "../../assets/video/sample-face-drowsiness-detection.mp4";
    liveVideoElement.src = videoURL;
  } catch (error) {
    console.error("Error fetching live video:", error);
  }
}

// Voice Output and Animation
async function fetchVoiceOutput() {
  try {
    const voiceOutputElement = document.getElementById("voiceOutput");
    // const response = await fetch(VoiceAPIURL);
    // const voiceBlob = await response.blob();
    // const voiceURL = URL.createObjectURL(voiceBlob);
    const voiceURL = "../../assets/audio/male_voice.wav";
    voiceOutputElement.src = voiceURL;

    // Optionally, you can add more sophisticated voice animation here
    const voiceAnimationElement = document.getElementById("voiceAnimation");
    // Example: Changing the background color to indicate voice activity
    setInterval(() => {
      voiceAnimationElement.style.backgroundColor = `#${Math.floor(
        Math.random() * 16777215
      ).toString(16)}`;
    }, 500);
  } catch (error) {
    console.error("Error fetching voice output:", error);
  }
}

// Fetch video and voice data on page load
window.onload = function () {
  fetchLiveVideo();
  fetchVoiceOutput();
};
