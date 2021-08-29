main = (input) => {
    var [a, b] = input.split(" ");
    var target = a + b;
    var res = "No";

    for (var i = 1; i <=1000; i++){
        
        if(i**2 == parseInt(target)){
            res = "Yes";
            break
        }
    }
    console.log(res);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
//oj t -c "node main.js"