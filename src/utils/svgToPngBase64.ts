export const svgToPngBase64 = (svgElement: SVGSVGElement): Promise<string> => {
  return new Promise((resolve, reject) => {
    const svgData = new XMLSerializer().serializeToString(svgElement);
    const svgBlob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(svgBlob);

    const image = new Image();
    image.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = image.width;
      canvas.height = image.height;
      const ctx = canvas.getContext("2d");
      if (!ctx) return reject("Erro ao criar contexto de canvas");

      ctx.drawImage(image, 0, 0);
      URL.revokeObjectURL(url);

      const pngData = canvas.toDataURL("image/png");
      resolve(pngData);
    };
    image.onerror = (err) => reject(err);
    image.src = url;
  });
};
