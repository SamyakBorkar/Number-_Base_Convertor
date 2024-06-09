function binaryToGray(binary) {
    const decimal = parseInt(binary, 2);
    const grayDecimal = decimal ^ (decimal >> 1);
    return grayDecimal.toString(2);
}

function grayToBinary(gray) {
    let grayInt = parseInt(gray, 2);
    let binary = grayInt;

    while (grayInt >>= 1) {
        binary ^= grayInt;
    }

    return binary.toString(2);
}

function convert(inputType) {
    var decimalInput = document.getElementById('decimal');
    var hexadecimalInput = document.getElementById('hexadecimal');
    var binaryInput = document.getElementById('binary');
    var octalInput = document.getElementById('octal');
    var grayInput = document.getElementById('gray');

    switch (inputType) {
        case 'decimal':
            var decimal = parseInt(decimalInput.value);
            if (!isNaN(decimal)) {
                hexadecimalInput.value = decimal.toString(16).toUpperCase();
                binaryInput.value = decimal.toString(2);
                octalInput.value = decimal.toString(8);
                grayInput.value = binaryToGray(decimal.toString(2));
            } else {
                clearInputs();
            }
            break;
        case 'hexadecimal':
            var hexadecimal = hexadecimalInput.value.toUpperCase();
            var decimal = parseInt(hexadecimal, 16);
            if (!isNaN(decimal)) {
                decimalInput.value = decimal;
                binaryInput.value = decimal.toString(2);
                octalInput.value = decimal.toString(8);
                grayInput.value = binaryToGray(decimal.toString(2));
            } else {
                clearInputs();
            }
            break;
        case 'binary':
            var binary = binaryInput.value;
            var decimal = parseInt(binary, 2);
            if (!isNaN(decimal)) {              
                decimalInput.value = decimal;
                hexadecimalInput.value = decimal.toString(16).toUpperCase();
                octalInput.value = decimal.toString(8);
                grayInput.value = binaryToGray(binary);
            } else {
                clearInputs();
            }
            break;
        case 'octal':
            var octal = octalInput.value;
            var decimal = parseInt(octal, 8);
            if (!isNaN(decimal)) {
                decimalInput.value = decimal;
                hexadecimalInput.value = decimal.toString(16).toUpperCase();
                binaryInput.value = decimal.toString(2);
                grayInput.value = binaryToGray(decimal.toString(2));
            } else {
                clearInputs();
            }
            break;
        case 'gray':
            var gray = grayInput.value;
            var binary = grayToBinary(gray);
            var decimal = parseInt(binary, 2);
            if (!isNaN(decimal)) {
                decimalInput.value = decimal;
                hexadecimalInput.value = decimal.toString(16).toUpperCase();
                binaryInput.value = binary;
                octalInput.value = decimal.toString(8);
            } else {
                clearInputs();
            }
            break;
        default:
            break;
    }
}

function clearInputs() {
    document.getElementById('decimal').value = '';
    document.getElementById('hexadecimal').value = '';
    document.getElementById('binary').value = '';
    document.getElementById('octal').value = '';
    document.getElementById('gray').value = '';
}
