/* ================================================================
                  SEMAINE 04 - Quote of the Day

    C'est ICI qu'il faut rédiger ton code pour utiliser l'API
  -----------------------------------------------------------------
    A) A l'aide de la méthode fetch(), contactez cette API via cette url: https://type.fit/api/quotes, aidez vous de l'exemple donné dans la théorie. D'abord traitez la réponse en utilisant la méthode .json(), ensuite affichez le contenu de la réponse dans un console.log

=================================================================== */
console.log('SEM 04 - EXERCICE : QUOTE OF THE DAY');
console.log('    ');
// En cliquant sur la quote actuelle, là on accède à une nouvelle quote.

/* console.log(
  '1 | Méthode FETCH - Traitement et Affichage du résultat dans la Console.'
); */

// Pour pouvoir cliquer et afficher une nouvelle citation, il faudrait inclure tout le process de sélection et d'affichage dans une fonction qu'il faudra ensuite rappeler lorsqu'un click est détecté:

function selectQuote() {
  // Le résultat de la méthode RANDOM retourne la valeur de l'index de l'élémént à récupérer et à afficher
  let randomIndex = Math.floor(Math.random() * Math.floor(1642));

  // 1) La méthode FETCH contacte l'API par son URL
  fetch('https://type.fit/api/quotes')
    // 2) La Réponse obtenue est retournée au format JSON
    .then(response => {
      // La réponse est l'objet JSON, c'est un tableau.
      // On obtient donc la taille de ce tableau.
      return response.json();
    })

    // 3) Affichage de la Réponse dans la Console:
    .then(response => {
      // L'objet JSON est donc un tableau de 1643 citations.
      // Ses éléments vont de l'index 0 à l'index 1642.

      // 4) Création de la variable DATA qui reçoit l'élément d'index coorespondant au résultat de RANDOM
      let data = response[randomIndex];

      // 5) Chaque sous-élément est pointé séparément:
      //    a - Affichage dans la CONSOLE:

      console.log('CITATION : ');
      let quote = console.log(data.text); // Variable*

      console.log('AUTEUR : ');
      let author = console.log(data.author); // Variable*

      // (*) Variables qui stockent la citation sélectionnée et son auteur.
      console.log('    ');
      //    b - Affichage dans sur la page index.html

      // On pointe la balise ddont l'ID est  #quote
      // Et son contenu sera data.text, la valeur de la variable QUOTE.
      document.getElementById('quote').textContent = data.text;

      // On pointe la balise ddont l'ID est  #author
      // Et son contenu sera data.text, la valeur de la variable AUTHOR.
      document.getElementById('author').textContent = data.author;
    });
}
// Exécution de la fonction pour un premier affichage
selectQuote();

// C - Click et Changement de Citation
function zoneListener() {
  /* On pointe la zone d'affichage de la citation par son ID auquel on ajoute un Ecouteur d'évènement */
  // L'écouteur est une fonction avec deux paramètres:
  //   - l'évènement CLICK à écouter
  //   - la fonction anonyme qui permet de relancer la fonction de sélection de départ
  document.getElementById('zone').addEventListener('click', () => {
    // C'est ici qu'on va appeler la fonction pour induire la sélection d'une nouvelle citation.
    selectQuote();
  });
}
// Exécution de la fonction qui se déclenche au click; à savoir relancer la fonction de sélection d'une citation
zoneListener();
