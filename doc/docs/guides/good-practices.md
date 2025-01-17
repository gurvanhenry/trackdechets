---
title : "Consommer l'api - Bonnes pratiques"
---

L'api de Trackdéchets étant ouverte à tous les acteurs du déchet, le volume de requêtes absorbées est devenu très conséquent. 
Afin de garantir et faciliter un accès équitable à tous les SI connectés, il vous est demandé d'appliquer au mieux certaines règles pour limiter la charge sur l'api sans pour autant restreindre les requêtes nécessaires.
Pour limiter les abus nous pourrions être amenés à mettre en place des rate limits spécifiques dans les semaines à venir.

Si certains consommateurs de l'api effectuent déjà l'interrogation de l'api de manière efficace et intelligente, d'autres acteurs gagneraient à optimiser leurs processus.

Nos statistiques nous montrent que la requête `form` est de loin la plus utilisée.
Il est légitime pour tout SI de requêter l'api Trackdéchets afin de prendre en compte toute évolution des bsds dont il a la charge.
En revanche, effectuer des milliers de requêtes `form` pour suivre chaque bordereau, et répéter ces requêtes en continu, est inefficace et couteux en ressources, pour Trackdéchets comme pour le SI.

## Comment procéder ?

### Utiliser la query forms

La requête `forms` dispose d'un paramètre updatedAfter. Vous pouvez ainsi vérifier par batch lesquels de vos bsdd ont été mis à jour par intervalle de temps. À la suite de quoi, vous pouvez soit:
- récupérer les ids des bsds mis à jour, puis requêter individuellement ces bsds et répercuter les changements dans votre SI
- récupérer le json complet des bsds dans la requête `forms` pour exploiter directement le résultat

Dans les 2 cas, vous ne requêterez que les bordereaux mis à jour, ce qui constituera un gain significatif pour votre SI comme pour Trackdéchets.
Cette méthode est applicable aux autres bordereaux en utilisant bsdas, bsdasris, bsffs, bsvhus.

### Utiliser la query formsLifecycle.

La query `formsLifecycle` renvoie les changements de statut des bordereaux de l'entreprise sélectionnée. Elle peut s'utiliser dans le même esprit que la requête `forms`, seuls les bsds dont le statut a changé dans l'intervalle de temps seront retournés. 
Cette requête n'existe aujourd'hui que pour les bsdds.

### Utiliser les webhooks (à venir).

Dans les semaines qui viennent, nous allons implémenter un système de webhooks pour notifier les SI qui le souhaitent des changements survenus sur leur jeu de bsds. Chaque SI abonné pourra ainsi recevoir sur une url dédiée la liste des bsds mis à jour en temps quasi-réél.