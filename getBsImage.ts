import { getImage } from "./getImage";
const canvas = document.createElement("canvas");
canvas.width = 60;
canvas.height = 20;
const context = canvas.getContext("2d") as CanvasRenderingContext2D;
context.imageSmoothingEnabled = true;

const cache = {};
export async function getBsImage(bs) {
  if (cache[bs]) {
    return cache[bs];
  }
  context.fillStyle = "white";
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.textAlign = "center";
  context.textBaseline = "top";
  context.fillStyle = "black";
  context.font = "bold 18px Arial";
  context.fillText(bs, canvas.width / 2, 0, canvas.width);
  const data = canvas.toDataURL();
  const result = await getImage(data);
  cache[bs] = result;
  return result;
}
