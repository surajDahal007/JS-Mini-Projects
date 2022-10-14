function readCookie() {

    if (document.cookie.length != 0) {


        var nameValueArray = document.cookie.split("=");
        var colname = nameValueArray[1].split(";")
        alert("Previously Stored Preference Color was " + colname[0])
        document.bgColor = colname[0];
        document.getElementById("selThem").value = colname[0];

    }
}

function setColorCookie() {

    var selectedColor = document.getElementById("selThem").value;
    if (selectedColor != "Select Color") {
        document.bgColor = selectedColor;
        document.cookie = "cc = " + selectedColor + " ; expires=Wednesday, 01-Aug-2040 08:00:00 GMT";
    }
    alert(document.cookie);
}