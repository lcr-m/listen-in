document.querySelectorAll('.toggle-trigger').forEach(trigger => {
  trigger.addEventListener('click', () => {
    const tracklist = trigger.nextElementSibling;
    if (tracklist.style.display === "none" || tracklist.style.display === "") {
      tracklist.style.display = "block";
    } else {
      tracklist.style.display = "none";
    }
  });
});
