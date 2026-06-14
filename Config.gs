/**
 * ============================================================================
 *  CALCUL DU NOMBRE DE CELLULES
 * ============================================================================
 *  Auteur      : Fabrice Faucheux (https://faucheux.bzh)
 *  Projet      : FF Labs - Outils d'optimisation
 *  Rôle        : Configuration globale du projet et système de journalisation.
 *  Version     : 1.0.0
 * ============================================================================
 */

const CONFIG = {
  PROJECT_NAME: "CalculNbCellule",
  VERSION: "1.0.0",
  CACHE_DURATION: 300,
  DEBUG_MODE: true,
  COLORS: {
    PRIMARY: "#0b57d0",
    SECONDARY: "#444746"
  }
};

/**
 * Système de journalisation unifié pour tous les projets FF Labs.
 * En mode DEBUG_MODE actif, les logs INFO sont également affichés.
 *
 * @param {string} message - Message de log.
 * @param {string} [level="INFO"] - Niveau de sévérité : INFO, WARN ou ERROR.
 */
function logEvent(message, level = "INFO") {
  const timestamp = new Date().toISOString();
  const logMessage = `[${timestamp}] [${CONFIG.PROJECT_NAME} v${CONFIG.VERSION}] [${level}] ${message}`;

  console.log(logMessage);

  if (level === "ERROR") {
    // Branch reserved for future error reporting
  }
}
