main = (input) => {
    var args = input.split("\n");
    var N = parseInt(args[0]);
    var K = parseInt(args[1]);
    var xs = args[2].split(" ").map((n) => parseInt(n));

    var res = 0;

    for (var i = 0; i < N; i++){
        res += Math.min(Math.abs(xs[i])*2, Math.abs(xs[i] - K)*2)
    }
    console.log(res)
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
//oj t -c "node main.js"
