function change() {
    var c = document.getElementById("color").value;
    opener.document.getElementById("layout").style.backgroundColor = c;
    window.close();
}        