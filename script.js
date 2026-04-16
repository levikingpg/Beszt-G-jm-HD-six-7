var aKisCsavo = document.getElementById("babu");
var azAkadaly = document.getElementById("akadaly");
var pontszamSzamlalo = 0;

function ugras() {
    
    if (aKisCsavo.classList == "ugralas") { return; }
    
    aKisCsavo.classList.add("ugralas");
    
    setTimeout(function() {
        aKisCsavo.classList.remove("ugralas");
    }, 300);
}

var folyamatosEllenorzes = setInterval(function() {
    
    let csavoTeteje = parseInt(window.getComputedStyle(aKisCsavo).getPropertyValue("top"));
    let akadalyBalSzele = parseInt(window.getComputedStyle(azAkadaly).getPropertyValue("left"));

    
    if (akadalyBalSzele < 20 && akadalyBalSzele > -20 && csavoTeteje >= 130) {
        azAkadaly.style.animation = "none";
        alert("Vége a Beszt Géjm HD SIx 7 - nek. Pontszámod: " + Math.floor(pontszamSzamlalo / 100));
        
        pontszamSzamlalo = 0;
        azAkadaly.style.animation = "akadaly-mozgas 1s infinite linear";
    } else {
        
        pontszamSzamlalo++;
        document.getElementById("pontszamMezo").innerHTML = Math.floor(pontszamSzamlalo / 100);
    }
}, 10);
