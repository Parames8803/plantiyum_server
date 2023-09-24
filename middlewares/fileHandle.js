const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '..', 'public', 'uploads'));
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    },
});
const upload = multer({ storage: storage });

module.exports = {
    uploadFile: (req, res, next) => {
        try {
            upload.single('file')(req, res, (err) => {
                if (err) {
                    return res.status(400).json({ error: 'File upload failed.' });
                }
                const filePath = req.file.path;
                req.filePath = filePath;
                next();
            });
        } catch (error) {
            console.log(error)
        }
    },
};
