const boxarr = document.querySelectorAll(".box")

let flag = 1;
var ans = 0
winning_combinations = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [7, 5, 3]]
const x_pos = []
const y_pos = []

boxarr.forEach((el) => {
    el.addEventListener("click", (event) => {
        // console.log(event.target)
        startgame(event.target)
    })
})

function startgame(e) {
    if (x_pos.includes(Number(e.parentElement.id)) || (y_pos.includes(Number(e.parentElement.id)))) {
        console.log("hh")
    }
    else {


        // console.log(e.id)

        if (flag == 1) {
            const p = document.createElement("p")
            p.innerText = "X"
            p.style.color = "Yellow"
            e.appendChild(p);
            x_pos.push(Number(e.id))
            if (check_win(x_pos, winning_combinations) == true) {
                console.log("x won")
                document.getElementById("result").style.visibility = "visible";
                document.getElementById("message").innerText = "X won";
            }
            flag = 0
            ans += 1
        }
        else {
            const p = document.createElement("p")
            p.innerText = "O"
            p.style.color = "Red"
            e.appendChild(p);
            y_pos.push(Number(e.id))
            if (check_win(y_pos, winning_combinations) == true) {
                console.log("y won")
                document.getElementById("result").style.visibility = "visible";
                document.getElementById("message").innerText = "Y won";
            }
            flag = 1
            ans += 1


        }
        if (ans == 9) {
            document.getElementById("result").style.visibility = "visible";
            document.getElementById("message").innerText = "DRAW";
        }
        // console.log(x_pos,y_pos)
    }
}



function check_win(arr, winning_combinations) {
    for (let i = 0; i < winning_combinations.length; i++) {
        // console.log(winning_combinations[i])
        const boole = winning_combinations[i].every((el) => {
            return arr.includes(el)
        })
        if (boole == true) {
            return true
        }
    }
    return false
}
document.getElementById("botton").onclick = function () {
    window.location.reload();
}



