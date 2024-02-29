var q0companyName,q0staffName,q0email,q0phone,q1,q2reventa,q2desarrollos,q3reventa,q3desarrollos,q4reventa,q4desarrollos,q5reventa,q5desarrollos,q6reventa,q6desarrollos,q7reventa,q7desarrollos,q8reventa,q8desarrollos,q9reventa,q9desarrollos,q10reventa,q10desarrollos,q11reventa,q11desarrollos,q12reventa,q12desarrollos,q13reventa,q13desarrollos,q14,q15reventa,q15desarrollos,q16reventa,q16desarrollos,q17reventa,q17desarrollos,q18reventa,q18desarrollos,state,corrects

function novendocondominios(button){
  q2InputReventaCantidadCondominios = document.getElementById("q2InputReventaCantidadCondominios")
  q2InputDesarrollosCantidadCondominios = document.getElementById("q2InputDesarrollosCantidadCondominios")
  q2CheckboxNoVendoReventaCondominios = document.getElementById("q2CheckboxNoVendoReventaCondominios")
  q2CheckboxNoVendoDesarrollosCondominios = document.getElementById("q2CheckboxNoVendoDesarrollosCondominios")
  q3OptionsReventa = document.getElementsByName("q3reventa")
  q3OptionsDesarrollos = document.getElementsByName("q3desarrollos")
  // q15o1reventa = document.getElementById("q15o1reventa")
  // q15o1desarrollos = document.getElementById("q15o1desarrollos")
  // q16reventa = document.getElementsByName("q16reventa")
  // q16desarrollos = document.getElementsByName("q16desarrollos")
  if (button.checked == true){
    q2InputReventaCantidadCondominios.disabled = true
    q2InputReventaCantidadCondominios.type = "text"
    q2InputReventaCantidadCondominios.value = "No reventa condominios"
    q2InputDesarrollosCantidadCondominios.disabled = true
    q2InputDesarrollosCantidadCondominios.type = "text"
    q2InputDesarrollosCantidadCondominios.value = "No desarrollos condominios"
    q2CheckboxNoVendoReventaCondominios.checked = true
    q2CheckboxNoVendoReventaCondominios.disabled = true
    q2CheckboxNoVendoDesarrollosCondominios.checked = true
    q2CheckboxNoVendoDesarrollosCondominios.disabled = true
    for (let i = 0; i <= q3OptionsReventa.length-2; i++) {
      q3OptionsReventa[i].disabled = true
      q3OptionsDesarrollos[i].disabled = true
    }
    q3OptionsReventa[q3OptionsReventa.length-1].checked = true
    q3OptionsDesarrollos[q3OptionsReventa.length-1].checked = true
    reventaCondominios = true
    desarrollosCondominios = true
    noVendoCondominios = true
    // q15o1reventa.type = "text"
    // q15o1reventa.value = "No reventa condominios"
    // q15o1reventa.disabled = true
    // q15o1desarrollos.type = "text"
    // q15o1desarrollos.value = "No desarrollos condominios"
    // q15o1desarrollos.disabled = true
    // for (let i = 0; i <= q16reventa.length-2; i++) {
    //   q16reventa[i].disabled = true
    //   q16desarrollos[i].disabled = true
    // }
    // q16reventa[q16reventa.length-1].checked = true
    // q16desarrollos[q16reventa.length-1].checked = true
  }
  else if(button.checked == false){
    q2InputReventaCantidadCondominios.disabled = false
    q2InputReventaCantidadCondominios.type = "number"
    q2InputReventaCantidadCondominios.value = ""
    q2InputDesarrollosCantidadCondominios.disabled = false
    q2InputDesarrollosCantidadCondominios.type = "number"
    q2InputDesarrollosCantidadCondominios.value = ""
    q2CheckboxNoVendoReventaCondominios.checked = false
    q2CheckboxNoVendoReventaCondominios.disabled = false
    q2CheckboxNoVendoDesarrollosCondominios.checked = false
    q2CheckboxNoVendoDesarrollosCondominios.disabled = false
    for (let i = 0; i <= q3OptionsReventa.length-2; i++) {
      q3OptionsReventa[i].disabled = false
      q3OptionsDesarrollos[i].disabled = false
    }
    q3OptionsReventa[q3OptionsReventa.length-1].checked = false
    q3OptionsDesarrollos[q3OptionsReventa.length-1].checked = false
    reventaCondominios = false
    desarrollosCondominios = false
    noVendoCondominios = false
    // q15o1reventa.type = "number"
    // q15o1reventa.value = ""
    // q15o1reventa.disabled = false
    // q15o1desarrollos.type = "number"
    // q15o1desarrollos.value = ""
    // q15o1desarrollos.disabled = false
    // for (let i = 0; i <= q16reventa.length-2; i++) {
    //   q16reventa[i].disabled = false
    //   q16desarrollos[i].disabled = false
    // }
    // q16reventa[q16reventa.length-1].checked = false
    // q16desarrollos[q16reventa.length-1].checked = false
  }
}
function novendocasas(button){
  q4InputReventaCantidadCasas = document.getElementById("q4InputReventaCantidadCasas")
  q4InputDesarrollosCantidadCasas = document.getElementById("q4InputDesarrollosCantidadCasas")
  q4CheckboxNoVendoReventaCasas = document.getElementById("q4CheckboxNoVendoReventaCasas")
  q4CheckboxNoVendoDesarrollosCasas = document.getElementById("q4CheckboxNoVendoDesarrollosCasas")
  q5OptionsReventa = document.getElementsByName("q5reventa")
  q5OptionsDesarrollos = document.getElementsByName("q5desarrollos")
  // q15o2reventa = document.getElementById("q15o2reventa")
  // q15o2desarrollos = document.getElementById("q15o2desarrollos")
  // q17reventa = document.getElementsByName("q17reventa")
  // q17desarrollos = document.getElementsByName("q17desarrollos")
  if (button.checked == true){
    q4InputReventaCantidadCasas.disabled = true
    q4InputReventaCantidadCasas.type = "text"
    q4InputReventaCantidadCasas.value = "No reventa casas"
    q4InputDesarrollosCantidadCasas.disabled = true
    q4InputDesarrollosCantidadCasas.type = "text"
    q4InputDesarrollosCantidadCasas.value = "No desarrollos casas"
    q4CheckboxNoVendoReventaCasas.checked = true
    q4CheckboxNoVendoReventaCasas.disabled = true
    q4CheckboxNoVendoDesarrollosCasas.checked = true
    q4CheckboxNoVendoDesarrollosCasas.disabled = true
    for (let i = 0; i <= q5OptionsReventa.length-2; i++) {
      q5OptionsReventa[i].disabled = true
      q5OptionsDesarrollos[i].disabled = true
    }
    q5OptionsReventa[q5OptionsReventa.length-1].checked = true
    q5OptionsDesarrollos[q5OptionsReventa.length-1].checked = true
    reventaCasas = true
    desarrollosCasas = true
    noVendoCasas = true
    // q15o2reventa.type = "text"
    // q15o2reventa.value = "No reventa casas"
    // q15o2reventa.disabled = true
    // q15o2desarrollos.type = "text"
    // q15o2desarrollos.value = "No desarrollos casas"
    // q15o2desarrollos.disabled = true
    // for (let i = 0; i <= q17reventa.length-2; i++) {
    //   q17reventa[i].disabled = true
    //   q17desarrollos[i].disabled = true
    // }
    // q17reventa[q17reventa.length-1].checked = true
    // q17desarrollos[q17reventa.length-1].checked = true
  }
  else if(button.checked == false){
    q4InputReventaCantidadCasas.disabled = false
    q4InputReventaCantidadCasas.type = "number"
    q4InputReventaCantidadCasas.value = ""
    q4InputDesarrollosCantidadCasas.disabled = false
    q4InputDesarrollosCantidadCasas.type = "number"
    q4InputDesarrollosCantidadCasas.value = ""
    q4CheckboxNoVendoReventaCasas.checked = false
    q4CheckboxNoVendoReventaCasas.disabled = false
    q4CheckboxNoVendoDesarrollosCasas.checked = false
    q4CheckboxNoVendoDesarrollosCasas.disabled = false
    for (let i = 0; i <= q5OptionsReventa.length-2; i++) {
      q5OptionsReventa[i].disabled = false
      q5OptionsDesarrollos[i].disabled = false
    }
    q5OptionsReventa[q5OptionsReventa.length-1].checked = false
    q5OptionsDesarrollos[q5OptionsReventa.length-1].checked = false
    reventaCasas = false
    desarrollosCasas = false
    noVendoCasas = false
    // q15o2reventa.type = "number"
    // q15o2reventa.value = ""
    // q15o2reventa.disabled = false
    // q15o2desarrollos.type = "number"
    // q15o2desarrollos.value = ""
    // q15o2desarrollos.disabled = false
    // for (let i = 0; i <= q17reventa.length-2; i++) {
    //   q17reventa[i].disabled = false
    //   q17desarrollos[i].disabled = false
    // }
    // q17reventa[q17reventa.length-1].checked = false
    // q17desarrollos[q17reventa.length-1].checked = false
  }
}
function novendolotes(button){
  q6InputReventaCantidadLotes = document.getElementById("q6InputReventaCantidadLotes")
  q6InputDesarrollosCantidadLotes = document.getElementById("q6InputDesarrollosCantidadLotes")
  q6CheckboxNoVendoReventaLotes = document.getElementById("q6CheckboxNoVendoReventaLotes")
  q6CheckboxNoVendoDesarrollosLotes = document.getElementById("q6CheckboxNoVendoDesarrollosLotes")
  q7OptionsReventa = document.getElementsByName("q7reventa")
  q7OptionsDesarrollos = document.getElementsByName("q7desarrollos")
  // q15o3reventa = document.getElementById("q15o3reventa")
  // q15o3desarrollos = document.getElementById("q15o3desarrollos")
  // q18reventa = document.getElementsByName("q18reventa")
  // q18desarrollos = document.getElementsByName("q18desarrollos")
  if (button.checked == true){
    q6InputReventaCantidadLotes.disabled = true
    q6InputReventaCantidadLotes.type = "text"
    q6InputReventaCantidadLotes.value = "No reventa lotes"
    q6InputDesarrollosCantidadLotes.disabled = true
    q6InputDesarrollosCantidadLotes.type = "text"
    q6InputDesarrollosCantidadLotes.value = "No desarrollos lotes"
    q6CheckboxNoVendoReventaLotes.checked = true
    q6CheckboxNoVendoReventaLotes.disabled = true
    q6CheckboxNoVendoDesarrollosLotes.checked = true
    q6CheckboxNoVendoDesarrollosLotes.disabled = true
    for (let i = 0; i <= q7OptionsReventa.length-2; i++) {
      q7OptionsReventa[i].disabled = true
      q7OptionsDesarrollos[i].disabled = true
    }
    q7OptionsReventa[q7OptionsReventa.length-1].checked = true
    q7OptionsDesarrollos[q7OptionsReventa.length-1].checked = true
    reventasLotes = true
    desarrollosLotes = true
    noVendoLotes = true
    // q15o3reventa.type = "text"
    // q15o3reventa.value = "No reventa lotes"
    // q15o3reventa.disabled = true
    // q15o3desarrollos.type = "text"
    // q15o3desarrollos.value = "No desarrollos lotes"
    // q15o3desarrollos.disabled = true
    // for (let i = 0; i <= q18reventa.length-2; i++) {
    //   q18reventa[i].disabled = true
    //   q18desarrollos[i].disabled = true
    // }
    // q18reventa[q18reventa.length-1].checked = true
    // q18desarrollos[q18reventa.length-1].checked = true
  }
  else if(button.checked == false){
    q6InputReventaCantidadLotes.disabled = false
    q6InputReventaCantidadLotes.type = "number"
    q6InputReventaCantidadLotes.value = ""
    q6InputDesarrollosCantidadLotes.disabled = false
    q6InputDesarrollosCantidadLotes.type = "number"
    q6InputDesarrollosCantidadLotes.value = ""
    q6CheckboxNoVendoReventaLotes.checked = false
    q6CheckboxNoVendoReventaLotes.disabled = false
    q6CheckboxNoVendoDesarrollosLotes.checked = false
    q6CheckboxNoVendoDesarrollosLotes.disabled = false
    for (let i = 0; i <= q7OptionsReventa.length-2; i++) {
      q7OptionsReventa[i].disabled = false
      q7OptionsDesarrollos[i].disabled = false
    }
    q7OptionsReventa[q7OptionsReventa.length-1].checked = false
    q7OptionsDesarrollos[q7OptionsReventa.length-1].checked = false
    reventaLotes = false
    desarrollosLotes = false
    noVendoLotes = false
    // q15o3reventa.type = "number"
    // q15o3reventa.value = ""
    // q15o3reventa.disabled = false
    // q15o3desarrollos.type = "number"
    // q15o3desarrollos.value = ""
    // q15o3desarrollos.disabled = false
    // for (let i = 0; i <= q17reventa.length-2; i++) {
    //   q18reventa[i].disabled = false
    //   q18desarrollos[i].disabled = false
    // }
    // q18reventa[q17reventa.length-1].checked = false
    // q18desarrollos[q17reventa.length-1].checked = false
  }
}

function noVendoReventaCondominios(button){
  q2InputReventaCantidadCondominios = document.getElementById("q2InputReventaCantidadCondominios")
  q3OptionsReventa = document.getElementsByName("q3reventa")
  if(button.checked == true){
    q2InputReventaCantidadCondominios.type = "text"
    q2InputReventaCantidadCondominios.value = "No reventa condominios"
    q2InputReventaCantidadCondominios.disabled = true
    for (let i = 0; i <= q3OptionsReventa.length-2; i++) {
      q3OptionsReventa[i].disabled = true
    }
    q3OptionsReventa[q3OptionsReventa.length-1].checked = true
  }
  else if(button.checked == false){
    q2InputReventaCantidadCondominios.type = "number"
    q2InputReventaCantidadCondominios.value = ""
    q2InputReventaCantidadCondominios.disabled = false
    for (let i = 0; i <= q3OptionsReventa.length-2; i++) {
      q3OptionsReventa[i].disabled = false
    }
    q3OptionsReventa[q3OptionsReventa.length-1].checked = false
  }
}
function noVendoDesarrollosCondominios(button){
  q2InputDesarrollosCantidadCondominios = document.getElementById("q2InputDesarrollosCantidadCondominios")
  q3OptionsDesarrollos = document.getElementsByName("q3desarrollos")
  if (button.checked == true) {
    q2InputDesarrollosCantidadCondominios.type = "text"
    q2InputDesarrollosCantidadCondominios.value = "No desarrollos condominios"
    q2InputDesarrollosCantidadCondominios.disabled = true
    for (let i = 0; i <= q3OptionsDesarrollos.length-2; i++) {
      q3OptionsDesarrollos[i].disabled = true
    }
    q3OptionsDesarrollos[q3OptionsDesarrollos.length-1].checked = true
  } 
  else if(button.checked == false) {
    q2InputDesarrollosCantidadCondominios.type = "number"
    q2InputDesarrollosCantidadCondominios.value = ""
    q2InputDesarrollosCantidadCondominios.disabled = false
    for (let i = 0; i <= q3OptionsDesarrollos.length-2; i++) {
      q3OptionsDesarrollos[i].disabled = false
    }
    q3OptionsDesarrollos[q3OptionsDesarrollos.length-1].checked = false
  }
}

function noVendoReventaCasas(button){
  q4InputReventaCantidadCasas = document.getElementById("q4InputReventaCantidadCasas")
  q5OptionsReventa = document.getElementsByName("q5reventa")
  if(button.checked == true){
    q4InputReventaCantidadCasas.type = "text"
    q4InputReventaCantidadCasas.value = "No reventa casas"
    q4InputReventaCantidadCasas.disabled = true
    for (let i = 0; i <= q5OptionsReventa.length-2; i++) {
      q5OptionsReventa[i].disabled = true
    }
    q5OptionsReventa[q5OptionsReventa.length-1].checked = true
  }
  else if(button.checked == false){
    q4InputReventaCantidadCasas.type = "number"
    q4InputReventaCantidadCasas.value = ""
    q4InputReventaCantidadCasas.disabled = false
    for (let i = 0; i <= q5OptionsReventa.length-2; i++) {
      q5OptionsReventa[i].disabled = false
    }
    q5OptionsReventa[q5OptionsReventa.length-1].checked = false
  }
}
function noVendoDesarrollosCasas(button){
  q4InputDesarrollosCantidadCasas = document.getElementById("q4InputDesarrollosCantidadCasas")
  q5OptionsDesarrollos = document.getElementsByName("q5desarrollos")
  if (button.checked == true) {
    q4InputDesarrollosCantidadCasas.type = "text"
    q4InputDesarrollosCantidadCasas.value = "No desarrollos casas"
    q4InputDesarrollosCantidadCasas.disabled = true
    for (let i = 0; i <= q5OptionsDesarrollos.length-2; i++) {
      q5OptionsDesarrollos[i].disabled = true
    }
    q5OptionsDesarrollos[q5OptionsDesarrollos.length-1].checked = true
  } 
  else if(button.checked == false) {
    q4InputDesarrollosCantidadCasas.type = "number"
    q4InputDesarrollosCantidadCasas.value = ""
    q4InputDesarrollosCantidadCasas.disabled = false
    for (let i = 0; i <= q5OptionsDesarrollos.length-2; i++) {
      q5OptionsDesarrollos[i].disabled = false
    }
    q5OptionsDesarrollos[q5OptionsDesarrollos.length-1].checked = false
  }
}

function noVendoReventaLotes(button){
  q6InputReventaCantidadLotes = document.getElementById("q6InputReventaCantidadLotes")
  q7OptionsReventa = document.getElementsByName("q7reventa")
  if(button.checked == true){
    q6InputReventaCantidadLotes.type = "text"
    q6InputReventaCantidadLotes.value = "No reventa lotes"
    q6InputReventaCantidadLotes.disabled = true
    for (let i = 0; i <= q7OptionsReventa.length-2; i++) {
      q7OptionsReventa[i].disabled = true
    }
    q7OptionsReventa[q7OptionsReventa.length-1].checked = true
  }
  else if(button.checked == false){
    q6InputReventaCantidadLotes.type = "number"
    q6InputReventaCantidadLotes.value = ""
    q6InputReventaCantidadLotes.disabled = false
    for (let i = 0; i <= q7OptionsReventa.length-2; i++) {
      q7OptionsReventa[i].disabled = false
    }
    q7OptionsReventa[q7OptionsReventa.length-1].checked = false
  }
}
function noVendoDesarrollosLotes(button){
  q6InputDesarrollosCantidadLotes = document.getElementById("q6InputDesarrollosCantidadLotes")
  q7OptionsDesarrollos = document.getElementsByName("q7desarrollos")
  if (button.checked == true) {
    q6InputDesarrollosCantidadLotes.type = "text"
    q6InputDesarrollosCantidadLotes.value = "No desarrollos lotes"
    q6InputDesarrollosCantidadLotes.disabled = true
    for (let i = 0; i <= q7OptionsDesarrollos.length-2; i++) {
      q7OptionsDesarrollos[i].disabled = true
    }
    q7OptionsDesarrollos[q7OptionsDesarrollos.length-1].checked = true
  } 
  else if(button.checked == false) {
    q6InputDesarrollosCantidadLotes.type = "number"
    q6InputDesarrollosCantidadLotes.value = ""
    q6InputDesarrollosCantidadLotes.disabled = false
    for (let i = 0; i <= q7OptionsDesarrollos.length-2; i++) {
      q7OptionsDesarrollos[i].disabled = false
    }
    q7OptionsDesarrollos[q7OptionsDesarrollos.length-1].checked = false
  }
}

function uncheckLast2OptionsQ10Reventa(button){
  if (button.checked == true || document.getElementById("q10o4reventa").value != ""){
    document.getElementById("q10o5reventa").checked = false
    document.getElementById("q10o6reventa").checked = false
  }
}
function uncheckLast2OptionsQ10Desarrollos(button){
  if (button.checked == true || document.getElementById("q10o4desarrollos").value != ""){
    document.getElementById("q10o5desarrollos").checked = false
    document.getElementById("q10o6desarrollos").checked = false
  }
}
function disableOptionsQ10Reventa(button){
  if(button.value == "noTuveVentasReventa"){
    document.getElementById("q10o1reventa").disabled = false
    document.getElementById("q10o1reventa").checked = false
    document.getElementById("q10o2reventa").disabled = false
    document.getElementById("q10o2reventa").checked = false
    document.getElementById("q10o3reventa").disabled = false
    document.getElementById("q10o3reventa").checked = false
    document.getElementById("q10o4reventa").disabled = false
    document.getElementById("q10o4reventa").value = ""
  }
  else if(button.value == "noVendoReventa"){
    if(button.checked == true){
      document.getElementById("q10o1reventa").checked = false
      document.getElementById("q10o2reventa").checked = false
      document.getElementById("q10o3reventa").checked = false
      document.getElementById("q10o4reventa").value = ""
      document.getElementById("q10o1reventa").disabled = true
      document.getElementById("q10o2reventa").disabled = true
      document.getElementById("q10o3reventa").disabled = true
      document.getElementById("q10o4reventa").disabled = true
    }
  }
}
function disableOptionsQ10Desarrollos(button){
  if(button.value == "noTuveVentasDesarrollos"){
    document.getElementById("q10o1desarrollos").disabled = false
    document.getElementById("q10o1desarrollos").checked = false
    document.getElementById("q10o2desarrollos").disabled = false
    document.getElementById("q10o2desarrollos").checked = false
    document.getElementById("q10o3desarrollos").disabled = false
    document.getElementById("q10o3desarrollos").checked = false
    document.getElementById("q10o4desarrollos").disabled = false
    document.getElementById("q10o4desarrollos").value = ""
  }
  else if(button.value == "noVendoDesarrollos"){
    if(button.checked == true){
      document.getElementById("q10o1desarrollos").checked = false
      document.getElementById("q10o2desarrollos").checked = false
      document.getElementById("q10o3desarrollos").checked = false
      document.getElementById("q10o4desarrollos").value = ""
      document.getElementById("q10o1desarrollos").disabled = true
      document.getElementById("q10o2desarrollos").disabled = true
      document.getElementById("q10o3desarrollos").disabled = true
      document.getElementById("q10o4desarrollos").disabled = true
    }
  }
}

function uncheckLast2OptionsQ11Reventa(button){
  if (button.checked == true || document.getElementById("q11o4reventa").value != ""){
    document.getElementById("q11o5reventa").checked = false
    document.getElementById("q11o6reventa").checked = false
  }
}
function uncheckLast2OptionsQ11Desarrollos(button){
  if (button.checked == true || document.getElementById("q11o4desarrollos").value != ""){
    document.getElementById("q11o5desarrollos").checked = false
    document.getElementById("q11o6desarrollos").checked = false
  }
}
function disableOptionsQ11Reventa(button){
  if(button.value == "noTuveVentasReventa"){
    document.getElementById("q11o1reventa").disabled = false
    document.getElementById("q11o1reventa").checked = false
    document.getElementById("q11o2reventa").disabled = false
    document.getElementById("q11o2reventa").checked = false
    document.getElementById("q11o3reventa").disabled = false
    document.getElementById("q11o3reventa").checked = false
    document.getElementById("q11o4reventa").disabled = false
    document.getElementById("q11o4reventa").value = ""
  }
  else if(button.value == "noVendoReventa"){
    if(button.checked == true){
      document.getElementById("q11o1reventa").checked = false
      document.getElementById("q11o2reventa").checked = false
      document.getElementById("q11o3reventa").checked = false
      document.getElementById("q11o4reventa").value = ""
      document.getElementById("q11o1reventa").disabled = true
      document.getElementById("q11o2reventa").disabled = true
      document.getElementById("q11o3reventa").disabled = true
      document.getElementById("q11o4reventa").disabled = true
    }
  }
}
function disableOptionsQ11Desarrollos(button){
  if(button.value == "noTuveVentasDesarrollos"){
    document.getElementById("q11o1desarrollos").disabled = false
    document.getElementById("q11o1desarrollos").checked = false
    document.getElementById("q11o2desarrollos").disabled = false
    document.getElementById("q11o2desarrollos").checked = false
    document.getElementById("q11o3desarrollos").disabled = false
    document.getElementById("q11o3desarrollos").checked = false
    document.getElementById("q11o4desarrollos").disabled = false
    document.getElementById("q11o4desarrollos").value = ""
  }
  else if(button.value == "noVendoDesarrollos"){
    if(button.checked == true){
      document.getElementById("q11o1desarrollos").checked = false
      document.getElementById("q11o2desarrollos").checked = false
      document.getElementById("q11o3desarrollos").checked = false
      document.getElementById("q11o4desarrollos").value = ""
      document.getElementById("q11o1desarrollos").disabled = true
      document.getElementById("q11o2desarrollos").disabled = true
      document.getElementById("q11o3desarrollos").disabled = true
      document.getElementById("q11o4desarrollos").disabled = true
    }
  }
}

function getValues(){
  // Personal Information
  q0staffName = document.getElementById("staffName").value
  q0companyName = document.getElementById("companyName").value
  q0email = document.getElementById("email").value
  q0phone = document.getElementById("phone").value
  // Q1
  let q1PRE = document.getElementsByName("q1")
  for (let i = 0; i < q1PRE.length; i++) {
    if(q1PRE[i].checked == true){
      q1 = q1PRE[i].value
      break
    }
  }
  // Q2
  let q2reventaPRE = document.getElementsByName("q2reventa")
  q2reventa = q2reventaPRE[0].value
  let q2desarrollosPRE = document.getElementsByName("q2desarrollos")
  q2desarrollos = q2desarrollosPRE[0].value
// Q3
  let q3reventaPRE = document.getElementsByName("q3reventa")
  for (let i = 0; i < q3reventaPRE.length; i++) {
    if(q3reventaPRE[i].checked == true){
      q3reventa = q3reventaPRE[i].value;
      break
    }
  }
  let q3desarrollosPRE = document.getElementsByName("q3desarrollos")
  for (let i = 0; i < q3desarrollosPRE.length; i++) {
    if(q3desarrollosPRE[i].checked == true){
      q3desarrollos = q3desarrollosPRE[i].value;
      break
    }
  }
// Q4
  let q4reventaPRE = document.getElementsByName("q4reventa")
  q4reventa = q4reventaPRE[0].value
  let q4desarrollosPRE = document.getElementsByName("q4desarrollos")
  q4desarrollos = q4desarrollosPRE[0].value
// Q5
  let q5reventaPRE = document.getElementsByName("q5reventa")
  for (let i = 0; i < q5reventaPRE.length; i++) {
    if(q5reventaPRE[i].checked == true){
      q5reventa = q5reventaPRE[i].value;
      break
    }
  }
  let q5desarrollosPRE = document.getElementsByName("q5desarrollos")
  for (let i = 0; i < q5desarrollosPRE.length; i++) {
    if(q5desarrollosPRE[i].checked == true){
      q5desarrollos = q5desarrollosPRE[i].value;
      break
    }
  }
// Q6
  let q6reventaPRE = document.getElementsByName("q6reventa")
  q6reventa = q6reventaPRE[0].value
  let q6desarrollosPRE = document.getElementsByName("q6desarrollos")
  q6desarrollos = q6desarrollosPRE[0].value
  // Q7
  let q7reventaPRE = document.getElementsByName("q7reventa")
  for (let i = 0; i < q7reventaPRE.length; i++) {
    if(q7reventaPRE[i].checked == true){
      q7reventa = q7reventaPRE[i].value;
      break
    }
  }
  let q7desarrollosPRE = document.getElementsByName("q7desarrollos")
  for (let i = 0; i < q7desarrollosPRE.length; i++) {
    if(q7desarrollosPRE[i].checked == true){
      q7desarrollos = q7desarrollosPRE[i].value;
      break
    }
  }
  // Q8
  let q8reventaPRE = document.getElementsByName("q8reventa")
  for (let i = 0; i < q8reventaPRE.length; i++) {
    if(q8reventaPRE[i].checked == true){
      q8reventa = q8reventaPRE[i].value;
      break
    }
  }
  let q8desarrollosPRE = document.getElementsByName("q8desarrollos")
  for (let i = 0; i < q8desarrollosPRE.length; i++) {
    if(q8desarrollosPRE[i].checked == true){
      q8desarrollos = q8desarrollosPRE[i].value;
      break
    }
  }
  // Q9
  let q9reventaPRE = document.getElementsByName("q9reventa")
  for (let i = 0; i < q9reventaPRE.length; i++) {
    if(q9reventaPRE[i].checked == true){
      q9reventa = q9reventaPRE[i].value;
      break
    }
  }
  let q9desarrollosPRE = document.getElementsByName("q9desarrollos")
  for (let i = 0; i < q9desarrollosPRE.length; i++) {
    if(q9desarrollosPRE[i].checked == true){
      q9desarrollos = q9desarrollosPRE[i].value;
      break
    }
  }
  // Q10
  let q10reventaPRE = document.getElementsByName("q10reventa")
  q10reventa = []
  for (let i = 0; i < q10reventaPRE.length; i++) {
    if(q10reventaPRE[i].checked == true){
      q10reventa.push(q10reventaPRE[i].value)
    }
    else if(q10reventaPRE[i].type == "text" && q10reventaPRE[i].value != ""){
      q10reventa.push(q10reventaPRE[i].value)
    }
  }
  let q10desarrollosPRE = document.getElementsByName("q10desarrollos")
  q10desarrollos = []
  for (let i = 0; i < q10desarrollosPRE.length; i++) {
    if(q10desarrollosPRE[i].checked == true){
      q10desarrollos.push(q10desarrollosPRE[i].value)
    }
    else if(q10desarrollosPRE[i].type == "text" && q10desarrollosPRE[i].value != ""){
      q10desarrollos.push(q10desarrollosPRE[i].value)
    }
  }
  // Q11
  let q11reventaPRE = document.getElementsByName("q11reventa")
  q11reventa = []
  for (let i = 0; i < q11reventaPRE.length; i++) {
    if(q11reventaPRE[i].checked == true){
      q11reventa.push(q11reventaPRE[i].value)
    }
    else if(q11reventaPRE[i].type == "text" && q11reventaPRE[i].value != ""){
      q11reventa.push(q11reventaPRE[i].value)
    }
  }
  let q11desarrollosPRE = document.getElementsByName("q11desarrollos")
  q11desarrollos = []
  for (let i = 0; i < q11desarrollosPRE.length; i++) {
    if(q11desarrollosPRE[i].checked == true){
      q11desarrollos.push(q11desarrollosPRE[i].value)
    }
    else if(q11desarrollosPRE[i].type == "text" && q11desarrollosPRE[i].value != ""){
      q11desarrollos.push(q11desarrollosPRE[i].value)
    }
  }
  // Q12
  let q12reventaPRE = document.getElementsByName("q12reventa")
  for (let i = 0; i < q12reventaPRE.length; i++) {
    if(q12reventaPRE[i].checked == true){
      q12reventa = q12reventaPRE[i].value;
      break
    }
  }
  let q12desarrollosPRE = document.getElementsByName("q12desarrollos")
  for (let i = 0; i < q12desarrollosPRE.length; i++) {
    if(q12desarrollosPRE[i].checked == true){
      q12desarrollos = q12desarrollosPRE[i].value;
      break
    }
  }
  // Q13
  let q13reventaPRE = document.getElementsByName("q13reventa")
  for (let i = 0; i < q13reventaPRE.length; i++) {
    if(q13reventaPRE[i].checked == true){
      q13reventa = q13reventaPRE[i].value;
      break
    }
  }
  let q13desarrollosPRE = document.getElementsByName("q13desarrollos")
  for (let i = 0; i < q13desarrollosPRE.length; i++) {
    if(q13desarrollosPRE[i].checked == true){
      q13desarrollos = q13desarrollosPRE[i].value;
      break
    }
  }
  // Q14
  q14 = document.getElementById("q14response").value
  // Q15
  let q15reventaPRE = document.getElementsByName("q15reventa")
  q15reventa = []
  for (let i = 0; i < q15reventaPRE.length; i++) {
    if(q15reventaPRE[i].type == "number" ||q15reventaPRE[i].type == "text" && q15reventaPRE[i].value != ""){
      q15reventa.push(q15reventaPRE[i].value)
    }
    else if(q15reventaPRE[i].checked == true){
      q15reventa.push(q15reventaPRE[i].value)
    }
  }
  let q15desarrollosPRE = document.getElementsByName("q15desarrollos")
  q15desarrollos = []
  for (let i = 0; i < q15desarrollosPRE.length; i++) {
    if(q15desarrollosPRE[i].type == "number" || q15desarrollosPRE[i].type == "text" && q15desarrollosPRE[i].value != ""){
      q15desarrollos.push(q15desarrollosPRE[i].value)
    }
    else if(q15desarrollosPRE[i].checked == true){
      q15desarrollos.push(q15desarrollosPRE[i].value)
    }
  }
  // Q16
  let q16reventaPRE = document.getElementsByName("q16reventa")
  for (let i = 0; i < q16reventaPRE.length; i++) {
    if(q16reventaPRE[i].checked == true){
      q16reventa = q16reventaPRE[i].value;
      break
    }
  }
  let q16desarrollosPRE = document.getElementsByName("q16desarrollos")
  for (let i = 0; i < q16desarrollosPRE.length; i++) {
    if(q16desarrollosPRE[i].checked == true){
      q16desarrollos = q16desarrollosPRE[i].value;
      break
    }
  }
  // Q17
  let q17reventaPRE = document.getElementsByName("q17reventa")
  for (let i = 0; i < q17reventaPRE.length; i++) {
    if(q17reventaPRE[i].checked == true){
      q17reventa = q17reventaPRE[i].value;
      break
    }
  }
  let q17desarrollosPRE = document.getElementsByName("q17desarrollos")
  for (let i = 0; i < q17desarrollosPRE.length; i++) {
    if(q17desarrollosPRE[i].checked == true){
      q17desarrollos = q17desarrollosPRE[i].value;
      break
    }
  }
  // Q18
  let q18reventaPRE = document.getElementsByName("q18reventa")
  for (let i = 0; i < q18reventaPRE.length; i++) {
    if(q18reventaPRE[i].checked == true){
      q18reventa = q18reventaPRE[i].value;
      break
    }
  }
  let q18desarrollosPRE = document.getElementsByName("q18desarrollos")
  for (let i = 0; i < q18desarrollosPRE.length; i++) {
    if(q18desarrollosPRE[i].checked == true){
      q18desarrollos = q18desarrollosPRE[i].value;
      break
    }
  }
  validateValues(q0companyName,q0staffName,q0email,q0phone,q1,q2reventa,q2desarrollos,q3reventa,q3desarrollos,q4reventa,q4desarrollos,q5reventa,q5desarrollos,q6reventa,q6desarrollos,q7reventa,q7desarrollos,q8reventa,q8desarrollos,q9reventa,q9desarrollos,q10reventa,q10desarrollos,q11reventa,q11desarrollos,q12reventa,q12desarrollos,q13reventa,q13desarrollos,q14,q15reventa,q15desarrollos,q16reventa,q16desarrollos,q17reventa,q17desarrollos,q18reventa,q18desarrollos)
}
function validateValues(q0companyName,q0staffName,q0email,q0phone,q1,q2reventa,q2desarrollos,q3reventa,q3desarrollos,q4reventa,q4desarrollos,q5reventa,q5desarrollos,q6reventa,q6desarrollos,q7reventa,q7desarrollos,q8reventa,q8desarrollos,q9reventa,q9desarrollos,q10reventa,q10desarrollos,q11reventa,q11desarrollos,q12reventa,q12desarrollos,q13reventa,q13desarrollos,q14,q15reventa,q15desarrollos,q16reventa,q16desarrollos,q17reventa,q17desarrollos,q18reventa,q18desarrollos, corrects){
  corrects = 35
  if(q0companyName == ""){
    Swal.fire({
      icon: "info",
      title: "Falta que escribas el nombre de tu empresa",
      confirmButtonColor: "#3085d6"
    })
    corrects = corrects -1
  }
  else if(q1 == "" || typeof(q1) == "undefined"){
    Swal.fire({
      icon: "info",
      title: "Falta que selecciones una opción en la pregunta 1",
      confirmButtonColor: "#3085d6"
    })
    corrects = corrects -1
  }
  else if(q2reventa == ""){
    Swal.fire({
      icon: "info",
      title: "Falta que escribas la cantidad condominios para reventa o seleccionar la casilla de no vendo en la pregunta 2",
      confirmButtonColor: "#3085d6"
    })
    corrects = corrects -1
  }
  else if(q2desarrollos == ""){
    Swal.fire({
      icon: "info",
      title: "Falta que escribas la cantidad condominios para desarrollos o seleccionar la casilla de no vendo en la pregunta 2",
      confirmButtonColor: "#3085d6"
    })
    corrects = corrects -1
  }
  else if(q3reventa == "" || typeof(q3reventa) == "undefined"){
    Swal.fire({
      icon: "info",
      title: "Falta que selecciones una opción en la pregunta 3 de la columna de reventa",
      confirmButtonColor: "#3085d6"
    })
    corrects = corrects -1
  }
  else if(q3desarrollos == "" || typeof(q3desarrollos) == "undefined"){
    Swal.fire({
      icon: "info",
      title: "Falta que selecciones una opción en la pregunta 3 de la columna de desarrollos",
      confirmButtonColor: "#3085d6"
    })
    corrects = corrects -1
  }
  else if(q4reventa == ""){
    Swal.fire({
      icon: "info",
      title: "Falta que escribas la cantidad condominios para reventa o seleccionar la casilla de no vendo en la pregunta 4",
      confirmButtonColor: "#3085d6"
    })
    corrects = corrects -1
  }
  else if(q4desarrollos == ""){
    Swal.fire({
      icon: "info",
      title: "Falta que escribas la cantidad condominios para desarrollos o seleccionar la casilla de no vendo en la pregunta 4",
      confirmButtonColor: "#3085d6"
    })
    corrects = corrects -1
  }
  else if(q5reventa == "" || typeof(q5reventa) == "undefined"){
    Swal.fire({
      icon: "info",
      title: "Falta que selecciones una opción en la pregunta 5 de la columna de reventa",
      confirmButtonColor: "#3085d6"
    })
    corrects = corrects -1
  }
  else if(q5desarrollos == "" || typeof(q5desarrollos) == "undefined"){
    Swal.fire({
      icon: "info",
      title: "Falta que selecciones una opción en la pregunta 5 de la columna de desarrollos",
      confirmButtonColor: "#3085d6"
    })
    corrects = corrects -1
  }
  else if(q6reventa == ""){
    Swal.fire({
      icon: "info",
      title: "Falta que escribas la cantidad condominios para reventa o seleccionar la casilla de no vendo en la pregunta 6",
      confirmButtonColor: "#3085d6"
    })
    corrects = corrects -1
  }
  else if(q6desarrollos == ""){
    Swal.fire({
      icon: "info",
      title: "Falta que escribas la cantidad condominios para desarrollos o seleccionar la casilla de no vendo en la pregunta 6",
      confirmButtonColor: "#3085d6"
    })
    corrects = corrects -1
  }
  else if(q7reventa == "" || typeof(q7reventa) == "undefined"){
    Swal.fire({
      icon: "info",
      title: "Falta que selecciones una opción en la pregunta 7 de la columna de reventa",
      confirmButtonColor: "#3085d6"
    })
    corrects = corrects -1
  }
  else if(q7desarrollos == "" || typeof(q7desarrollos) == "undefined"){
    Swal.fire({
      icon: "info",
      title: "Falta que selecciones una opción en la pregunta 7 de la columna de desarrollos",
      confirmButtonColor: "#3085d6"
    })
    corrects = corrects -1
  }
  else if(q8reventa == "" || typeof(q8reventa) == "undefined"){
    Swal.fire({
      icon: "info",
      title: "Falta que selecciones una opción en la pregunta 8 de la columna de reventa",
      confirmButtonColor: "#3085d6"
    })
    corrects = corrects -1
  }
  else if(q8desarrollos == "" || typeof(q8desarrollos) == "undefined"){
    Swal.fire({
      icon: "info",
      title: "Falta que selecciones una opción en la pregunta 8 de la columna de desarrollos",
      confirmButtonColor: "#3085d6"
    })
    corrects = corrects -1
  }
  else if(q9reventa == "" || typeof(q9reventa) == "undefined"){
    Swal.fire({
      icon: "info",
      title: "Falta que selecciones una opción en la pregunta 9 de la columna de reventa",
      confirmButtonColor: "#3085d6"
    })
    corrects = corrects -1
  }
  else if(q9desarrollos == "" || typeof(q9desarrollos) == "undefined"){
    Swal.fire({
      icon: "info",
      title: "Falta que selecciones una opción en la pregunta 9 de la columna de desarrollos",
      confirmButtonColor: "#3085d6"
    })
    corrects = corrects -1
  }
  else if(q10reventa.length == 0){
    Swal.fire({
      icon: "info",
      title: "Falta que escribas la ciudad y/o selecciones una o más opciones de ciduades o seleccionar la opción no tuve ventas o no vendo en la pregunta 10 de la columna de reventa",
      confirmButtonColor: "#3085d6"
    })
    corrects = corrects -1
  }
  else if(q10desarrollos.length == 0){
    Swal.fire({
      icon: "info",
      title: "Falta que escribas la ciudad y/o selecciones una o más opciones de ciduades o seleccionar la opción no tuve ventas o no vendo en la pregunta 10 de la columna de desarrollos",
      confirmButtonColor: "#3085d6"
    })
    corrects = corrects -1
  }
  else if(q11reventa.length == 0){
    Swal.fire({
      icon: "info",
      title: "Falta que escribas la ciudad y/o selecciones una o más opciones de ciduades o seleccionar la opción no tuve ventas o no vendo en la pregunta 11 de la columna de reventa",
      confirmButtonColor: "#3085d6"
    })
    corrects = corrects -1
  }
  else if(q11desarrollos.length == 0){
    Swal.fire({
      icon: "info",
      title: "Falta que escribas la ciudad y/o selecciones una o más opciones de ciduades o seleccionar la opción no tuve ventas o no vendo en la pregunta 11 de la columna de desarrollos",
      confirmButtonColor: "#3085d6"
    })
    corrects = corrects -1
  }
  else if(q12reventa == "" || typeof(q12reventa) == "undefined"){
    Swal.fire({
      icon: "info",
      title: "Falta que selecciones una opción en la pregunta 12 de la columna de reventa",
      confirmButtonColor: "#3085d6"
    })
    corrects = corrects -1
  }
  else if(q12desarrollos == "" || typeof(q12desarrollos) == "undefined"){
    Swal.fire({
      icon: "info",
      title: "Falta que selecciones una opción en la pregunta 12 de la columna de desarrollos",
      confirmButtonColor: "#3085d6"
    })
    corrects = corrects -1
  }
  else if(q13reventa == "" || typeof(q13reventa) == "undefined"){
    Swal.fire({
      icon: "info",
      title: "Falta que selecciones una opción en la pregunta 13 de la columna de reventa",
      confirmButtonColor: "#3085d6"
    })
    corrects = corrects -1
  }
  else if(q13desarrollos == "" || typeof(q13desarrollos) == "undefined"){
    Swal.fire({
      icon: "info",
      title: "Falta que selecciones una opción en la pregunta 13 de la columna de desarrollos",
      confirmButtonColor: "#3085d6"
    })
    corrects = corrects -1
  }
  else if(q14 == ""){
    Swal.fire({
      icon: "info",
      title: "Falta que respondas la pregunta 14",
      confirmButtonColor: "#3085d6"
    })
    corrects = corrects -1
  }
  else if(q15reventa[0] == "" || q15reventa[1] == "" || q15reventa[2] == ""){
    Swal.fire({
      icon: "info",
      title: "Falta que escribas la cantidad en algún inmueble en la pregunta 15 de la columna de reventa",
      confirmButtonColor: "#3085d6"
    })
    corrects = corrects -1
  }
  else if(q15desarrollos[0] == "" || q15desarrollos[1] == "" || q15desarrollos[2] == ""){
    Swal.fire({
      icon: "info",
      title: "Falta que escribas la cantidad en algún inmueble en la pregunta 15 de la columna de desarrollos",
      confirmButtonColor: "#3085d6"
    })
    corrects = corrects -1
  }
  else if(q16reventa == "" || typeof(q16reventa) == "undefined"){
    Swal.fire({
      icon: "info",
      title: "Falta que selecciones una opción en la pregunta 16 de la columna de reventa",
      confirmButtonColor: "#3085d6"
    })
    corrects = corrects -1
  }
  else if(q16desarrollos == "" || typeof(q16desarrollos) == "undefined"){
    Swal.fire({
      icon: "info",
      title: "Falta que selecciones una opción en la pregunta 16 de la columna de desarrollos",
      confirmButtonColor: "#3085d6"
    })
    corrects = corrects -1
  }
  else if(q17reventa == "" || typeof(q17reventa) == "undefined"){
    Swal.fire({
      icon: "info",
      title: "Falta que selecciones una opción en la pregunta 17 de la columna de reventa",
      confirmButtonColor: "#3085d6"
    })
    corrects = corrects -1
  }
  else if(q17desarrollos == "" || typeof(q17desarrollos) == "undefined"){
    Swal.fire({
      icon: "info",
      title: "Falta que selecciones una opción en la pregunta 17 de la columna de desarrollos",
      confirmButtonColor: "#3085d6"
    })
    corrects = corrects -1
  }
  else if(q18reventa == "" || typeof(q18reventa) == "undefined"){
    Swal.fire({
      icon: "info",
      title: "Falta que selecciones una opción en la pregunta 18 de la columna de reventa",
      confirmButtonColor: "#3085d6"
    })
    corrects = corrects -1
  }
  else if(q18desarrollos == "" || typeof(q18desarrollos) == "undefined"){
    Swal.fire({
      icon: "info",
      title: "Falta que selecciones una opción en la pregunta 18 de la columna de desarrollos",
      confirmButtonColor: "#3085d6"
    })
    corrects = corrects -1
  }
  else if(corrects == 35){
    sendValues(q0companyName,q0staffName,q0email,q0phone,q1,q2reventa,q2desarrollos,q3reventa,q3desarrollos,q4reventa,q4desarrollos,q5reventa,q5desarrollos,q6reventa,q6desarrollos,q7reventa,q7desarrollos,q8reventa,q8desarrollos,q9reventa,q9desarrollos,q10reventa,q10desarrollos,q11reventa,q11desarrollos,q12reventa,q12desarrollos,q13reventa,q13desarrollos,q14,q15reventa,q15desarrollos,q16reventa,q16desarrollos,q17reventa,q17desarrollos,q18reventa,q18desarrollos)
  }
  console.log("Staff Name:", q0staffName)
  console.log("Company Name:", q0companyName)
  console.log("Email:", q0email)
  console.log("Phone:", q0phone)
  console.log("Q1:",q1)
  console.log("Q2 Reventa:", q2reventa)
  console.log("Q2 Desarrollos:", q2desarrollos)
  console.log("Q3 Reventa:", q3reventa)
  console.log("Q3 Desarrollos:", q3desarrollos)
  console.log("Q4 Reventa:", q4reventa)
  console.log("Q4 Desarrollos:", q4desarrollos)
  console.log("Q5 Reventa:", q5reventa)
  console.log("Q5 Desarrollos:", q5desarrollos)
  console.log("Q6 Reventa:" ,q6reventa)
  console.log("Q6 Desarrollos:", q6desarrollos)
  console.log("Q7 Reventa:", q7reventa)
  console.log("Q7 Desarrollos:", q7desarrollos)
  console.log("Q8 Reventa:", q8reventa)
  console.log("Q8 Desarrollos:", q8desarrollos)
  console.log("Q9 Reventa:", q9reventa)
  console.log("Q9 Desarrollos:", q9desarrollos)
  console.log("Q10 Reventa:", q10reventa)
  console.log("Q10 Desarrollos:", q10desarrollos)
  console.log("Q11 Reventa:", q11reventa)
  console.log("Q11 Desarrollos:", q11desarrollos)
  console.log("Q12 Reventa:", q12reventa)
  console.log("Q12 Desarrollos:", q12desarrollos)
  console.log("Q13 Reventa:", q13reventa)
  console.log("Q13 Desarrollos:", q13desarrollos)
  console.log("Q14:", q14)
  console.log("Q15 Reventa:", q15reventa)
  console.log("Q15 Desarrollos:", q15desarrollos)
  console.log("Q16 Reventa:", q16reventa)
  console.log("Q16 Desarrollos:", q16desarrollos)
  console.log("Q17 Reventa:", q17reventa)
  console.log("Q17 Desarrollos:", q17desarrollos)
  console.log("Q18 Reventa:", q18reventa)
  console.log("Q18 Desarrollos:", q18desarrollos)
}

function sendValues(q0companyName,q0staffName,q0email,q0phone,q1,q2reventa,q2desarrollos,q3reventa,q3desarrollos,q4reventa,q4desarrollos,q5reventa,q5desarrollos,q6reventa,q6desarrollos,q7reventa,q7desarrollos,q8reventa,q8desarrollos,q9reventa,q9desarrollos,q10reventa,q10desarrollos,q11reventa,q11desarrollos,q12reventa,q12desarrollos,q13reventa,q13desarrollos,q14,q15reventa,q15desarrollos,q16reventa,q16desarrollos,q17reventa,q17desarrollos,q18reventa,q18desarrollos){
  console.log(corrects)
  Swal.fire({
    title: "Enviando información",
    didOpen: () => {
      Swal.showLoading();
    }
  })
    var data = JSON.stringify({
      q0companyName:	q0companyName,
      q0staffName:	q0staffName,
      q0email:	q0email,
      q0phone:	q0phone,
      q1:	q1,
      q2reventa:	q2reventa,
      q2desarrollos:	q2desarrollos,
      q3reventa:	q3reventa,
      q3desarrollos:	q3desarrollos,
      q4reventa:	q4reventa,
      q4desarrollos:	q4desarrollos,
      q5reventa:	q5reventa,
      q5desarrollos:	q5desarrollos,
      q6reventa:	q6reventa,
      q6desarrollos:	q6desarrollos,
      q7reventa:	q7reventa,
      q7desarrollos:	q7desarrollos,
      q8reventa:	q8reventa,
      q8desarrollos:	q8desarrollos,
      q9reventa:	q9reventa,
      q9desarrollos:	q9desarrollos,
      q10reventa:	q10reventa,
      q10desarrollos:	q10desarrollos,
      q11reventa:	q11reventa,
      q11desarrollos:	q11desarrollos,
      q12reventa:	q12reventa,
      q12desarrollos:	q12desarrollos,
      q13reventa:	q13reventa,
      q13desarrollos:	q13desarrollos,
      q14:	q14,
      q15reventa:	q15reventa,
      q15desarrollos:	q15desarrollos,
      q16reventa:	q16reventa,
      q16desarrollos:	q16desarrollos,
      q17reventa:	q17reventa,
      q17desarrollos:	q17desarrollos,
      q18reventa:	q18reventa,
      q18desarrollos: q18desarrollos,
    });
    // sheet.best
    var config = {
      method: "post",
      url: "https://sheet.best/api/sheets/32aacf91-902e-4e88-8d70-e596b2f41ceb/tabs/encuestaAgentes2023",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    axios(config)
      .then((res) => {
        q11 = []
        responses = []
        // console.log(res)
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Información enviada, ya puede cerrar esta ventana",
          showConfirmButton: false,
          confirmButtonColor: "#3085d6",
        });
        document.getElementById("deleteDiv").remove();
        let divToInsertHTMLTags = document.getElementById("divToInsertHTMLTags");
        let notification = document.createElement("div");
        notification.innerHTML = `<h4 class="text-center">Gracias por llenar la encuesta, ya puede cerrar esta ventana.</h4>`;
        divToInsertHTMLTags.insertAdjacentElement("beforeend", notification);
      })
      .catch(async(err) => {
        Swal.fire({
          icon: "error",
          confirmButtonColor: "#3085d6"
        })
      });
}