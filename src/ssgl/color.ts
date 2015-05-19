/// <reference path="../d/client.d.ts" />

var colorTemplate: HTMLDivElement = null;
function getElem(): HTMLDivElement {
  if(colorTemplate === null) {
    colorTemplate = document.createElement("div");
    colorTemplate.style.display = "none";
    document.body.appendChild(colorTemplate);
  }
  return colorTemplate;
}
export function cssToInt(str: string): number {
  if(!str)
    return null;
  var elem = getElem()
  elem.style.color = "";
  elem.style.color = str;
  var col = elem.style.color;
  if(col !== "") {
    var m = getComputedStyle(elem).color
      .match(/^rgba?\((\d+), (\d+), (\d+)(?:, \d+)?\)$/);
    if(m !== null) {
      var [r, g, b] = m.slice(1).map(v => +v);
      return r<<16 | g <<8 | b;
    }
  }
  return null;
}
function hex2(val) {
  var str = val.toString(16);
  if(val < 16)
    return "0" + str;
  return str; 
}
export function intToCss(col: number): string {
  if(col == null)
    return null;
  
  var str = [col >> 16, (col >> 8) & 0xff, col & 0xff].map(hex2).join("");
  if(str[0] === str[1] && str[2] === str[3] && str[4] === str[5])
    str = str[0] + str[2] + str[3];
  return "#" + str;
}
