// this function get the bin typed,
// get it in an array and do the conversion
// using a duplication method
function CalcularBinDec(inputId) {
  const binNumber = document.getElementById(`${inputId}`).value; //the input value
  let decimalValue = 0;

  // the bin array, which I
  // created to make the math
  // easier ↓
  let binArray = [];

  // push the value in the array
  for (let i = 0; i < binNumber.length; i++) {
    binArray.push(binNumber.slice(i, i + 1));
  }

  // do the math
  for (digit of binArray) {
    decimalValue = decimalValue * 2 + Number(digit);
  }

  document.getElementById("Dec_Bin").value = decimalValue;
}

// This function get the dec
// number and convert to bin
function CalcularDecBin() {
  let DecNumber = Number(document.getElementById("Dec_Bin").value);
  let binString = "",
    binStringReversed = "";

  for (DecNumber; DecNumber > 0; ) {
    if (DecNumber % 2 == 0) {
      binString += "0";
      DecNumber = Math.floor(DecNumber / 2);
    } else if (DecNumber % 2 > 0) {
      binString += "1";
      DecNumber = Math.floor(DecNumber / 2);
    }
  }

  for (let i = binString.length - 1; i >= 0; i--) {
    binStringReversed += binString[i];
  }

  document.getElementById("Bin_Dec").value = binStringReversed;
}
