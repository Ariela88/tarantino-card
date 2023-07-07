const film1 = new Film('./assets/pf-card.webp','Pulp Fiction',1994,)
const film2 = new Film('Bastardi Senza Gloria',2009)
const film3 = new Film('Kill Bill Vol.1',2003)
const film4 = new Film('Le Iene',1992)
const film5 = new Film('Jackie Brown',1997)
const film6 = new Film('Four Rooms',1995)
const film7 = new Film('Django Unchained',2012)
const film8 = new Film('The Hateful Eight',2015)
const film9 = new Film('C\'era una volta Hollywood',2019)

const filmArray = [film1,film2,film3,film5,film4,film6,film7,film8,film9]


function renderIndex(list){

    const mainWrapper = document.getElementById('main-wrapper');

    mainWrapper.innerHTML = '';

    for (let i = 0; i < list.length; i++){

        let film = list[i]
 
 const cardFilm = document.createElement('div')

cardFilm.classList.add('card-film')
const titleCard = document.createElement('span')
const yopCard = document.createElement('span')

const nodeTitle = document.createTextNode('Titolo: '+ film.title)
const nodeYop = document.createTextNode('Anno di uscita: '+ film.yop)

const imageCard = document.createElement('img')
imageCard.src  = film.image

cardFilm.appendChild(imageCard)
titleCard.appendChild(nodeTitle)
yopCard.appendChild(nodeYop)

cardFilm.appendChild(titleCard)
cardFilm.appendChild(yopCard)

mainWrapper.appendChild(cardFilm)
mainWrapper.classList.add('main-wrapper')

}

}

renderIndex(filmArray);


function sortCardByName(){

    
        
filmArray.sort((a,b)=> a.title.localeCompare(b.title))
            


         renderIndex(filmArray)
}






function sortCardByYop(){

    
        
filmArray.sort((a,b)=> a.yop - b.yop)
            


         renderIndex(filmArray)
}


