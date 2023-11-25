const usuario = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
const contraseña = /^[A-Za-z0-9]{6,}$/;

export function validateCredentials(e, type) {
  switch (type) {
    case "usuario":
      return usuario.test(e);
 
    case "contraseña":
      return contraseña.test(e);
  }
}

export function addRemoveClass(elemento, marcador) {
    if (marcador) {
        elemento.classList.add("oculto");
    } else {
        elemento.classList.remove("oculto");
    }
}

export function getElementHTML(name) {
return document.getElementById(name);
}
