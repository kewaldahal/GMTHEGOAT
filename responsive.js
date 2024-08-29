function checkViewport() {
    if (window.innerWidth <= 768) {
        document.getElementById('mobileMessage').style.display = 'block';
        document.getElementById('content').style.display = 'none';
    } else {
        document.getElementById('mobileMessage').style.display = 'none';
        document.getElementById('content').style.display = 'flex';
    }
}

// Run on initial load
checkViewport();

// Add an event listener to handle window resize
window.addEventListener('resize', checkViewport);

// New functionality for playing music on hover
document.addEventListener('DOMContentLoaded', function() {
    var image = document.getElementById('hoverImage');
    var audio = document.getElementById('hoverAudio');

    // Ensure audio is loaded and ready
    audio.load();  // Load the audio when the document is loaded

    // Play audio on mouseover
    image.addEventListener('mouseover', function() {
        audio.currentTime = 0; // Reset to start to avoid playing from the middle
        audio.play().catch(function(error) {
            console.log('Playback prevented by browser: ', error);
        });
    });

    // Pause and reset audio on mouseout
    image.addEventListener('mouseout', function() {
        audio.pause();
    });
});
