export async function getImageSize(blob: Blob): Promise<{
  height: number;
  width: number;
}> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = function () {
      if (navigator.userAgent.toLowerCase().includes("firefox") && blob.type === "image/svg+xml") {
        // mimicking chrome user agent behavior
        if (!img.naturalWidth && !img.naturalHeight) {
          img.style.maxWidth = "150px";
        } else if (!img.naturalWidth) {
          img.style.width = `${img.naturalHeight}px}`
        } else if (!img.naturalHeight) {
          img.style.height = `${img.naturalWidth}px}`
        }

        // This is needed for all the above cases
        document.body.append(img);
      }

      resolve({
        height: img.height,
        width: img.width,
      });
      // remove the image from the DOM
      URL.revokeObjectURL(img.src);
      img.remove();
    };
    img.onerror = function () {
      reject(new Error("Failed to load image"));
    };
    img.src = URL.createObjectURL(blob);
  });
}
