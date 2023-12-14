let bombInfo = {};
function openModule(moduleFormId) {
    const moduleForm = document.getElementById(moduleFormId);
    moduleForm.style.display = 'block';
}

// Example: Function to submit data for the general bomb info module
function submitGeneralInfo() {
    const serialNumber = document.getElementById('serialNumber').value;
    // Add logic to handle the submitted data
    const outputElement = document.getElementById('generalInfoOutput');
    outputElement.textContent = `Serial Number: ${serialNumber}`;
    //add the serial number to the bombInfo object
    bombInfo.serialNumber = serialNumber;
    // Reset the form and hide it
    resetAndCloseForm('generalInfoModuleForm');
}

// Example: Function to submit data for the simple wires module
function submitSimpleWires() {
    const wireColor = document.getElementById('wireColor').value;
    // Add logic to handle the submitted data
    const outputElement = document.getElementById('simpleWiresOutput');
    outputElement.textContent = `${decodeSimpleWires(wireColor)}`;
    // Reset the form and hide it
    resetAndCloseForm('simpleWiresModuleForm');
}

// Example: Function to reset and close a form
function resetAndCloseForm(moduleFormId) {
    const moduleForm = document.getElementById(moduleFormId);
    // Reset form fields within the module
    Array.from(moduleForm.getElementsByTagName('input')).forEach(input => {
        input.value = '';
    });
    // Hide the form
    moduleForm.style.display = 'none';

}