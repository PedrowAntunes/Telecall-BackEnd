function formatCPF(input) {
  // Remove qualquer caractere que não seja número
  var value = input.value.replace(/\D/g, '');

  // Limita a 11 caracteres
  if (value.length > 11) {
    value = value.substring(0, 11);
  }

  // Formate o CPF com os pontos e traço
  if (value.length >= 3) {
    value = value.substring(0, 3) + '.' + value.substring(3);
  }
  if (value.length >= 7) {
    value = value.substring(0, 7) + '.' + value.substring(7);
  }
  if (value.length >= 11) {
    value = value.substring(0, 11) + '-' + value.substring(11);
  }

  // Permite somente números no campo
  input.value = value;
}