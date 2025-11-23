// Control Earth video playback based on scroll speed
(function () {
    let lastScrollY = window.scrollY;
    let scrollAccumulator = 0;
    let video = null;
    let isLoaded = false;
    let frameDuration = 1 / 30; // 30 fps

    // How many pixels of scroll per frame advance
    const pixelsPerFrame = 2;

    async function initEarthScrollControl() {
        try {
            // Find the video element directly (no need to replace image)
            video = document.querySelector('aside video#earth-video');
            if (!video) return;

            // Wait for video to load
            await new Promise((resolve) => {
                if (video.readyState >= 2) {
                    resolve();
                } else {
                    video.addEventListener('loadedmetadata', resolve, { once: true });
                }
            });

            // Pause the video (frozen by default, controlled by scroll)
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
