import { getBsImage } from './getBsImage'
import { getDeviceImage } from './getDeviceImage'

const ICON_SIZE = 52 // === DEVICE_W
const DEVICE_W = ICON_SIZE
const TEXT_PER = 0.4
const TEXT_H = Math.round(TEXT_PER * ICON_SIZE)
const DEVICE_H = ICON_SIZE + TEXT_H

const ANCHOR = ICON_SIZE / 2

const canvas = document.createElement('canvas')
canvas.width = DEVICE_W
canvas.height = DEVICE_H
const context = canvas.getContext('2d') as CanvasRenderingContext2D
context.imageSmoothingEnabled = true
const cache = {}
export async function getIcon(status, angle, bs, ICON_CONFIG) {
  angle = angle % 360
  const cacheKey = '' + status + angle + bs
  if (cache[cacheKey]) {
    return cache[cacheKey]
  }
  let deviceImage
  deviceImage = await getDeviceImage(status, angle, ICON_CONFIG)
  context.clearRect(0, 0, canvas.width, canvas.height)
  context.drawImage(
    deviceImage,
    0,
    0,
    deviceImage.naturalWidth,
    deviceImage.naturalHeight,
    0,
    0,
    ICON_SIZE,
    ICON_SIZE,
  )
  const bsImage = await getBsImage(bs)
  context.drawImage(
    bsImage,
    0,
    0,
    bsImage.naturalWidth,
    bsImage.naturalHeight,
    0,
    DEVICE_H - TEXT_H,
    canvas.width,
    TEXT_H,
  )
  const result = {
    url: canvas.toDataURL(),
    // size: { width: 30, height: 60 },
    origin: { x: 0, y: 0 },
    anchor: { x: ANCHOR, y: ANCHOR },
    scaledSize: { width: DEVICE_W, height: DEVICE_H },
  }
  cache[cacheKey] = result
  return result
}
