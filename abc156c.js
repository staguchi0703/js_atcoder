function main(input) {
    const args = input.split('\n');
    const list = args[1].split(' ').map((n) => parseInt(n, 10));
    var res = 10 ** 6;

    for (var i = 1; i <= 100; i++) {
        var cnt = 0;
        for (var item in list) {
            cnt += (list[item] - i) ** 2
        }

        if (res >= cnt) {
            res = cnt
        }
    }

    console.log(res);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
// main(require("fs").readFileSync("./in.txt", "utf8"));