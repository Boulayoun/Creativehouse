let currentSlide = 0;
const slides = [
    {
        background: 'img/slide1.webp',
        title: 'Transformez vos idées en réalité visuelle',
        description: 'Nous sublimons vos projets grâce à des technologies de pointe.',
    },
    {
        background: 'img/slide2.webp',
        title: 'Faites la différence avec des solutions innovantes',
        description: 'Équipez-vous des meilleurs outils pour booster votre visibilité.',
    },
    {
        background: 'img/slide3.webp',
        title: 'Excellence et qualité au cœur de chaque projet',
        description: 'Nous créons des solutions durables pour votre réussite.',
    },
    {
        background: 'img/slide4.webp',  // Assure-toi que l'image existe
        title: 'Enseignes et Totems Publicitaires',
        description: 'Attirez l’attention avec des enseignes modernes et des totems personnalisés.',
    },
    {
        background: 'img/slide5.webp',  // Assure-toi que l'image existe
        title: 'Événementiel',
        description: 'Créez un impact durable lors de vos événements avec des solutions visuelles innovantes.',
    }
];

const banner = document.querySelector('.dynamic-banner');
const bannerContent = banner.querySelector('.banner-content');

function updateBanner() {
    // Mise à jour du fond
    banner.style.backgroundImage = `url(${slides[currentSlide].background})`;

    // Mise à jour du texte
    const title = bannerContent.querySelector('h1');
    const description = bannerContent.querySelector('p');
    title.textContent = slides[currentSlide].title;
    description.textContent = slides[currentSlide].description;

    // Ajouter la classe "visible" pour faire apparaître le texte
    banner.classList.add('visible');

    // Passer à la slide suivante après 3 secondes
    setTimeout(() => {
        banner.classList.remove('visible');
    }, 3000); // Temps pour afficher le texte

    currentSlide = (currentSlide + 1) % slides.length; // Boucler les slides
}

// Mettre à jour la bannière toutes les 4 secondes pour réduire l'espace blanc
setInterval(updateBanner, 5000); // Intervalle réduit pour une transition plus rapide
updateBanner(); // Initialiser la première bannière
