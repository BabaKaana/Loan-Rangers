const code = document.getElementById("code");
const checkBtn = document.getElementById("check-btn");
const output = document.getElementById("output");
const msg = document.querySelector(".msg");

let sum = 0;
const friends = [
    {
        name: "Qasim",
        code: "bawa",
        history: [1050, 500, 200, 500, 300, 350, 1400, 1300, 1500, 1550, -5000, 1500, 1600, 1600, 100, 200, 150, 100, 250, -3000]
    },
    {
        name: "Daim",
        code: "molbi",
        history: [420, 400, 150, 550, 200, 430]
    },
    {
        name: "Hamza",
        code: "dialvi",
        history: [430, 1000]
    },
    {
        name: "Uzair",
        code: "zairi",
        history: [550]
    },
    {
        name: "Muqeet",
        code: "muqeet",
        history: [700, 200, 150, 120]
    }
]

friends.forEach((friend)=>{
    friend.total = friend.history.reduce((acc, curr) => acc + curr);
})

const showData = (friend) => {
    let result = `<div>
        <h2>LandLord's Name: <span>${friend.name}</span></h2>
        <table>
            <th>Entries</th>
            ${friend.history.map((entry)=>`<tr><td style= "${entry < 0 ? 'background-color: rgba(224, 255, 255, 0.2);' : ''}">${entry}</td></tr>`).join("")}
        </table>
        <p>Total: ${friend.total}</p>
    </div>
`
    msg.classList.remove("hide");
    return result;
}

const check = () => {
    const pass = code.value.trim().toLowerCase();

    if (pass===""){
        output.innerText = "Please enter the code.";
        msg.classList.add("hide");
        return;
    }
    
    const friend = friends.find((friend)=>friend.code===pass);
    output.innerHTML = friend? showData(friend) : "Enter the valid code.";

    code.value = "";
}

checkBtn.addEventListener("click", check)
code.addEventListener("keydown", (e)=>{
    if (e.key==="Enter"){
        check();
    }
})



