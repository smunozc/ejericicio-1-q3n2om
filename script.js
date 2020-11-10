// En este ejercicio deberéis crear un array de objetos a partir de la siguiente lista de usuarios:
//  * name: usuario1, country: spain, money: 199, premiumAccount: true 
//  * name: usuario2, country: france, money: 0, premiumAccount: false 
//  * name: usuario3, country: spain, money: 537, premiumAccount: false 
//  * name: usuario4, country: italy, money: 1004, premiumAccount: true 
//  * name: usuario5, country: spain, money: 250, premiumAccount: false 
//  * name: usuario6, country: ireland, money: 799, premiumAccount: true 
//  * name: usuario7, country: spain, money: 3345, premiumAccount: false 

// Este array de usuarios debe generarse en una función llamada "createUsers". Al generar el array hay que asignarlo a una variable que haya sido declarada globalmente fuera de la función.

// Después de crear el array, deberéis realizar un filtrado empleando el método del objeto "Array", "filter".
// Este filtrado deberá generar otro array con los usuarios que sean de españa y que tengan más de 200 euros.
// El filtrado se realizará desde una función llamada "filterUsers" que recibirá por parámetros la lista de usuarios y devolverá el array filtrado.
// Las dos últimas instrucciones de la función "onLoad" deben ser dos console.log para mostrar los dos arrays.
// Utilizad constantes siempre que sea posible.
// Suerte!


var users = [];

function User (name,country,money,premiumAccount){
  this.name = name;
  this.country = country;
  this.money = money;
  this.premiumAccount = premiumAccount
}

function createUsers(){
  let user1 = new User("usuario1", "spain", 199, true);
  let user2 = new User("usuario2", "france", 0, false);
  let user3 = new User("usuario3", "spain", 537, false);
  let user4 = new User("usuario4", "italy", 1004, true);
  let user5 = new User("usuario5", "spain", 250, false);
  let user6 = new User("usuario6", "ireland", 799, true);
  let user7 = new User("usuario7", "spain", 3345, false);

  users.push(user1);
  users.push(user2);
  users.push(user3);
  users.push(user4);
  users.push(user5);
  users.push(user6);
  users.push(user7);

}

function filterUsers(array){
  const money = 200;
  let newArray = [];
  for (let i = 0; i < array.length; i++){
    if(array[i].money > money){
      newArray.push(array[i]);
    }
  }
  return newArray;
}

createUsers();

window.addEventListener('load',onLoad);

function onLoad(){
  console.log(users);
  console.log(filterUsers(users));
  console.log('hi')
}