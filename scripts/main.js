// Variables 
const hamburgerOpen = document.querySelector('.hamburger-open');
const closeBtn = document.querySelector('.hamburger-close');
const hamburgerLinks = document.querySelector('.hamburger-links');



// Functions
function showNavList() {
    //Display dropdown
    hamburgerLinks.style.display = 'block';

    //Display close btn and hide hamburger icon
    hamburgerOpen.style.display = 'none';
    closeBtn.style.display = 'block';
}

function hideNavList() {
    // Hide closeBtn
    closeBtn.style.display = 'none';

    // Display Hamburger btn and hide list
    hamburgerOpen.style.display = 'block';
    hamburgerLinks.style.display = 'none';
}




// Event Listeners
hamburgerOpen.addEventListener('click', showNavList);
closeBtn.addEventListener('click', hideNavList)