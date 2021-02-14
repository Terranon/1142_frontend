var tabEntree = [{"nom": "Choisir...", "prixNom": "0$", "prix": 0,    "img": "./images/vide.jpg"},
				 {"nom": "Escargot",   "prixNom": "5,95$", 			"prix": 5.95, "img": "./images/escargot.jpg"},
				 {"nom": "Salade", 	   "prixNom": "4,95$", 			"prix": 4.95, "img": "./images/salade.jpg"}];

var tabRepas = [{"nom": "Choisir...", "prixNom": "0$", "prix": 0,    "img": "images/vide.jpg"},
				{"nom": "Spaghetti",  "prixNom": "8,95$", 		   "prix": 8.95, "img": "./images/spaghetti.jpg"},
				{"nom": "Lasagne",	  "prixNom": "9,95$", 		   "prix": 9.95, "img": "./images/lasagne.jpg"}];
				
var prixEntree = 0.0;
var prixRepas = 0.0;
var sousTotal = 0.0;
var taxes = 0.0;
var Total = 0.0;

function charger() {
	var selEntree = document.querySelector('#Entree');
	for(unEntree of tabEntree) {
		selEntree.options[selEntree.options.length] = new Option(unEntree.nom);
	}
	
	var selRepas = document.querySelector('#Repas');
	for(unRepas of tabRepas) {
		selRepas.options[selRepas.options.length] = new Option(unRepas.nom);
	}
}

function calcTotal() {
	sousTotal = prixEntree + prixRepas;
	taxes = sousTotal * 0.15;
	total = sousTotal + taxes;
	
	document.getElementById('st').innerHTML="<b>" + "Sous-total: " + sousTotal.toFixed(2) + "$" + "</b>";
	document.getElementById('tx').innerHTML="<b>" + "Taxes: " + taxes.toFixed(2) + "$" + "</b>";
	document.getElementById('tt').innerHTML="<b>" + "Total: " + total.toFixed(2) + "$" + "</b>";
}

function infosChoixEntree(selEntree) {
	var posEntree = selEntree.selectedIndex;
	var entreeChoisi = tabEntree[posEntree];
	
	document.getElementById('prixEntree').innerHTML=entreeChoisi.prixNom;
	document.getElementById('imgEntree').src = entreeChoisi.img;
	
	prixEntree = entreeChoisi.prix;
	
	calcTotal();
}

function infosChoixRepas(selRepas) {
	var posRepas = selRepas.selectedIndex;
	var repasChoisi = tabRepas[posRepas];
	
	document.getElementById('prixRepas').innerHTML=repasChoisi.prixNom;
	document.getElementById('imgRepas').src = repasChoisi.img;
	
	prixRepas = repasChoisi.prix;
	calcTotal();
}

