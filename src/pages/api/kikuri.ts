// Module
const fs = require("fs");
const path = require("path");

// Next
import type { NextApiRequest, NextApiResponse } from "next";

// Types
interface Source {
  image: string;
  source: string;
}

/* function getRandomFile(directory: string) {
  const files = fs.readdirSync(directory);
  const randomIndex = Math.floor(Math.random() * files.length);
  const randomFile = files[randomIndex];
  return randomFile;
} */

function updateSources() {
  // * debug
  // console.log("updating sources");
  // * save images data to file
  const directory = path.join(process.cwd(), "public", "kikuri");
  const files = fs.readdirSync(directory);

  const sources: Source[] = [];
  let sourcesData = fs.readFileSync("./sources.json", "utf8");
  let parsedSources: Source[] = JSON.parse(sourcesData);

  files.forEach((file: string) => {
    const image = "/kikuri/" + file;
    const existingSource = parsedSources.find(
      (source) => source.image === image
    );
    if (!existingSource) {
      sources.push({ image, source: "none" });
    } else {
      sources.push({ image, source: existingSource.source });
    }
  });

  fs.writeFileSync("./sources.json", JSON.stringify(sources), "utf8");

  return sources;
}

function getSources() {
  // * debug
  // console.log("getting sources");
  let sourcesData = fs.readFileSync("./sources.json", "utf8");
  let parsedSources: Source[] = JSON.parse(sourcesData);
  return parsedSources;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Source>
) {
  // ! only toggle on if in development and want to refresh sources.json
  const toggle = false;
  const sources = toggle ? updateSources() : getSources();

  const randomSource = sources[Math.floor(Math.random() * sources.length)];

  res
    .status(200)
    .json({ image: randomSource.image, source: randomSource.source });
}
