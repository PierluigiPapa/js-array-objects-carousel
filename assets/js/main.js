// Array di oggetti con la foto e descrizione della foto

const arrayBrindisi = [
    {
        image: "Brindisi_Landscape.jpg",
        titolo: "Benvenuti a Brindisi!",
        descrizione: "Qui, potete ammirare alcune delle bellezze principali di Brindisi, una città ricca di storia, dal periodo romano passando per il Medioevo, fino a diventare capitale d'Italia",
    },

    {
        image: "Brindisi_Colonne_romane.jpg",
        titolo: "Colonne romane sulla Scalinata Virgiliana",
        descrizione: "La tradizione sostiene che sono le colonne terminali della via Appia, che collegava Roma con Brindisi, durante la dominazione romana, ma alcuni studi studenti sostengono che risalgono al periodo bizantino. L'altra colonna si trova a Lecce, in piazza Sant'Oronzo.",
    },

    {
        image: "Brindisi_Monumento_al_marinaio.jpg",
        titolo: "Monumeto al marinaio",
        descrizione: "Il monumento ha la forma di timone, alta circa 53 metri. I lavori di costruzione durarono un anno e l'inaugurazione avvenne il 4 novembre 1933, alla presenza del re Vittorio Emanuele III.",
    },

    {
        image: "Brindisi_Duomo.jpg",
        titolo: "Duomo",
        descrizione: "La Cattedrale, di stile romanico, anche se la faccia risulta d'epoca barocca, in quanto ricostruita dopo il terremoto del 1743. Qui, furono celebrati due matrimoni reali: Ruggero, figlio di Tancredi di Sicilia e Isacco Angelo, principessa di Costantinopoli, nel 1191; Federico II di Svevia con Isabella di Brienne, nel 1225",
    },

    {
        image: "Brindisi_Tempio_di_San Giovanni_al_Sepolcro.jpg",
        titolo: "Tempio di San Giovanni",
        descrizione: "Uno dei monumenti più affascinanti di Brindisi, per via del suo portale, degli affreschi e delle tracce dei pellegini che si possono notare al suo interno",
    },

    {
        image: "Brindisi_Scavi.jpg",
        titolo: "Scavi di San Pietro degli Schiavoni",
        descrizione: "Gli scavi di epoca romana, rinvenuti, in occasione dei lavori del nuovo teatro Giuseppe Verdi, nel 1964",
    },
]

// console.log(arrayBrindisi)

let currentImage = 0;
let intervalId;
const immaginiBrindisi = arrayBrindisi.length;

const carouselImageHtml = document.getElementById('image');
const carouselTitleHtml = document.getElementById('title');
const carouselTextHtml = document.getElementById('description');

const prevHtml = document.getElementById('preview');
const nextHtml = document.getElementById('next');
const playHtml = document.getElementById('play');
const stopHtml = document.getElementById('stop');

const startCarousel = () => {
    intervalId = setInterval(() => {
        currentImage = (currentImage + 1) % immaginiBrindisi;
        showImage(currentImage);
    }, 3000);
}

const stopCarousel = () => {
    clearInterval(intervalId);
}

playHtml.addEventListener('click', startCarousel);
stopHtml.addEventListener('click', stopCarousel);

const showImage = (index) => {
    const { image, titolo, descrizione } = arrayBrindisi[index];
    carouselImageHtml.src = image;
    carouselTitleHtml.textContent = titolo;
    carouselTextHtml.textContent = descrizione;
}

prevHtml.addEventListener('click', () => {
    currentImage = (currentImage- 1 + immaginiBrindisi) % immaginiBrindisi;
    showImage(currentImage);
})

nextHtml.addEventListener('click', () => {
    currentImage = (currentImage + 1) % immaginiBrindisi;
    showImage(currentImage);
})