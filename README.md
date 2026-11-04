# Horloge

Appli responsive qui affiche l'heure, la date et la météo, avec un paysage animé qui suit le temps (soleil, nuages, pluie, orage, neige, nuit).

## Utilisation

C'est un fichier unique : ouvre `index.html` dans un navigateur, ou héberge-le tel quel (GitHub Pages, Netlify, serveur perso).

- Météo réelle via [Open-Meteo](https://open-meteo.com/), sans clé d'API, mise à jour toutes les 15 minutes.
- Lieu par défaut : Grignols. Bouton de géolocalisation et recherche de ville dans les réglages.
- Téléphone : un écran à la fois avec barre de navigation. Tablette : deux colonnes, panneau de droite masquable. PC : cartes de détails en colonne.
- Mode plein écran : par bouton ou après inactivité (30 s, 1 min, 5 min ou jamais), avec écran maintenu allumé.
- Réglages : « Forcer l'ambiance » pour prévisualiser chaque météo.

La géolocalisation demande une page en `https` ou `localhost`.
