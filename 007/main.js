main = (input) => {
    var lines = input.split("\n");

    var a =[];
    for(var i = 0; i < 3; i++){
        lines[i].split(" ").map((n) => a.push(parseInt(n)))
    };

    var n = parseInt(lines[3]);

    var rest = Array(9).fill(false)
    for(var i = 4; i < n+4; i++){
        var b = parseInt(lines[i]);
        for (var j = 0; j < 9; j++){
            if (a[j] == b){
                rest[j] = true
            }
        }
    };

    holizontal = rest[0] && rest[1] && rest[2] || rest[3] && rest[4] && rest[5] || rest[6] && rest[7] && rest[8];
    vartical =   rest[0] && rest[3] && rest[6] || rest[1] && rest[4] && rest[7] || rest[2] && rest[5] && rest[8];
    rectagonal = rest[0] && rest[4] && rest[8] || rest[2] && rest[4] && rest[6]

    if (holizontal || vartical || rectagonal){
        console.log("Yes")
    } else{
        console.log("No")
    }


}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
//oj t -c "node main.js"