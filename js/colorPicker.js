// color picker elements in enum
const colorInputs = {
  top: [
    document.getElementById("deskLogoColorTop"),
    document.getElementById("moblLogoColorTop")
  ],
  bottom: [
    document.getElementById("deskLogoColorBottom"),
    document.getElementById("moblLogoColorBottom")
  ],
  main1: [
    document.getElementById("deskLogoColor1"),
    document.getElementById("moblLogoColor1")
  ],
  main0: [
    document.getElementById("deskLogoColor0"),
    document.getElementById("moblLogoColor0")
  ]
};

// set default values of ALL input elements
colorInputs.top.forEach(picker => picker.value = logoTopColor);
colorInputs.bottom.forEach(picker => picker.value = logoBottomColor);
colorInputs.main1.forEach(picker => picker.value = logoMain1);
colorInputs.main0.forEach(picker => picker.value = logoMain0);

function syncColorPickers() {
  // foreach simply loops through entire array, i being each element inside the array
  colorInputs.top.forEach(i => i.value = logoTopColor);
  colorInputs.bottom.forEach(i => i.value = logoBottomColor);
  colorInputs.main1.forEach(i => i.value = logoMain1);
  colorInputs.main0.forEach(i => i.value = logoMain0);
}

function onColorInput(e) {
  const value = e.target.value;

  if (colorInputs.top.includes(e.target)) {
    logoTopColor = value;
  } else if (colorInputs.bottom.includes(e.target)) {
    logoBottomColor = value;
  } else if (colorInputs.main1.includes(e.target)) {
    logoMain1 = value;
  } else if (colorInputs.main0.includes(e.target)) {
    logoMain0 = value;
  }

  // sync ALL pickers so desktop + mobile match
  syncColorPickers();

  // redraw both logos
  updateCANVS();
  updateSVG();
}

addEventListener("input", (event) => {
  onColorInput(event);
});

