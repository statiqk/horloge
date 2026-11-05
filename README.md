# Horloge

Appli responsive qui affiche l'heure, la date et la météo, avec un paysage animé qui suit le temps (soleil, nuages, pluie, orage, neige, nuit).

## Utilisation

C'est un fichier unique : ouvre `index.html` dans un navigateur, ou héberge-le tel quel (GitHub Pages, Netlify, serveur perso).

- Météo réelle via [Open-Meteo](https://open-meteo.com/), sans clé d'API, mise à jour toutes les 15 minutes.
- Lieu par défaut : Grignols. Bouton de géolocalisation et recherche de ville dans les réglages.
- Téléphone : un écran à la fois avec barre de navigation. Tablette : deux colonnes, panneau de droite masquable. PC : cartes de détails en colonne.
- Mode plein écran : par bouton ou après inactivité (30 s, 1 min, 5 min ou jamais), avec écran maintenu allumé. Double-toucher pour quitter. En plein écran, une ligne d'infos change toutes les 30 secondes : ressenti et min/max, prochaine pluie, météo de demain. Au bout de 3 minutes, les animations se mettent en pause pour économiser la batterie ; elles reprennent dès qu’on touche l’écran. Les animations s’estompent en douceur avant la pause, un indicateur signale des données de plus de 30 min, et le rendu est plafonné à 30 images/s (moins de chauffe). L’écran reste allumé en plein écran : le verrou est redemandé automatiquement s’il saute, avec une vidéo invisible en secours si le navigateur ne le gère pas. Après la pause, la veille douce assombrit l’écran (réglable ou désactivable dans les réglages) et décale l’heure de quelques pixels chaque minute pour éviter le marquage des écrans OLED.
- Réglages : « Forcer l'ambiance » pour prévisualiser chaque météo.

La géolocalisation demande une page en `https` ou `localhost`.

## Installation sur téléphone ou PC

L'appli est installable (PWA) : menu du navigateur, « Installer l'application » ou « Ajouter à l'écran d'accueil ». Elle s'ouvre ensuite sans barre de navigateur, et garde en cache ses fichiers pour démarrer même hors connexion (la météo affichée est alors la dernière enregistrée).

## Mises à jour automatiques

Quand une nouvelle version est publiée, l'appli la détecte toute seule (au retour sur l'appli, au retour du réseau, puis toutes les 5 minutes), affiche « Mise à jour installée. Redémarrage… » et se recharge. Si le mode plein écran était actif, il est rétabli après le redémarrage. Il n'y a rien à faire au moment de publier : un simple commit sur `main` suffit.

## Autonomie et vie privée

- La police (Bricolage Grotesque) et les icônes sont hébergées dans le dépôt (`fonts/`) : aucune requête vers Google ou un CDN, et l'appli s'affiche correctement hors connexion.
- Les coordonnées de la géolocalisation sont arrondies à 2 décimales (environ 1 km) avant tout envoi à Open-Meteo ou au service de nom de ville.
- Le service worker ne met en cache que les réponses valides.

## Actualisation et pluie

- Toucher « mises à jour à … » (onglet Détails) force l'actualisation. Un retour sur l'appli après plus de 2 minutes en déclenche une aussi.
- « Pluie dans X min » / « Pluie en ce moment · fin dans X min » est calculé avec les données par 15 minutes d'Open-Meteo. Il s'affiche sur l'accueil et dans la phrase tournante du plein écran.

## Mode nuit, air, lancement direct

- **Mode nuit** : en plein écran, entre le coucher et le lever du soleil, l'écran s'assombrit (réglable ou désactivable dans les réglages).
- **Qualité de l'air et pollens** : deux tuiles dans l'onglet Détails (indice européen, PM2,5 / PM10, pollens en saison), via Open-Meteo.
- **Lancement en plein écran** : réglage « Au lancement de l'appli », ou lien `https://statiqk.github.io/horloge/?fs=1`. Sur Android, un appui long sur l'icône propose aussi « Plein écran ».

## Soleil, lune et graphique de pluie

- La phrase tournante du plein écran indique aussi « Coucher du soleil dans 2 h 58 » (ou le lever la nuit) et, la nuit, la phase de la lune avec son éclairement.
- Quand de la pluie est en cours ou attendue, l'accueil affiche un petit graphique des 2 prochaines heures (un bâton par quart d'heure).

## Animations qui suivent les données réelles

- **Soleil et lune** : ils se déplacent selon l'heure réelle (lever, midi, coucher). Le ciel prend des teintes d'aube, d'heure dorée, de coucher et d'heure bleue. La lune est dessinée avec sa vraie phase.
- **Vent** : la vitesse des nuages, l'inclinaison de la pluie, la dérive de la neige et le balancement des arbres suivent le vent mesuré.
- **Pluie** : la densité et la vitesse des gouttes dépendent de l'intensité prévue (bruine, pluie, averse).
- **Saisons** : feuilles d'automne ou pétales de printemps portés par le vent, par temps clair ou nuageux.
- **Température** : voile de chaleur au-dessus de 30 °C, givre sur les cartes en dessous de 0 °C.
- **Transitions** : fondu progressif du ciel, des nuages et du paysage quand la météo change.

## Paysage

- Une chaîne de montagnes lointaine, plus pâle, s'ajoute derrière les sommets, avec une ligne de neige sur les plus hauts de novembre à mars.
- Des arbres feuillus changent de couleur avec les saisons (blanc de floraison en avril, vert l'été, orange à l'automne, dégarnis l'hiver) et s'assombrissent selon la météo.
- Le sol brille après la pluie et le brouillard suit la visibilité réelle mesurée (brume dense à moins de 500 m).
