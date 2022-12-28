const promise = new Promise(function(resolve, reject){
  resolve('ok');
});

const cows = 5;

const countCows = new Promise(function(resolve, reject){
  if(cows > 10){
    resolve(`There are ${cows} cows in the farm`);
  }else {
    reject(`There is not cows`);
  }
});

countCows.then((result)=>{
  console.log(result);
}).catch((error) =>{
  console.log(error);
}).finally(() =>{
  console.log('Finally');
});