main = (input) => {
    var N = parseInt(input);
    
    for (var i = 0; i <= N+1; i++){
        if(parseInt(i * 1.08) === N){
            console.log(i);
            return
        };
    }
    console.log(":(");
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
//oj t -c "node main.js"