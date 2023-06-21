//TODO this is all about file systems

import { readFile, writeFile, createReadStream, createWriteStream } from "fs";

// * write file
writeFile("file.txt", "Hello, World!", "utf8", (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("File has been written.");
});

// * read file
readFile("file.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});

const writeStream = createWriteStream("output.txt", "utf8");

// * write the stream of data in files
writeStream.write("Hello, World!", (error) => {
  console.log(error);
});
writeStream.end();

writeStream.on("finish", () => {
  console.log("Write stream finished.");
});

// * Read the stream of data in files
const readStream = createReadStream("output.txt", "utf8");

readStream.on("data", (chunk) => {
  console.log(chunk);
});

readStream.on("end", () => {
  console.log("Read stream finished.");
});
