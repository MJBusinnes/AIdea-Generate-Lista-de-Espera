/*var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var faq = this.nextElementSibling;
    if (faq.style.display === "block") {
      faq.style.display = "none";
    } else {
      faq.style.display = "block";
    }
  });
} 

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var faq = this.nextElementSibling;
    if (faq.style.maxHeight) {
      faq.style.maxHeight = true;
    } else {
      faq.style.maxHeight = faq.scrollHeight + "px";
    } 
  });
}*/

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

/* CÓDIGO API DO ZOHO 
document.addEventListener("DOMContentLoaded", function() {
  Coloque todo o seu código JavaScript aqui
  var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
          this.classList.toggle("active");
          var panel = this.nextElementSibling;
          if (panel.style.maxHeight) {
              panel.style.maxHeight = null;
          } else {
              panel.style.maxHeight = panel.scrollHeight + "px";
          }
      });
  }

  document.querySelector('.waiting-list-form').addEventListener('submit', function(event) {
      event.preventDefault();
      var email = document.getElementById('email').value;
      // Restante do seu código aqui...
  });
}); */

//Adicione este script no final do seu arquivo HTML, antes do fechamento da tag </body> 

  /// Função para acionar o download do PDF
function downloadPDF() {
  // URL do PDF que será baixado
  var pdfURL = 'Prompts-para-Criadores-de-Conteúdo.pdf'; // Corrigido o caminho do PDF

  // Criar um elemento 'a' temporário
  var downloadLink = document.createElement('a');

  // Definir o atributo 'href' do elemento 'a' como a URL do PDF
  downloadLink.href = pdfURL;

  // Definir o atributo 'download' como o nome do arquivo que será baixado (opcional)
  downloadLink.download = 'Ebook-Prompts-para-Criadores-de-Conteúdo.pdf';

  // Simular o clique no link para iniciar o download
  downloadLink.click();
}

// Event listener para o clique no botão
document.getElementById('botao-formulario').addEventListener('click', function(event) {
  // Chamar a função de download do PDF
  downloadPDF();
});
