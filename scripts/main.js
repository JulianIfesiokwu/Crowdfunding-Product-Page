const totalContributed = document.querySelector('#total-contributed');
const slider = document.querySelector('#mySlider');
const selectionModal = document.querySelector('#selection-modal');
const supportProject = document.querySelector('#select-project');

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
    // selectionModal.style.display = 'block';
    console.log('ass')
}


// Event Listeners
supportProject.addEventListener('click', openSelectionModal)
