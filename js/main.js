function encriptar() {
    let textoUsuario = document.getElementById("userInput").value;
    let textoSalida = '';
  
    for (let i = 0; i < textoUsuario.length; i++) {
      let letra = textoUsuario[i];
      if (textoUsuario.match(/[^a-z]/)) { // Busca cualquier carácter que NO sea una letra minúscula
        alert("Solo letras minúsculas sin acentos");
        return; // Termina la función si hay caracteres inválidos
      }
      
        switch (letra) {
          case 'e':
            textoSalida += 'enter';
            break;
          case 'i':
            textoSalida += 'imes';
            break;
          case 'a':
            textoSalida += 'ai';
            break;
          case 'o':
            textoSalida += 'ober';
            break;
          case 'u':
            textoSalida += 'ufat';
            break;
          default:
            textoSalida += letra;
        }
    
    }

    
  
    document.getElementById("campo").value = textoSalida;
  }
  
  function desencriptar() {
    let textoUsuario = document.getElementById("userInput").value;
    let textoDesencriptado = '';
  
    textoDesencriptado = textoUsuario
      .replace(/enter/g, 'e')
      .replace(/imes/g, 'i')
      .replace(/ai/g, 'a')
      .replace(/ober/g, 'o')
      .replace(/ufat/g, 'u');
  
    document.getElementById("campo").value = textoDesencriptado;
  }
  
  function copytext() {
    let outputText = document.getElementById("campo");
    outputText.select();
    document.execCommand("copy");
    alert("Mensaje copiado");
  }