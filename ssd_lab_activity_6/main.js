var play = new Array();

function validateForm() {
    let x = document.forms["forminp"]["manager"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }

    let a = document.forms["forminp"]["email"].value;
    if (a == "") {
        alert("email must be filled out");
        return false;
    }
    let b = document.forms["forminp"]["uname"].value;
    if (b == "") {
        alert("Username must be filled out");
        return false;
    }
    let c = document.forms["forminp"]["passw"].value;
    if (c == "") {
        alert("Password must be filled out");
        return false;
    }

    let d = document.forms["forminp"]["cpassw"].value;
    if (d == "") {
        alert("Confirm Password must be filled out");
        return false;
    }

    let e = document.forms["forminp"]["lead"].value;
    if (e == "") {
        alert("Select a lead");
        return false;
    }

    if (c===d) {

    }
    else {
        alert("Passwords should match");
        return false;
    }
    let total = ('Manager: '+x + '\n' + 'Email: '+ a + '\n' + 'UserGroup: '+ b + '\n' + 'Team Lead: '+e +'\n' + 'Members: '+ play.join("\n"));
    alert(total);
}

function droppoint(event) {
    var data = event.dataTransfer.getData("Text");
    event.target.appendChild(document.getElementById(data));
    play.push(document.getElementById(data).innerHTML);
    event.preventDefault();
}

function allowDropOption(event) {
    event.preventDefault();
}

function dragpoint(event) {
    event.dataTransfer.setData("Text", event.target.id);
}

function myFunction(e) {
    if (e==13) {
        var element = document.body;
        element.classList.toggle("dark-mode");
    }
    else{
        return;
    }
}