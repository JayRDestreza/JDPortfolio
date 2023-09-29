const btn = document.getElementById("bar-list");
const menuToggle = document.getElementById("menu");
btn.addEventListener("click", function() {
    if(menuToggle.classList.contains('collapse')){
        menuToggle.classList.remove('in');
    }
})

window.onscroll = function(){
    if(menuToggle.classList.contains('collapse')){
        menuToggle.classList.remove('in');
    }
}
var typed = new Typed(".typing", {
    strings:["BSIT student", "3rd year College"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});


function sendEmail(){
    Email.send({
        SecureToken : "964642c6-7a84-4840-80be-0c415afe9ec5",
        To : 'destrezajayr12@gmail.com',
        From : "fkie12535@gmail.com",
        Subject : document.getElementById('subject').value,
        Body : "Name : " + document.getElementById('name').value +
                "<br/>" + "Email : " +  document.getElementById('email').value +
                "<br/>" + "Message : " + document.getElementById('msg').value
    }).then(
      message => {
        if(message == 'OK'){
            swal("Email Sent!","", "success");
        }else{
            swal("Error Sending Message!", "","error");
        }
      }
    );
}