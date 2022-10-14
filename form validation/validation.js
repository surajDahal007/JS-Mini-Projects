function validation() {
    var email = document.reg_form.femail;
    var fname = document.reg_form.fname;
    var gender = document.reg_form.gender;
    var phone = document.reg_form.phone;
    var textarea = document.reg_form.textarea;

    if (fname.value.length <= 0) {
        alert('Name is required');
        fname.focus();
        return false;
    }

    if (gender.value.length <= 0) {
        alert('Gender is required');
        gender.focus();
        return false;
    }

    if (phone.value.length <= 0) {
        alert('Phone is required');
        phone.focus();
        return false;
    }

    if (email.value.length <= 0) {
        alert('E-Mail is required');
        email.focus();
        return false;
    }
}