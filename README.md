# Horloge

Appli responsive qui affiche l'heure, la date et la météo, avec un paysage animé qui suit le temps (soleil, nuages, pluie, orage, neige, nuit).

## Utilisation

C'est un fichier unique : ouvre `index.html` dans un navigateur, ou héberge-le tel quel (GitHub Pages, Netlify, serveur perso).

- Météo réelle via [Open-Meteo](https://open-meteo.com/), sans clé d'API, mise à jour toutes les 15 minutes.
- Lieu par défaut : Grignols. Bouton de géolocalisation et recherche de ville dans les réglages.
- Téléphone : un écran à la fois avec barre de navigation. Tablette : deux colonnes, panneau de droite masquable. PC : cartes de détails en colonne.
- Mode plein écran : par bouton ou après inactivité (30 s, 1 min, 5 min ou jamais), avec écran maintenu allumé. Double-toucher pour quitter. En plein écran, une ligne d'infos change toutes les 30 secondes : ressenti et min/max, prochaine pluie, météo de demain. Au bout de 3 minutes, les animations se mettent en pause pour économiser la batterie ; elles reprennent dès qu’on touche l’écran. Les animations s’estompent en douceur avant la pause, un indicateur signale des données de plus de 30 min, et le rendu est plafonné à 30 images/s (moins de chauffe).
- Réglages : « Forcer l'ambiance » pour prévisualiser chaque météo.

La géolocalisation demande une page en `https` ou `localhost`.

## Installation sur téléphone ou PC

L'appli est installable (PWA) : menu du navigateur, « Installer l'application » ou « Ajouter à l'écran d'accueil ». Elle s'ouvre ensuite sans barre de navigateur, et garde en cache ses fichiers pour démarrer même hors connexion (la météo affichée est alors la dernière enregistrée).

## Mises à jour automatiques

Quand une nouvelle version est publiée, l'appli la détecte toute seule (au retour sur l'appli, au retour du réseau, puis toutes les 5 minutes), affiche « Mise à jour installée. Redémarrage… » et se recharge. Si le mode plein écran était actif, il est rétabli après le redémarrage. Il n'y a rien à faire au moment de publier : un simple commit sur `main` suffit.
