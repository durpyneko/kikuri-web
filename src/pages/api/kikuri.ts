import fs from "fs";
import path from "path";

interface Source {
  image: string;
  source: string;
}

function updateSources() {
  const directory = path.join(process.cwd(), "public", "kikuri");
  const files = fs.readdirSync(directory);

  const sources: Source[] = [];
  const sourcesPath = path.join(process.cwd(), "public", "sources.json");
  let parsedSources: Source[] = [];

  try {
    const sourcesData = fs.readFileSync(sourcesPath, "utf8");
    parsedSources = JSON.parse(sourcesData);
  } catch (error) {
    console.error("Error reading sources.json:", error);
  }

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

  try {
    fs.writeFileSync(sourcesPath, JSON.stringify(sources, null, 4), "utf8");
  } catch (error) {
    console.error("Error writing sources.json:", error);
  }

  return sources;
}

function getSources() {
  const sourcesPath = path.join(process.cwd(), "public", "sources.json");
  let parsedSources: Source[] = [];

  try {
    const sourcesData = fs.readFileSync(sourcesPath, "utf8");
    parsedSources = JSON.parse(sourcesData);
  } catch (error) {
    console.error("Error reading sources.json:", error);
  }

  return parsedSources;
}

export default function handler(req: any, res: any) {
  const toggle = false; // toggle to true to refresh sources.json incase new images are added to fs
  const sources = toggle ? updateSources() : getSources();

  const randomSource = sources[Math.floor(Math.random() * sources.length)];

  res
    .status(200)
    .json({ image: randomSource.image, source: randomSource.source });
}
