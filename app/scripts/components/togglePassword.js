const togglePassword = () => {
  document.addEventListener('click', (event) => {
    const { target } = event;

    if (!target.classList.contains('form-control__password-btn')) return;

    const input = target.previousElementSibling;
    const type = input.type === 'password' ? 'text' : 'password';

    input.setAttribute('type', type);

    target.classList.toggle('slash');
  });
};

export default togglePassword;
