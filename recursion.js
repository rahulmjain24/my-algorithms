const morse = {
    A: "._", N: "_.",
    B: "_...", O: "___",
    C: "_._.", P: ".__.",
    D: "_..", Q: "__._",
    E: ".", R: "._.",
    F: ".._.", S: "...",
    G: "__.", T: "_",
    H: "....", U: ".._",
    I: "..", V: "..._",
    J: ".___", W: ".__",
    K: "_._", X: "_.._",
    L: "._..", Y: "_.__",
    M: "__", Z: "__..",
    1: ".____", 6: "_....",
    2: "..___", 7: "__...",
    3: "...__", 8: "___..",
    4: "...._", 9: "____.",
    5: ".....", 0: "_____"
}

let morseCode = "";
let i = 0;
function strRecur(str) {
    let firChar = "";
    if (str[i] === " ") {
        firChar = "/"
    } else {
        firChar = str[i].toUpperCase();
    }
    if (firChar === "/") {
        morseCode += firChar + " ";
    } else {
        morseCode += morse[firChar] + " ";
    }
    i++;
    if (i < str.length) {
        return strRecur(str);
    } else {
        return morseCode;
    }
}

const finalMorse = strRecur("69420")
console.log(finalMorse)
