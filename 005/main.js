main = (input) => {
    var args = input.split("\n");
    var [N, M, C] = args[0].split(" ").map((n) => parseInt(n));
    var Bs = args[1].split(" ").map((n) => parseInt(n));
    var As = [];
    var tmpVar = 0;
    var cnt = 0;

    for (var i=2; i < N+2; ++i){
        tmpVar = 0
        As = args[i].split(" ").map((n) => parseInt(n));
        for (var j =0; j < M; j++){
            tmpVar += As[j] * Bs[j];
        }
        if(tmpVar > -C){
            cnt++
        }
    }
    console.log(cnt);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
//oj t -c "node main.js"