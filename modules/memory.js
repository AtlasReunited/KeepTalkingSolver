let round = 0;
let labels_pressed = [];
let number_history = [];
let position_history = [];

function memoryOutput() {
    const wireColor = document.getElementById('memory_output').value;
        // Add logic to handle the submitted data
    const outputElement = document.getElementById('memoryOutput');
    let display = document.getElementById('memory_output').value;
    //outputElement.textContent = `${decodeSimpleWires(wireColor)}`;
    switch (round){
        case 0:
            outputElement.textContent = `press slot ${round_one(display)}`;
            break;
        case 1:
            outputElement.textContent = `press slot ${round_two(display)}`;
            break;
        case 2:
            outputElement.textContent = `press slot ${round_three(display)}`;
            break;
        case 3:
            outputElement.textContent = `press slot ${round_four(display)}`;
            break;
        case 4:
            outputElement.textContent = `${round_five(display)}`;
            break;
        default:
            outputElement.textContent = `Error occured: round ${round} is not valid.`;
            break;
    }
    // Reset the form and hide it
   //resetAndCloseForm('simpleWiresModuleForm');
}


function round_one(display){
    let display_split = display.trim().split(" ");
    //ensure format looks like "1 1234"
    //Check if it contains a "reset" or "restart" or "clear" or "cancel" or "stop"
    if(display.toLowerCase() === "reset" || display.toLowerCase() === "restart" || display.toLowerCase() === "clear" || display.toLowerCase() === "cancel" || display.toLowerCase() === "stop"){
        number_history = [];
        position_history = [];
        return -1;
    }
    if(display_split.length !== 2){
        return "Error: Invalid input";
    }

    let display_number = display_split[0];
    if(display_number === "1"){
        position_history.push(2);
        number_history.push(1);

        return 2;
    }else if(display_number === "2") {
        number_history.push(2);
        position_history.push(2);
        return 2;
    }
    else if(display_number === "3") {
        number_history.push(3);
        position_history.push(3);
        return 3;
    }
    else if(display_number === "4") {
        number_history.push(4);
        position_history.push(4);
        return 4;
    }
}