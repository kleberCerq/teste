function toggleInput() {
  document.getElementById("cpf-button").toggleAttribute("disabled");
  document.getElementById("cnpj-button").toggleAttribute("disabled");
  document.getElementById("cpf").classList.toggle("hidden");
  document.getElementById("cnpj").classList.toggle("hidden");
}
