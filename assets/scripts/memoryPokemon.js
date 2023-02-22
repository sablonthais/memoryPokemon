const board = document.getElementById('board');
let firstCard = null;
/**
 * 
 * @param {number} nbPairs //todo pour déterminer le type de parmetres qui est attendu dans init //
 */

const init = (nbPairs) =>{
    const myList = createList(nbPairs);
    shuffle(myList);
    //console.log(myList);//
    for(let item of myList){
            createCard(item);
        }
}
const createCard = (item) =>{
   const divCard = document.createElement('div'); //todo → on crée la div//
   divCard.classList.add('card');//todo on lui ajoute une class
   
   const divCardBack = document.createElement('div');
   divCardBack.classList.add('card-back');
   
   const divCardFront = document.createElement('div');
   divCardFront.classList.add('card-front');

   divCard.append(divCardBack , divCardFront);//todo on ajoute les divCardFront et Back dans la grande divCard//
   divCardFront.style.backgroundImage = ` url('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${item}.svg')`;
   board.append(divCard); //todo on ajoute le tout dans board//
   
   divCard.addEventListener('click', () =>{
        pick(divCard);
    });
}   

const pick = (card) =>{
    if(card.classList.add('visible')){
        return; //todo la fonction s'arrête avec return//
    }
    card.classList.add('visible');
    if(firstCard !== null){
         if(!compareCards(firstCard, card)){
            setTimeout(() =>{
                firstCard.classList.remove('visible');
                card.classList.remove('visible'); //todo on les rend invisible a nouveau → on les 'retourne'//
                firstCard = null;
            },1000)
            
        }else{
            firstCard = null;
        }
        
    }else{
        firstCard = card;
    }
   

}

const createList = (nbPairs) => {
    
    const l = []; /* si nbPairs == 6 → 1,1,2,2,3,3,4,4,5,5,6,6*/
    for(let i = 1 ; i <= nbPairs ; i++){
        //console.log(i)
        l.push(i);
        l.push(i);
    }
    return l; 
}
const shuffle = (list) =>{
    list.sort(() => Math.random() - 0.5);
}
const compareCards = (card1, card2) => {
    if(card1.querySelector('.card-front').style.backgroundImage === card2.querySelector('.card-front').style.backgroundImage){
        return true;
    }else{
        return false; //todo le else n'est pas obligatoire car return arrête tout//
    }
}

init(10); //todo on effectue la fonction init 5x → sans css les cards ne s'affichent pas encore du coup on ouvre l'inspecteur et les cards s'affichent là //