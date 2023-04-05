
<script>
  if ('serviceWorker' in navigator) {
    // Register the service worker file
    navigator.serviceWorker.register('https://sammies01.github.io/sw.js')
      .then(registration => {
        console.log('Service worker registered:', registration);
      })
      .catch(error => {
        console.error('Service worker registration failed:', error);
      });
  }
</script>
