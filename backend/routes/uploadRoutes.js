const express = require('express');
const router = express.Router();
const { upload, streamUpload } = require('../middleware/upload');

// single file upload under field name 'image'
router.post('/image', upload.single('image'), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ message: 'No file uploaded' });

    // Upload file buffer to Cloudinary
    const result = await streamUpload(req.file.buffer || require('fs').readFileSync(req.file.path));

    res.json({ url: result.secure_url, public_id: result.public_id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Upload failed', error: error.message });
  }
});

module.exports = router;
