const express = require('express');
const multer = require('multer');
const app = express();

const upload = multer({ dest: 'uploads/' });

app.post('/avatar', upload.single('avatar'), (req, res) => {
    res.send(`File uploaded: ${req.file.originalname}`);
});

app.listen(3021);
