const express = require('express');
const bodyParser = require('body-parser');
const vision = require('@google-cloud/vision');
const path = require('path');
const app = express();
const client = new vision.ImageAnnotatorClient();

// Middleware to parse JSON
app.use(bodyParser.json({ limit: '10mb', type: 'application/json' }));

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint to handle label detection
app.post('/detect-labels', async (req, res) => {
    try {
        const image = req.body.image;
        const buffer = Buffer.from(image.split(',')[1], 'base64');

        const [result] = await client.labelDetection({ image: { content: buffer } });
        const labels = result.labelAnnotations.map(label => label.description);

        console.log('Labels: ', labels);
        res.json({ labels });
    } catch (error) {
        console.error('Error detecting labels: ', error);
        res.status(500).send('Error detecting labels');
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

