// const integer = 1                 //number числовой
// const slovo   = 'Oleg'           //string сьроковой
// const spisok  = [3, 5, 6, 3, '8'] //array массив
// const logic = true // false

// for (let i = 0; i < spisok.length; i++) {
// 	console.log(spisok[i]);
// }

// var stroka1 = 'Hello'
// var stroka2 = ' Oleg'

// var stroka1 = stroka1 + stroka2

// console.log(stroka1)

// var input = button + button.addEventListener
// var input= 
// console.log(input)
// const str = 'ECMAScript 2015';
// var n = 1;
 
// console.log(stroka1.slice(stroka1.length - n));
// console.log(eval('3*2'));
 

// console.log()


var array = ['popa', 'nina', 'vagina']
var value = 'kaka'
if (array.includes(value) === true) {
    console.log('такой элмент есть в массиве')
}else {
    console.log('нет такого элемента')
}

// Setup
const recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };
  
  // Only change code below this line
  function updateRecords(records, id, prop, value) {
    if (value === '') {
      if (records[id].hasOwnProperty(prop) === true) {
        delete records[id][prop];
      }
    } else {
      if (records[id].hasOwnProperty(prop) === true){
        records[id][prop] = value;
      } else{
        records[id][prop] = value;
      }
      
    }
  
    return records;
  }
  
  updateRecords(recordCollection, 5439, 'artist', 'ABBA');