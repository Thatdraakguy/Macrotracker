function navigateTo(pageId) {
  document.querySelectorAll('.page').forEach(page => {
    page.classList.add('hidden');
  });
  document.getElementById(pageId).classList.remove('hidden');
}
<script>
  function showPage(pageId) {
    const sections = document.querySelectorAll('main > section');
    sections.forEach(section => {
      section.style.display = (section.id === pageId) ? 'block' : 'none';
    });
  }

  window.addEventListener('DOMContentLoaded', () => showPage('dashboardPage'));
</script>

