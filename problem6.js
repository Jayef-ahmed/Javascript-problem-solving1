const check =(friends)=>{
    let bigone = friends[2];
    for(let i=0; i<friends.length;i++){
        const element = friends[i];
        if(element.length > bigone.length){
            bigone = element;
        }
    }
    return bigone;
}

const friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];

const result = check(friends);
console.log(result)