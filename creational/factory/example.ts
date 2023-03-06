// Example without using Factory pattern

type Translations = {
    [key: string]: string
}

class FrenchLocalizer {
    translations: Translations

    constructor() {
        this.translations = {
            car: "voiture",
            bike: "bicyclette",
            cycle: "cyclette"
        }
    }

    localize(msg: string) {
        return this.translations[msg]
    }
}

class SpanishLocalizer {
    translations: Translations

    constructor() {
        this.translations = {
            car: "auto",
            bike: "bicycleta",
            cycle: "ciclo"
        }
    }

    localize(msg: string) {
        return this.translations[msg]
    }
}

class EnglishLocalizer {
    translations: Translations

    localize(msg: string) {
        return msg
    }
}

const fr = new FrenchLocalizer()
const es = new SpanishLocalizer()
const en = new EnglishLocalizer()

const MESSAGES: Array<string> = ["car", "bike", "cycle"]

MESSAGES.forEach(msg => {
    console.log(fr.localize(msg))
    console.log(es.localize(msg))
    console.log(en.localize(msg))
})