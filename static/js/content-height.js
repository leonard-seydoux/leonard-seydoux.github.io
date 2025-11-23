// Toggle a class on <html> when main content is taller than the viewport
(function () {
    function updateContentTaller() {
        var main = document.querySelector('main');
        if (!main) return;
        var contentHeight = main.scrollHeight;
        var viewportHeight = window.innerHeight;
        document.documentElement.classList.toggle('content-taller', contentHeight > viewportHeight);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', updateContentTaller);
    } else {
        updateContentTaller();
    }

    // Recompute on resize and on DOM changes that may affect height
    window.addEventListener('resize', function () { requestAnimationFrame(updateContentTaller); });

    // Observe mutations inside <main> to update class if content changes dynamically
    var mainObserver = null;
    function observeMain() {
        var main = document.querySelector('main');
        if (!main || mainObserver) return;
        mainObserver = new MutationObserver(function () { requestAnimationFrame(updateContentTaller); });
        mainObserver.observe(main, { childList: true, subtree: true, characterData: true });
    }
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', observeMain);
    } else {
        observeMain();
    }
})();
