const password     = document.getElementById('password');
const repeat_password = document.getElementById('repeat_password');

[password, repeat_password].forEach(input => {
  input.addEventListener('input', () => {
    if (repeat_password.value !== password.value) {
      repeat_password.setCustomValidity('Passwords do not match.');
    } else {
      repeat_password.setCustomValidity('');
    }
  });
});
