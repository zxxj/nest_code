"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storage = void 0;
const multer = require("multer");
const fs = require("fs");
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        try {
            fs.mkdirSync('uploads');
        }
        catch (e) { }
        cb(null, 'uploads');
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() +
            '-' +
            Math.round(Math.random() * 1e9) +
            '-' +
            file.originalname;
        cb(null, uniqueSuffix);
    },
});
exports.storage = storage;
//# sourceMappingURL=my-file-storage.js.map