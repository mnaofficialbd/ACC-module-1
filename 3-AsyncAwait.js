const promise = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve('Success')
    },1000)
})

async function getData(){
   const res= await promise;
   console.log(res);
}

getData();