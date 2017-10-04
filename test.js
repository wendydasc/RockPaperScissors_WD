var weapons = ['rock' , 'paper', 'scissors'];
var playerOne;
var playerTwo;

  
var playerOneWeapon = weapons[parseInt(Math.random()*weapons.length) %3];
var playerTwoWeapon = weapons[parseInt(Math.random()*weapons.length) %3];

if (playerOneWeapon == 'rock' && playerTwoWeapon == 'paper') {
  console.log('Player two wins')
}
else if (playerOneWeapon == 'paper' && playerTwoWeapon == 'rock') {
  console.log ('Player one wins')
}