document.querySelectorAll('.toggle-trigger').forEach(trigger => {
  trigger.addEventListener('click', () => {
    const albumBlock = trigger.closest('.album-row');
    const tracklist = albumBlock.querySelector('.tracklist');

    const isExpanded = albumBlock.classList.contains('expanded');
    albumBlock.classList.toggle('expanded', !isExpanded);

    trigger.textContent = isExpanded ? '◇' : '◈';
  });
});
