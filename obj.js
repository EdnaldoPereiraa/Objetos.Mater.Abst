const carro = {
    modelo: "Sedan",
    cor: "Azul",
    velocidadeAtual: 0,
    
    acelerar(velocidade) {
      this.velocidadeAtual += velocidade;
      console.log(`Acelerando para ${this.velocidadeAtual} km/h`);
    },
    
    frear() {
      this.velocidadeAtual = 0;
      console.log("Freando...");
    },
    
    pintar(novaCor) {
      this.cor = novaCor;
      console.log(`O carro agora é ${novaCor}`);
    }
  };
  

  const livro = {
    titulo: "Aventuras na Floresta",
    autor: "John Autor",
    numPaginas: 200,
    
    abrir() {
      console.log("Abrindo o livro...");
    },
    
    fechar() {
      console.log("Fechando o livro...");
    },
    
    ler() {
      console.log("Lendo o livro...");
    }
  };
  

  carro.acelerar(50); 
  livro.abrir(); 
  

  
  carro.frear(); 
  livro.fechar(); 
  