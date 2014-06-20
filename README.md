La boîte à histoires
====================

Ce projet a été réalisé dans le cadre de la 2e édition de [l'atelier "Objets connectés"](http://www.atelier-objets-connectes.org/atelier-2-equipes/), au [Pôle Pixel](http://www.polepixel.fr/) à Villeurbanne (France).

L'objectif de ces deux jours était de créer collectivement un dispositif dans la thématique "Objets connectés", à partir des éléments mis à disposition par les partenaires et participants (cartes Arduino, Lego Mindstrom, Fab Lab, 3DPad, etc).

Les participants de cette équipe étaient : Cyril Raymond, Samy Rabih, Philippe Jean Dit Pannel, Muriel Pont, Nicolas Fayard, Nicolas Baduraux

Principe global :
* Le dispositif a pour vocation d'être un support pour les parents pour raconter des histoires
* Un boitier autonome de projection (fictif pour la démonstration) projette plusieurs contenus vidéos (matérialisés par des vidéo projecteurs)
* Un plateau de jeu (avec des contacts physiques reliés à la MakeyMakey pour la démo) permet à l'enfant ou le parent d'interagir avec l'histoire

On utilisait ici la technologie des WebSockets pour envoyer des informations entre les différentes machines.

Technologies utilisées:
* Node.js, Socket.io (serveur/client) pour l'échange d'informations entre les différents écrans et l'hébergement des contenus (HTML/JS/CSS/images)
* Carte MakeyMakey pour la capture des évènements clavier (directs ou via le plateau de jeu)
* Impression 3D pour l'appareil (fictif) de projection
* Canettes d'Orangina (patiemment polies) en guise de "fils plats" pour assurer les contacts sous le plateau de jeu
