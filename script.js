document.addEventListener('DOMContentLoaded', () => {
    // Video URLs related to AIDS awareness (replace with appropriate URLs)
    const videos = [
        "https://drive.google.com/file/d/1x8z4ZZiN60JtIWN5yRyhlcZr46gnEHHi/view?usp=sharing",
        "https://drive.google.com/file/d/13o-EfMW9aCZ-_kiVHHWZw_a75aPQGvSX/view?usp=sharing",
        "https://drive.google.com/file/d/1AGTKjnS7bppYkFCT0AnSjp8Uv45lS3vm/view?usp=sharing",
    ];

    const videoContainer = document.getElementById('video-container');

    // Loop through video URLs and create video elements
    videos.forEach(url => {
        const videoElement = document.createElement('div');
        videoElement.classList.add('video-container', 'w-full', 'h-60', 'overflow-hidden', 'rounded-lg', 'shadow-lg','backdrop-blur-lg', 'p-2');

        // Create the video element with controls
        const video = document.createElement('video');
        video.setAttribute('src', url);
        video.setAttribute('controls', '');
        video.classList.add('w-full', 'h-full', 'object-cover','rounded-lg');

        // Autoplay on hover
        videoElement.addEventListener('mouseover', () => {
            video.setAttribute('autoplay', 'true');
        });

        videoElement.addEventListener('mouseleave', () => {
            video.removeAttribute('autoplay');
            video.pause(); // Pause the video when the hover ends
        });

        // Append video to div, then div to video container
        videoElement.appendChild(video);
        videoContainer.appendChild(videoElement);
    });
});
// JavaScript for toggling the navbar visibility
document.getElementById('hamburger-btn').addEventListener('click', () => {
    const navbarLinks = document.getElementById('navbar-links');
    navbarLinks.classList.toggle('hidden'); // Toggle visibility
});
