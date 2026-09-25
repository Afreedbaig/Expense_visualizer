const balance = document.getElementById("balance");
const income = document.getElementById("income");
const expense = document.getElementById("expense");
const inputamount = document.getElementById("amtinput");
const desc = document.getElementById("descr");
const button = document.getElementById("action");
const transcontainer = document.getElementById("transactions");

button.addEventListener("click", () => {
    if (desc.value === "" || inputamount === "") {
        return;
    } else {
        let amt = parseInt(inputamount.value, 10);
        if (balance.textContent === "") {
            balance.textContent = amt;
        } else {
            balance.textContent = parseInt(balance.textContent, 10) + amt;
        }
        if (amt < 0) {
            if (expense.textContent === "") {
                expense.textContent = amt;
            } else {
                expense.textContent = parseInt(expense.textContent, 10) + amt;
            }
        } else {
            if (income.textContent === "") {
                income.textContent = amt;
            } else {
                income.textContent = parseInt(income.textContent, 10) + amt;
            }
        }
        const holderdiv = document.createElement("div");
        const innerdiv1 = document.createElement("div");
        const innerdiv2 = document.createElement("div");
        const span1 = document.createElement("span");
        const span2 = document.createElement("span");
        const img = document.createElement("img");
        if (amt < 0) {
            holderdiv.classList.add("holder", "expense");
        } else {
            holderdiv.classList.add("holder", "income");
        }
        innerdiv1.classList.add("desc");
        span1.id = "desc";
        span1.textContent = desc.value;
        innerdiv2.classList.add("amount");
        span2.id = "amt";
        span2.textContent = inputamount.value;
        img.classList.add("nigha");
        img.src = "2723639.png";
        img.addEventListener("click", (e) => {
            e.target.parentElement.parentElement.remove();
        });
        holderdiv.appendChild(innerdiv1);
        holderdiv.appendChild(innerdiv2);
        innerdiv1.appendChild(span1);
        innerdiv2.appendChild(span2);
        innerdiv2.appendChild(img);
        transcontainer.appendChild(holderdiv);
    }
});
