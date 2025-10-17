const multer = require('multer');
const path = require('path');
const cloudinary = require('../config/cloudinary');
const { Readable } = require('stream');

// Use memory storage so files are available as buffer for direct upload to Cloudinary
const storage = multer.memoryStorage();

const fileFilter = (req, file, cb) => {
  const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg'];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error('Invalid file type. Only JPEG, PNG, and JPG are allowed.'), false);
  }
};

const upload = multer({
  storage,
  fileFilter,
});

// Helper: upload buffer/stream to Cloudinary
function streamUpload(buffer) {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream({ folder: 'relife' }, (error, result) => {
      if (result) resolve(result);
      else reject(error);
    });
    const readable = new Readable();
    readable._read = () => {}; // _read is required but you can noop it
    readable.push(buffer);
    readable.push(null);
    readable.pipe(uploadStream);
  });
}

module.exports = { upload, streamUpload };