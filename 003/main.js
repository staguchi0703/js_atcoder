function main(input) {
    const args = input.split('\n');
    const [N, A, B] = args[0].split(' ').map((n) => parseInt(n, 10));
    const S = args[1];

    var a_b = 0;
    var b = 0;
    var res = [];

    for (var i = 0; i < S.length; i++) {
        peopole = S[i];

        if (peopole == "c") {
            res.push("No")
        } else {
            if (peopole === "a" && a_b < A+B) {
                res.push("Yes");
                a_b++;
            } else if (peopole === "b" && a_b < A+B && b < B){
                res.push("Yes");
                a_b++;
                b++;
            } else {
             res.push("No")
            }
        }
    }
    console.log(res.join("\n"));
}
main(require("fs").readFileSync("/dev/stdin", "utf8"));
