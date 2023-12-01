document.getElementById('noButton').addEventListener('click', function () {
  document.getElementById('noResponse').classList.remove('hidden');
  this.disabled = true;
});

document.getElementById('yesButton').addEventListener('click', function () {
  // Redireciona para a música ou outra ação desejada
  window.location.href = 'https://www.youtube.com/watch?v=BJfnGsvOmWM&list=RDTQ5DUv_ZwRg&index=5';
});
