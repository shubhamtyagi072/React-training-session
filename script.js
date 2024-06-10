document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    debugger;
    event.preventDefault();
    const fullname = document.getElementById("fullname").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const email = document.getElementById("email").value;
    const dateofbirth = document.getElementById("dateofbirth").value;
    const profile = document.getElementById("profile").value;
    const country = document.getElementById("country").value;
    const bio = document.getElementById("bio").value;
    const tnc = document.getElementById("tnc").value;
    debugger;
    console.log("Registration Form Data:", {
      fullname,
      username,
      dateofbirth,
      profile,
      country,
      bio,
      tnc,
      email,
      password,
    });
  });
