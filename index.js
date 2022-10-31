const names = ['Guadalipe', 'Ollie', 'Aki'];
const event = "surprise";


function writeCards(names, event) {
  let personalCards = []
  for (let i = 0; i < names.length; i++) {
    personalCards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    ;
  }

  return personalCards;
}


function countDown(){
  for (let countup = 0; countup < 11; countup++) {
  console.log(countup);
}
}
