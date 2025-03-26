# Documento Mailer

Service d'envoi d'emails via API REST.

## Installation

1. Installation des dépendances :
```bash
npm install
```

2. Configuration :
   - Créez un fichier `.env` à la racine
   - Copiez le contenu du fichier `.env.example`
   - Remplissez les valeurs avec les informations fournies par l'administrateur

## Lancement

En développement :
```bash
npm run dev
```

En production :
```bash
npm start
```

## API

### Envoi d'email

**POST** `/send-email`

```json
{
    "to": "email@destinataire.com",
    "subject": "Sujet",
    "text": "Contenu texte",
    "html": "<p>Contenu HTML</p>"
}
```

## Support

Pour toute question ou problème, contactez l'administrateur système.

## Rôle de l'administrateur

L'administrateur système est responsable de :
1. Fournir les valeurs correctes pour le fichier `.env`
2. Configurer le compte email SMTP avec les paramètres appropriés
3. Gérer les accès et les permissions
4. Maintenir la sécurité du service

Pour obtenir les informations de configuration, contactez l'administrateur système.
