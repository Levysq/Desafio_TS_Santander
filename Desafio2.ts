
/* Resposta para Desafio 02 */

enum Work {
    Atriz,
    Paderio
}

type People = {
    name: string,
    age: number,
    job: Work
}

let pessoa1: People = {
    name: 'Maria',
    age: 29,
    job: Work.Atriz
}


let pessoa2: People = {
    name: 'Roberto',
    age: 19,
    job: Work.Paderio

}

let pessoa3: People = {
    name: 'Laura',
    age: 32,
    job: Work.Atriz
}

let pessoa4: People = {
    name: 'Carlos',
    age: 19,
    job:Work.Paderio
}

