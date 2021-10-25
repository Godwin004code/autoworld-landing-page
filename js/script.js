const prev = document.querySelector('.left')
const next = document.querySelector('.right')
const h2 = document.querySelector('.container h2')
const sectionImg = document.querySelector('.img-section img')
const firstLi = document.querySelector('.first')
const secondLi = document.querySelector('.second')
const thirdLi = document.querySelector('.third')
const fourthLi = document.querySelector('.fourth')

const ratingText = [
    {
        head: 'Most Expensive Cars',
        mostImg: '/Saved Pictures/images/IMG-20211022-WA0048.jpg',
        liF: 'Rolls-Royce Boat tail',
        liS: 'Pagani Zonda Hp Barchetta',
        liT: 'Rolls-Royce Sweptail',
        liFr: 'Bugatti Lavoiture'
    },
    {
        head: 'Top 4 Fastest Cars',
        mostImg: '/Saved Pictures/images/IMG-20211022-WA0042.jpg',
        liF: 'Devel Sixteen',
        liS: 'SSC Tuatara',
        liT: 'Koenigsegg Jesko Absolut',
        liFr: 'Bugatti Bolide'
        
    },
    {
        head: 'Top 5 MidSize Cars',
        mostImg: '/Saved Pictures/images/IMG-20211022-WA0058.jpg',
        liF: 'Honda Accord',
        liS: 'Mazda Mazda',
        liT: 'Toyota Camry',
        liFr: 'Hyundai Sonota'
    },
    {
        head: 'Top 4 midSize Truck',
        mostImg: '/Saved Pictures/images/IMG-20211022-WA0041.jpg',
        liF: 'Honda Ridgeline',
        liS: 'Jeep Gladiator',
        liT: 'Toyota Tacoma',
        liFr: 'Chevrolet Colorado'
    },
    {
        head: 'Top 4 Electric Cars',
        mostImg: '/Saved Pictures/images/IMG-20211022-WA0040.jpg',
        liF: 'Tesla model3',
        liS: 'Kia NiroEvr',
        liT: 'Chevrolet BoltEv',
        liFr: 'Nissan LEAF'
    },
    {
        head: 'Top 4 Luxury Cars',
        mostImg: '/Saved Pictures/images/IMG-20211022-WA0058.jpg',
        liF: 'Mercedes-Benz',
        liS: '2021 porsche Panamera',
        liT: 'Audi A8',
        liFr: 'BMW 7-series'
    }
]

console.log(ratingText[0].liF);
console.log(ratingText[2].head);
let original = 0

next.addEventListener('click', ()=> {
    console.log(123);
    original++
    if(original > 5) {
        original = 0
    }
    const item = ratingText[original]
    h2.textContent = item.head;
    sectionImg.src = item.mostImg;
    firstLi.textContent = item.liF;
    secondLi.textContent = item.liS;
    thirdLi.textContent = item.liT;
    fourthLi.textContent = item.liFr;

})

prev.addEventListener('click', function() {
    original--
    if(original < 0) {
        original = 5
    }
    const item = ratingText[original]
    h2.textContent = item.head;
    sectionImg.src = item.mostImg;
    firstLi.textContent = item.liF;
    secondLi.textContent = item.liS;
    thirdLi.textContent = item.liT;
    fourthLi.textContent = item.liFr;
})