function generate ()
{
    var quotes ={
        "Elbert Hubbard": '"To avoid criticism do nothing, say nothing, be nothing."',
        "Thomas Merton ": '"Art enables us to find ourselves and lose ourselves at the same time."',
        "Chuck Palahniuk": '"The things you own end up owning you."',
    }
    var keys =Object.keys(quotes);
    var author = keys[Math.floor(Math.random() * keys.length)];
    var quote =quotes[author];

    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = author;
}