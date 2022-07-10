function getData() {
    // DOM = document object model
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let phone = document.getElementById("phone").value
    let subject = document.getElementById("subject").value
    let message = document.getElementById("message").value

    //document.getElementById(name).value = ""
    //document.getElementById(email).value = ""
    //document.getElementById(phone).value = ""
    //document.getElementById(subject).value = ""
    //document.getElementById(message).value = ""

    // console.log(name, email);
    if (!name) {
        alert("nama tidak boleh kosong");
    }
    if (!email) {
        alert("email tidak boleh kosong");
    }
    if (!phone) {
        alert("phone tidak boleh kosong");
    }
    if (!message) {
        alert("message tidak boleh kosong");
    }


    let emailReceiver = "farisafdhilfawwaz3.5.11@gmail.com";

    let a = document.createElement('a');
    a.href = `mailto:${emailReceiver}?subject=${subject}&body=Hello, my name is ${name}, ${message}, this my phone number ${phone}`
    a.click()
}


//let btn = document.getElementById("btn-alert")
//btn.click()

//function showAlert() {
 //   alert("Please, fill in your data!")   }