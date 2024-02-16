// Evenement click sur "Button"
var btn_click=document.querySelector("#bouton");
btn_click.addEventListener('click',Handle_btn_click);

// creation de la fuction 
function Handle_btn_click(){
    // selection de la valeur de l'input
    var add_element=document.querySelector(".theinput");
    var valeursaisie=add_element.value;
    console.log(valeursaisie);
    // condition si element saisie vide afficher alert sinon continuer
    if (valeursaisie!==("")){
    let new_task=`<div class="task d-flex justify-content-between m-4">
    <div id="thenew-value">${valeursaisie}</div>
    <div class="two-bouton">
    <button class="btn btn-primary" type="submit" id="bouton-save" onclick="handle_savemodif()">Save</button>
        <button class="btn btn-primary" type="submit" id="bouton-modif" onclick="handle_modification()">Change</button>
        <button class="btn btn-primary" type="submit" id="bouton_remove" onclick="handle_remove_btn()">Remove</button>
    </div>
    </div>`;
    let newdiv=document.createElement('div')
    newdiv.innerHTML=new_task
document.querySelector("#input-task").appendChild(newdiv)}
else{
    alert("Merci de remplir avant de clicjer sur le bouton");
}
// enlever la valeur de l'input apres l'avoir mis dans l'HTML
add_element.value='';
};
// parametrage du bouton delete

function handle_remove_btn(){
    
var elementasuprimer= event.target.closest('.task');
elementasuprimer.remove();
}

// Parametrage de la modification 
function handle_modification(){
    var take_the_value=
    event.target.closest('.task').querySelector("#thenew-value").innerText;

    var the_input=document.querySelector(".theinput");
    the_input.value=take_the_value
}

function handle_savemodif(){

var valeur_to_save=document.querySelector(".theinput").value;
console.log(valeur_to_save);
if (valeur_to_save==("")){
    alert("merci de remplir la valeur!")
} else if (valeur_to_save==event.target.closest('.task').querySelector("#thenew-value").innerHTML){
    alert("merci de changer la valeur!")
}
else{ event.target.closest('.task').querySelector("#thenew-value").innerText=valeur_to_save
document.querySelector(".theinput").value="";
    }
    
}