document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('video');
    const canvas = document.getElementById('canvas');
    const captureBtn = document.getElementById('captureBtn');
    const resultsDiv = document.getElementById('results');
    const context = canvas.getContext('2d');

    // Request access to the camera
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            video.srcObject = stream;
        })
        .catch(err => {
            console.error('Error accessing webcam: ', err);
        });

    captureBtn.addEventListener('click', () => {
        // Draw the video frame to the canvas
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        
        // Convert the canvas image to a data URL
        const imageDataURL = canvas.toDataURL('image/jpeg');

        // Send the image to the server for label detection
        fetch('/detect-labels', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ image: imageDataURL })
        })
        .then(response => response.json())
        .then(data => {
            // Display the results
            resultsDiv.innerHTML = '<h2>Labels:</h2>';
            data.labels.forEach(label => {
                resultsDiv.innerHTML += `<p>${label}</p>`;
            });
        })
        .catch(err => {
            console.error('Error detecting labels: ', err);
        });
    });
});