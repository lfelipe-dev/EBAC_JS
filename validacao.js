document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que o formulário seja enviado antes da validação
  
    var campoA = parseInt(document.getElementById('campoA').value);
    var campoB = parseInt(document.getElementById('campoB').value);
  
    if (campoB > campoA) {
      document.getElementById('mensagem').innerHTML = 'Formulário válido!';
      document.getElementById('mensagem').style.color = 'green';
    } else {
      document.getElementById('mensagem').innerHTML = 'Formulário inválido! O número B deve ser maior que o número A.';
      document.getElementById('mensagem').style.color = 'red';
    }
  });