# DevOps : A demo of tools and best-practices

[![build](https://github.com/martinmouly/poc-devops-itt/actions/workflows/build.yml/badge.svg)](https://github.com/martinmouly/poc-devops-itt/actions/workflows/build.yml)  

[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=BPt-TEC-ITT_poc-devops-itt&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=BPt-TEC-ITT_poc-devops-itt)
[![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=BPt-TEC-ITT_poc-devops-itt&metric=duplicated_lines_density)](https://sonarcloud.io/summary/new_code?id=BPt-TEC-ITT_poc-devops-itt)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=BPt-TEC-ITT_poc-devops-itt&metric=vulnerabilities)](https://sonarcloud.io/summary/new_code?id=BPt-TEC-ITT_poc-devops-itt)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=BPt-TEC-ITT_poc-devops-itt&metric=bugs)](https://sonarcloud.io/summary/new_code?id=BPt-TEC-ITT_poc-devops-itt)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=BPt-TEC-ITT_poc-devops-itt&metric=coverage)](https://sonarcloud.io/summary/new_code?id=BPt-TEC-ITT_poc-devops-itt)

[![Quality gate](https://sonarcloud.io/api/project_badges/quality_gate?project=BPt-TEC-ITT_poc-devops-itt)](https://sonarcloud.io/summary/new_code?id=BPt-TEC-ITT_poc-devops-itt)

## Azure DevOps Color Quest 🌈🚀

🆘 Le Royaume Azure est en danger ! Bowser Bugs (🐢🔥😈) réclame une **nouvelle couleur pour son royaume, et il la veut pour hier** sinon le royaume champignon sera détruit ! En tant que **Super DevOps Bros**, utilisez GitHub, Terraform, et la magie d'Azure pour déployer la teinte parfaite en un temps record !

Créez une forteresse DevOps avec Terraform, codez des sorts avec GitHub, puis déployez la nouvelle version l'application avec la nouvelle couleur préférée de Bowser. Évitez les Goombas (🍄😠) de **dépoiement automatique**, sautez les Koopa Troopa (🐢🔴) de **Tests**, et libérez la Princesse (👑🍑) **Repository**. Les **Super DevOps Bros** sont le dernier espoir d'Azure pour un déploiement rapide et stylé ! 🌐🎨🚀

Bonne chance, héros DevOps ! 🍄✨

## Préparation du terrain

**I. 🚀Lancement du super pipeline d'initialisation :**

La première étape consiste à activer le super pipeline d'initialisation 🕹️ qui permettra de :

- Créer un registre de conteneur avec une première version de notre application 📦
- Déployer cette version dans les environnements de test et de production

1. **Rendez-vous sur le repository GitHub : [https://github.com/BPt-TEC-ITT/poc-devops-itt](https://github.com/BPt-TEC-ITT/poc-devops-itt), plus précisément sous l'onglet "Action".**
2. **Sélectionnez le workflow "Initialisation" et lancez le en cliquant sur "Run Workflow"**

![launch-init-workflow](./images/workflow-init-launch.png)
![init-workflow-steps](./images/init-steps.png)

L'initialisation peut prendre quelques minutes, vérifiez bien le succès du déploiement via les liens ci-dessous :

- **Environnement de test** (utilisez un réseau personnel, le réseau de CBX peut restreindre l'accès) : [http://test-poc-devops.eastus.azurecontainer.io:3000/](http://test-poc-devops.eastus.azurecontainer.io:3000/)
- **Environnement de production** (utilisez un réseau personnel, le réseau de CBX peut restreindre l'accès) : [http://prod-poc-devops.eastus.azurecontainer.io:3000/](http://prod-poc-devops.eastus.azurecontainer.io:3000/)

🚨 Le lancement du super pipeline d'initialisation a généré un nouveau mot de passe. Il est temps de mettre à jour le secret **REGISTRY_TOKEN**.

**II.🔍 Récupération du mot de passe sur Azure :**

**1. Allez sur le portail [Azure](https://portal.azure.com/#home)**

**2. Cherchez "Groupes de ressources".**
![find-ressource-groups](./images/search-ressource-groups.png)

**3. Ouvrez la ressource POCITT-Initialization.**
![select-registry](./images/select-container-registry.png)

**4. Dans "containerregistrypocitt", copiez le mot de passe depuis "Clés d'accès".**
![copy-password](./images/copy-pass.png)

**5. Retournez sur GitHub pour mettre à jour le secret REGISTRY_TOKEN.**
![update-registry-token](./images/update-registry-token.png)
![paste-registry-token](./images/paste-registry-token.png)

Les préparatifs sont maintenant terminé !

*Remarques :*

- *L'initialisation peut prendre jusqu'à 5 minutes. Vérifiez que toutes les ressources sont correctement créées sur Azure. Si l'initialisation échoue, supprimez les ressources concernées sur Azure et relancez le pipeline.*
- *Si la section security n'est pas visible => vous n'avez pas les droits suffisants. Assurez vous d'avoir les droits Admin ou Owner sur le reposiroty*

## #1. Début de la mission 🎯

Vous êtes face à un défi passionnant : changer la couleur de l'en-tête du site web selon les préférences de Bowser Bugs (🐢🔥😈) pour sauver le royaume champignon. Nous vous guiderons à travers ce défi en 5 étapes clés : **PLAN, CODE, BUILD, TEST, et DEPLOY**.

1. **PLAN 📝**

- Un ticket vous a été attribué sur le tableau de projet : [Tableau de projet](https://github.com/orgs/BPt-TEC-ITT/projects/1/views/1)
- **Prenez en main ce ticket et montrez votre engagement en le déplaçant dans la colonne 'En cours'**. C'est le début de notre voyage pour découvrir les outils de planification et suivi de projet.

2. **CODE, BUILD, TEST 🔧**

Maintenant, place à l'action. Le but est simple : modifier l'apparence du site.

- *Directement sur GitHub* : appliquez vos modifications directement dans le fichier de style.
  1. **Ouvrez et modifiez le fichier assets/css/index.css et modifier la ligne 71 (choisir une nouvelle couleur)**
  2. **Ouvrez une Pull Request,  ce qui lancera un pipeline de buid + test.**
  3. **Faire passer le ticket dans la colonne "Sent for PR" dans le dashboard.**
      - Si le pipeline fail, le bouton pour merger sera rouge (Ne pas merger)
      - Si le pipeline se déroule correctement, la branche peut être mergée.

- *En local* : (voir section *For local developement* en bas de page).

- Après vos modifications, créez une pull request pour lancer le processus de vérification. Si tout est correct, vous pouvez fusionner vos changements.

*Il est recommendé de :*

- *Faire les développement en local plutôt que sur github permet de ...*
- *Valider les pull requests par d'autres membres de l'équipe de développement avant de les merger*

3. **TEST : SCAN SONAR 🔍**
   - Pour illustrer l'importance du test, incluons délibérément un problème dans notre code. Ceci démontrera l'utilité d'un outil comme Sonar pour repérer les vulnérabilités et les bugs.
   - Créez une nouvelle branche et ajoutez du code problématique. La création d'une pull request déclenchera un scan Sonar, révélant les vulnérabilités.

4. **DEPLOY 🚀**
   - Déploiement en test puis en production : ces étapes finalisent le déploiement de notre application dans les différents environnements. Le déploiement se fait automatiquement après avoir fusionné une pull request sur la branche principale.

## #3 - Nettoyage final ✨

Avant de clore notre aventure, n'oubliez pas de nettoyer derrière vous en supprimant les ressources Azure pour éviter des frais inutiles.

Pour les développeurs souhaitant expérimenter localement, suivez les instructions pour démarrer le projet dans votre environnement local.

Merci d'avoir participé à cette aventure **PoC DevOps** 🚀
