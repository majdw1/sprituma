// NOVAX Marketing – basic interactions

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');

if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    mainNav.classList.toggle('open');
    navToggle.classList.toggle('open');
  });
}

// Simple demo form handler
function handleForm(event) {
  event.preventDefault();
  const name = document.getElementById('name')?.value || '';
  alert('תודה ' + (name || 'רבה') + '!\n\nקיבלנו את הפרטים שלכם.\nבגרסה הבאה נחבר את הטופס למערכת לידים אמיתית.');
  return false;
}
