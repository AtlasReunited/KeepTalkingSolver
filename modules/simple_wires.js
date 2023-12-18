function decodeSimpleWires(colors){
    let count = 0;
    let lastColor = '';
    //Parse the string and ensure it is clean; no numbers or non-space characters
    colors = colors.toLowerCase().replace(/[^a-z\s]/g, '');
    //If the string is empty, return an error
    if (colors.length === 0) {
        return 'Error: No wire colors provided.';
    }
    //Split the string into an array
    const colorArray = colors.split(' ');
    count = colorArray.length;
    lastColor = colorArray[count - 1];
    //Range of colors must be between 3 and 6 inclusive
    if (count < 3 || count > 6) {
        return 'Error: Invalid number of wires.';
    }
    //Since each number of wires has a different set of rules, they will be handled in their own function.
    switch (count) {
        case 3:
            return threeWires(colors);
        case 4:
            return fourWires(colors);
        case 5:
            return fiveWires(colors);
        case 6:
            return sixWires(colors);
        default:
            return 'Error: Invalid number of wires.';
    }
}

function threeWires(colors){
    const colorArray = colors.split(' ');
    //3 wires:
    // If there are no red wires, cut the second wire.
    // Otherwise, if the last wire is white, cut the last wire.
    // Otherwise, if there is more than one blue wire, cut the last blue wire.
    // Otherwise, cut the last wire.
    if(colors.includes('red') === false) {
        return 'Cut the second wire.';
    } else if (colorArray[-1] === ('white') ) {
        return 'Cut the last wire.';
    }else if(colors.includes('blue') > 1){
        return 'Cut the last blue wire.';
    }
    return 'Cut the last wire.';

}
function fourWires(colors){
    //If there is more than one red wire and the last digit of the serial number is
    // odd, cut the last red wire.
    // Otherwise, if the last wire is yellow and there are no red wires, cut the first
    // wire.
    // Otherwise, if there is exactly one blue wire, cut the first wire.
    // Otherwise, if there is more than one yellow wire, cut the last wire.
    // Otherwise, cut the second wire.
    //Ensure the serial number is present
    if(bombInfo.serialNumber === undefined){
        return 'Error: Serial number not found, which is required for this module. ' +
            'Please enter the serial number in the General Info module.';
    }
    if(colors.includes('red') > 1 && isLastDigitOdd()){
        return 'Cut the last red wire.';
    } else if (colors.includes('yellow', colors.length - 1) && colors.includes('red') === false) {
        return 'Cut the first wire.';
    }else if(colors.includes('blue') === 1) {
        return 'Cut the first wire.';
    }else if(colors.includes('yellow') > 1){
        return 'Cut the last wire.';
    }
    return 'Cut the second wire.';

}
function fiveWires(colors){
    const colorArray = colors.split(' ');

    //If the last wire is black and the last digit of the serial number is odd, cut
    // the fourth wire.
    // Otherwise, if there is exactly one red wire and there is more than one yellow
    // wire, cut the first wire.
    // Otherwise, if there are no black wires, cut the second wire.
    // Otherwise, cut the first wire.
    //Ensure the serial number is present
    if(bombInfo.serialNumber === undefined){
        return 'Error: Serial number not found, which is required for this module. ' +
            'Please enter the serial number in the General Info module.';
    }
    //Ensure the serial number ends with a number, as it may end with a letter
    if(colorArray[-1] === "black" && isLastDigitOdd()){
        return 'Cut the fourth wire.';
    } else if (colors.includes('red') === 1 && colors.includes('yellow') > 1) {
        return 'Cut the first wire.';
    }else if(colors.includes('black') === 0){
        return 'Cut the second wire.';
    }
    return 'Cut the first wire.';

}


function sixWires(colors){
    //If there are no yellow wires and the last digit of the serial number is odd,
    // cut the third wire.
    // Otherwise, if there is exactly one yellow wire and there is more than one
    // white wire, cut the fourth wire.
    // Otherwise, if there are no red wires, cut the last wire.
    // Otherwise, cut the fourth wire.
    //Ensure the serial number is present
    if(bombInfo.serialNumber === undefined){
        return 'Error: Serial number not found, which is required for this module. ' +
            'Please enter the serial number in the General Info module.';
    }
    const colorArray = colors.split(' ');
    //Ensure the serial number ends with a number, as it may end with a letter
    if(colors.includes('yellow') && isLastDigitOdd()){
        return 'Cut the third wire.';
    } else if (colors.includes('yellow') === 1 && colors.includes('white') > 1) {
        return 'Cut the fourth wire.';
    }
}

function isLastDigitOdd(){
    //Ensure the serial number is present
    if(bombInfo.serialNumber === undefined){
        return false;
    }
    //If the last digit is odd, return true
    return bombInfo.serialNumber.slice(-1).match(/\d$/) && bombInfo.serialNumber.slice(-1) % 2 === 1;
}