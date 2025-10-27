async function showContent(section, event) {
  if (event) event.preventDefault();

  document.querySelectorAll('.sidebar nav a').forEach(a => a.classList.remove('active'));
  if (event && event.target) event.target.classList.add('active');

  try {
    const response = await fetch(section);
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    const html = await response.text();
    document.getElementById('main-section').innerHTML = html;
  } catch (error) {
    document.getElementById('main-section').innerHTML =
      `<p style="color:red;">Error loading page: ${error.message}</p>`;
  }
}

window.addEventListener('DOMContentLoaded', () => {
  showContent('pages/dashboard.html', null);
});

document.querySelector('.menu-toggle').addEventListener('click', () => {
  document.querySelector('.sidebar').classList.toggle('active');
});
