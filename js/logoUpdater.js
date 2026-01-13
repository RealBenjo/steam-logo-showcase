// logo vars
var size = 36; // used by canvas only
var logoTopColor = "#c5c3c0";
var logoBottomColor = "#c5c3c0";
var logoMain1 = "#171a21";
var logoMain0 = "#c5c3c0";
// suboptimal optimization
var isImg;
var isCanvas;

// svg elements
const steam_logo_svg = document.getElementById("steamLogoSVG");
const handle_circles = document.getElementById("handle_circles");
const handles = document.getElementById("handles");
const outer_section = document.getElementById("outer_section");
const topGradColor = document.getElementById("topSvgColor");
const bottomGradColor = document.getElementById("bottomSvgColor");

// png element
const steam_logo_png = document.getElementById("steamLogoPNG");

function updateSVG() {
  const svg = document.getElementById("steamLogoSVG");
  const hc = document.getElementById("handle_circles");
  const hs = document.getElementById("handles");
  const os = document.getElementById("outer_section");
  const tgc = document.getElementById("topSvgColor");
  const bgc = document.getElementById("bottomSvgColor");

  // return if missing SVG pieces
  if (!svg || !hc || !hs || !os || !tgc || !bgc) return;

  hc.setAttribute("fill", logoMain0);
  hs.setAttribute("fill", logoMain1);
  tgc.setAttribute("stop-color", logoTopColor);
  bgc.setAttribute("stop-color", logoBottomColor);
}

function updateCANVS() {
  // get canvas and context
  var c = document.getElementById("steamLogoCanvas");
  if (!c) return; // canvas missing (SVG injection may have removed it)
  var ctx = c.getContext("2d");

  // set the canvas size so the logo fits into it
  c.width = size;
  c.height = size;

  // create gradient aligned to circle
  var grd = ctx.createLinearGradient(size/2, size/6, size/2, size);
  grd.addColorStop(0, logoTopColor);
  grd.addColorStop(1, logoBottomColor);



  // draw the main logo circle and fill it with the gradient
  ctx.beginPath();
  ctx.arc(size/2, size/2, size/2, 0, 2 * Math.PI);
  ctx.fillStyle = grd;
  ctx.fill();




  // top right handle (under all elements of the logo)
  ctx.beginPath();
  ctx.moveTo(size*0.480, size*0.361);
  ctx.lineTo(size*0.671, size*0.557);
  ctx.lineTo(size*0.482, size*0.693);
  ctx.lineTo(size*0.346, size*0.553);
  ctx.closePath();
  ctx.fillStyle = logoMain1;
  ctx.fill();



  // top right outer circle (the big white one)
  ctx.beginPath();
  ctx.arc(size*0.677, size*0.366, size*0.199, 0, 2 * Math.PI);
  ctx.fillStyle = logoMain1;
  ctx.fill();

  // top right middle circle (the black one)
  ctx.beginPath();
  ctx.arc(size*0.677, size*0.366, size*0.126, 0, 2 * Math.PI);
  ctx.fillStyle = logoMain0;
  ctx.fill();

  // top right inner circle (the small white one)
  ctx.beginPath();
  ctx.arc(size*0.677, size*0.366, size*0.094, 0, 2 * Math.PI);
  ctx.fillStyle = logoMain1;
  ctx.fill();



  // bottom left outer circle (the big white one)
  ctx.beginPath();
  ctx.arc(size*0.339, size*0.695, size*0.152, 0, 2 * Math.PI);
  ctx.fillStyle = logoMain1;
  ctx.fill();

  // bottom left middle circle (the black one)
  ctx.beginPath();
  ctx.arc(size*0.339, size*0.695, size*0.116, 0, 2 * Math.PI);
  ctx.fillStyle = logoMain0;
  ctx.fill();

  // bottom left inner circle (the small white one)
  ctx.beginPath();
  ctx.arc(size*0.339, size*0.695, size*0.083, 0, 2 * Math.PI);
  ctx.fillStyle = logoMain1;
  ctx.fill();



  // bottom left handle (above all elements of the logo)
  ctx.beginPath();
  ctx.moveTo(size*0.371, size*0.619);
  ctx.lineTo(size*0.313, size*0.7735);
  ctx.lineTo(size*0.023, size*0.652);
  ctx.lineTo(size*0.017, size*0.632);
  ctx.lineTo(size*0.011, size*0.606);
  ctx.lineTo(size*0.006, size*0.580);
  ctx.lineTo(size*0.002, size*0.549);
  ctx.lineTo(size*0.000, size*0.520);
  ctx.lineTo(0, size*0.491);
  ctx.lineTo(size*0.001, size*0.465);
  ctx.closePath();
  ctx.fillStyle = logoMain1;
  ctx.fill();
}

// update all logos on first load
updateCANVS();
updateSVG();