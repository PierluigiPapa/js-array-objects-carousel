// Array di oggetti con la foto e descrizione della foto

const arrayBrindisi = [
    {
        immagine: "./assets/img/Brindisi_Landscape.jpg",
        titolo: "Benvenuti a Brindisi!",
        descrizione: "Qui, potete ammirare alcune delle bellezze principali di Brindisi, una città ricca di storia, dal periodo romano passando per il Medioevo, fino a diventare capitale d'Italia",
    },

    {
        immagine: "./assets/img/Brindisi_Colonne_romane.jpg",
        titolo: "Colonne romane sulla Scalinata Virgiliana",
        descrizione: "La tradizione sostiene che sono le colonne terminali della via Appia, che collegava Roma con Brindisi, durante la dominazione romana, ma alcuni studi studenti sostengono che risalgono al periodo bizantino. L'altra colonna si trova a Lecce, in piazza Sant'Oronzo.",
    },

    {
        immagine: "./assets/img/Brindisi_Monumento_al_marinaio.jpg",
        titolo: "Monumento al marinaio",
        descrizione: "Il monumento ha la forma di timone, alta circa 53 metri. I lavori di costruzione durarono un anno e l'inaugurazione avvenne il 4 novembre 1933, alla presenza del re Vittorio Emanuele III.",
    },

    {
        immagine: "./assets/img/Brindisi_Duomo.jpg",
        titolo: "Duomo",
        descrizione: "La Cattedrale, di stile romanico, anche se la faccia risulta d'epoca barocca, in quanto ricostruita dopo il terremoto del 1743. Qui, furono celebrati due matrimoni reali: Ruggero, figlio di Tancredi di Sicilia e Isacco Angelo, principessa di Costantinopoli, nel 1191; Federico II di Svevia con Isabella di Brienne, nel 1225",
    },

    {
        immagine: "./assets/img/Brindisi_Tempio_di_San Giovanni_al_Sepolcro.jpg",
        titolo: "Tempio di San Giovanni",
        descrizione: "Uno dei monumenti più affascinanti di Brindisi, per via del suo portale, degli affreschi e delle tracce dei pellegini che si possono notare al suo interno",
    },
]

// console.log(arrayBrindisi)

const leftSlider = document.getElementById("left-slider");
const rightSlider = document.getElementById("right-slider");
const infoTitle = document.getElementById("info-title");
const infoText = document.getElementById("info-text");
infoTitle.innerHTML = arrayBrindisi[0].titolo;
infoText.innerHTML = arrayBrindisi[0].descrizione;

// slider left

for (i = 0; i < arrayBrindisi.length; i++) {
  const singleImg = document.createElement("img");
  singleImg.src = `./assets/img/${arrayBrindisi[i].immagine}`;
  singleImg.classList.add("left-slider-img");

  if (i === 0) {
    singleImg.classList.add("active");
  }

  leftSlider.append(singleImg);
}

// slider right

for (i = 0; i < arrayBrindisi.length; i++) {
  const singleImg = document.createElement("img");
  singleImg.src = `./assets/img/${arrayBrindisi[i].immagine}`;
  singleImg.classList.add("right-slider-img");

  if (i === 0) {
    singleImg.classList.add("selected");
  }
  rightSlider.append(singleImg);
}

let currentImg = 0;
const listLeftImg = document.querySelectorAll(".left-slider-img");
const listRightImg = document.querySelectorAll(".right-slider-img");

const upButton = document.getElementById("up-button");
const downButton = document.getElementById("down-button");

function next() {
  listLeftImg[currentImg].classList.remove("active");
  listRightImg[currentImg].classList.remove("selected");

  currentImg++;

  if (currentImg === arrayBrindisi.length) {
    currentImg = 0;
  }

  listLeftImg[currentImg].classList.add("active");
  listRightImg[currentImg].classList.add("selected");
  infoTitle.innerHTML = arrayBrindisi[currentImg].titolo;
  infoText.innerHTML = arrayBrindisi[currentImg].descrizione;
}

function previous() {
  listLeftImg[currentImg].classList.remove("active");
  listRightImg[currentImg].classList.remove("selected");

  if (currentImg === 0) {
    currentImg = arrayBrindisi.length;
  }

  currentImg--;

  listLeftImg[currentImg].classList.add("active");
  listRightImg[currentImg].classList.add("selected");
  infoTitle.innerHTML = arrayBrindisi[currentImg].titolo;
  infoText.innerHTML = arrayBrindisi[currentImg].descrizione;
}

downButton.addEventListener("click", function () {
  next();
});

upButton.addEventListener("click", function () {
  previous();
});

const autoSlide = setInterval(next, 3000);