document.querySelectorAll('.toggle-trigger').forEach(trigger => {
  trigger.addEventListener('click', () => {
    const header = trigger.closest('.album-header');
    const tracklist = header.nextElementSibling;
    if (tracklist && tracklist.classList.contains('tracklist')) {
      tracklist.style.display = (tracklist.style.display === 'none' || tracklist.style.display === '') ? 'block' : 'none';
    }
  });
});
