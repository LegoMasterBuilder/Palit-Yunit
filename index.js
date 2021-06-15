// 
function copytoclipboard() {
  /* Get the text field */
  var copyText = document.getElementById("myInput");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

  /* Copy the text inside the text field */
  document.execCommand("copy");

  // /* Alert the copied text */
  // alert("Copied the text: " + copyText.value);
}

// Function to switch drop down menu

function exchangeDropDown(){
  // Dropdown Menu Left (Palitan Mula Sa)
  const drop_a1 = document.getElementById("distansya-yunits");
  const drop_b1 = document.getElementById("bigat-yunits");
  const drop_c1 = document.getElementById("kapasidad-yunits");
  const drop_d1 = document.getElementById("oras-yunits");
  const drop_e1 = document.getElementById("trad-yunits");

  // Dropdown Menu Right (Palitan Patungo Sa)
  const drop_a2 = document.getElementById("distansya-yunits-2");
  const drop_b2 = document.getElementById("bigat-yunits-2");
  const drop_c2 = document.getElementById("kapasidad-yunits-2");
  const drop_d2 = document.getElementById("oras-yunits-2");
  const drop_e2 = document.getElementById("trad-yunits-2");

  const toggle_a = document.getElementById("distansya-btn");
  const toggle_b = document.getElementById("bigat-btn");
  const toggle_c = document.getElementById("kapasidad-btn");
  const toggle_d = document.getElementById("oras-btn");
  const toggle_e = document.getElementById("trad-btn");

  if (toggle_a.checked) {
    drop_a1.style.display = "block";
    drop_b1.style.display = "none";
    drop_c1.style.display = "none";
    drop_d1.style.display = "none";
    drop_e1.style.display = "none";
    drop_a2.style.display = "block";
    drop_b2.style.display = "none";
    drop_c2.style.display = "none";
    drop_d2.style.display = "none";
    drop_e2.style.display = "none";
  } 
  else if (toggle_b.checked) {
    drop_a1.style.display = "none";
    drop_b1.style.display = "block";
    drop_c1.style.display = "none";
    drop_d1.style.display = "none";
    drop_e1.style.display = "none";
    drop_a2.style.display = "none";
    drop_b2.style.display = "block";
    drop_c2.style.display = "none";
    drop_d2.style.display = "none";
    drop_e2.style.display = "none";
  } 
  else if (toggle_c.checked) {
    drop_a1.style.display = "none";
    drop_b1.style.display = "none";
    drop_c1.style.display = "block";
    drop_d1.style.display = "none";
    drop_e1.style.display = "none";
    drop_a2.style.display = "none";
    drop_b2.style.display = "none";
    drop_c2.style.display = "block";
    drop_d2.style.display = "none";
    drop_e2.style.display = "none";
  } 
  else if (toggle_d.checked) {
    drop_a1.style.display = "none";
    drop_b1.style.display = "none";
    drop_c1.style.display = "none";
    drop_d1.style.display = "block";
    drop_e1.style.display = "none";
    drop_a2.style.display = "none";
    drop_b2.style.display = "none";
    drop_c2.style.display = "none";
    drop_d2.style.display = "block";
    drop_e2.style.display = "none";
  } 
  else if (toggle_e.checked) {
    drop_a1.style.display = "none";
    drop_b1.style.display = "none";
    drop_c1.style.display = "none";
    drop_d1.style.display = "none";
    drop_e1.style.display = "block";
    drop_a2.style.display = "none";
    drop_b2.style.display = "none";
    drop_c2.style.display = "none";
    drop_d2.style.display = "none";
    drop_e2.style.display = "block";
  }
}

// Function to get the combination of units

var input = document.getElementById('input');
var result = document.getElementById('result');
var inputType = document.getElementById('inputType');
var resultType = document.getElementById('resultType');
var inputTypeValue,resultTypeValue;

// now add listener
input.addEventListener("keyup",LengthConverter);
inputType.addEventListener("change",LengthConverter);
resultType.addEventListener("change",LengthConverter);

// taking initial value
inputTypeValue = inputType.value;
resultTypeValue = resultType.value;
  
function LengthConverter(){
// when we change the input and output type vale we need to updata the 
// inputTypeValue and resultTypeValue
  const toggle_a = document.getElementById("distansya-btn");
  const toggle_b = document.getElementById("bigat-btn");
  const toggle_c = document.getElementById("kapasidad-btn");
  const toggle_d = document.getElementById("oras-btn");
  const toggle_e = document.getElementById("trad-btn");

  if (toggle_a.checked) {
    inputTypeValue = inputTypeDistansya.value;
    resultTypeValue = resultTypeDistansya.value;
  }
  else if (toggle_b.checked) {
    inputTypeValue = inputTypeBigat.value;
    resultTypeValue = resultTypeBigat.value;
  }
  else if (toggle_c.checked) {
    inputTypeValue = inputTypeKap.value;
    resultTypeValue = resultTypeKap.value;
  }
  else if (toggle_d.checked) {
    inputTypeValue = inputTypeOras.value;
    resultTypeValue = resultTypeOras.value;
  }
  else if (toggle_e.checked) {
    inputTypeValue = inputTypeTrad.value;
    resultTypeValue = resultTypeTrad.value;
  }

  // UNIT PAIRINGS

  // Kapag pareho yung input sa output yunit
  if(inputTypeValue === resultTypeValue){ 
    result.innerHTML = Number(input.value);
  }

  // DISTANSYA LENGTH
  // metro to unit
  if(inputTypeValue === "m" && resultTypeValue==="sm"){ 
    result.innerHTML = Number(input.value) * 100;
  }else if(inputTypeValue === "m" && resultTypeValue==="mm"){
    result.innerHTML = Number(input.value) * 1000;
  }else if(inputTypeValue === "m" && resultTypeValue==="km"){
    result.innerHTML = Number(input.value) * 0.001;
  }else if(inputTypeValue === "m" && resultTypeValue==="pul"){
    result.innerHTML = Number(input.value) * 39.3701;
  }else if(inputTypeValue === "m" && resultTypeValue==="p"){
    result.innerHTML = Number(input.value) * 3.281;
  }else if(inputTypeValue === "m" && resultTypeValue==="yd"){
    result.innerHTML = Number(input.value) * 1.094;
  }else if(inputTypeValue === "m" && resultTypeValue==="mi"){
    result.innerHTML = Number(input.value) / 1609;
  }else if(inputTypeValue === "m" && resultTypeValue==="dipa"){
    result.innerHTML = Number(input.value) * 0.54683;
  }

  // sentimetro to unit
  if(inputTypeValue === "sm" && resultTypeValue==="m"){ 
    result.innerHTML = Number(input.value) / 100;
  }else if(inputTypeValue === "sm" && resultTypeValue==="mm"){
    result.innerHTML = Number(input.value) * 10;
  }else if(inputTypeValue === "sm" && resultTypeValue==="km"){
    result.innerHTML = Number(input.value) * 0.00001;
  }else if(inputTypeValue === "sm" && resultTypeValue==="pul"){
    result.innerHTML = Number(input.value) / 2.54;
  }else if(inputTypeValue === "sm" && resultTypeValue==="p"){
    result.innerHTML = Number(input.value) / 30.48;
  }else if(inputTypeValue === "sm" && resultTypeValue==="yd"){
    result.innerHTML = Number(input.value) / 91.44;
  }else if(inputTypeValue === "sm" && resultTypeValue==="mi"){
    result.innerHTML = Number(input.value) / 160934;
  }else if(inputTypeValue === "sm" && resultTypeValue==="dipa"){
    result.innerHTML = Number(input.value) * 0.0054683;
  }

  // milimetro to unit
  if(inputTypeValue === "mm" && resultTypeValue==="m"){ 
    result.innerHTML = Number(input.value) / 1000;
  }else if(inputTypeValue === "mm" && resultTypeValue==="sm"){
    result.innerHTML = Number(input.value) / 10;
  }else if(inputTypeValue === "mm" && resultTypeValue==="km"){
    result.innerHTML = Number(input.value) / 1000000;
  }else if(inputTypeValue === "mm" && resultTypeValue==="pul"){
    result.innerHTML = Number(input.value) / 25.4;
  }else if(inputTypeValue === "mm" && resultTypeValue==="p"){
    result.innerHTML = Number(input.value) / 304.8;
  }else if(inputTypeValue === "mm" && resultTypeValue==="yd"){
    result.innerHTML = Number(input.value) / 914;
  }else if(inputTypeValue === "mm" && resultTypeValue==="mi"){
    result.innerHTML = Number(input.value) / 0.00000160934;
  }else if(inputTypeValue === "mm" && resultTypeValue==="dipa"){
    result.innerHTML = Number(input.value) * 0.00054683;
  }

  // kilometro to unit
  if(inputTypeValue === "km" && resultTypeValue==="m"){ 
    result.innerHTML = Number(input.value) * 1000;
  }else if(inputTypeValue === "km" && resultTypeValue==="sm"){
    result.innerHTML = Number(input.value) * 100000;
  }else if(inputTypeValue === "mm" && resultTypeValue==="mm"){
    result.innerHTML = Number(input.value) * 1000000;
  }else if(inputTypeValue === "km" && resultTypeValue==="pul"){
    result.innerHTML = Number(input.value) * 39380;
  }else if(inputTypeValue === "km" && resultTypeValue==="p"){
    result.innerHTML = Number(input.value) * 3281;
  }else if(inputTypeValue === "km" && resultTypeValue==="yd"){
    result.innerHTML = Number(input.value) * 1094;
  }else if(inputTypeValue === "km" && resultTypeValue==="mi"){
    result.innerHTML = Number(input.value) / 1.609;
  }else if(inputTypeValue === "km" && resultTypeValue==="dipa"){
    result.innerHTML = Number(input.value) * 546.83;
  }

  // pulgada to unit
  if(inputTypeValue === "pul" && resultTypeValue==="m"){ 
    result.innerHTML = Number(input.value) / 39.37;
  }else if(inputTypeValue === "pul" && resultTypeValue==="sm"){
    result.innerHTML = Number(input.value) * 2.54;
  }else if(inputTypeValue === "pul" && resultTypeValue==="mm"){
    result.innerHTML = Number(input.value) * 25.4;
  }else if(inputTypeValue === "pul" && resultTypeValue==="km"){
    result.innerHTML = Number(input.value) / 39380;
  }else if(inputTypeValue === "pul" && resultTypeValue==="p"){
    result.innerHTML = Number(input.value) / 12;
  }else if(inputTypeValue === "pul" && resultTypeValue==="yd"){
    result.innerHTML = Number(input.value) / 36;
  }else if(inputTypeValue === "pul" && resultTypeValue==="mi"){
    result.innerHTML = Number(input.value) * 63360;
  }else if(inputTypeValue === "pul" && resultTypeValue==="dipa"){
    result.innerHTML = Number(input.value) * 0.0129;
  }

  // talampakan/piye to unit
  if(inputTypeValue === "p" && resultTypeValue==="m"){ 
    result.innerHTML = Number(input.value) / 3.281;
  }else if(inputTypeValue === "p" && resultTypeValue==="sm"){
    result.innerHTML = Number(input.value) * 30.48;
  }else if(inputTypeValue === "p" && resultTypeValue==="mm"){
    result.innerHTML = Number(input.value) * 304.8;
  }else if(inputTypeValue === "p" && resultTypeValue==="km"){
    result.innerHTML = Number(input.value) / 3281;
  }else if(inputTypeValue === "p" && resultTypeValue==="pul"){
    result.innerHTML = Number(input.value) * 12;
  }else if(inputTypeValue === "p" && resultTypeValue==="yd"){
    result.innerHTML = Number(input.value) / 3;
  }else if(inputTypeValue === "p" && resultTypeValue==="mi"){
    result.innerHTML = Number(input.value) * 5280;
  }else if(inputTypeValue === "p" && resultTypeValue==="dipa"){
    result.innerHTML = Number(input.value) / 6;
  }

  // Yarda to unit
  if(inputTypeValue === "yd" && resultTypeValue==="m"){ 
    result.innerHTML = Number(input.value) / 1.094;
  }else if(inputTypeValue === "yd" && resultTypeValue==="sm"){
    result.innerHTML = Number(input.value) * 91.44;
  }else if(inputTypeValue === "yd" && resultTypeValue==="mm"){
    result.innerHTML = Number(input.value) * 914;
  }else if(inputTypeValue === "yd" && resultTypeValue==="km"){
    result.innerHTML = Number(input.value) / 1094;
  }else if(inputTypeValue === "yd" && resultTypeValue==="pul"){
    result.innerHTML = Number(input.value) * 36;
  }else if(inputTypeValue === "yd" && resultTypeValue==="p"){
    result.innerHTML = Number(input.value) * 3;
  }else if(inputTypeValue === "yd" && resultTypeValue==="mi"){
    result.innerHTML = Number(input.value) * 1760;
  }else if(inputTypeValue === "yd" && resultTypeValue==="dipa"){
    result.innerHTML = Number(input.value) * 0.50101;
  }

  // Milya to unit
  if(inputTypeValue === "mi" && resultTypeValue==="m"){ 
    result.innerHTML = Number(input.value) * 1609;
  }else if(inputTypeValue === "mi" && resultTypeValue==="sm"){
    result.innerHTML = Number(input.value) * 160934;
  }else if(inputTypeValue === "mi" && resultTypeValue==="mm"){
    result.innerHTML = Number(input.value) * 1609340;
  }else if(inputTypeValue === "mi" && resultTypeValue==="km"){
    result.innerHTML = Number(input.value) * 1.609;
  }else if(inputTypeValue === "mi" && resultTypeValue==="pul"){
    result.innerHTML = Number(input.value) * 63360;
  }else if(inputTypeValue === "mi" && resultTypeValue==="p"){
    result.innerHTML = Number(input.value) * 5280;
  }else if(inputTypeValue === "mi" && resultTypeValue==="yd"){
    result.innerHTML = Number(input.value) * 1760;
  }else if(inputTypeValue === "mi" && resultTypeValue==="dipa"){
    result.innerHTML = Number(input.value) * 879.85;
  }

  // Dipa to unit
  if(inputTypeValue === "dipa" && resultTypeValue==="m"){ 
    result.innerHTML = Number(input.value) * 1.8287;
  }else if(inputTypeValue === "dipa" && resultTypeValue==="sm"){
    result.innerHTML = Number(input.value) * 182.88;
  }else if(inputTypeValue === "dipa" && resultTypeValue==="mm"){
    result.innerHTML = Number(input.value) * 1828.8;
  }else if(inputTypeValue === "dipa" && resultTypeValue==="km"){
    result.innerHTML = Number(input.value) * 0.0018287;
  }else if(inputTypeValue === "dipa" && resultTypeValue==="pul"){
    result.innerHTML = Number(input.value) * 72;
  }else if(inputTypeValue === "dipa" && resultTypeValue==="p"){
    result.innerHTML = Number(input.value) * 6;
  }else if(inputTypeValue === "dipa" && resultTypeValue==="yd"){
    result.innerHTML = Number(input.value) * 2;
  }else if(inputTypeValue === "dipa" && resultTypeValue==="mi"){
    result.innerHTML = Number(input.value) * 0.001136;
  }

  // BIGAT WEIGHT
  // Gramo to unit
  if(inputTypeValue === "g" && resultTypeValue==="mg"){ 
    result.innerHTML = Number(input.value) * 1000;
  }else if(inputTypeValue === "g" && resultTypeValue==="kg"){
    result.innerHTML = Number(input.value) / 1000;
  }else if(inputTypeValue === "g" && resultTypeValue==="T"){
    result.innerHTML = Number(input.value) / 907185;
  }

  // Miligramo to unit
  if(inputTypeValue === "mg" && resultTypeValue==="g"){ 
    result.innerHTML = Number(input.value) / 1000;
  }else if(inputTypeValue === "mg" && resultTypeValue==="kg"){
    result.innerHTML = Number(input.value) / 1000000;
  }else if(inputTypeValue === "mg" && resultTypeValue==="T"){
    result.innerHTML = Number(input.value) / 907185000;
  }

  // Kilogramo to unit
  if(inputTypeValue === "kg" && resultTypeValue==="g"){ 
    result.innerHTML = Number(input.value) * 1000;
  }else if(inputTypeValue === "kg" && resultTypeValue==="mg"){
    result.innerHTML = Number(input.value) * 1000000;
  }else if(inputTypeValue === "kg" && resultTypeValue==="T"){
    result.innerHTML = Number(input.value) / 907;
  }

  // Tonelada to unit
  if(inputTypeValue === "T" && resultTypeValue==="g"){ 
    result.innerHTML = Number(input.value) * 907185;
  }else if(inputTypeValue === "T" && resultTypeValue==="mg"){
    result.innerHTML = Number(input.value) * 907185000;
  }else if(inputTypeValue === "T" && resultTypeValue==="kg"){
    result.innerHTML = Number(input.value) * 907;
  }

  // KAPASIDAD VOLUME
  // Litro to Unit
  if(inputTypeValue === "L" && resultTypeValue==="kL"){ 
    result.innerHTML = Number(input.value) / 1000;
  }else if(inputTypeValue === "L" && resultTypeValue==="sL"){
    result.innerHTML = Number(input.value) * 100;
  }else if(inputTypeValue === "L" && resultTypeValue==="mL"){
    result.innerHTML = Number(input.value) * 1000;
  }else if(inputTypeValue === "L" && resultTypeValue==="gal"){
    result.innerHTML = Number(input.value) / 3.785;
  }else if(inputTypeValue === "L" && resultTypeValue==="ktsra"){
    result.innerHTML = Number(input.value) * 67.628;
  }else if(inputTypeValue === "L" && resultTypeValue==="ktsrta"){
    result.innerHTML = Number(input.value) * 202.88;
  }
  // invalid pairing
  else if(inputTypeValue === "L" && resultTypeValue==="tasa"){
    result.innerHTML = "Pumili ng ibang yunit.";
  }else if(inputTypeValue === "L" && resultTypeValue==="onsa"){
    result.innerHTML = "Pumili ng ibang yunit.";
  }else if(inputTypeValue === "L" && resultTypeValue==="gramo"){
    result.innerHTML = "Pumili ng ibang yunit.";
  }

  // Kilolitro to Unit
  if(inputTypeValue === "kL" && resultTypeValue==="L"){ 
    result.innerHTML = Number(input.value) * 1000;
  }else if(inputTypeValue === "kL" && resultTypeValue==="sL"){
    result.innerHTML = Number(input.value) * 100000;
  }else if(inputTypeValue === "kL" && resultTypeValue==="mL"){
    result.innerHTML = Number(input.value) * 1000000;
  }else if(inputTypeValue === "kL" && resultTypeValue==="gal"){
    result.innerHTML = Number(input.value) * 3785;
  }else if(inputTypeValue === "kL" && resultTypeValue==="ktsra"){
    result.innerHTML = Number(input.value) * 67628;
  }else if(inputTypeValue === "kL" && resultTypeValue==="ktsrta"){
    result.innerHTML = Number(input.value) * 202880;
  }
  // invalid pairing
  else if(inputTypeValue === "kL" && resultTypeValue==="tasa"){
    result.innerHTML = "Pumili ng ibang yunit.";
  }else if(inputTypeValue === "kL" && resultTypeValue==="onsa"){
    result.innerHTML = "Pumili ng ibang yunit.";
  }else if(inputTypeValue === "kL" && resultTypeValue==="gramo"){
    result.innerHTML = "Pumili ng ibang yunit.";
  }

  // Sentilitro to Unit
  if(inputTypeValue === "sL" && resultTypeValue==="L"){ 
    result.innerHTML = Number(input.value) / 100;
  }else if(inputTypeValue === "sL" && resultTypeValue==="kL"){
    result.innerHTML = Number(input.value) / 100000;
  }else if(inputTypeValue === "sL" && resultTypeValue==="mL"){
    result.innerHTML = Number(input.value) * 10;
  }else if(inputTypeValue === "sL" && resultTypeValue==="gal"){
    result.innerHTML = Number(input.value) * (2/757);
  }else if(inputTypeValue === "sL" && resultTypeValue==="ktsra"){
    result.innerHTML = Number(input.value) * 0.67628;
  }else if(inputTypeValue === "sL" && resultTypeValue==="ktsrta"){
    result.innerHTML = Number(input.value) * 2.0288;
  }
  // invalid pairing
  else if(inputTypeValue === "sL" && resultTypeValue==="tasa"){
    result.innerHTML = "Pumili ng ibang yunit.";
  }else if(inputTypeValue === "sL" && resultTypeValue==="onsa"){
    result.innerHTML = "Pumili ng ibang yunit.";
  }else if(inputTypeValue === "sL" && resultTypeValue==="gramo"){
    result.innerHTML = "Pumili ng ibang yunit.";
  }

  // Mililitro to Unit
  if(inputTypeValue === "mL" && resultTypeValue==="L"){ 
    result.innerHTML = Number(input.value) / 1000;
  }else if(inputTypeValue === "mL" && resultTypeValue==="kL"){
    result.innerHTML = Number(input.value) / 1000000;
  }else if(inputTypeValue === "mL" && resultTypeValue==="sL"){
    result.innerHTML = Number(input.value) / 10;
  }else if(inputTypeValue === "mL" && resultTypeValue==="gal"){
    result.innerHTML = Number(input.value) / 3785;
  }else if(inputTypeValue === "mL" && resultTypeValue==="ktsra"){
    result.innerHTML = Number(input.value) * 0.067628;
  }else if(inputTypeValue === "mL" && resultTypeValue==="ktsrta"){
    result.innerHTML = Number(input.value) * (634/3125);
  }
  // invalid pairing
  else if(inputTypeValue === "mL" && resultTypeValue==="tasa"){
    result.innerHTML = "Pumili ng ibang yunit.";
  }else if(inputTypeValue === "mL" && resultTypeValue==="onsa"){
    result.innerHTML = "Pumili ng ibang yunit.";
  }else if(inputTypeValue === "mL" && resultTypeValue==="gramo"){
    result.innerHTML = "Pumili ng ibang yunit.";
  }

  // Galon to Unit
  if(inputTypeValue === "gal" && resultTypeValue==="L"){ 
    result.innerHTML = Number(input.value) * 3.785;
  }else if(inputTypeValue === "gal" && resultTypeValue==="kL"){
    result.innerHTML = Number(input.value) * 0.003785;
  }else if(inputTypeValue === "gal" && resultTypeValue==="sL"){
    result.innerHTML = Number(input.value) * 378.5;
  }else if(inputTypeValue === "gal" && resultTypeValue==="mL"){
    result.innerHTML = Number(input.value) * 3785;
  }else if(inputTypeValue === "gal" && resultTypeValue==="ktsra"){
    result.innerHTML = Number(input.value) * 255.97198;
  }else if(inputTypeValue === "gal" && resultTypeValue==="ktsrta"){
    result.innerHTML = Number(input.value) * 767.9008;
  }
  // invalid pairing
  else if(inputTypeValue === "gal" && resultTypeValue==="tasa"){
    result.innerHTML = "Pumili ng ibang yunit.";
  }else if(inputTypeValue === "gal" && resultTypeValue==="onsa"){
    result.innerHTML = "Pumili ng ibang yunit.";
  }else if(inputTypeValue === "gal" && resultTypeValue==="gramo"){
    result.innerHTML = "Pumili ng ibang yunit.";
  }

  // Kutsara to Unit
  if(inputTypeValue === "ktsra" && resultTypeValue==="L"){ 
    result.innerHTML = Number(input.value) / 67.628;
  }else if(inputTypeValue === "ktsra" && resultTypeValue==="kL"){
    result.innerHTML = Number(input.value) / 67628;
  }else if(inputTypeValue === "ktsra" && resultTypeValue==="sL"){
    result.innerHTML = Number(input.value) * 1.478677471;
  }else if(inputTypeValue === "ktsra" && resultTypeValue==="mL"){
    result.innerHTML = Number(input.value) * 14.78677471;
  }else if(inputTypeValue === "ktsra" && resultTypeValue==="gal"){
    result.innerHTML = Number(input.value) * 0.003906677598;
  }else if(inputTypeValue === "ktsra" && resultTypeValue==="ktsrta"){
    result.innerHTML = Number(input.value) * 3;
  }
  // invalid pairing
  else if(inputTypeValue === "ktsra" && resultTypeValue==="tasa"){
    result.innerHTML = "Pumili ng ibang yunit.";
  }else if(inputTypeValue === "ktsra" && resultTypeValue==="onsa"){
    result.innerHTML = "Pumili ng ibang yunit.";
  }else if(inputTypeValue === "ktsra" && resultTypeValue==="gramo"){
    result.innerHTML = "Pumili ng ibang yunit.";
  }

  // Kutsarita to Unit
  if(inputTypeValue === "ktsrta" && resultTypeValue==="L"){ 
    result.innerHTML = Number(input.value) / 202.88;
  }else if(inputTypeValue === "ktsrta" && resultTypeValue==="kL"){
    result.innerHTML = Number(input.value) / 202880;
  }else if(inputTypeValue === "ktsrta" && resultTypeValue==="sL"){
    result.innerHTML = Number(input.value) * (625/1268);
  }else if(inputTypeValue === "ktsrta" && resultTypeValue==="mL"){
    result.innerHTML = Number(input.value) * (3125/634);
  }else if(inputTypeValue === "ktsrta" && resultTypeValue==="gal"){
    result.innerHTML = Number(input.value) * (625/479938);
  }else if(inputTypeValue === "ktsrta" && resultTypeValue==="ktsra"){
    result.innerHTML = Number(input.value) / 3;
  }
  // invalid pairing
  else if(inputTypeValue === "ktsrta" && resultTypeValue==="tasa"){
    result.innerHTML = "Pumili ng ibang yunit.";
  }else if(inputTypeValue === "ktsrta" && resultTypeValue==="onsa"){
    result.innerHTML = "Pumili ng ibang yunit.";
  }else if(inputTypeValue === "ktsrta" && resultTypeValue==="gramo"){
    result.innerHTML = "Pumili ng ibang yunit.";
  }

  // Tasa to Unit
  // invalid pairing
  if(inputTypeValue === "tasa" && resultTypeValue==="L"){ 
    result.innerHTML = "Pumili ng ibang yunit.";
  }else if(inputTypeValue === "tasa" && resultTypeValue==="kL"){
    result.innerHTML = "Pumili ng ibang yunit.";
  }else if(inputTypeValue === "tasa" && resultTypeValue==="sL"){
    result.innerHTML = "Pumili ng ibang yunit.";
  }else if(inputTypeValue === "tasa" && resultTypeValue==="mL"){
    result.innerHTML = "Pumili ng ibang yunit.";
  }else if(inputTypeValue === "tasa" && resultTypeValue==="gal"){
    result.innerHTML = "Pumili ng ibang yunit.";
  }else if(inputTypeValue === "tasa" && resultTypeValue==="ktsra"){
    result.innerHTML = "Pumili ng ibang yunit.";
  }else if(inputTypeValue === "tasa" && resultTypeValue==="ktsrta"){
    result.innerHTML = "Pumili ng ibang yunit.";
  }
  // valid pairing
  else if(inputTypeValue === "tasa" && resultTypeValue==="onsa"){
    result.innerHTML = Number(input.value) * 8;
  }else if(inputTypeValue === "tasa" && resultTypeValue==="gramo"){
    result.innerHTML = Number(input.value) * 226.8;
  }

  // Onsa to Unit
  // invalid pairing
  if(inputTypeValue === "onsa" && resultTypeValue==="L"){ 
    result.innerHTML = "Pumili ng ibang yunit.";
  }else if(inputTypeValue === "onsa" && resultTypeValue==="kL"){
    result.innerHTML = "Pumili ng ibang yunit.";
  }else if(inputTypeValue === "onsa" && resultTypeValue==="sL"){
    result.innerHTML = "Pumili ng ibang yunit.";
  }else if(inputTypeValue === "onsa" && resultTypeValue==="mL"){
    result.innerHTML = "Pumili ng ibang yunit.";
  }else if(inputTypeValue === "onsa" && resultTypeValue==="gal"){
    result.innerHTML = "Pumili ng ibang yunit.";
  }else if(inputTypeValue === "onsa" && resultTypeValue==="ktsra"){
    result.innerHTML = "Pumili ng ibang yunit.";
  }else if(inputTypeValue === "onsa" && resultTypeValue==="ktsrta"){
    result.innerHTML = "Pumili ng ibang yunit.";
  }
  // valid pairing
  else if(inputTypeValue === "onsa" && resultTypeValue==="tasa"){
    result.innerHTML = Number(input.value) / 8;
  }else if(inputTypeValue === "onsa" && resultTypeValue==="gramo"){
    result.innerHTML = Number(input.value) * 28.35;
  }

  // Gramo to Unit
  // invalid pairing
  if(inputTypeValue === "gramo" && resultTypeValue==="L"){ 
    result.innerHTML = "Pumili ng ibang yunit.";
  }else if(inputTypeValue === "gramo" && resultTypeValue==="kL"){
    result.innerHTML = "Pumili ng ibang yunit.";
  }else if(inputTypeValue === "gramo" && resultTypeValue==="sL"){
    result.innerHTML = "Pumili ng ibang yunit.";
  }else if(inputTypeValue === "gramo" && resultTypeValue==="mL"){
    result.innerHTML = "Pumili ng ibang yunit.";
  }else if(inputTypeValue === "gramo" && resultTypeValue==="gal"){
    result.innerHTML = "Pumili ng ibang yunit.";
  }else if(inputTypeValue === "gramo" && resultTypeValue==="ktsra"){
    result.innerHTML = "Pumili ng ibang yunit.";
  }else if(inputTypeValue === "gramo" && resultTypeValue==="ktsrta"){
    result.innerHTML = "Pumili ng ibang yunit.";
  }
  // valid pairing
  else if(inputTypeValue === "gramo" && resultTypeValue==="onsa"){
    result.innerHTML = Number(input.value) / 28.35;
  }else if(inputTypeValue === "gramo" && resultTypeValue==="tasa"){
    result.innerHTML = Number(input.value) / 226.8;
  }
  
  // ORAS TIME
  // Segundo to unit
  if(inputTypeValue === "seg" && resultTypeValue==="min"){ 
    result.innerHTML = Number(input.value) / 60;
  }else if(inputTypeValue === "seg" && resultTypeValue==="hr"){
    result.innerHTML = Number(input.value) / 3600;
  }else if(inputTypeValue === "seg" && resultTypeValue==="araw"){
    result.innerHTML = Number(input.value) / 86400;
  }else if(inputTypeValue === "seg" && resultTypeValue==="buwan"){
    result.innerHTML = Number(input.value) / 2628000;
  }else if(inputTypeValue === "seg" && resultTypeValue==="taon"){
    result.innerHTML = Number(input.value) / 31540000;
  }

  // Minuto to unit
  if(inputTypeValue === "min" && resultTypeValue==="seg"){ 
    result.innerHTML = Number(input.value) * 60;
  }else if(inputTypeValue === "min" && resultTypeValue==="hr"){
    result.innerHTML = Number(input.value) / 60;
  }else if(inputTypeValue === "min" && resultTypeValue==="araw"){
    result.innerHTML = Number(input.value) / 1440;
  }else if(inputTypeValue === "min" && resultTypeValue==="buwan"){
    result.innerHTML = Number(input.value) / 43800;
  }else if(inputTypeValue === "min" && resultTypeValue==="taon"){
    result.innerHTML = Number(input.value) / 525600;
  }

  // Oras (Hours) to unit
  if(inputTypeValue === "hr" && resultTypeValue==="seg"){ 
    result.innerHTML = Number(input.value) * 3600;
  }else if(inputTypeValue === "hr" && resultTypeValue==="min"){
    result.innerHTML = Number(input.value) * 60;
  }else if(inputTypeValue === "hr" && resultTypeValue==="araw"){
    result.innerHTML = Number(input.value) / 24;
  }else if(inputTypeValue === "hr" && resultTypeValue==="buwan"){
    result.innerHTML = Number(input.value) / 730;
  }else if(inputTypeValue === "hr" && resultTypeValue==="taon"){
    result.innerHTML = Number(input.value) / 8760;
  }

  // Araw to unit
  if(inputTypeValue === "araw" && resultTypeValue==="seg"){ 
    result.innerHTML = Number(input.value) * 86400;
  }else if(inputTypeValue === "araw" && resultTypeValue==="min"){
    result.innerHTML = Number(input.value) * 1440;
  }else if(inputTypeValue === "araw" && resultTypeValue==="hr"){
    result.innerHTML = Number(input.value) * 24;
  }else if(inputTypeValue === "araw" && resultTypeValue==="buwan"){
    result.innerHTML = Number(input.value) / 30;
  }else if(inputTypeValue === "araw" && resultTypeValue==="taon"){
    result.innerHTML = Number(input.value) / 365;
  }

  // Buwan to unit
  if(inputTypeValue === "buwan" && resultTypeValue==="seg"){ 
    result.innerHTML = Number(input.value) * 2628000;
  }else if(inputTypeValue === "buwan" && resultTypeValue==="min"){
    result.innerHTML = Number(input.value) * 43800;
  }else if(inputTypeValue === "buwan" && resultTypeValue==="hr"){
    result.innerHTML = Number(input.value) * 730;
  }else if(inputTypeValue === "buwan" && resultTypeValue==="araw"){
    result.innerHTML = Number(input.value) * 30;
  }else if(inputTypeValue === "buwan" && resultTypeValue==="taon"){
    result.innerHTML = Number(input.value) / 12;
  }

  // Taon to unit
  if(inputTypeValue === "taon" && resultTypeValue==="seg"){ 
    result.innerHTML = Number(input.value) * 31540000;
  }else if(inputTypeValue === "taon" && resultTypeValue==="min"){
    result.innerHTML = Number(input.value) * 525600;
  }else if(inputTypeValue === "taon" && resultTypeValue==="hr"){
    result.innerHTML = Number(input.value) * 8760;
  }else if(inputTypeValue === "taon" && resultTypeValue==="araw"){
    result.innerHTML = Number(input.value) * 365;
  }else if(inputTypeValue === "taon" && resultTypeValue==="buwan"){
    result.innerHTML = Number(input.value) * 12;
  }

  // TRADISYUNAL NA YUNITS / NATIVE UNITS
  // Kaban to unit
  if(inputTypeValue === "kaban" && resultTypeValue==="kalahatian"){ 
    result.innerHTML = Number(input.value) * 2;
  }else if(inputTypeValue === "kaban" && resultTypeValue==="ganta"){
    result.innerHTML = Number(input.value) * 25;
  }else if(inputTypeValue === "kaban" && resultTypeValue==="chupa"){
    result.innerHTML = Number(input.value) * 200;
  }else if(inputTypeValue === "kaban" && resultTypeValue==="kagitnaan"){
    result.innerHTML = Number(input.value) * 50;
  }else if(inputTypeValue === "kaban" && resultTypeValue==="apatan"){
    result.innerHTML = Number(input.value) * 800;
  }else if(inputTypeValue === "kaban" && resultTypeValue==="litro"){
    result.innerHTML = Number(input.value) * 75;
  }

  // Litro to unit
  if(inputTypeValue === "litro" && resultTypeValue==="kaban"){ 
    result.innerHTML = Number(input.value) / 75;
  }else if(inputTypeValue === "litro" && resultTypeValue==="ganta"){
    result.innerHTML = Number(input.value) / 3;
  }else if(inputTypeValue === "litro" && resultTypeValue==="chupa"){
    result.innerHTML = Number(input.value) / 0.375;
  }else if(inputTypeValue === "litro" && resultTypeValue==="kagitnaan"){
    result.innerHTML = Number(input.value) / 1.5;
  }else if(inputTypeValue === "litro" && resultTypeValue==="apatan"){
    result.innerHTML = Number(input.value) / 0.09375;
  }else if(inputTypeValue === "litro" && resultTypeValue==="kalahatian"){
    result.innerHTML = Number(input.value) / 37.5;
  }

  // Kalahatian to unit
  if(inputTypeValue === "kalahatian" && resultTypeValue==="kaban"){ 
    result.innerHTML = Number(input.value) * 0.5;
  }else if(inputTypeValue === "kalahatian" && resultTypeValue==="litro"){
    result.innerHTML = Number(input.value) * 0.5;
  }else if(inputTypeValue === "kalahatian" && resultTypeValue==="ganta"){
    result.innerHTML = Number(input.value) * 37.5;
  }else if(inputTypeValue === "kalahatian" && resultTypeValue==="chupa"){
    result.innerHTML = Number(input.value) * 100;
  }else if(inputTypeValue === "kalahatian" && resultTypeValue==="kagitnaan"){
    result.innerHTML = Number(input.value) * 25;
  }else if(inputTypeValue === "kalahatian" && resultTypeValue==="apatan"){
    result.innerHTML = Number(input.value) * 400;
  }

  // Ganta/Salop to unit
  if(inputTypeValue === "ganta" && resultTypeValue==="kaban"){ 
    result.innerHTML = Number(input.value) * 0.04;
  }else if(inputTypeValue === "ganta" && resultTypeValue==="litro"){
    result.innerHTML = Number(input.value) * 3;
  }else if(inputTypeValue === "ganta" && resultTypeValue==="kalahatian"){
    result.innerHTML = Number(input.value) * 0.08;
  }else if(inputTypeValue === "ganta" && resultTypeValue==="chupa"){
    result.innerHTML = Number(input.value) * 8;
  }else if(inputTypeValue === "ganta" && resultTypeValue==="kagitnaan"){
    result.innerHTML = Number(input.value) * 2;
  }else if(inputTypeValue === "ganta" && resultTypeValue==="apatan"){
    result.innerHTML = Number(input.value) * 32;
  }

  // Chupa/Gatang to unit
  if(inputTypeValue === "chupa" && resultTypeValue==="kaban"){ 
    result.innerHTML = Number(input.value) * 0.005;
  }else if(inputTypeValue === "chupa" && resultTypeValue==="litro"){
    result.innerHTML = Number(input.value) * 0.375;
  }else if(inputTypeValue === "chupa" && resultTypeValue==="kalahatian"){
    result.innerHTML = Number(input.value) * 0.01;
  }else if(inputTypeValue === "chupa" && resultTypeValue==="ganta"){
    result.innerHTML = Number(input.value) * 0.125;
  }else if(inputTypeValue === "chupa" && resultTypeValue==="kagitnaan"){
    result.innerHTML = Number(input.value) * 0.25;
  }else if(inputTypeValue === "chupa" && resultTypeValue==="apatan"){
    result.innerHTML = Number(input.value) * 4;
  }

  // Kagitnaan to unit
  if(inputTypeValue === "kagitnaan" && resultTypeValue==="kaban"){ 
    result.innerHTML = Number(input.value) * 0.02;
  }else if(inputTypeValue === "kagitnaan" && resultTypeValue==="litro"){
    result.innerHTML = Number(input.value) * 1.5;
  }else if(inputTypeValue === "kagitnaan" && resultTypeValue==="kalahatian"){
    result.innerHTML = Number(input.value) * 0.04;
  }else if(inputTypeValue === "kagitnaan" && resultTypeValue==="ganta"){
    result.innerHTML = Number(input.value) / 2;
  }else if(inputTypeValue === "kagitnaan" && resultTypeValue==="chupa"){
    result.innerHTML = Number(input.value) * 4;
  }else if(inputTypeValue === "kagitnaan" && resultTypeValue==="apatan"){
    result.innerHTML = Number(input.value) * 16;
  }

  // Apatan to unit
  if(inputTypeValue === "apatan" && resultTypeValue==="kaban"){ 
    result.innerHTML = Number(input.value) / 800;
  }else if(inputTypeValue === "apatan" && resultTypeValue==="litro"){
    result.innerHTML = Number(input.value) * 0.09375;
  }else if(inputTypeValue === "apatan" && resultTypeValue==="kalahatian"){
    result.innerHTML = Number(input.value) / 400;
  }else if(inputTypeValue === "apatan" && resultTypeValue==="ganta"){
    result.innerHTML = Number(input.value) / 32;
  }else if(inputTypeValue === "apatan" && resultTypeValue==="chupa"){
    result.innerHTML = Number(input.value) / 4;
  }else if(inputTypeValue === "apatan" && resultTypeValue==="kagitnaan"){
    result.innerHTML = Number(input.value) / 16;
  }

}