// RECURSIVIDADE
function fatorial(n) {
    if (n == 1) {
        return 1
    } else {
        return n * fatorial(n-1)
    }
}

console.log(fatorial(4))

/*

5! = 5 * 4 * 3 * 2 * 1
5! = 5 * 4!

n! = n x (n-1)

*/