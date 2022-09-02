const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Success')
    }, 1000)
})

async function getData() {
    const res = await promise;
    console.log(res);
}

getData();

async function getUser() {
    const res = await fetch('');
    const user = await res.json();
    console.log(user);

    const res2 = await fetch(`https://www.example.com/${user.id}`);
    const product = await res2.json()
    console.log(product);
}