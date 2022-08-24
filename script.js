let son1 = prompt('1-sonni kiriting : ')
let son2 = prompt('2-sonni kiriting : ')
let son3 = prompt('3-sonni kiriting : ')
if (son1 < son2 < son3) {
    alert("o'rta son " + son2)
} else if (son3 < son2 < son1) {
    alert("o'rta son " + son2)
} else if (son1 < son3 < son2) {
    alert("o'rta son " + son3)
} else if (son2 < son3 < son1) {
    alert("O'rta son " + son3)
}else if (son2 < son1 < son3) {
    alert("O'rta son " + son1)
}else if (son3 < son1 < son2) {
    alert("O'rta son " + son1)
}else{
    alert("O'rta son yo'q !")
}