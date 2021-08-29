main = (input) => {
    var [H, W] = input.split(" ").map((n) => parseInt(n));
    
    if (H == 1 || W == 1){
        console.log(1);
    } else {
        console.log(Math.floor((H*W)/2) + (H*W)%2 )
    }

}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
//oj t -c "node main.js"