class Evento {
    nome: string;
    data: string;
    horario: string;

    constructor(nome: string, data: string, horario: string) {
        this.nome = nome
        this.data = data
        this.horario = horario
    }
}


class Agenda {
    private evento: Evento[] = []

    constructor() {

    }
}