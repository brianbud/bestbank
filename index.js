const accounts = [
  {
    id: 1,
    title: "Main Account",
    balance: "6700.56",
    spendings: [
      {
        category: "Rent",
        spent: "1450",
      },
      {
        category: "Groceries",
        spent: "564",
      },
      {
        category: "Restaurants",
        spent: "123",
      },
      {
        category: "Transport",
        spent: "81",
      },
      {
        category: "Internet",
        spent: "50",
      },
    ],
  },
  {
    id: 2,
    title: "Expenses",
    balance: "5134.63",
    spendings: [
      {
        category: "Netflix",
        spent: "19.99",
      },
      {
        category: "HBO Max",
        spent: "14.99",
      },
      {
        category: "Setapp",
        spent: "9.99",
      },
    ],
  },
  {
    id: 3,
    title: "Savings",
    balance: "36500.12",
    spendings: [],
  },
];

const accountEl = document.querySelectorAll(".account");
const accountContainerEl = document.querySelectorAll(".accounts-container");
const accountNameEl = document.querySelectorAll(".account-name");
const balanceEl = document.querySelectorAll(".balance");

for (let [index, item] of accounts.entries()) {
  accountNameEl[index].innerHTML = `${item.title}`;
  balanceEl[index].innerHTML = `$${item.balance}`;
}

accountEl[0].addEventListener("click", function () {
  accountEl[0].style.backgroundColor = "#FEA22C";
});
