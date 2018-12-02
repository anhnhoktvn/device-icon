import { getImage } from './getImage'

// const IMAGES = {
//   OFF: require("@/assets/car/off.png"),
//   RUNNING: require("@/assets/car/running.png"),
//   STOP: require("@/assets/car/stop.png"),
//   LOST_POWER: require("@/assets/car/lost.gif"),
//   NO_GPS: require("@/assets/car/no_gps.gif")
// };

// const IMG_SIZE = 40;
// const ICON_W = 35;
// const ICON_H = 30;

const canvas = document.createElement('canvas')
const context = canvas.getContext('2d') as CanvasRenderingContext2D
context.imageSmoothingEnabled = true

function getDataImage(status, IMAGES): Promise<HTMLImageElement> {
  const src = IMAGES[status]
  if (!src) {
    console.error('no image status', status)
  }
  return getImage(src)
}
const cache = {}

export async function getDeviceImage(
  status,
  angle,
  { IMAGES, ICON_SIZE, IMG_W, IMG_H },
) {
  angle = Math.round(angle)
  if (cache[status + angle]) {
    return cache[status + angle]
  }
  const carImage = await getDataImage(status, IMAGES)

  canvas.width = ICON_SIZE
  canvas.height = ICON_SIZE
  context.clearRect(0, 0, canvas.width, canvas.height)
  context.save()
  context.translate(canvas.width / 2, canvas.height / 2)
  context.rotate((angle * Math.PI) / 180)
  context.drawImage(
    carImage,
    0,
    0,
    carImage.naturalWidth,
    carImage.naturalHeight,
    -IMG_W / 2,
    -IMG_H / 2,
    IMG_W,
    IMG_H,
  )
  context.restore()
  const data = canvas.toDataURL()
  const result = await getImage(data)
  cache['' + status + angle] = result
  return result
}
