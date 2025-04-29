document.querySelectorAll('.toggle-trigger').forEach(trigger => {
  trigger.addEventListener('click', () => {
    const tracklist = trigger.closest('.album-header').nextElementSibling;
    tracklist.style.display = (tracklist.style.display === "none" || tracklist.style.display === "") ? "block" : "none";
  });
});
