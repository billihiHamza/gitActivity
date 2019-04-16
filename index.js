/* 
Activité 1
*/

// Liste des liens Web . Un lien est défini par :
// - son titre
// - son URL
// - son auteur (la personne qui l'a publié)
var listeLiens = [
    {
        titre: "So Foot",
        url: "http://sofoot.com",
        auteur: "yann.usaille"
    },
    {
        titre: "Guide d'autodéfense numérique",
        url: "http://guide.boum.org",
        auteur: "paulochon"
    },
    {
        titre: "L'encyclopédie en ligne Wikipedia",
        url: "http://Wikipedia.org",
        auteur: "annie.zette"
    }
];



function addToDom(){
	
	
	listeLiens.forEach(lien =>{
		// création du nouveau paragraphe
		var p = document.createElement("p");
		// création du lien
		var a = document.createElement("a");
		a.style.color = "#428bca";
		a.setAttribute("href",lien.url);
		a.setAttribute("target","_blank");
		// décorer le paragraphe 
		p.style.backgroundColor = "white";
		p.style.height="80px";
		// ajouter du texte au lien
		a.appendChild(document.createTextNode(lien.titre));
		// ajouter le lien au paragraphe
		p.appendChild(a);
		// remplir le paragraphe
		p.appendChild(document.createTextNode("  "+lien.url));
		p.appendChild(document.createElement("br"));
		p.appendChild(document.createTextNode("Ajouté par "+lien.auteur));
		// ajouter tout ça à notre page
		document.getElementById('contenu').appendChild(p);
	});
		
	
	
}
addToDom();