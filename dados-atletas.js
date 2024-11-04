class Atleta {
    constructor(nome, idade, peso, altura, notas) {
      this.nome = nome;
      this.idade = idade;
      this.peso = peso;
      this.altura = altura;
      this.notas = notas;
    }
  
    calculaCategoria() {
      if (this.idade >= 9 && this.idade <= 11) return "Infantil";
      if (this.idade >= 12 && this.idade <= 13) return "Juvenil";
      if (this.idade >= 14 && this.idade <= 15) return "Intermediário";
      if (this.idade >= 16 && this.idade <= 30) return "Adulto";
      return "Sem categoria";
    }
  
    calculaIMC() {
      return this.peso / (this.altura * this.altura);
    }
  
    calculaMediaValida() {
      let notasOrdenadas = [...this.notas].sort((a, b) => a - b);
      let notasComputadas = notasOrdenadas.slice(1, 4);
      let soma = notasComputadas.reduce((acc, nota) => acc + nota, 0);
      return soma / notasComputadas.length;
    }
  
    obtemNomeAtleta() {
      return this.nome;
    }
  
    obtemIdadeAtleta() {
      return this.idade;
    }
  
    obtemPesoAtleta() {
      return this.peso;
    }
  
    obtemAlturaAtleta() {
      return this.altura;
    }
  
    obtemNotasAtleta() {
      return this.notas;
    }
  
    obtemCategoria() {
      return this.calculaCategoria();
    }
  
    obtemIMC() {
      return this.calculaIMC();
    }
  
    obtemMediaValida() {
      return this.calculaMediaValida();
    }
  }
  