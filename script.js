const btn = document.getElementById('menu-btn');
const nav = document.getElementById('menu');
const close = document.getElementById('closebtn');
const socialIcons = document.getElementById('social-icons');

btn.addEventListener('click', () => {
  nav.classList.remove('hidden');

  // Animate fade out
  socialIcons.classList.remove('opacity-100', 'scale-100');
  socialIcons.classList.add('opacity-0', 'scale-95');

  // After animation ends, keep display flex but fully transparent & scaled down
});

close.addEventListener('click', () => {
  nav.classList.add('hidden');

  // Animate fade in
  socialIcons.classList.remove('opacity-0', 'scale-95');
  socialIcons.classList.add('opacity-100', 'scale-100');
});