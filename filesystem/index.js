const fs = require("node:fs");
const path = require("node:path");

const fileNotes = path.resolve(__dirname, "./notes.txt");
console.log(fileNotes);

const fileReadCallback = (error, data) => {
  {
    if (error) {
      console.log(error.message);
    }
    console.log(data);
  }
};

fs.readFile(fileNotes, "UTF-8", fileReadCallback);
