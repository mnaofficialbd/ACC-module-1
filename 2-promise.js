// promise step: pending, resolved, rejects

const myPromise = new Promise((resolve, reject) => {
    const user = null;
    if (user) {
        reject('Something is wrong')
    }
    else {
        setTimeout(() => {
            resolve({name: 'Rock'})
        }, 3000)
    }
})

// ===
const userIds = [1, 2, 3, 4, 5];
let userData = [];
for (let i = 0; i < userIds.length; i++) {
    const userId = userIds[i];
    userData.push(myPromise)
}

Promise.all(userData).then(res=>{
    console.log('Data from Pomise.all',res);
})

// console.log(userData);

myPromise
    .then(res => console.log(res))
    .catch(err => console.log(err))
