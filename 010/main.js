main = (input) => {
    var args = input.split("\n");
    var N = parseInt(args[0]);
    var xs = args[1].split(" ").map((n) => parseInt(n));

    var res = 0;
    xs.sort((a, b) => -(a - b))

    for (var i = 0; i < N; i++){
        if(i%2 == 0) {
            res += xs[i]
        } else {
            res -= xs[i]
        }
        
    }
    console.log(res)
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
//oj t -c "node main.js"
