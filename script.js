// this function get the value typed,
//get it in an array and do the conversion
//using a duplication method
function Calcular(inputId) {
  const binNumber = document.getElementById(`${inputId}`).value; //the input value
  let decimalValue = 0;

  //the bin array, which I
  //created to make the math
  //easier ↓
  let binArray = [];

  // push the value in the array
  for (let i = 0; i < binNumber.length; i++) {
    binArray.push(binNumber.slice(i, i + 1));
  }

  // do the math
  for (digit of binArray) {
    decimalValue = decimalValue * 2 + Number(digit);
  }

  //this is just for now, i'll do a beautiful response
  console.log(decimalValue);
}
