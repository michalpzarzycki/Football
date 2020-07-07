
const LEFT_ARROW = document.querySelector(".arrowLeft")
const RIGHT_ARROW = document.querySelector(".arrowRight")
let num = 0;
const clubs = {
    sevilla: {
        stadium:'/stadiums/sevilla.jpg',
        logo: '/logos/sevilla.png',
        font:'barcelona'
    },
    valencia: {
        stadium:'./stadiums/valencia.jpg',
        logo:'/logos/valencia.png',
        font:'valencia'
    },
    real: {
        stadium:'./stadiums/real.jpg',
        logo:'/logos/real.png',
        font:'barcelona'
    },
    barcelona: {
        stadium:'./stadiums/barcelona.jpg',
        logo:'/logos/barcelona.png',
        font:'barcelona'
    },
    villarreal: {
        stadium:'./stadiums/villarreal.jpg',
        logo:'/logos/villarreal.png',
        font:'barcelona'
    },
    betis: {
        stadium:'./stadiums/betis.jpg',
        logo:'/logos/betis.png',
        font:'barcelona'
    },
    alaves: {
        stadium:'./stadiums/alaves.jpg',
        logo:'/logos/alaves.png',
        font:'barcelona'
    },
    atletico: {
        stadium:'./stadiums/atletico.jpg',
        logo:'/logos/atletico.png',
        font:'valencia'
    },
    bilbao: {
        stadium:'./stadiums/bilbao.jpg',
        logo:'/logos/bilbao.png',
        font:'valencia'
    },
    celta: {
        stadium:'./stadiums/celta.jpg',
        logo:'/logos/celta.png',
        font:'barcelona'
    },
    eibar: {
        stadium:'./stadiums/eibar.jpg',
        logo:'/logos/eibar.png',
        font:'barcelona'
    },
    espanol: {
        stadium:'./stadiums/espanol.jpg',
        logo:'/logos/espanol.png',
        font:'valencia'
    },
    getafe: {
        stadium:'./stadiums/getafe.jpg',
        logo:'/logos/getafe.png',
        font:'barcelona'
    },
    granada: {
        stadium:'./stadiums/granada.jpg',
        logo:'/logos/granada.png',
        font:'barcelona'
    },
    leganes: {
        stadium:'./stadiums/leganes.jpg',
        logo:'/logos/leganes.png',
        font:'valencia'
    },
    levante: {
        stadium:'./stadiums/levante.jpg',
        logo:'/logos/levante.png',
        font:'barcelona'
    },
    mallorca: {
        stadium:'./stadiums/mallorca.jpg',
        logo:'/logos/mallorca.png',
        font:'valencia'
    },
    osasuna: {
        stadium:'./stadiums/osasuna.jpg',
        logo:'/logos/osasuna.png',
        font:'barcelona'
    },
    sociedad: {
        stadium:'./stadiums/sociedad.jpg',
        logo:'/logos/sociedad.png',
        font:'valencia'
    },
    valladolid: {
        stadium:'./stadiums/valladolid.jpg',
        logo:'/logos/valladolid.png',
        font:'barcelona'
    }
}
let names = []
let stadiums = []
let logos = []
for(key in clubs) {
    names.push(key)
    stadiums.push(clubs[key].stadium)
    logos.push(clubs[key].logo)
}
console.log(names)
for(let i=0; i<logos.length; i++) {
    document.querySelector(`.teamBox:nth-child(${i+1})`).style.backgroundImage = `url(${logos[i]})`
    
}
console.log(stadiums, logos)
RIGHT_ARROW.addEventListener('click', ()=> {
    if(num !==0) document.querySelector(`.teamBox:nth-child(${num})`).style.border = ""

    document.querySelector('.logoPng').style.setProperty('--club-logo', `url(${logos[num]})`)
    document.querySelector('.clubLogo').style.setProperty('--club-background-stadium', `url(${stadiums[num]})`)
    document.querySelector('.clubName').style.setProperty('--club-font', `${clubs[names[num]].font}`)
    document.querySelector('.clubName').textContent = `${names[num]}`
    document.querySelector(`.teamBox:nth-child(${num+1})`).style.border = "2px solid black"
    num+=1
})
LEFT_ARROW.addEventListener('click', ()=> {
    document.querySelector('.logoPng').style.setProperty('--club-logo', `url(${logos[num]})`)
    document.querySelector('.clubLogo').style.setProperty('--club-background-stadium', `url(${stadiums[num]})`)
    num-=1
})