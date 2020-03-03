function validateForm() {
    var ah = document.forms["contact"]["Aanhef"].value;
    var name = document.forms["contact"]["Name"].value;
    var mail = document.forms["contact"]["Email"].value;
    var phone = document.forms["contact"]["Phone"].value;
    var question = document.forms["contact"]["fname"].value;


    if (ah == null ) {
        alert("Alle velden moeten ingevult zijn");
        return false;
    }
}
// && name == null && mail == null && phone == null && question == null
