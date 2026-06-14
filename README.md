# 📦 CalculNbCellule

[🇫🇷 Version Française](#-version-française) | [🇬🇧 English Version](#-english-version)

---

## 🇫🇷 Version Française

> Outil d'analyse et d'optimisation de l'utilisation des cellules Google Sheets. Suivez votre consommation et purgez les grilles inutilisées pour éviter les limites de Google.

<a href="https://developers.google.com/apps-script"><img src="https://img.shields.io/badge/Google%20Apps%20Script-4285F4?style=for-the-badge&logo=google-apps-script&logoColor=white" alt="Google Apps Script"></a>
<a href="LICENSE"><img src="https://img.shields.io/badge/License-MIT-indigo?style=for-the-badge" alt="License: MIT"></a>
<a href="README.md"><img src="https://img.shields.io/badge/Status-Production-brightgreen?style=for-the-badge" alt="Status: Production"></a>

---

### ✨ Fonctionnalités clés

- 📊 **Analyse globale et détaillée** : Visualisation du nombre total de cellules allouées sur le fichier et détail par feuille.
- ⚡ **Nettoyage intelligent** : Suppression automatique des lignes et colonnes vides superflues qui alourdissent le document (jusqu'à la dernière cellule contenant des données).
- 🛠️ **Respect des limites Google** : Graphique d'utilisation face à la limite de 10 millions de cellules Google Sheets.
- 🎨 **Interface intégrée** : Barre latérale élégante inspirée de la charte officielle de Google Workspace (Material Design 3).
- 🌐 **Bilinguisme intégral** : Interface disponible nativement en Français et en Anglais.

---

### 🚀 Installation & configuration

#### 1. Intégration dans votre script
Copiez simplement l'ensemble des fichiers `.gs` et `.html` de ce dépôt dans un nouveau projet Google Apps Script lié à votre Google Sheets.

#### 2. Déclaration des scopes requis (`appsscript.json`)
Assurez-vous que votre manifeste contient les autorisations minimales nécessaires :
```json
{
  "oauthScopes": [
    "https://www.googleapis.com/auth/spreadsheets",
    "https://www.googleapis.com/auth/script.container.ui"
  ]
}
```

---

### 📖 Exemples d'utilisation

Une fois installé, rechargez votre fichier Google Sheets. Un menu **Ouvrir l'outil de cellules** apparaîtra (dans un menu additionnel selon la langue).
Cliquez sur le bouton pour ouvrir la barre latérale, puis lancez une analyse.

---

### 👤 Auteur

- **[Fabrice Faucheux](https://faucheux.bzh)** (FF Labs) — [GitHub](https://github.com/FabriceFx)

---

### 📄 Licence

Ce projet est sous licence MIT.

---

## 🇬🇧 English Version

> Google Sheets cell usage analysis and optimization tool. Track your consumption and purge unused grids to avoid hitting Google's limits.

<a href="https://developers.google.com/apps-script"><img src="https://img.shields.io/badge/Google%20Apps%20Script-4285F4?style=for-the-badge&logo=google-apps-script&logoColor=white" alt="Google Apps Script"></a>
<a href="LICENSE"><img src="https://img.shields.io/badge/License-MIT-indigo?style=for-the-badge" alt="License: MIT"></a>
<a href="README.md"><img src="https://img.shields.io/badge/Status-Production-brightgreen?style=for-the-badge" alt="Status: Production"></a>

---

### ✨ Key Features

- 📊 **Global and detailed analysis**: Visualization of the total number of allocated cells in the file and details per sheet.
- ⚡ **Smart cleaning**: Automatic deletion of unnecessary empty rows and columns that weigh down the document (up to the last cell containing data).
- 🛠️ **Respect of Google limits**: Usage graph against the Google Sheets limit of 10 million cells.
- 🎨 **Integrated Sidebar**: Elegant user interface inspired by the official Google Workspace design guidelines (Material Design 3).
- 🌐 **Full Bilingual Support**: Interface natively available in French and English.

---

### 🚀 Installation & Setup

#### 1. Integration in your script
Simply copy all `.gs` and `.html` files from this repository into a new Google Apps Script project bound to your Google Sheets.

#### 2. Declaring OAuth Scopes (`appsscript.json`)
Ensure your Apps Script manifest contains the required minimum permissions:
```json
{
  "oauthScopes": [
    "https://www.googleapis.com/auth/spreadsheets",
    "https://www.googleapis.com/auth/script.container.ui"
  ]
}
```

---

### 📖 Usage Examples

Once installed, reload your Google Sheets file. A menu **Open Cell Usage Tool** will appear (in an add-on menu depending on the language).
Click the button to open the sidebar, then run an analysis.

---

### 👤 Author

- **[Fabrice Faucheux](https://faucheux.bzh)** (FF Labs) — [GitHub](https://github.com/FabriceFx)

---

### 📄 License

This project is licensed under the MIT License.

---
<p align="center"><a href="https://faucheux.bzh" target="_blank" style="color: inherit; text-decoration: none;">&lt;&gt; par Fabrice Faucheux</a></p>
