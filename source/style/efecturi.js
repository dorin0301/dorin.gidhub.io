document.addEventListener('DOMContentLoaded', () => {
    const switchMode = document.querySelector('#switchMode');
    switchMode.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
    });
  });
  