document.querySelectorAll("#option a").forEach((a) => {
    //jika nanti di klik maka akan menjalan fungsi computerChoice()
    a.addEventListener("click", (element) => {
        computerChoice(element)
    })
})
function computerChoice(element){
    //pilihan user
    let pilihanUser = element.target.innerText;

    //menangkap element resut dengan queryselector
    let pilihankomputer = document.querySelector("#result");

    // membuat array pilihan untuk koputer
    let choise =["Rock","Paper","Scissors"];

    // pilihan random komputer
    pilihankomputer.innerHTML = choise[Math.round(Math.random() * choise.length)];
    pilihankomputer = pilihankomputer.innerHTML;

    // jika pilihan user == komputer (draw)
    if(pilihanUser == pilihankomputer){
        alert("gembel seri");
    }

    // jika pilihan user menang
    if(pilihanUser == "Rock" && pilihankomputer == "Scissors"){
        alert("lu menang");
    } else if(pilihanUser == "Paper" && pilihankomputer == "Rock"){
        alert("lu menang coy");
    } else if(pilihanUser == "Scissors" && pilihankomputer == "Paper"){
        alert("anjay GG")
    }

     // jika pilihan komputer menang
     if(pilihankomputer == "Rock" && pilihanUser == "Scissors"){
        alert("you lose");
    } else if(pilihankomputer == "Paper" && pilihanUser == "Rock"){
        alert("kalah mulu");
    } else if(pilihankomputer == "Scissors" && pilihanUser == "Paper"){
        alert("jelek bat ")
    }
}

