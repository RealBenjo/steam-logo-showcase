// color picker elements
const colPickLogoTop = document.getElementById("logoColorTop");
const colPickLogoBottom = document.getElementById("logoColorBottom");
const colPickLogo1 = document.getElementById("logoColor1");
const colPickLogo0 = document.getElementById("logoColor0");

// set default values of the input elements
colPickLogoTop.value = logoTopColor;
colPickLogoBottom.value = logoBottomColor;
colPickLogo1.value = logoMain1;
colPickLogo0.value = logoMain0;

addEventListener("input", (event) => {
  logoTopColor = colPickLogoTop.value;
  logoBottomColor = colPickLogoBottom.value;
  logoMain1 = colPickLogo1.value;
  logoMain0 = colPickLogo0.value;

  // update logos on user input
  updateCANVS();
  updateSVG();
});
