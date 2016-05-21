// function getTempCallback (location, callback) {
//   callback (undefined, 78);
//   callback ('City not found');
//
// }
//
// getTempCallback('Philadelphia', function (err, temp) {
//   if (err) {
//     console.log('error', err);
//   } else {
//     console.log('success', temp);
//   }
// });
//
// function getTemplPromise (location) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       resolve(79);
//       reject('City not found');
//     }, 1000)
//   });
// }
//
// getTemplPromise('Philadelphia').then(function (temp) {
//   console.log('promise success', temp);
// }, function (err) {
//   console.log('promise err', err);
// });
//

//if (typeof 7 === 'number') {}

// Challenge
function addPromise (a, b) {
  return new Promise (function (resolve, reject) {
    if (typeof a === 'number' && typeof b === 'number') {
      resolve (a+b);
    } else {
      reject ('both a and b must be numbers');
    }
  });
}

addPromise (7, 11).then (function (sum) {
  console.log ('Sum is',sum);
}, function (err) {
  console.log('erorr', err);
});

addPromise (7, 'bird').then (function (sum) {
  console.log ('Sum is',sum);
}, function (err) {
  console.log('erorr', err);
});
