main = (input) => {
    const args = input.split('\n');
    const [N, K] = args[0].split(" ").map(BigInt);
    let res = N%K;

    if(K - N%K < N%K){
        res = K - N%K
    } 

    console.log(res.toString())


}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
//oj t -c "node main.js"