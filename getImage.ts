export function getImage(src): Promise<HTMLImageElement> {
  const image: HTMLImageElement = new Image();
  return new Promise(resolve => {
    image.onload = () => resolve(image);
    image.src = src;
  });
}
