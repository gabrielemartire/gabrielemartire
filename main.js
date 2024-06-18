function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomFloat(min, max) {
    return (Math.random() * (max - min) + min).toFixed(2);
}

function getRandomColor() {
    const colors = [
        'rgba(146, 9, 142, 0.6)', // Viola scuro
        'rgba(2, 86, 82, 0.6)', // Verde scuro
        'rgba(247, 149, 2, 0.6)',   // Arancione
        'rgba(25, 14, 109, 0.6)',   // Blu scuro
    ];
    return colors[getRandomInt(0, colors.length - 1)];
}

function createSpots(numberOfSpots) {
    for (let i = 0; i < numberOfSpots; i++) {
        const spot = document.createElement('div');
        spot.classList.add('spot');

        const size = getRandomInt(5, 16); // Dimensione della macchia
        const posX = getRandomInt(0, window.innerWidth);
        const delay = getRandomFloat(0, 10); // Ritardo casuale per l'inizio dell'animazione
        const duration = getRandomFloat(10, 20); // Durata casuale dell'animazione

        spot.style.width = `${size}px`;
        spot.style.height = `${size}px`;
        spot.style.left = `${posX}px`;
        spot.style.top = `100vh`; // Posiziona inizialmente la macchia fuori dal viewport
        spot.style.backgroundColor = getRandomColor();
        spot.style.animationDuration = `${duration}s`;
        spot.style.animationDelay = `${delay}s`;

        document.body.appendChild(spot);
    }
}

// Numero di macchioline
const numberOfSpots = 32;
createSpots(numberOfSpots);