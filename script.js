// Массив URL фотографий
const photos = [
    'https://cf.bstatic.com/xdata/images/hotel/max1024x768/543266081.jpg?k=5abecef952e2f28765f9df3474c746ce6c7978ad9fb81ba5e1206ea845501433&o=&hp=1',
    'https://cf.bstatic.com/xdata/images/hotel/max500/543266553.jpg?k=4d519bb7ccd9af8f98f6c93d22eb7f10d3410e4a7a45223d6f1664af1c9f815b&o=&hp=1',
    'https://cf.bstatic.com/xdata/images/hotel/max500/543266707.jpg?k=3aa98a14c8b83f06b196065cfa5d3cfd4efb792ce3fd7ad633017293105985de&o=&hp=1',
    'https://cf.bstatic.com/xdata/images/hotel/max300/543289956.jpg?k=048ea5681b11a20f44e9e4ea30ac21bbec29d0e816181331391d8d5f14dffe22&o=&hp=1',
    'https://cf.bstatic.com/xdata/images/hotel/max300/543266355.jpg?k=6f04d7b39e4dda7e22526bee0150b2e48249d24ffae5bab0bb7355fa529e9029&o=&hp=1'
];

// Массив отзывов
const reviews = [
    {
        text: "Butas labai erdvus, yra net keli balkonai. Patogios lovos, viskas švaru ir tvarkinga. Bute radome visko, ko reikėjo. Vieta taip pat labai gera. Sugrįšime.",
        author: "Emilija, Литва"
    },
    {
        text: "Labai svarus ir patogus butas. Viskas apgalvota iki smulkmenu,toks vaizdas,kad gryzai namo. Indai, valymo,lyginimo net skalbimo priemones ir pan.viskas yra. Nors savininku neteko sutikti,bet didelis jiems aciū😁💪",
        author: "Zenonas, Литва"
    },
    {
        text: "Puiki vieta, visada yra kur palikti automobilį. Naujai suremontuotas butas.",
        author: "Tadas, Литва"
    }
];

// Функция для загрузки фотографий
function loadPhotos() {
    const gallery = document.getElementById('gallery');
    photos.forEach(photoUrl => {
        const img = document.createElement('img');
        img.src = photoUrl;
        img.alt = 'Апартаменты Holiday Ap';
        gallery.appendChild(img);
    });
}

// Функция для загрузки отзывов
function loadReviews() {
    const reviewsSection = document.getElementById('reviews');
    reviews.forEach(review => {
        const reviewElement = document.createElement('div');
        reviewElement.classList.add('review');
        reviewElement.innerHTML = `
            <p>${review.text}</p>
            <p>${review.author}</p>
        `;
        reviewsSection.appendChild(reviewElement);
    });
}

// Загрузка фотографий и отзывов при загрузке страницы
window.onload = function() {
    loadPhotos();
    loadReviews();
};
