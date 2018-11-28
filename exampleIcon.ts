import { getImage } from "./getImage";

const IMAGES = {
  OFF: require("@/assets/moto/off.png"),
  RUNNING: require("@/assets/moto/running.png"),
  STOP: require("@/assets/moto/stop.png"),
  LOST_POWER: require("@/assets/moto/lost_power.png"),
  NO_GPS: require("@/assets/moto/lost_gps.png")
};

const IMG_SIZE = 68;
const ICON_W = 30;
const ICON_H = 65;

const canvas = document.createElement("canvas");
canvas.width = IMG_SIZE;
canvas.height = IMG_SIZE;
const context = canvas.getContext("2d") as CanvasRenderingContext2D;
context.imageSmoothingEnabled = true;

function getDataImage(status): Promise<HTMLImageElement> {
  status = status || "OFF";
  status = status.toUpperCase();
  const src = IMAGES[status];
  return getImage(src);
}
const cache = {};
export async function getMotoImage(status, angle) {
  angle = Math.round(angle);
  if (cache[status + angle]) {
    return cache[status + angle];
  }
  const carImage = await getDataImage(status);

  context.clearRect(0, 0, canvas.width, canvas.height);
  context.save();
  context.translate(canvas.width / 2, canvas.height / 2);
  context.rotate((angle * Math.PI) / 180);
  context.drawImage(
    carImage,
    0,
    0,
    carImage.naturalWidth,
    carImage.naturalHeight,
    -ICON_W / 2,
    -ICON_H / 2,
    ICON_W,
    ICON_H
  );
  context.restore();
  const data = canvas.toDataURL();
  const result = await getImage(data);
  cache[status + angle] = result;
  return result;
}
