document.querySelectorAll('.toggle-trigger').forEach(trigger => {
  trigger.addEventListener('click', () => {
    const header = trigger.closest('.album-header');
    const tracklist = header.nextElementSibling;

    if (tracklist && tracklist.classList.contains('tracklist')) {
      const isVisible = tracklist.style.display === 'block';
      tracklist.style.display = isVisible ? 'none' : 'block';

      // Update header class
      header.classList.toggle('expanded', !isVisible);

      // Flip the diamond symbol
      trigger.textContent = isVisible ? '◇' : '◈';
    }
  });
});
