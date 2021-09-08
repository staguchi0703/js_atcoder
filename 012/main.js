main = (input) => {
    const args = input.split('\n');
    const [K, N] = args[0].split(' ').map((n) => parseInt(n));
    const As = args[1].split(' ').map((n) => parseInt(n));

    let res = 0;
    let tmp = 0;

    for (let i = 0; i < As.length; ++i){
        if(i === 0){
            tmp = As[i] + K - As[As.length-1]
            res = tmp 
        } else {
            tmp = As[i] - As[i-1]
            res = Math.max(res, tmp);
        }
    }
    console.log(K - res);

}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
//oj t -c "node main.js"