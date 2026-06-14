/**
 * ============================================================================
 *  CALCUL DU NOMBRE DE CELLULES
 * ============================================================================
 *  Auteur      : Fabrice Faucheux (https://faucheux.bzh)
 *  Projet      : FF Labs - Outils d'optimisation
 *  Rôle        : Logique d'initialisation, menus et points d'entrée.
 *  Version     : 1.0.0
 * ============================================================================
 */

/**
 * Détecte la langue de l'utilisateur pour le nom du menu.
 * @return {string} 'fr' ou 'en'
 */
function getLocale() {
  const locale = Session.getActiveUserLocale();
  return locale.startsWith('fr') ? 'fr' : 'en';
}

/**
 * Fonction appelée lors de l'installation du module complémentaire.
 * @param {Object} e - L'événement d'installation.
 */
function onInstall(e) {
  onOpen(e);
}

/**
 * Crée le menu personnalisé dans l'interface de Google Sheets.
 * @param {Object} e - L'événement d'ouverture.
 */
function onOpen(e) {
  const ui = SpreadsheetApp.getUi();
  const lang = getLocale();
  const menuName = lang === 'fr' ? "Ouvrir l'outil de cellules" : "Open Cell Usage Tool";
  
  ui.createAddonMenu()
      .addItem(menuName, 'showSidebar')
      .addToUi();
}

/**
 * Ouvre la barre latérale en évaluant les scriptlets dynamiques.
 */
function showSidebar() {
  const template = HtmlService.createTemplateFromFile('Sidebar');
  
  // Passage de la langue de l'utilisateur pour le bilinguisme automatique
  template.locale = Session.getActiveUserLocale();
  
  const title = getLocale() === 'fr' ? "Utilisation des cellules" : "Cell Usage";

  const html = template.evaluate()
      .setTitle(title)
      .setWidth(300);
      
  SpreadsheetApp.getUi().showSidebar(html);
}

/**
 * Récupère les noms de toutes les feuilles du fichier.
 * @return {Array<string>} Liste des noms de feuilles.
 */
function getSheetNames() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  return ss.getSheets().map(sheet => sheet.getName());
}

/**
 * Analyse une feuille spécifique pour déterminer le nombre de cellules allouées et remplies.
 * @param {string} sheetName - Nom de la feuille.
 * @return {Object} Objets avec gridCells et nonEmptyCells.
 */
function analyzeSingleSheet(sheetName) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName(sheetName);
  
  if (!sheet) return { gridCells: 0, nonEmptyCells: 0 };

  const maxRows = sheet.getMaxRows();
  const maxCols = sheet.getMaxColumns();
  const gridCells = maxRows * maxCols;
  
  let nonEmptyCells = 0;
  const dataRange = sheet.getDataRange();
  const values = dataRange.getValues();
  for (let r = 0; r < values.length; r++) {
    for (let c = 0; c < values[r].length; c++) {
      if (values[r][c] !== "") nonEmptyCells++;
    }
  }
  
  return { gridCells, nonEmptyCells };
}

/**
 * Nettoie toutes les feuilles en supprimant les lignes et colonnes vides au-delà des données réelles.
 * Gère les erreurs éventuelles via try/catch pour continuer sur les autres feuilles.
 * @return {Object} Résultats avec le nombre de cellules supprimées, erreurs et détails.
 */
function cleanAllSheets() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheets = ss.getSheets();
  let cellsDeleted = 0;
  let errors = [];
  let details = [];
  
  sheets.forEach(sheet => {
    const maxRows = sheet.getMaxRows();
    const maxCols = sheet.getMaxColumns();
    const lastRow = sheet.getLastRow() || 1; // Always keep at least 1 row/col
    const lastCol = sheet.getLastColumn() || 1;
    
    const lang = getLocale();
    const infoText = lang === 'fr' 
      ? `Allouées(${maxRows}x${maxCols}), données(${lastRow}x${lastCol})`
      : `Allocated(${maxRows}x${maxCols}), Data(${lastRow}x${lastCol})`;
      
    details.push(`${sheet.getName()}: ${infoText}`);
    
    // Delete empty rows at the bottom
    if (maxRows > lastRow) {
      const numRowsToDelete = maxRows - lastRow;
      try {
        sheet.deleteRows(lastRow + 1, numRowsToDelete);
        cellsDeleted += (numRowsToDelete * maxCols);
      } catch(e) {
        errors.push(`${lang === 'fr' ? 'Lignes sur' : 'Rows on'} "${sheet.getName()}": ${e.message}`);
      }
    }
    
    // Delete empty columns at the right
    const currentRows = sheet.getMaxRows();
    if (maxCols > lastCol) {
      const numColsToDelete = maxCols - lastCol;
      try {
        sheet.deleteColumns(lastCol + 1, numColsToDelete);
        cellsDeleted += (numColsToDelete * currentRows);
      } catch(e) {
        errors.push(`${lang === 'fr' ? 'Colonnes sur' : 'Columns on'} "${sheet.getName()}": ${e.message}`);
      }
    }
  });
  
  return { deleted: cellsDeleted, errors: errors, details: details };
}
