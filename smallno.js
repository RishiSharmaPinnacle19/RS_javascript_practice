function small(a,b,c){
    if(a < b && a<c){
        return a;
    }
    else if(b < a && b < c){
        return b;

    }
    else if(c < a && c < b){
        return c;
    }
        
}

console.log("small no is",small(19,8,74));

console.log("small no is",small(3.9,4,4));
