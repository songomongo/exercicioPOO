"use strict";
class evento {
    constructor(nome, data, horario) {
        this.nome = nome;
        this.data = data;
        this.horario = horario;
    }
}
class agenda {
    constructor() {
        this.evento = [];
    }
}
