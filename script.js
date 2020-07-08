
const LEFT_ARROW = document.querySelector(".arrowLeft")
const RIGHT_ARROW = document.querySelector(".arrowRight")
let num = 0;
const clubs = {
    sevilla: {
        stadium:'/stadiums/sevilla.jpg',
        logo: '/logos/sevilla.png',
        font:'barcelona',
        navColors: ['#ffffff','#43333'],
        player: '/players/sevilla.png',
        team: '/backgrounds/sevilla.jpg'
    },
    valencia: {
        stadium:'./stadiums/valencia.jpg',
        logo:'/logos/valencia.png',
        font:'valencia',
        navColors:['#000000','#ffffff'],
        player: '/players/valencia.png',
        team: '/backgrounds/valencia.jpg'

    },
    real: {
        stadium:'./stadiums/real.jpg',
        logo:'/logos/real.png',
        font:'barcelona',
        navColors:['#ffffff','#00529f'],
        player: '/players/real.png',
        team: '/backgrounds/real.jpg'

    },
    barcelona: {
        stadium:'./stadiums/barcelona.jpg',
        logo:'/logos/barcelona.png',
        font:'barcelona',
        navColors:['#a50044','#004d98'],
        player: '/players/barcelona.png',
        team: '/backgrounds/barcelona.jpeg'

    },
    villarreal: {
        stadium:'./stadiums/villarreal.jpg',
        logo:'/logos/villarreal.png',
        font:'barcelona',
        navColors:['#ffe667','#005187'],
        player: '/players/villarreal.png',
        team: '/backgrounds/villarreal.jpg'

    },
    betis: {
        stadium:'./stadiums/betis.jpg',
        logo:'/logos/betis.png',
        font:'barcelona',
        navColors:['#0bb363','#ffffff'],
        player: '/players/betis.png',
        team: '/backgrounds/betis.jpg'

    },
    alaves: {
        stadium:'./stadiums/alaves.jpg',
        logo:'/logos/alaves.png',
        font:'barcelona',
        navColors:['#0761af','#009ad7'],
        player: '/players/alaves.png',
        team: '/backgrounds/alaves.jpg'

    },
    atletico: {
        stadium:'./stadiums/atletico.jpg',
        logo:'/logos/atletico.png',
        font:'valencia',
        navColors:['#cb3524','#ffffff'],
        player: '/players/atletico.png',
        team: '/backgrounds/atletico.jpg'

    },
    bilbao: {
        stadium:'./stadiums/bilbao.jpg',
        logo:'/logos/bilbao.png',
        font:'valencia',
        navColors:['#ee2523','#000000'],
        player: '/players/bilbao.png',
        team: '/backgrounds/bilbao.jpg'

    },
    celta: {
        stadium:'./stadiums/celta.jpg',
        logo:'/logos/celta.png',
        font:'barcelona',
        navColors:['#8ac3ee','#e5254e'],
        player: '/players/celta.png',
        team: '/backgrounds/celta.jpg'

    },
    eibar: {
        stadium:'./stadiums/eibar.jpg',
        logo:'/logos/eibar.png',
        font:'barcelona',
        navColors:['#0071b9','#aa093c'],
        player: '/players/eibar.png',
        team: '/backgrounds/eibar.jpg'

    },
    espanol: {
        stadium:'./stadiums/espanol.jpg',
        logo:'/logos/espanol.png',
        font:'valencia',
        navColors:['#ffffff','#007fc8'],
        player: '/players/espanol.png',
        team: '/backgrounds/espanol.jpg'

    },
    getafe: {
        stadium:'./stadiums/getafe.jpg',
        logo:'/logos/getafe.png',
        font:'barcelona',
        navColors:['#005999','#c43a27'],
        player: '/players/getafe.png',
        team: '/backgrounds/getafe.jpg'

    },
    granada: {
        stadium:'./stadiums/granada.jpg',
        logo:'/logos/granada.png',
        font:'barcelona',
        navColors:['#ffffff','#a61b2b'],
        player: '/players/granada.png',
        team: '/backgrounds/granada.jpg'

    },
    leganes: {
        stadium:'./stadiums/leganes.jpg',
        logo:'/logos/leganes.png',
        font:'valencia',
        navColors:['#0c1f6e','#ffffff'],
        player: '/players/leganes.png',
        team: '/backgrounds/leganes.jpg'

    },
    levante: {
        stadium:'./stadiums/levante.jpg',
        logo:'/logos/levante.png',
        font:'barcelona',
        navColors:['#b4053f','#005ca5'],
        player: '/players/levante.png',
        team: '/backgrounds/levante.jpg'

    },
    mallorca: {
        stadium:'./stadiums/mallorca.jpg',
        logo:'/logos/mallorca.png',
        font:'valencia',
        navColors:['#e20613','#000000'],
        player: '/players/mallorca.png',
        team: '/backgrounds/mallorca.jpg'

    },
    osasuna: {
        stadium:'./stadiums/osasuna.jpg',
        logo:'/logos/osasuna.png',
        font:'barcelona',
        navColors:['#0a346f','#d91a21'],
        player: '/players/osasuna.png',
        team: '/backgrounds/osasuna.jpg'

    },
    sociedad: {
        stadium:'./stadiums/sociedad.jpg',
        logo:'/logos/sociedad.png',
        font:'valencia',
        navColors:['#ffffff','#0067b1'],
        player: '/players/sociedad.png',
        team: '/backgrounds/sociedad.jpg'

    },
    valladolid: {
        stadium:'./stadiums/valladolid.jpg',
        logo:'/logos/valladolid.png',
        font:'barcelona',
        navColors:['#921b88','#ffffff'],
        player: '/players/valladolid.png',
        team: '/backgrounds/valladolid.jpg'

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
document.querySelectorAll('.teamBox').forEach((elem, index) => {
    elem.setAttribute('name', names[index])
})

console.log(names)
for(let i=0; i<logos.length; i++) {
    document.querySelector(`.teamBox:nth-child(${i+1})`).style.backgroundImage = `url(${logos[i]})`
    

}
console.log(stadiums, logos)
RIGHT_ARROW.addEventListener('click', ()=> {
    if(num === logos.length) num=0
    if(num<0) num=logos.length
    if(num !==0) document.querySelector(`.teamBox:nth-child(${num})`).style.border = ""
    document.querySelector('main').style.backgroundImage = `url(${clubs[names[num]].team})`
    document.querySelector(`.teamsBar`).style.background = `linear-gradient(0deg, ${clubs[names[num]].navColors[1]} 0%, ${clubs[names[num]].navColors[0]} 100%)`
    document.querySelector('.logoPng').style.setProperty('--club-logo', `url(${logos[num]})`)
    document.querySelector('.clubLogo').style.setProperty('--club-background-stadium', `url(${stadiums[num]})`)
    document.querySelector('.clubName').style.setProperty('--club-color-primary', `${clubs[names[num]].navColors[1]}`)
    document.querySelector('.clubName').style.setProperty('--club-color-secondary', `${clubs[names[num]].navColors[0]}`)
    document.querySelector('.player').style.backgroundImage = `url(${clubs[names[num]].player})`
    document.querySelector('.clubName').style.setProperty('--club-font', `${clubs[names[num]].font}`)
    document.querySelector('.clubName').textContent = `${names[num]}`
    document.querySelector(`.teamBox:nth-child(${num+1})`).style.border = "2px solid black"
    num+=1
})

LEFT_ARROW.addEventListener('click', ()=> {
    if(num !==0) document.querySelector(`.teamBox:nth-child(${num+1})`).style.border = "";

    num-=1
    console.log(num)
    if(num === logos.length) num=0
    if(num<0) num=logos.length-1
    document.querySelector('main').style.backgroundImage = `url(${clubs[names[num]].team})`
   document.querySelector(`.teamsBar`).style.background = `linear-gradient(0deg, ${clubs[names[num]].navColors[1]} 0%, ${clubs[names[num]].navColors[0]} 100%)`
   document.querySelector('.logoPng').style.setProperty('--club-logo', `url(${logos[num]})`)
    document.querySelector('.clubLogo').style.setProperty('--club-background-stadium', `url(${stadiums[num]})`)
    document.querySelector('.player').style.backgroundImage = `url(${clubs[names[num]].player})`
    document.querySelector('.clubName').style.setProperty('--club-font', `${clubs[names[num]].font}`)
    document.querySelector('.clubName').textContent = `${names[num]}`

    document.querySelector(`.teamBox:nth-child(${num+1})`).style.border = "2px solid black"
})


document.querySelectorAll('.teamBox').forEach((elem, index) => elem.addEventListener('click', (e) => {
    let target =  e.target.getAttribute('name');
    document.querySelectorAll('.teamBox').forEach(elem => {
        elem.style.border = "2px solid transparent"
    })
    document.querySelector('main').style.backgroundImage = `url(${clubs[target].team})`

    document.querySelector(`.teamsBar`).style.background = `linear-gradient(0deg, ${clubs[target].navColors[1]} 0%, ${clubs[target].navColors[0]} 100%)`
    document.querySelector('.logoPng').style.setProperty('--club-logo', `url(${clubs[target].logo})`)
     document.querySelector('.clubLogo').style.setProperty('--club-background-stadium', `url(${clubs[target].stadium})`)
     document.querySelector('.player').style.backgroundImage = `url(${clubs[target].player})`
     document.querySelector('.clubName').style.setProperty('--club-font', `${clubs[target].font}`)
     document.querySelector('.clubName').textContent = `${target}`
     document.getElementsByName(`${target}`)[0].style.border = '2px solid black'

}))