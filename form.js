const form = document.querySelector('#form').addEventListener('submit', function(event) {
    event.preventDefault()

const nameInput = document.querySelector("#name-input").value;
console.log("Name :", nameInput)
const email = document.querySelector("#email-input").value;
console.log("email: ", email)
const message = document.querySelector("#message").value;
console.log("Message :", message)

fetch( "https://7b27b79b-4b1d-4106-8c1e-41ea89e8c00c-00-8jy2dnw981sz.kirk.replit.dev//api/contact", {
  method: 'POST', // Specify the HTTP method
  body : {
    "name":nameInput,
    "email":email,
    "message": message
  }
})
  .then(response => console.log(response))
   // Read response as text
  .then(data => alert(data)); // Alert the respon


});

this.reset


