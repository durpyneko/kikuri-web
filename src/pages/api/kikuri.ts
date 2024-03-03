// Module
const fs = require("fs");
const path = require("path");

// Next
import type { NextApiRequest, NextApiResponse } from "next";

// Types
type Data = {
  image: string;
};

function getRandomFile(directory: string) {
  const files = fs.readdirSync(directory);
  const randomIndex = Math.floor(Math.random() * files.length);
  const randomFile = files[randomIndex];
  return randomFile;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const directory = path.join(process.cwd(), "public", "kikuri");
  const randomFile = getRandomFile(directory);
  const filePath = path.join("/kikuri/", randomFile);
  res.status(200).json({ image: filePath });
}
