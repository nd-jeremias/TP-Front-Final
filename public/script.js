const loginbtn = document.getElementById('loginbtn');
const email = document.getElementById('email')
const pass = document.getElementById('password')
const correctpass = '1234';

loginbtn.addEventListener('click', () => {

    if(email.value.length == 0 || pass.value.length == 0){
        console.log("los campos no pueden estar vacios")
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Algo anda mal, revisa los datos!"
        });
    }

    const emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(email.value.match(emailformat)) {
        if (pass.value === correctpass){
            let timerInterval;
            Swal.fire({
              icon: "success",
              title: "Hola!",
              html: "bienvenido de vuelta",
              timer: 2000,
              timerProgressBar: true,
              didOpen: () => {
                Swal.showLoading();
                // const timer = Swal.getPopup().querySelector("b");
                // timerInterval = setInterval(() => {
                //   timer.textContent = `${Swal.getTimerLeft()}`;
                // }, 100);
              },
              willClose: () => {
                clearInterval(timerInterval);
              }
            }).then((result) => {
              /* Read more about handling dismissals below */
              if (result.dismiss === Swal.DismissReason.timer) {
                location.href ="http://localhost:3000";
              }
            });
        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Contraseña incorrecta. Por favor verificala."
            });
        }
    } else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "E-mail invalido. Por favor verificalo."
        });
    }
});
