export default function oscurecer(HexString) {
    const porcentaje_de_oscurecimiento = 60;            // cambiando esto se cambia que tanto se oscurece el color
    // Convert hex to RGB first
    let r = 0, g = 0, b = 0;
    if (HexString.length === 4) {
      r = "0x" + HexString[1] + HexString[1];
      g = "0x" + HexString[2] + HexString[2];
      b = "0x" + HexString[3] + HexString[3];
    } else if (HexString.length === 7) {
      r = "0x" + HexString[1] + HexString[2];
      g = "0x" + HexString[3] + HexString[4];
      b = "0x" + HexString[5] + HexString[6];
    }
    // Then to HSL
    r /= 255;
    g /= 255;
    b /= 255;
    let cmin = Math.min(r,g,b),
        cmax = Math.max(r,g,b),
        delta = cmax - cmin,
        h = 0,
        s = 0,
        l = 0;
  
    if (delta === 0)
      h = 0;
    else if (cmax === r)
      h = ((g - b) / delta) % 6;
    else if (cmax === g)
      h = (b - r) / delta + 2;
    else
      h = (r - g) / delta + 4;
  
    h = Math.round(h * 60);
  
    if (h < 0)
      h += 360;
  
    l = (cmax + cmin) / 2;
    s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);

    l = l - (l/100*porcentaje_de_oscurecimiento)

    return "hsl(" + h + "," + s + "%," + l + "%)";
}