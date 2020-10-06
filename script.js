const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt to select media stream, pass it to video element, start playing
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
        console.log('Whoops an error here:', error);
    }
}

button.addEventListener('click', async () => {
    // Disable Button
    button.disabled = true;
    // Request Picture-in-Picture
    await videoElement.requestPictureInPicture();
    // Enable Button
    button.disabled = false;
});

// On Load
selectMediaStream();