main = (input) => {
    const args = input.split('\n');
    let [a, b, c] = args[0].split(" ").map((n) => parseInt(n));
    let res = 0;

    while (a%2 === 0 && b%2 === 0 && c%2 === 0){
        let _a = a;
        let _b = b;
        let _c = c;

        a = parseInt(1/2 * (_b + _c));
        b = parseInt(1/2 * (_a + _c));
        c = parseInt(1/2 * (_a + _b));

        res++;
        if (a===b && b===c && c===a){
            res = -1
            break
        }
    }

    console.log(res)


}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
//oj t -c "node main.js"