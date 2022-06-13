import emailjs from "emailjs-com";

function sendEmail(e) {
  e.preventDefault();

  const SERVICE_ID = "service_cfgbhez";
  const TEMPLATE_ID = "template_j1cwa3f";
  const TARGET = e.target;
  const USER_ID = "user_fhFkAb44WG1pMgD5at18A";

  emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, TARGET, USER_ID).then(
    (result) => {
      console.log(result.text);
      alert("Email successfully sent"); // Bootstrap
    },
    (error) => {
      console.log(error.text);
    }
  );
}

export default sendEmail;
