// import { optimise } from "@/utils/packages/oxipng";

export async function optimizePNG(blob: Blob) {
  // if (blob.type !== "image/png") {
  //   throw new Error("Blob is not a PNG");
  // }

  // const arraybuffer = await blob.arrayBuffer();
  // const optimisedArrayBuffer = await optimise(arraybuffer);
  // const optimisedBlob = new Blob([optimisedArrayBuffer], {
  //   type: blob.type,
  // });

  // return optimisedBlob;

  // FIXME: vite build fails with the above code, so we'll just return the original blob for now
  // https://github.com/vitejs/vite/issues/13367
  return blob;
}