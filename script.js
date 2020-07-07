
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
    },
    alaves: {
        stadium:'./stadiums/alaves.jpg',
        logo:'/logos/alaves.png'
    },
    atletico: {
        stadium:'./stadiums/atletico.jpg',
        logo:'/logos/atletico.png'
    },
    bilbao: {
        stadium:'./stadiums/bilbao.jpg',
        logo:'/logos/bilbao.png'
    },
    celta: {
        stadium:'./stadiums/celta.jpg',
        logo:'/logos/celta.png'
    },
    eibar: {
        stadium:'./stadiums/eibar.jpg',
        logo:'/logos/eibar.png'
    },
    espanol: {
        stadium:'./stadiums/espanol.jpg',
        logo:'/logos/espanol.png'
    },
    getafe: {
        stadium:'./stadiums/getafe.jpg',
        logo:'/logos/getafe.png'
    },
    granada: {
        stadium:'./stadiums/granada.jpg',
        logo:'/logos/granada.png'
    },
    leganes: {
        stadium:'./stadiums/leganes.jpg',
        logo:'/logos/leganes.png'
    },
    levante: {
        stadium:'./stadiums/levante.jpg',
        logo:'/logos/levante.png'
    },
    mallorca: {
        stadium:'./stadiums/mallorca.jpg',
        logo:'/logos/mallorca.png'
    },
    osasuna: {
        stadium:'./stadiums/osasuna.jpg',
        logo:'/logos/osasuna.png'
    },
    sociedad: {
        stadium:'./stadiums/sociedad.jpg',
        logo:'/logos/sociedad.png'
    },
    valladolid: {
        stadium:'./stadiums/valladolid.jpg',
        logo:'/logos/valladolid.png'
    }
}

let stadiums = []
let logos = []
for(key in clubs) {
    stadiums.push(clubs[key].stadium)
    logos.push(clubs[key].logo)
}
for(let i=0; i<logos.length; i++) {
    document.querySelector(`.teamBox:nth-child(${i+1})`).style.backgroundImage = `url(${logos[i]})`
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