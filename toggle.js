document.querySelectorAll('.toggle-trigger').forEach(trigger => {
  trigger.addEventListener('click', () => {
    const albumBlock = trigger.closest('.album-block');
    const tracklist = albumBlock.querySelector('.tracklist');

    if (tracklist) {
      const isVisible = tracklist.style.display === 'block';
      tracklist.style.display = isVisible ? 'none' : 'block';

      // Update album-block class
      albumBlock.classList.toggle('expanded', !isVisible);

      // Flip the diamond symbol
      trigger.textContent = isVisible ? '◇' : '◈';
    }
  });
});
