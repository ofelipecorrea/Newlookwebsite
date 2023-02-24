function atualizaValorTotal() {
    var precoTotal = 0;
    var quantidadeTotal = 0;
  
    var linhas = document.getElementsByTagName("tbody")[0].getElementsByTagName("tr");
    for (var i = 0; i < linhas.length; i++) {
      var quantidade = parseInt(linhas[i].getElementsByTagName("input")[0].value);
      var preco = parseFloat(linhas[i].getElementsByClassName("preco")[0].innerHTML.replace("R$ ", ""));
      precoTotal += quantidade * preco;
      quantidadeTotal += quantidade;
    }
  
    document.getElementById("quantidade-total").innerHTML = quantidadeTotal;
    document.getElementById("valor-total").innerHTML = "R$ " + precoTotal.toFixed(2);
  }

  var tds = document.querySelectorAll('td');
for (var i = 0; i < tds.length; i++) {
  var checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.addEventListener('click', function() {
    // manipulador de eventos para lidar com a seleção / deseleção da caixa de seleção
  });
  tds[i].appendChild(checkbox);
}
