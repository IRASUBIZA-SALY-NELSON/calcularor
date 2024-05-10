const mypromise=new Promise(
    (resolve,reject)=>{
        // to set the time of execution
setTimeout(()=>{
const randomNumber=Math.random();
if(randomNumber<0.5){
    resolve('success!');
}
else{
    reject(new error('failed'));
}
} 
),1000 }
);
mypromise.then((result)=>{
    console.log('promise resolved :',result);
}).catch((error)=>{
    console.log('promise rejected',error);
});