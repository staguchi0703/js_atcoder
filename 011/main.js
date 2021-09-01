main = (input) => {
    var args = input.split("\n");
    var N = parseInt(args[0]);
    var res = 0;
    
    for (var i =0; 2**i <= N; ++i){
        res = Math.max(res, 2**i)
    }

    console.log(res)
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
//oj t -c "node main.js"
