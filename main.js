
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

//  sidemenu
var sidemenu=document.getElementById("sidemenu");
function openmenu(){
    sidemenu.style.right="0";

}
function closemenu(){
    sidemenu.style.right="-200px";

}

 
//     const scriptURL ="https://script.google.com/macros/s/AKfycbwSjbepJo4vUIKK9V4PhsecFQaATA7Wu9IIvlAZvhAx4_dENpj1-S-ddAANAhPxrSds/exec"
//   const form = document.forms['submit-to-google-sheet']
//  const msg=document.getElementById("msg")
//   form.addEventListener('submit', e => {
//     e.preventDefault()
//     fetch(scriptURL, { method: 'POST', body: new FormData(form)})
//       .then(response =>{msg.innerHTML="Message sent successfully"})
//       setTimeout(function(){
//         msg,innerHTML=""
//       },5000)
//       form.reset()
//       .catch(error => console.error('Error!', error.message))
//   })
 const scriptURL ="https://script.google.com/macros/s/AKfycbxCOcmi1RiAulVEvy-5Ej7TtiZ83ib4QpSePRStqK0T9LumlDi9jFdqnuD8tI_E08Ov/exec"
  const form = document.forms["submit-to-google-sheet"]
  const msg=document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response =>{
        msg.innerHTML="Message sent successfully"
       setTimeout(function(){
        msg.innerHTML=""
       },5000)
       form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })