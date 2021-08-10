function main(input){
    const args = input.split('\n');
    const [A, B] = args[0].split(' ').map((n) => parseInt(n, 10));
    var cnt = 1;

    for (var i = 0; B; i++){
        if (cnt >= B){
            break
        };

        cnt += A - 1

    }

    console.log(i);
}

// main(require("fs").readFileSync("/dev/stdin", "utf8"));
main(require("fs").readFileSync("./in.txt", "utf8"));