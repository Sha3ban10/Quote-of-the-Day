var btn = document.getElementById("btn");
var quotes = document.getElementById("quotes");
var author = document.getElementById("author");
var QuotesList = [
    {
        qoute: `"Be yourself; everyone else is already taken."`,
        author: `-- Oscar Wilde`
    },
    {
        qoute: `"Insanity is doing the same thing, over and over again, but expecting different results."`,
        author: `-- Narcotics Anonymous`
    },
    {
        qoute: `"To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment."`,
        author: `-- Ralph Waldo Emerson`
    },
    {
        qoute: `"We accept the love we think we deserve"`,
        author: `-- Stephen Chbosky`
    },
    {
        qoute: `"Live as if you were to die tomorrow. Learn as if you were to live forever."`,
        author: `-- Mahatma Gandhi`
    },
    {
        qoute: `"Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that."`,
        author: `-- Martin Luther King Jr`
    },
    {
        qoute: `"Always forgive your enemies; nothing annoys them so much."`,
        author: `-- Oscar Wilde`
    },
    {
        qoute: `"A friend is someone who knows all about you and still loves you"`,
        author: `-- Elbert Hubbard`
    },
    {
        qoute: `"You only live once, but if you do it right, once is enough."`,
        author: `-- Mae West`
    },
    {
        qoute: `"If you tell the truth, you don't have to remember anything."`,
        author: `-- Mark Twain`
    }

]
var x;
btn.onclick = function generate() {
    var i = Math.floor(Math.random() * QuotesList.length);
    if (i == x) {
        generate();
    }
    else {
        quotes.innerHTML = QuotesList[i].qoute;
        author.innerHTML = QuotesList[i].author;
        x = i;
    }
}