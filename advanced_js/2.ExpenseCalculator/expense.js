

const inputForm = document.getElementById("input-form");
const totalIncomeEl = document.getElementById("total-income");
const totalExpenseEl = document.getElementById("total-expense");
const netBalanceEl = document.getElementById("net-balance");
const allDetails = document.getElementById("all-details");
const incomeDetails = document.getElementById("income-details");
const expenseDetails = document.getElementById("expense-details");
const tableEl = document.getElementById("table");
const allTransactionSummary = document.getElementById("all-summary");
const incomeTransactionSummary = document.getElementById("income-summary");
const expenseTransactionSummary = document.getElementById("expense-summary");
const transactionId = document.getElementById("transaction-id");
const ttype = document.getElementById("transaction-type");
const description = document.getElementById("description");
const amount = document.getElementById("amount");

let data = JSON.parse(localStorage.getItem('transactionData')) || [];

allTransactionSummary.addEventListener("click", function (e) {
    addTransactionDetailsToTable(e.target.value)
});
incomeTransactionSummary.addEventListener("click", function (e) {
    addTransactionDetailsToTable(e.target.value)
});
expenseTransactionSummary.addEventListener("click", function (e) {
    addTransactionDetailsToTable(e.target.value)
});


function transactionSummaryOption() {
    const selectedOption = document.querySelector('input[name="summary"]:checked');
    addTransactionDetailsToTable(selectedOption.value)
}



inputForm.addEventListener("submit", function (e) {
    console.log("submit transaction")
    e.preventDefault();
    let id = data.length + 1;
    if (ttype.value === "Select" || description.value === "" || amount.value === "" || parseFloat(amount.value) <= 0) {
        clearInputs();
        return
    }
    if (transactionId.value !== "") {
        id = Number(transactionId.value) //2
    }


    const entry = {
        id: id,
        transactionType: ttype.value,
        description: description.value,
        amount: parseFloat(amount.value),

    }
    if (transactionId.value === "") { // create new transaction
        data.push(entry);
    } else { // edit transaction
        for (let i = 0; i < data.length; i++) {
            if (data[i].id === id) {
                data[i] = entry;
            }
        }
    }
    console.log(data);
    clearInputs();
    refreshPage();

});

function refreshPage() {
    const income = calculateTotalIncome(); // income = 0
    const expense = calculateTotalExpense(); // expense = 0
    const netBalance = income - expense;
    totalIncomeEl.textContent = income.toString();
    totalExpenseEl.textContent = expense.toString();
    netBalanceEl.textContent = netBalance.toString();
    transactionSummaryOption();
    localStorage.setItem('transactionData', JSON.stringify(data));
}

function clearInputs() {
    description.value = '';
    amount.value = '';
    transactionType = "";
}

function addTransactionDetailsToTable(selectedValue = "all") {
    // 1. get selected value from update-entry
    // 2. add transaction to table
    //     2.1 if all, add all items to table
    //     2.2 if Income, add only income details to table
    //     2.3 else Expense, add only expense details to table
    if (selectedValue === "all") {
        addAllTransactionsToTable();
    } else if (selectedValue === "income") {
        addIncomeDetailsToTable();
    } else if (selectedValue === "expense") {
        addExpenseDetailsToTable();
    };
}

function addAllTransactionsToTable() {
    clearTableRows();
    for (let i = 0; i < data.length; i++) {
        const newRow = createTransactionEntry(data[i]);
        tableEl.appendChild(newRow);
    }
}


function addIncomeDetailsToTable() {
    clearTableRows();
    for (let i = 0; i < data.length; i++) {
        if (data[i].transactionType === "Income") {
            const newIncome = createTransactionEntry(data[i]);
            tableEl.appendChild(newIncome);
        }
    }

}
function addExpenseDetailsToTable() {
    clearTableRows();
    for (let i = 0; i < data.length; i++) {
        if (data[i].transactionType === "Expense") {
            const newExpense = createTransactionEntry(data[i]);
            tableEl.appendChild(newExpense);
        }
    }
}

function clearTableRows() {

    const rowCount = tableEl.rows.length;
    for (let i = rowCount - 1; i > 0; i--) {
        tableEl.deleteRow(i);
    }

}

function calculateTotalIncome() {
    let totalIncome = 0;
    for (let i = 0; i < data.length; i++) {
        if (data[i].transactionType === "Income") {
            totalIncome = totalIncome + data[i].amount;
        }
    }
    return totalIncome;
}

function calculateTotalExpense() {
    let totalExpense = 0;

    for (let i = 0; i < data.length; i++) {
        if (data[i].transactionType === "Expense") {
            totalExpense = totalExpense + data[i].amount;
        }
    }
    return totalExpense;

}

function createTransactionEntry(entry = {}) {

    const tr = document.createElement("tr");
    tr.innerHTML = `<td scope="col">${entry.id}</td>
                    <td scope="col">${entry.transactionType}</td >
                    <td cope="col">${entry.description}</td>
                    <td scope="col">${entry.amount}</td>
                    <td> <button type="button" data-id="${entry.id}" class="btn btn-primary">Edit</button></td>
                    <td> <button type="button" data-id="${entry.id}" class="btn btn-danger">Delete</button></td>
`;

    const ctaNodes = tr.querySelectorAll("button");
    console.log(ctaNodes);
    ctaNodes[0].addEventListener("click", handleEditClick)
    ctaNodes[1].addEventListener("click", handleDeleteClick)
    return tr;
}


function handleEditClick(e) {
    // for (let i = 0; i < data.length; i++) {
    //     if (data[i].id == e.target.dataset.id) {
    //         ttype.value = data[i].transactionType;
    //         description.value = data[i].description;
    //         amount.value = data[i].amount.toString();
    //         transactionId.value = data[i].id
    //     }
    // }
    // let element = data.find((d) => {
    //     if (d.id === Number(e.target.dataset.id)) {
    //         return true;
    //     }
    //     return false;
    // })
    let element = data.find((d) => d.id === Number(e.target.dataset.id))
    ttype.value = element.transactionType;
    description.value = element.description;
    amount.value = element.amount.toString();
    transactionId.value = element.id
}


function handleDeleteClick(e) {
    const newData = data.filter((d) => {
        if (d.id === Number(e.target.dataset.id)) {
            return false
        }
        return true
    });
    data = newData;

    refreshPage();
}





refreshPage();