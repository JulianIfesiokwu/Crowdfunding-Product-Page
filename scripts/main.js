const totalContributed = document.querySelector('#total-contributed');
const slider = document.querySelector('#mySlider');
const selectionModal = document.querySelector('#selection-modal');
const successModal = document.querySelector('#thank-you')
const closeBtn = document.querySelector('.close-selection-modal');
const supportProject = document.querySelector('#select-project');
const myModal = document.getElementById('my-modal');
const continueBtn = document.querySelector('.continue')
const gotItBtn = document.querySelector('.got-it');

// Functions

// Modify contributed value on slider Input
slider.oninput = function() {
    let formatedValue = thousands_separators(this.value);
    totalContributed.innerHTML = `$${formatedValue}`;
}

// Format contributions to thousands value
function thousands_separators(num) {
    var num_parts = num.toString().split(".");
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return num_parts.join(".");
}

function openSelectionModal() {
    myModal.style.display = 'block';

    // stop body from moving and remove scrollbars
    document.querySelector("body").style.overflow = 'hidden';
}

// closes the selection modal
function closeSelectionModal() {
    myModal.style.display = 'none';

    // Enables overflow on body
    document.querySelector("body").style.overflow = 'visible';
}

// Display success modal
function showSuccessModal() {
    successModal.style.display = 'block';

    // stop body from moving and remove scrollbars
    document.querySelector("body").style.overflow = 'hidden';

}

// Close success modal
function closeSuccessModal() {
    successModal.style.display = 'none';
}


// Event Listeners
supportProject.addEventListener('click', openSelectionModal);
closeBtn.addEventListener('click', closeSelectionModal)
continueBtn.addEventListener('click', showSuccessModal);
gotItBtn.addEventListener('click', closeSuccessModal)
