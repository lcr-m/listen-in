document.querySelectorAll('.toggle-trigger').forEach(trigger => {
  trigger.addEventListener('click', () => {
    const header = trigger.closest('.album-header');
    const tracklist = header.nextElementSibling;
    if (tracklist && tracklist.classList.contains('tracklist')) {
      const isVisible = tracklist.style.display === 'block';
      tracklist.style.display = isVisible ? 'none' : 'block';

      // Toggle a class to show it's expanded
      header.classList.toggle('expanded', !isVisible);
    }
  });
});
