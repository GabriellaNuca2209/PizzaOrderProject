const { readFile, writeFile } = require('fs/promises');

const fileReaderAsync = async (filePath) => {
    try {
        return await readFile(filePath);
    } catch (error) {
        console.error(error);
        return;
    }
}

const fileWriter = (filePath, obj) => {
    try {
        writeFile(filePath, obj);
    } catch (error) {
        console.error(error);
    }
}

module.exports = {fileReaderAsync, fileWriter};


