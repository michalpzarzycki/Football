
const LEFT_ARROW = document.querySelector(".arrowLeft")
const RIGHT_ARROW = document.querySelector(".arrowRight")
let num = 0;
const clubs = {
    sevilla: {
        stadium:'/stadiums/sevilla.jpg',
        logo: '/logos/sevilla.png'
    },
    valencia: {
        stadium:'./stadiums/valencia.jpg',
        logo:'/logos/valencia.png'
    },
    real: {
        stadium:'./stadiums/real.jpg',
        logo:'/logos/real.png'
    },
    barcelona: {
        stadium:'./stadiums/barcelona.jpg',
        logo:'/logos/barcelona.png'
    },
    villarreal: {
        stadium:'./stadiums/villarreal.jpg',
        logo:'/logos/villarreal.png'
    },
    betis: {
        stadium:'./stadiums/betis.jpg',
        logo:'/logos/betis.png'
    }
}

let stadiums = []
let logos = []
for(key in clubs) {
    stadiums.push(clubs[key].stadium)
    logos.push(clubs[key].logo)
}
console.log(stadiums, logos)
RIGHT_ARROW.addEventListener('click', ()=> {
    document.querySelector('.logoPng').style.setProperty('--club-logo', `url(${logos[num]})`)
    document.querySelector('.clubLogo').style.setProperty('--club-background-stadium', `url(${stadiums[num]})`)
    num+=1
})
LEFT_ARROW.addEventListener('click', ()=> {
    document.querySelector('.logoPng').style.setProperty('--club-logo', `url(${logos[num]})`)
    document.querySelector('.clubLogo').style.setProperty('--club-background-stadium', `url(${stadiums[num]})`)
    num-=1
})