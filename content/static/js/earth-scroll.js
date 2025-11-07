// Control Earth GIF playback based on scroll speed using video
(function () {
    let lastScrollY = window.scrollY;
    let scrollAccumulator = 0;
    let video = null;
    let earthImg = null;
    let isLoaded = false;
    let frameDuration = 1 / 30; // 30 fps

    // How many pixels of scroll per frame advance
    const pixelsPerFrame = 2;

    async function initEarthScrollControl() {
        try {
            earthImg = document.querySelector('aside a img[src*="earth"]');
            if (!earthImg) return;

            // Use the cropped MP4 version
            const videoSrc = earthImg.src.replace(/earth.*\.gif/, 'earth-cropped.mp4');            // Create video element
            video = document.createElement('video');
            video.src = videoSrc;
            video.loop = true;
            video.muted = true;
            video.playsInline = true;

            // Copy styles from image
            video.style.cssText = earthImg.style.cssText;
            video.className = earthImg.className;

            // Add grey background and make circular
            video.style.backgroundColor = 'rgba(128, 128, 128, 0.5)';
            video.style.borderRadius = '50%'; // Make it circular to match the Earth

            // Ensure proper sizing
            if (earthImg.width) video.style.width = earthImg.width + 'px';
            if (earthImg.height) video.style.height = earthImg.height + 'px';

            // Wait for video to load
            await new Promise((resolve) => {
                video.addEventListener('loadedmetadata', resolve, { once: true });
                video.load();
            });

            // Replace image with video
            earthImg.parentNode.replaceChild(video, earthImg);

            // Pause the video (frozen by default)
            video.pause();
            video.currentTime = 0;

            isLoaded = true;
        } catch (err) {
            console.error('[Earth] Initialization failed:', err);
        }
    } function updateEarthFrame() {
        if (!isLoaded || !video) return;

        const currentScrollY = window.scrollY;
        const scrollDelta = currentScrollY - lastScrollY;

        if (scrollDelta !== 0) {
            scrollAccumulator += scrollDelta;

            // Calculate time change
            const frameDelta = Math.floor(scrollAccumulator / pixelsPerFrame);

            if (frameDelta !== 0) {
                scrollAccumulator -= frameDelta * pixelsPerFrame;

                // Update video time
                let newTime = video.currentTime + (frameDelta * frameDuration);

                // Wrap around video duration
                while (newTime < 0) newTime += video.duration;
                while (newTime >= video.duration) newTime -= video.duration;

                video.currentTime = newTime;
            }
        }

        lastScrollY = currentScrollY;
    }    // Update on scroll
    let ticking = false;
    window.addEventListener('scroll', function () {
        if (!ticking) {
            window.requestAnimationFrame(function () {
                updateEarthFrame();
                ticking = false;
            });
            ticking = true;
        }
    });

    // Initialize
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initEarthScrollControl);
    } else {
        initEarthScrollControl();
    }
})();
