var q0companyName,q0staffName,q0email,q0phone,q1,q2reventa,q2desarrollos,q3reventa,q3desarrollos,q4reventa,q4desarrollos,q5reventa,q5desarrollos,q6reventa,q6desarrollos,q7reventa,q7desarrollos,q8reventa,q8desarrollos,q9reventa,q9desarrollos,q10reventa,q10desarrollos,q11reventa,q11desarrollos,q12reventa,q12desarrollos,q13reventa,q13desarrollos,q14,q15reventa,q15desarrollos,q16reventa,q16desarrollos,q17reventa,q17desarrollos,q18reventa,q18desarrollos
// var noVendoCondominios = false
// var reventaCondominios = false
// var desarrollosCondominios = false
// var reventaCasas = false
// var desarrollosCasas = false
// var noVendoCasas = false
// var reventaLotes = false
// var desarrollosLotes = false
// var noVendoLotes = false

function novendocondominios(button){
  q2InputReventaCantidadCondominios = document.getElementById("q2InputReventaCantidadCondominios")
  q2InputDesarrollosCantidadCondominios = document.getElementById("q2InputDesarrollosCantidadCondominios")
  q2CheckboxNoVendoReventaCondominios = document.getElementById("q2CheckboxNoVendoReventaCondominios")
  q2CheckboxNoVendoDesarrollosCondominios = document.getElementById("q2CheckboxNoVendoDesarrollosCondominios")
  q3OptionsReventa = document.getElementsByName("q3reventa")
  q3OptionsDesarrollos = document.getElementsByName("q3desarrollos")
  q15o1reventa = document.getElementById("q15o1reventa")
  q15o1desarrollos = document.getElementById("q15o1desarrollos")
  q16reventa = document.getElementsByName("q16reventa")
  q16desarrollos = document.getElementsByName("q16desarrollos")
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
    q15o1reventa.type = "text"
    q15o1reventa.value = "No reventa condominios"
    q15o1reventa.disabled = true
    q15o1desarrollos.type = "text"
    q15o1desarrollos.value = "No desarrollos condominios"
    q15o1desarrollos.disabled = true
    for (let i = 0; i <= q16reventa.length-2; i++) {
      q16reventa[i].disabled = true
      q16desarrollos[i].disabled = true
    }
    q16reventa[q16reventa.length-1].checked = true
    q16desarrollos[q16reventa.length-1].checked = true
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
    q15o1reventa.type = "number"
    q15o1reventa.value = ""
    q15o1reventa.disabled = false
    q15o1desarrollos.type = "number"
    q15o1desarrollos.value = ""
    q15o1desarrollos.disabled = false
    for (let i = 0; i <= q16reventa.length-2; i++) {
      q16reventa[i].disabled = false
      q16desarrollos[i].disabled = false
    }
    q16reventa[q16reventa.length-1].checked = false
    q16desarrollos[q16reventa.length-1].checked = false
  }
}
function novendocasas(button){
  q4InputReventaCantidadCasas = document.getElementById("q4InputReventaCantidadCasas")
  q4InputDesarrollosCantidadCasas = document.getElementById("q4InputDesarrollosCantidadCasas")
  q4CheckboxNoVendoReventaCasas = document.getElementById("q4CheckboxNoVendoReventaCasas")
  q4CheckboxNoVendoDesarrollosCasas = document.getElementById("q4CheckboxNoVendoDesarrollosCasas")
  q5OptionsReventa = document.getElementsByName("q5reventa")
  q5OptionsDesarrollos = document.getElementsByName("q5desarrollos")
  q15o2reventa = document.getElementById("q15o2reventa")
  q15o2desarrollos = document.getElementById("q15o2desarrollos")
  q17reventa = document.getElementsByName("q17reventa")
  q17desarrollos = document.getElementsByName("q17desarrollos")
  if (button.checked == true){
    q4InputReventaCantidadCasas.disabled = true
    q4InputDesarrollosCantidadCasas.disabled = true
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
    q15o2reventa.type = "text"
    q15o2reventa.value = "No reventa casas"
    q15o2reventa.disabled = true
    q15o2desarrollos.type = "text"
    q15o2desarrollos.value = "No desarrollos casas"
    q15o2desarrollos.disabled = true
    for (let i = 0; i <= q17reventa.length-2; i++) {
      q17reventa[i].disabled = true
      q17desarrollos[i].disabled = true
    }
    q17reventa[q17reventa.length-1].checked = true
    q17desarrollos[q17reventa.length-1].checked = true
  }
  else if(button.checked == false){
    q4InputReventaCantidadCasas.disabled = false
    q4InputDesarrollosCantidadCasas.disabled = false
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
    q15o2reventa.type = "number"
    q15o2reventa.value = ""
    q15o2reventa.disabled = false
    q15o2desarrollos.type = "number"
    q15o2desarrollos.value = ""
    q15o2desarrollos.disabled = false
    for (let i = 0; i <= q17reventa.length-2; i++) {
      q17reventa[i].disabled = false
      q17desarrollos[i].disabled = false
    }
    q17reventa[q17reventa.length-1].checked = false
    q17desarrollos[q17reventa.length-1].checked = false
  }
}
function novendolotes(button){
  q6InputReventaCantidadLotes = document.getElementById("q6InputReventaCantidadLotes")
  q6InputDesarrollosCantidadLotes = document.getElementById("q6InputDesarrollosCantidadLotes")
  q6CheckboxNoVendoReventaLotes = document.getElementById("q6CheckboxNoVendoReventaLotes")
  q6CheckboxNoVendoDesarrollosLotes = document.getElementById("q6CheckboxNoVendoDesarrollosLotes")
  q7OptionsReventa = document.getElementsByName("q7reventa")
  q7OptionsDesarrollos = document.getElementsByName("q7desarrollos")
  q15o3reventa = document.getElementById("q15o3reventa")
  q15o3desarrollos = document.getElementById("q15o3desarrollos")
  q18reventa = document.getElementsByName("q18reventa")
  q18desarrollos = document.getElementsByName("q18desarrollos")
  if (button.checked == true){
    q6InputReventaCantidadLotes.disabled = true
    q6InputDesarrollosCantidadLotes.disabled = true
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
    q15o3reventa.type = "text"
    q15o3reventa.value = "No reventa lotes"
    q15o3reventa.disabled = true
    q15o3desarrollos.type = "text"
    q15o3desarrollos.value = "No desarrollos lotes"
    q15o3desarrollos.disabled = true
    for (let i = 0; i <= q18reventa.length-2; i++) {
      q18reventa[i].disabled = true
      q18desarrollos[i].disabled = true
    }
    q18reventa[q17reventa.length-1].checked = true
    q18desarrollos[q17reventa.length-1].checked = true
  }
  else if(button.checked == false){
    q6InputReventaCantidadLotes.disabled = false
    q6InputDesarrollosCantidadLotes.disabled = false
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
    q15o3reventa.type = "number"
    q15o3reventa.value = ""
    q15o3reventa.disabled = false
    q15o3desarrollos.type = "number"
    q15o3desarrollos.value = ""
    q15o3desarrollos.disabled = false
    for (let i = 0; i <= q17reventa.length-2; i++) {
      q18reventa[i].disabled = false
      q18desarrollos[i].disabled = false
    }
    q18reventa[q17reventa.length-1].checked = false
    q18desarrollos[q17reventa.length-1].checked = false
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
  if(button.checked == true){
    document.getElementById("q10o1reventa").checked = false
    document.getElementById("q10o2reventa").checked = false
    document.getElementById("q10o3reventa").checked = false
    document.getElementById("q10o4reventa").value = ""
  }
}
function disableOptionsQ10Desarrollos(button){
  if(button.checked == true){
    document.getElementById("q10o1desarrollos").checked = false
    document.getElementById("q10o2desarrollos").checked = false
    document.getElementById("q10o3desarrollos").checked = false
    document.getElementById("q10o4desarrollos").value = ""
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
  if(button.checked == true){
    document.getElementById("q11o1reventa").checked = false
    document.getElementById("q11o2reventa").checked = false
    document.getElementById("q11o3reventa").checked = false
    document.getElementById("q11o4reventa").value = ""
  }
}
function disableOptionsQ11Desarrollos(button){
  if(button.checked == true){
    document.getElementById("q11o1desarrollos").checked = false
    document.getElementById("q11o2desarrollos").checked = false
    document.getElementById("q11o3desarrollos").checked = false
    document.getElementById("q11o4desarrollos").value = ""
  }
}

function getValues(){
  // Personal Information
  q0companyName = document.getElementById("companyName").value
  q0staffName = document.getElementById("staffName").value
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
    if(q10reventaPRE[i].checked == true || q10reventaPRE[i].value != "californiaEstadosUnidosReventa" || q10reventaPRE[i].value != "tijuanaReventa" ){
      q10reventa.push(q10reventaPRE[i].value)
    }
  }
  let q10desarrollosPRE = document.getElementsByName("q10desarrollos")
  q11 = [document.getElementsByName("q11reventa"), document.getElementsByName("q11desarrollos")]
  q12 = [document.getElementsByName("q12reventa"), document.getElementsByName("q12desarrollos")]
  q13 = [document.getElementsByName("q13reventa"), document.getElementsByName("q13desarrollos")]
  q14 = [document.getElementById("q14response")]
  q15 = [document.getElementsByName("q15reventa"), document.getElementsByName("q15desarrollos")]
  q16 = [document.getElementsByName("q16reventa"), document.getElementsByName("q16desarrollos")]
  q17 = [document.getElementsByName("q17reventa"), document.getElementsByName("q17desarrollos")]
  q18 = [document.getElementsByName("q18reventa"), document.getElementsByName("q18desarrollos")]
  console.log("Company Name:", q0companyName)
  console.log("Staff Name:", q0staffName)
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
  console.log("Q7 Reventa;", q7reventa)
  console.log("Q7 Desarrollos:", q7desarrollos)
  console.log("Q8 Reventa:", q8reventa)
  console.log("Q8 Desarrollos;", q8desarrollos)
  console.log("Q9 Reventa:", q9reventa)
  console.log("Q9 Desarrollos:", q9desarrollos)
  console.log("Q10 Reventa:", q10reventa)
}
// function validateValues(q0,q1,q2,q3,q4,q5,q6,q7,q8,q9,q10,q11,q12,q13,q14,q15,q16,q17,q18){
//   if(q0[1].value == ""){
//     Swal.fire({
//       icon: "info",
//       title: "Falta que escribas el nombre de tu empresa",
//       confirmButtonColor: "#3085d6"
//     })
//   }
//   else if(q1[0].checked == false && q1[1].checked == false){
//     Swal.fire({
//       icon: "info",
//       title: "Falta que selecciones una opción en la pregunta 1",
//       confirmButtonColor: "#3085d6"
//     })
//   }
//   else if(q2[1].value == ""){
//     Swal.fire({
//       icon: "info",
//       title: "Falta que escribas la cantidad condominios para reventa o seleccionar la casilla de no vendo",
//       confirmButtonColor: "#3085d6"
//     })
//   }
//   else if(q2[2].value == ""){
//     Swal.fire({
//       icon: "info",
//       title: "Falta que escribas la cantidad condominios para desarrollos o seleccionar la casilla de no vendo",
//       confirmButtonColor: "#3085d6"
//     })
//   }
  
//   sendValues()
// }
// function sendValues(){
//   console.log(q0,q1,q2,q3,q4,q5,q6,q7,q8,q9,q10,q11,q12,q13,q14,q15,q16,q17,q18)
// }