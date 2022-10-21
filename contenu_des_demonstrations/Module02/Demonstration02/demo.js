// L'objet de type *console* donne accès à la console de débogage du navigateur. Les spécificités de fonctionnement varient d'un navigateur à l'autre, mais il y a tout de même un ensemble de fonctionnalités qui sont fournies de base.
Window.console.log("Parfait pour débugguer mais ne pas oublier le debuggueur lors d'algos complexes")

// La propriété en lecture seule Window.*history* renvoie une référence à l'objet History, qui offre la possibilité de manipuler l'historique de session du navigateur (pages visitées dans l'onglet ou le cadre dans lesquels la page courante est chargée).
Window.history.back()     // similaire au bouton de retour
history.go(-1)     // similaire à history.back();

// L'objet de type *Document* représente n'importe quelle page web chargée dans le navigateur et sert de point d'entrée pour accéder au contenu de la page qui est formé par l'arbre du DOM.
console.log(Window.document)
console.log(document)

// *Location* représente l'emplacement de la page en cours.
console.log(Window.location)

