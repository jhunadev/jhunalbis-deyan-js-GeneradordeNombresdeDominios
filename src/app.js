import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
    // Mantenemos nuestros arreglos originales
    let pronouns = ['the', 'our'];
    let adjs = ['great', 'big'];
    let nouns = ['jogger', 'racoon'];

    // Refactorización: Usamos for...of en lugar del clásico for(let i=0...)
    for (let p of pronouns) {
        for (let a of adjs) {
            for (let n of nouns) {
                let dominio = p + a + n + ".com";
                console.log(dominio);
            }
        }
    }
    
    console.log("Hello Rigo from the console!");
};
