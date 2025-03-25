function sendMail(){
    let params={
        name:document.getElementById("name"),
        email:document.getElementById("email"),
        message:{
            mobile:document.getElementById("mobile"),
            organization:document.getElementById("organization"),
            designation:document.getElementById("designation"),
            comments :document.getElementById("comments")
        }
    }
   console.log(params);
    emailjs.send("service_k1j3q2a", "template_bdq9gvp", params) // Replace with your service ID and template ID
    .then( alert("Email sent successfully!")).then(alert("failed to sent an email"));
}