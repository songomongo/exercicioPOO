class Evento{
    nome: string;
    data: string;
    horario: string;

    constructor(nome: string, data: string, horario: string ){
        this.nome = nome
        this.data = data
        this.horario = horario
    }
}


class Agenda{ 
private evento: Evento [] = []

constructor (){

}

adicionar(evento: Evento) {
    this.evento.push(evento);

}

adicionarAgenda() {
    if (this.evento.length > 0) {
        this.adicionando = true;

           }
        return "Adicionando: "
            }
    
            else {
                return "A agenda está vazia";
            }
        }
    
        pausar() {
            if (this.reproduzindo == true) {
                this.reproduzindo = false;
                return "Música pausada"
            }
            else {
                return "Não a música reproduzindo";
            }
        }
    

    }
  }
}