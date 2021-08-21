main = (input) => {
    var args = input.split("\n");
    var [N, M, C] = args[0].split(" ").map((n) => parseInt(n));

    console.log(N, M, C)
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
//oj t -c "node main.js"