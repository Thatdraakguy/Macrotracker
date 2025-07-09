document.addEventListener('DOMContentLoaded', () => {
  const logBtnContainer = document.getElementById('logBtnContainer');
  const logBtn = document.getElementById('logBtn');

  if (logBtn && logBtnContainer) {
    logBtn.addEventListener('click', () => {
      logBtnContainer.classList.toggle('active');
      const pressed = logBtn.getAttribute('aria-pressed') === 'true';
      logBtn.setAttribute('aria-pressed', String(!pressed));
    });

    document.addEventListener('click', (e) => {
      if (!logBtnContainer.contains(e.target)) {
        logBtnContainer.classList.remove('active');
        logBtn.setAttribute('aria-pressed', 'false');
      }
    });
  }

  // Map each button to its page URL
  const navigationMap = {
    'waterBtn': 'water.html',
    'weightBtn': 'weight.html',
    'photoBtn': 'photomacro.html',
    'manualBtn': 'manualmacro.html',
  };

  // Add click listeners for each button, if it exists
  Object.entries(navigationMap).forEach(([btnId, url]) => {
    const btn = document.getElementById(btnId);
    if (btn) {
      btn.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent closing popup too soon
        window.location.href = url;
      });
    }
  });
});
