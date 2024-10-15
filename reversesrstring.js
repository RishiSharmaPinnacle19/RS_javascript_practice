function rev(a) {  
    // return a.split("").reverse().join("");
        let result ="";
        for(let i = a.length -1; i>=0; i--){
        result=result+a[i];
        // result += a[i];  result=result+a[i]; another way to write its work same as above code...
    }
    return result;
}
console.log(rev("Rishi "));


// without use of result output print line by line and its show revere reverse order but line by line

function r(a) {  
    // return a.split("").reverse().join("");
        for(let i = a.length -1; i>=0; i--){
        console.log(a[i]);
        }

}
console.log(r("Rishi "));

// another way to do reverse string

function reversestr(inpstr){
    const splittendInput = inpstr.split("");
    const reveredArray = splittendInput.reverse();
    const result = reveredArray.join("");
    return result;
}
console.log((inpstr,"rishi")); 