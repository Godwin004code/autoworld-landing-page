
const images = [
    {img: '/Saved Pictures/images/IMG-20211022-WA0060.jpg',
    par: `'The Cars we drive say a lot about us.'`,
    parh2: 'Alexandra Paul'
},
    {img: '/Saved Pictures/images/IMG-20211022-WA0047.jpg',
    par: `'I love fast cars and to go fast in them..'`,
    parh2: 'Lara Flynn Boyle'
    
},
    {img: '/Saved Pictures/images/IMG-20211022-WA0048.jpg',
    par: `'Everything in life is somewhere else, and you get there by car..'`,
    parh2: 'E.B White'
    
},
    {img: '/Saved Pictures/images/IMG-20211022-WA0049.jpg',
    par: `'When you're great, you want people to see the car you drive..'`,
    parh2: 'Andris Nelsons'
    
}
]
const para = document.querySelector('.hero p')
const paraH2 = document.querySelector('.hero h2')
const sliderImg= document.querySelector('.sliders img')

let current = 0
function slideShow() {
    current++
    const item = images[current]
    if(current > 4) {
        current = 0
    }
    sliderImg.src = item.img;
    para.textContent = item.par;
    paraH2.textContent = item.parh2;
}
setInterval(slideShow, 2000)


// nav toggle

const header = document.querySelector('header')
const toggleBtn = document.querySelector('.toggleBtn')

toggleBtn.addEventListener('click', function() {
    header.classList.toggle('active')
})
