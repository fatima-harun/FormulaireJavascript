const myform = document.querySelector("form");

// Ajout d'un écouteur d'événement
myform.addEventListener("submit", (e) => {
    // Empêche le comportement par défaut de JavaScript, c'est-à-dire la soumission du formulaire
    e.preventDefault();

    // Récupère les valeurs des champs
    let monPrenom = document.getElementById('prenom');
    let monNom = document.getElementById('nom');
    let monemail = document.getElementById('email');
    let monMotDePasse = document.getElementById('password');

    // Définir les regex pour chaque champ
    let myregex = /^[a-zA-Z]+$/;  // Lettres et tirets uniquement pour prénom et nom
    let myregex1 = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  // Regex pour un email valide
    let myregex2 = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;  // Mot de passe avec lettres et chiffres, minimum 8 caractères

    let valeurPrenom = monPrenom.value;
    let valeurNom = monNom.value;
    let valeuremail = monemail.value.trim();
    let valeurMotDePasse = monMotDePasse.value.trim();

    // Réinitialiser les messages d'erreur
    let ErrorPrenom = document.getElementById('error');
    let ErrorNom = document.getElementById('error1');
    let Erroremail = document.getElementById('error2');
    let ErrorMotDePasse = document.getElementById('error3');

    ErrorPrenom.innerHTML = "";
    ErrorNom.innerHTML = "";
    Erroremail.innerHTML = "";
    ErrorMotDePasse.innerHTML = "";

    let formIsValid = true;  // Flag pour savoir si le formulaire est valide

    // Validation du prénom
    if (valeurPrenom === "") {
        ErrorPrenom.innerHTML = "Le champ prénom est vide";
        ErrorPrenom.style.color = 'white';
        formIsValid = false;
    } else if (!myregex.test(valeurPrenom)) {
        ErrorPrenom.innerHTML = "Le champ prénom doit comporter des lettres et des tirets uniquement";
        ErrorPrenom.style.color = 'white';
        formIsValid = false;
    } else if (valeurPrenom.length < 3 || valeurPrenom.length > 15) {
        ErrorPrenom.innerHTML = "Le prénom doit être compris entre 3 et 15 caractères";
        ErrorPrenom.style.color = 'white';
        formIsValid = false;
    }

    // Validation du nom
    if (valeurNom === "") {
        ErrorNom.innerHTML = "Le champ nom est vide";
        ErrorNom.style.color = 'white';
        formIsValid = false;
    } else if (!myregex.test(valeurNom)) {
        ErrorNom.innerHTML = "Le champ nom doit comporter des lettres et des tirets uniquement";
        ErrorNom.style.color = 'white';
        formIsValid = false;
    } else if (valeurNom.length < 3 || valeurNom.length > 15) {
        ErrorNom.innerHTML = "Le nom doit être compris entre 3 et 15 caractères";
        ErrorNom.style.color = 'white';
        formIsValid = false;
    }

    // Validation de l'email
    if (valeuremail === "") {
        Erroremail.innerHTML = "Le champ email est vide";
        Erroremail.style.color = 'white';
        formIsValid = false;
    } else if (!myregex1.test(valeuremail)) {
        Erroremail.innerHTML = "Le champ email n'est pas un email valide";
        Erroremail.style.color = 'white';
        formIsValid = false;
    }

    // Validation du mot de passe
    if (valeurMotDePasse === "") {
        ErrorMotDePasse.innerHTML = "Le champ mot de passe est vide";
        ErrorMotDePasse.style.color = 'white';
        formIsValid = false;
    } else if (!myregex2.test(valeurMotDePasse)) {
        ErrorMotDePasse.innerHTML = "Le mot de passe doit contenir au moins 8 caractères, des lettres et des chiffres";
        ErrorMotDePasse.style.color = 'white';
        formIsValid = false;
    }

    if (formIsValid){
        document.getElementById('myForm').style.display='none';
        document.getElementById('success').style.display='block';
    }

    
});