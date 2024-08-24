const quotes = [
  {
    text: "Borrowing friends money is the fastest way to break such a relationship.",
    author: "Dave Ramsey",
  },
  {
    text: "The only limit to our realization of tomorrow is our doubts of today.",
    author: "Franklin D. Roosevelt",
  },
  {
    text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
  },
  {
    text: "Act as if what you do makes a difference. It does.",
    author: "William James",
  },
];

let currentQuoteIndex = 0;

function showQuote(index) {
  document.getElementById("quoteText").textContent = quotes[index].text;
  document.getElementById("quoteAuthor").textContent = quotes[index].author;
}

document.getElementById("nextQuoteBtn").addEventListener("click", function () {
  currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
  showQuote(currentQuoteIndex);
});

document.getElementById("prevQuoteBtn").addEventListener("click", function () {
  currentQuoteIndex = (currentQuoteIndex - 1 + quotes.length) % quotes.length;
  showQuote(currentQuoteIndex);
});

document.getElementById("addQuoteBtn").addEventListener("click", function () {
  const newAuthor = document.getElementById("authorInput").value;
  const newQuote = document.getElementById("quoteInput").value;

  if (newAuthor && newQuote) {
    quotes.push({ text: newQuote, author: newAuthor });
    document.getElementById("authorInput").value = "";
    document.getElementById("quoteInput").value = "";
    alert("New quote added!");
  } else {
    alert("Please fill in both fields!");
  }
});

showQuote(currentQuoteIndex);
