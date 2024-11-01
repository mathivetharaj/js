function calculator(){
    let sum=0;
    return {
        add: (num)=>{
            sum=sum+num;
            return sum;
        },
        multiply: (num)=>{
            sum=sum*num;
            return sum;
        }
    }
}

let mycal=calculator();
console.log(mycal.add(10));
console.log(mycal.multiply(10));