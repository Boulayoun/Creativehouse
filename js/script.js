document.addEventListener('DOMContentLoaded', function() {
    var banners = [
        { 
            image: 'img/slide1.webp',
            title: 'Transformez vos idées en réalité visuelle',
            text: 'Nous sublimons vos projets grâce à des technologies de pointe.'
        },
        { 
            image: 'img/slide2.webp',
            title: 'Des solutions web sur mesure',
            text: 'Sites web modernes et optimisés pour booster votre activité.'
        },
        { 
            image: 'img/slide3.webp',
            title: 'Aménagement d\'intérieur esthétique et fonctionnel',
            text: 'Des espaces optimisés pour un impact visuel et pratique.'
        },
        { 
            image: 'img/slide4.webp',
            title: 'Enseignes et totems qui captivent',
            text: 'Attirez l’attention avec des créations visuelles uniques.'
        },
        { 
            image: 'img/slide5.webp',
            title: 'Des solutions pour tous vos événements',
            text: 'Transformez vos événements en expériences mémorables.'
        }
    ];

    var currentBanner = 0;

    function updateBanner() {
        var bannerSection = document.querySelector('.dynamic-banner');
        var bannerContent = document.querySelector('.banner-content');

        bannerSection.style.backgroundImage = 'url(' + banners[currentBanner].image + ')';
        bannerContent.querySelector('h1').classList.remove('animate');
        bannerContent.querySelector('p').classList.remove('animate');

        setTimeout(() => {
            bannerContent.querySelector('h1').textContent = banners[currentBanner].title;
            bannerContent.querySelector('p').textContent = banners[currentBanner].text;
            bannerContent.querySelector('h1').classList.add('animate');
            bannerContent.querySelector('p').classList.add('animate');
        }, 500); // Délai pour que l'image change avant le texte

        currentBanner = (currentBanner + 1) % banners.length;
    }

    setInterval(updateBanner, 5000);
    updateBanner(); // Afficher la première bannière immédiatement
});
