class Pessoa {
  constructor(nome, altura, peso) {
    this.nome = nome;
    this.altura = altura;
    this.peso = peso;
  }
}

class Vingador extends Pessoa {
  constructor(nome, altura, peso, poderes, temArmadura, isMembroFundador) {
    super(nome, altura, peso);
    this.poderes = poderes;
    this.temArmadura = temArmadura;
    this.isMembroFundador = isMembroFundador;
  }

  lutar() {
    alert(
      `${this.nome} está lutando usando ${this.poderes[0]}, pensando ${this.peso}, com a altura de ${this.altura}`
    );
  }
}
const thor = new Vingador(
  "Thor",
  "1,85",
  "100Kg",
  ["Super Força", "Raio"],
  true,
  true
);

const SpiderMan = new Vingador("SpiderMan", "1,60", "50Kg", [
  "Salvar Vidas",
  "Lançar teias",
]);

document.getElementById("lutar").onclick = function () {
  thor.lutar();
};
document.getElementById("lutar2").onclick = function () {
  SpiderMan.lutar();
};

class OperacoesMatematicas {
  static soma(a, b, c) {
    return a + b - c;
  }
}

const sum = OperacoesMatematicas.soma(1, 3, 4);

alert(sum);
