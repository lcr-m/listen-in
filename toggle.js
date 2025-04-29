<script>
  document.querySelectorAll('.toggle-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const details = trigger.closest('details');
      details.open = !details.open;
    });
  });
</script>
