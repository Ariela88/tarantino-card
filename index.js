const film1 = new Film('./assets/pf-card.webp','Pulp Fiction',1994,'9 su 10')
const film2 = new Film('./assets/bastard.jpg','Bastardi Senza Gloria',2009,'8 su 10')
const film3 = new Film('./assets/kill.jpg','Kill Bill Vol.1',2003,'9 su 10')
const film4 = new Film('./assets/iene.jpg','Le Iene',1992,'9 su 10')
const film5 = new Film('./assets/jackie.jpg','Jackie Brown',1997,'8 su 10')
const film6 = new Film('./assets/four.jpg','Four Rooms',1995,'7 su 10')
const film7 = new Film('./assets/django.jpg','Django Unchained',2012,'7,5 su 10')
const film8 = new Film('./assets/hateful.jpg','The Hateful Eight',2015,'7 su 10')
const film9 = new Film('./assets/kill2.jpg','Kill bil Vol.2',2004,' 7 su 10')

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
const rateCard = document.createElement('span')

const nodeTitle = document.createTextNode('Titolo: '+ film.title)
const nodeYop = document.createTextNode('Anno di uscita: '+ film.yop)
const nodeRate = document.createTextNode('Valutazione: '+ film.rate)

const imageCard = document.createElement('img')
imageCard.src  = film.image

cardFilm.appendChild(imageCard)
titleCard.appendChild(nodeTitle)
yopCard.appendChild(nodeYop)
rateCard.appendChild(nodeRate)

cardFilm.appendChild(titleCard)
cardFilm.appendChild(yopCard)
cardFilm.appendChild(rateCard)

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



    function sortCardByRateUp(){

    
        
        filmArray.sort((a,b)=> a.rate.localeCompare(b.rate))
                    
        
        
                 renderIndex(filmArray)
        }
