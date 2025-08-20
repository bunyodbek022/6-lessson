const password = function(parol){
    return (parol.length>=8)  ? "Yaroqli parol " : "Yaroqsiz parol";
}
console.log(password(prompt("Parolni kiriting: ")))