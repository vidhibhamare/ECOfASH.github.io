	// Sticky Navbar
    // alert("Hello")
    let header = document.querySelector('header');
    let menu = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');
     

    window.addEventListener('scroll', () => {
        header.classList.toggle('shadow', window.scrollY > 0);
    });
     
    menu.onclick = () => {
        navbar.classList.toggle('active');
    }
    window.onscroll = () => {
        navbar.classList.remove('active');
    }
function sendEmail(){
    const name1 = document.getElementById('name');
    const email = document.getElementById('email');
    const addr = document.getElementById('address')
    const message = document.getElementById('message');
    const submit = document.getElementsByClassName('contact-form');
    const fileInput = document.getElementById('attachment');
    const fileName = fileInput.files[0];

    console.log(email.value)
    console.log(email.value)

  // Validate email field
  if (email.value.trim() === '') {
    alert('Please enter a valid email address');
    return;
  }

  const email1=`${email.value}`

  const emailPattern = /^\S+@\S+\.\S+$/;
    if (!emailPattern.test(email.value)) {
    alert('Please enter a valid email address');
    return;
    }
    const ebody=`Name: ${name1.value}
      <br>
       Email : ${email.value}
       <br>
       Address: ${addr.value}
       <br>
       Message: ${message.value}`;

const reader = new FileReader();
  reader.readAsDataURL(fileName);
  reader.onload = function () {
    const base64data = reader.result.split(',')[1];
    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "ecofash101@gmail.com",
      Password: "33517E6E04EF2B99B22CCBAADBCCB81330CE",
      To: 'ecofash101@gmail.com',
      From: "ecofash101@gmail.com",
      Subject: "A new donation !!!",
      Body: ebody,
      subject: 'Webscript demo: file attachment',
      Attachments: [
        {
          name: fileName.name,
          data: base64data,
        }
      ]
    }).then(message => alert(message));
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "ecofash101@gmail.com",
        Password: "33517E6E04EF2B99B22CCBAADBCCB81330CE",
        To: email1,
        From: "ecofash101@gmail.com",
        Subject: "You have applied for clothes donation !",
        Body: ebody,
        subject: 'Webscript demo: file attachment',
        Attachments: [
          {
            name: fileName.name,
            data: base64data,
          }
        ]
      }).then(message => alert(message));
  };
  console.log(ebody);
}