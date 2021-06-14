// Variables 
const hamburgerOpen = document.querySelector('.hamburger-open');
const closeBtn = document.querySelector('.hamburger-close');
const hamburgerLinks = document.querySelector('.hamburger-links');
const bookmarkIcon = document.querySelector('svg');
const ctaBtn = document.querySelector('.cta');
const modalContainer = document.querySelector('#modal-container1');
const closeModalBtn = document.querySelector('.close-modal');
const bookmarkText = document.querySelector('.bookmark-text');
const bookmarkBtn = document.querySelector('.icon-bookmark');

// For slider
const range = document.querySelector('.range');
const track = document.querySelector('.track-inner');



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

function highlightBookmark() {
    // edit bookmark color,background color, textContent and svg
    bookmarkText.textContent = 'bookmarked';
    bookmarkText.style.color = 'var(--dark-cyan)';
    bookmarkBtn.style.backgroundColor = 'whitesmoke';
    bookmarkIcon.style.filter = 'invert(37%) sepia(27%) saturate(1179%) hue-rotate(127deg) brightness(97%) contrast(90%)';
}

function displayPledgeOfferings() {
    modalContainer.style.display = 'block';
    // Stop body from scrolling
    document.querySelector("body").style.overflow = 'hidden';

}

// Show pledge offerings
function displayPledgeOfferings() {
    modalContainer.style.display = 'block';
}

// Close Pledge Modal
function closePledgeModal() {
    modalContainer.style.display = 'none';
    // document.querySelector("body").style.overflow = 'visible';
}

// update range slider with values
const updateSlider = (value) => {
    console.log(value)
    track.style.left = `${value}%`
    track.style.transform = `translate(-${value}%, -50%)`
    track.style.width = `${value}%`
}

// range.oninput = (e) =>
// console.log(e)
//   updateSlider(e.target.value)

updateSlider(89914) // Init value
// console.log(range.value)

// Event Listeners
hamburgerOpen.addEventListener('click', showNavList);
closeBtn.addEventListener('click', hideNavList);
bookmarkBtn.addEventListener('click', highlightBookmark);
ctaBtn.addEventListener('click', displayPledgeOfferings);
if(closeModalBtn) {
    closeModalBtn.addEventListener('click',closePledgeModal);
}