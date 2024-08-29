function checkViewport() {
    if (window.innerWidth <= 768) {
        document.getElementById('mobileMessage').style.display = 'block';
        document.getElementById('content').style.display = 'none';
    } else {
        document.getElementById('mobileMessage').style.display = 'none';
        document.getElementById('content').style.display = 'flex';
    }
}

// Run
checkViewport();

//event listener to handle window resize
window.addEventListener('resize', checkViewport);