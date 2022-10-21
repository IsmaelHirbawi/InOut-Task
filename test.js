//----Js code----
/*function showData() {
    var un ,pw;
    pw = document.getElementById("password").value;
    un = document.getElementById("userName").value;
    console.log(pw);
    document.getElementById("UN").textContent = un;
    document.getElementById("PW").textContent = pw;
    document.getElementById("UN").textContent = "";
    document.getElementById("PW").textContent = "";
}*/
//----JQuery code----
$(document).ready(function(){
    $('button').click(function(){
        var un ,pw;
        pw = $("#password").val();
        un = $("#userName").val();
        $("#UN").text(un);
        $("#PW").text(pw); 
        $("#userName").val("");
        $("#password").val("");
    });
});