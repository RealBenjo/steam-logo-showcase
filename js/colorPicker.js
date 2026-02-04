// color picker elements in array
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

// the VERY important event listener
addEventListener("input", (event) => {
  onColorInput(event);
});


function onColorInput(e) {
  // target is the element that triggered the event
  const eventElement = e.target;
  const value = eventElement.value;

  // check which input triggered the event and update the corresponding color variable
  if (colorInputs.top.includes(eventElement)) {
    logoTopColor = value;

  } else if (colorInputs.bottom.includes(eventElement)) {
    logoBottomColor = value;

  } else if (colorInputs.main1.includes(eventElement)) {
    logoMain1 = value;
    
  } else if (colorInputs.main0.includes(eventElement)) {
    logoMain0 = value;
  }

  // sync ALL pickers so desktop + mobile match
  syncColorPickers();

  // redraw both logos
  updateCANVS();
  updateSVG();
}


// AUX //
function syncColorPickers() {
  // foreach simply loops through entire array, i being each element inside the array
  colorInputs.top.forEach(i => i.value = logoTopColor);
  colorInputs.bottom.forEach(i => i.value = logoBottomColor);
  colorInputs.main1.forEach(i => i.value = logoMain1);
  colorInputs.main0.forEach(i => i.value = logoMain0);
}
