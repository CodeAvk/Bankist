'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

// const displayMovements = function (movements) {
//   containerMovements.innerHTML = '';
//   for (const [i, mov] of movements.entries()) {
//     const type = mov > 0 ? 'deposit' : 'withdrawal';
//     const html = `
//     <div class="movements__row">
//       <div class="movements__type movements__type--${type}">${
//       i + 1
//     } ${type}</div>
//       <div class="movements__value">${mov}</div>
//     </div>
//     `;
//     containerMovements.insertAdjacentHTML('afterbegin', html);
//   }
// };

const displayMovements = function (movements) {
  // containerMovements.textContent = '';
  containerMovements.innerHTML = '';
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__value">${mov}</div>
    </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

// displayMovements(account1.movements);

const calcDisplayBalance = function (movements) {
  const balance = movements.reduce(function (acc, crr, i, arr) {
    return acc + crr;
  }, 0);
  labelBalance.textContent = `${balance} €`;
};

// calcDisplayBalance(account2.movements);

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const outcomes = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(outcomes)}`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposits => (deposits * acc.interestRate) / 100)
    .filter((mov, i, arr) => {
      console.log(arr);
      return mov > 1;
    })
    .reduce((acc, crr) => acc + crr, 0);
  labelSumInterest.textContent = `${interest}€`;
};

// calcDisplaySummary(account1.movements);

// console.log(containerMovements.innerHTML);
// console.log((containerMovements.textContent = '1'));
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// Slice Method

// let arr = ['a', 'b', 'c', 'd', 'e'];

// console.log(arr.slice(-2));
// console.log(arr.slice(-1));
// console.log(arr.slice(1, -2));
// console.log(arr.slice(1, 2));
// console.log(arr.slice());
// console.log([...arr]);
// console.log([...arr].slice(-2));

// Splice Method

// let arr = ['a', 'b', 'c', 'd', 'e'];

// console.log(arr.splice(2));
// console.log(arr.splice(-1));
// console.log(arr);
// console.log(arr.splice(1, 2));
// console.log(arr);

// Reverse Method
// let arr = ['a', 'b', 'c', 'd', 'e'];
// let arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse());
// console.log(arr2);

// // CONCAT
// const letters = arr.concat(arr2);
// console.log(letters);

// console.log([...arr, ...arr2]);

// // JOIN
// console.log(letters.join('|'));
// console.log(letters);

// New AT Metod

// const arr = ['17', '23', '34'];
// console.log(arr[0]);
// console.log(arr.at(0));

// Getting Last element

// console.log(arr[arr.length - 1]);
// console.log(arr.slice(-1)[0]);
// console.log(arr.at(-1));

// // AT methods in String
// console.log('Abhisek'.at(0));

// // For of in Loop
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement ${i} - Rs ${movement} diposited in your account`);
//   } else {
//     console.log(
//       `Movement ${i} - Rs ${Math.abs(movement)} withdrew in your account `
//     );
//   }
// }

// console.log('----------- FOR EACH---------');
// movements.forEach(function (movement, i, arr) {
//   if (movement > 0) {
//     console.log(`Movement ${i} - Rs ${movement} diposited in your account`);
//   } else {
//     console.log(
//       `Movement ${i} - Rs ${Math.abs(movement)} withdrew in your account `
//     );
//   }
// });

// ForEach in MAP and Sets
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function (value, key, map) {
//   console.log(`${key}:${value}`);
// });

// const currenciesUnique = new Set(['IND', 'USD', 'GBP', 'UK']);

// currenciesUnique.forEach(function (value, key, map) {
//   console.log(`${key}:${value}`);
// });

///////////////////////////////////////
// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners 
about their dog's age, and stored the data into an array (one array for each).
For now, they are just interested in knowing whether a dog is an adult or a puppy.
A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than
3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'),
 and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, 
not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied
 array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult,
 and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀



const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaduplicate = dogsJulia.slice();
  // console.log(dogsJuliaduplicate);
  dogsJuliaduplicate.splice(0, 1);
  // console.log(dogsJuliaduplicate);
  dogsJuliaduplicate.splice(-2);

  console.log(dogsJuliaduplicate);

  const correctData = [...dogsJuliaduplicate, ...dogsKate];
  for (const [i, data] of correctData.entries()) {
    if (data >= 3) {
      console.log(`Dog number ${i + 1} is an adult,and is ${data} years old`);
    } else {
      console.log(
        `Dog number ${i + 1} is still a puppy 🐶 ,and is ${data} years old`
      );
    }
  }
  console.log(correctData);
  // console.log(dogsJuliaduplicate);
};

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
// checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

// const data1 = [3, 5, 2, 12, 7];
// const data2 = [13, 15, 12, 12, 7];
// data1.slice();
// console.log(data1);
// const data3 = [...data1, ...data2];
// console.log(data3);

const arr1 = [1, 2, 4, 5];
const arr2 = [...arr1];
const arr3 = arr1.splice(0);

console.log('The array is ' + arr2);
console.log(arr1);
console.log(arr3);

*/

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1;

// const movementsUSD = movements.map(function (mov) {
//   return mov * eurToUsd;
// });

// console.log(movements);
// console.log(movementsUSD);

// const movementsUSDfor = [];

// for (const mov of movements) {
//   movementsUSDfor.push(mov * eurToUsd);
// }

// console.log(movementsUSDfor);

// const movementDescription = movements.map(function (movement, i, arr) {
//   if (movement > 0) {
//     return `Movement ${i} - Rs ${movement}€ diposited in your account`;
//   } else {
//     return `Movement ${i} - Rs ${Math.abs(movement)} withdrew in your account `;
//   }
// });

// console.log(movementDescription);

// const user = 'Rashmi Ranjan Nayak';

const createUsername = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(function (name) {
        return name[0];
      })
      .join('');
  });
};

createUsername(accounts);
// console.log(accounts);

// Event Listener
let currentaccount;
btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  currentaccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentaccount);
  if (currentaccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and Message
    labelWelcome.textContent = `Welcome back 😊 ${
      currentaccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Display movements
    displayMovements(currentaccount.movements);
    // Display balance
    calcDisplayBalance(currentaccount.movements);
    // Display Summary
    calcDisplaySummary(currentaccount);
    console.log('Login');
  }
});

// const deposits = movements.filter(function (mov) {
//   return mov > 0;
// });

// console.log(deposits);

// Same in for of

// const depositOf = [];

// for (const deposit of deposits) {
//   if (deposit > 0) {
//     depositOf.push(deposit);
//   }
// }
// console.log(depositOf);

// const withdrawal = movements.filter(function (mov) {
//   return mov < 0;
// });

// console.log(withdrawal);

// console.log(movements);

// const balance = movements.reduce(function (acc, crr, i, arr) {
//   console.log(`Iteration ${i + 1} ,The accumulator is ${acc}`);
//   return acc + crr;
// }, 0);

// console.log(balance);

// same in for of loop

// let total = 0;
// for (const mov of movements) {
//   total = total + mov;
// }

// console.log(total);

// Find Maximum movements using reduce

// const maxMov = movements.reduce(function (acc, mov, i, arr) {
//   if (acc > mov) {
//     return acc;
//   } else {
//     return mov;
//   }
// }, movements[0]);

// console.log(maxMov);

// Coding Challenge

/* 
Let's go back to Julia and Kate's study about dogs. This time,
they want to convert dog ages to human ages and calculate the average age of the dogs in 
their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), 
and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old,
humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// const calcAverageHumanAge = function (arr) {
//   const calcHumanAge = arr.map(function (mov) {
//     if (mov <= 2) {
//       return 2 * mov;
//     } else {
//       return 16 + mov * 4;
//     }
//   });
//   console.log(calcHumanAge);

//   const removeAge = calcHumanAge.filter(function (mov) {
//     return mov > 18;
//   });
//   console.log(removeAge);

//   const calAvgAge = removeAge.reduce(function (acc, mov) {
//     return acc + mov;
//   }, 0);
//   return calAvgAge / removeAge.length;
//   // return calAvgAge;
// };

// const res1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// const res2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

// console.log(res1, res2);

// console.log(movements);
// // PIPELINE
// const totalDepositeUSD = movements
//   .filter(mov => mov > 0)
//   .map((mov, i, arr) => {
//     // console.log(arr);
//     return mov * eurToUsd;
//   })
//   .reduce((acc, mov) => acc + mov, 0);

// console.log(totalDepositeUSD);

/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), 
and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old,
humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]
*/

// ---------------Answer-----------------------------
/*
const calcAverageHumanAge = ages =>
  ages
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

// console.log('Result');
const res_1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const res_2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

console.log(res_1);
console.log(res_2);
*/

// Find Method

// const firstWithdrawal = movements.find(mov => mov < 0);

// console.log(movements);
// console.log(firstWithdrawal);

// console.log(accounts);

// const account = accounts.find(acc => acc.owner === 'Steven Thomas Williams');
// console.log(account);
