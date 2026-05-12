let userCount = 0;

const cadastrar = (event) => {
    event.preventDefault();

    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;

    if (!nome || !email) return;

    let lista = document.getElementById('lista');

    let novoItem = document.createElement('li');

    let span = document.createElement('span');
    span.innerText = nome + " - " + email;
    novoItem.appendChild(span);

    // Botão Editar
    
    let editBtn = document.createElement('button');
    editBtn.innerText = 'Editar';
    editBtn.onclick = () => editUser(novoItem);
    novoItem.appendChild(editBtn);

    // Botão Deletar
    let deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Deletar';
    deleteBtn.onclick = () => deleteUser(novoItem);
    novoItem.appendChild(deleteBtn);

    lista.appendChild(novoItem);

    document.getElementById('nome').value = '';
    document.getElementById('email').value = '';

    userCount++;
    document.getElementById('userCount').innerText = userCount;
};

const editUser = (li) => {
    let span = li.querySelector('span');
    let text = span.innerText;

    let [nome, email] = text.split(' - ');

    let newNome = prompt('Novo nome:', nome);
    let newEmail = prompt('Novo email:', email);

    if (newNome && newEmail) {
        span.innerText = newNome.trim() + " - " + newEmail.trim();
    }
};

const deleteUser = (li) => {
    li.remove();
    userCount--;
    document.getElementById('userCount').innerText = userCount;
};

// Lista onde ficam todos os produtos adicionados no carrinho
let produtos = [];

// Variável que guarda o valor total da compra (sem desconto)
let totalGeral = 0;

// 🔹 Aqui fazemos "cache" dos elementos do HTML
// Isso evita procurar no DOM toda hora (mais rápido e eficiente)
const tbody = document.querySelector("#tabelaProdutos tbody"); // corpo da tabela
const totalEl = document.getElementById("total"); // elemento que mostra total
const valorLiquidoEl = document.getElementById("valorLiquido"); // valor com desconto

// ======================================================
// ➕ FUNÇÃO: ADICIONAR PRODUTO
// ======================================================
function adicionarProduto() {

  // Pega o nome digitado no input com id "produto"
  const nome = document.getElementById("produto").value;

  // Pega a quantidade e converte para número
  const quantidade = Number(document.getElementById("quantidade").value);

  // Pega o valor e converte para número
  const valor = Number(document.getElementById("valor").value);

  // Validação: impede valores vazios ou inválidos
  if (!nome || quantidade <= 0 || valor <= 0) {
    alert("Preencha os campos corretamente!");
    return; // interrompe a função
  }

  // Adiciona o produto no array (carrinho)
  produtos.push({
    nome: nome,
    quantidade: quantidade,
    valor: valor,

    // Calcula automaticamente o total desse produto
    total: quantidade * valor,
  });

  // Limpa os campos do formulário após adicionar
  limparCampos();

  // Atualiza a tabela na tela
  renderizar();
}

// ======================================================
// 📊 FUNÇÃO: RENDERIZAR TABELA E TOTAL
// ======================================================
function renderizar() {

  // Reinicia o total antes de recalcular
  totalGeral = 0;

  // map() percorre todos os produtos e cria HTML para cada um
  const linhas = produtos.map((p) => {

    // Soma o valor total de cada produto no total geral
    totalGeral += p.total;

    // Retorna uma linha HTML da tabela
    return `
      <tr>
        <td>${p.nome}</td> <!-- Nome do produto -->
        <td>${p.quantidade}</td> <!-- Quantidade -->
        <td>R$ ${p.valor.toFixed(2)}</td> <!-- Valor unitário -->
        <td>R$ ${p.total.toFixed(2)}</td> <!-- Total do item -->
      </tr>
    `;
  })

  // join("") junta todas as linhas em uma única string HTML
  .join("");

  // Coloca todas as linhas dentro da tabela no HTML
  tbody.innerHTML = linhas;

  // Atualiza o valor total na tela
  totalEl.textContent = totalGeral.toFixed(2);

  // Mostra o valor líquido (sem desconto ainda)
  valorLiquidoEl.textContent = totalGeral.toFixed(2);
}

// ======================================================
// 💸 FUNÇÃO: APLICAR DESCONTO
// ======================================================
function aplicarDesconto() {

  // Pega desconto em valor fixo (se vazio vira 0)
  const descontoValor =
    Number(document.getElementById("descontoValor").value) || 0;

  // Pega desconto percentual (se vazio vira 0)
  const descontoPercentual =
    Number(document.getElementById("descontoPercentual").value) || 0;

  // Começa o cálculo com o total geral
  let valorFinal = totalGeral;

  // Subtrai desconto em valor fixo
  valorFinal -= descontoValor;

  // Subtrai desconto em porcentagem
  valorFinal -= totalGeral * (descontoPercentual / 100);

  // Evita que o valor fique negativo
  if (valorFinal < 0) valorFinal = 0;

  // Mostra o valor final na tela
  valorLiquidoEl.textContent = valorFinal.toFixed(2);
}

// ======================================================
// ✅ FUNÇÃO: FINALIZAR COMPRA
// ======================================================
function finalizarCompra() {

  // Se não tiver produtos, mostra alerta e para aqui
  if (produtos.length === 0) {
    alert("Nenhum produto adicionado!");
    return;
  }

  // Mensagem de sucesso
  alert("Compra finalizada com sucesso!");

  // Limpa o carrinho (zera lista e total)
  produtos = [];
  totalGeral = 0;

  // Atualiza a interface (tabela vazia)
  renderizar();

  // Limpa campos de desconto no HTML
  document.getElementById("descontoValor").value = "";
  document.getElementById("descontoPercentual").value = "";
}

// ======================================================
// 🧹 FUNÇÃO: LIMPAR CAMPOS DO FORMULÁRIO
// ======================================================
function limparCampos() {

  // Limpa input do nome do produto
  document.getElementById("produto").value = "";

  // Limpa input da quantidade
  document.getElementById("quantidade").value = "";

  // Limpa input do valor
  document.getElementById("valor").value = "";

  // Coloca o cursor automaticamente no campo do produto
  document.getElementById("produto").focus();
}
