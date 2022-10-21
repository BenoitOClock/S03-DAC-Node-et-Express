/*************************************/
// Démonstration non terminée
/*************************************/

//La méthode getElementById() de Document renvoie un objet Element représentant l'élément dont la propriété id correspond à la chaîne de caractères spécifiée. Étant donné que les ID d'élément doivent être uniques, s'ils sont spécifiés, ils constituent un moyen utile d'accéder rapidement à un élément spécifique.
document.getElementById("idTest01");

//La méthode querySelector() renvoie le premier Elementdans le document qui correspond au sélecteur spécifié ou au groupe de sélecteurs. Si aucune correspondance n'est trouvée, nullest retourné.
document.querySelector();

//La méthode Element.getElementsByTagName() retourne une liste des éléments portant le nom de balise donné. La recherche porte sur le sous-arbre de l'élément spécifié, à l'exception de cet élément lui-même. La liste retournée est live, c'est à dire qu'elle se met à jour automatiquement à chaque changement de l'arbre DOM. Par conséquent, il n'est pas nécessaire d'appeller plusieurs fois Element.getElementsByTagName() avec le même élément et les mêmes arguments.
document.getElementsByTagName("div");

//La méthode querySelectorAll() de Element renvoie une NodeList statique représentant une liste des éléments du document qui correspondent au groupe de sélecteurs spécifiés.
document.querySelectorAll();



