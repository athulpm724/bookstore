function add() {
    bid = bid.value;
    if (!(localStorage.getItem(bid))) {
        bname = bname.value;
        aname = aname.value;
        bdes = bdes.value;
        book = { bname, aname, bdes };
        localStorage.setItem(bid, JSON.stringify(book));
        alert("added!")
    }
    else {
        alert("id already exists!");
    }
}

function search() {
    bid = bid.value;
    document.getElementById("bid").value=bid;
    book = localStorage.getItem(bid);
    book=JSON.parse(book);
    bname.innerHTML = book.bname;
    aname.innerHTML= book.aname;
    bdes.innerHTML = book.bdes;


}

