const loginbtn = document.getElementById('loginbtn');
const email = document.getElementById('email')
const nombre = document.getElementById('nombre')

function goToHome() {
  var initialPage = location.pathname;
  location.replace(location + `home`);
}

loginbtn.addEventListener('click', () => {
    const emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(email.value.match(emailformat)) {
        if (nombre.value.length != 0){
          console.log(nombre.value.length)
          let timerInterval;
          Swal.fire({
            icon: "success",
            title: "Hola!",
            html: "bienvenido de vuelta",
            timer: 2000,
            timerProgressBar: true,
            didOpen: () => {
              Swal.showLoading();
            },
            willClose: () => {
              clearInterval(timerInterval);
            }
          }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
              goToHome()
            }
          });
        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "El campo Nombre no puede estar vacio!."
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