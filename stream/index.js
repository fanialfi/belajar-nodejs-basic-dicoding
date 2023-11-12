/*
 * TODO:
 * Buatlah program untuk membaca teks input.txt dan menuliskannya ulang pada berkas output.txt
 * menggunakan teknik readable stream dan writable stream.
 */

const fs = require("node:fs");
const path = require("node:path");
const process = require("node:process");

const pathInput = path.resolve(__dirname, "./input.txt");

const readableStream = fs.createReadStream(pathInput, {
  highWaterMark: 15,
});

const writableStream = fs.createWriteStream(
  path.resolve(__dirname, "./output_tugas_stream.txt")
);

readableStream.on("readable", () => {
  try {
    writableStream.write(`${readableStream.read()}\n`);
  } catch (error) {
    console.log(error.message);
  }
});
