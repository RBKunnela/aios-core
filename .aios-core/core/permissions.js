/**
 * Permission Mode - Manages permission badges for agent greetings
 *
 * This module provides permission-related functionality for displaying
 * appropriate badges in agent greetings based on the current permission mode.
 *
 * Note: This is a stub implementation. Full implementation pending.
 */

class PermissionMode {
  constructor() {
    this.mode = 'default';
    this.badge = '';
  }

  /**
   * Load permission mode from configuration
   * @returns {Promise<void>}
   */
  async load() {
    // Stub implementation - will be enhanced when permission system is implemented
    // For now, returns without setting any special mode
    return Promise.resolve();
  }

  /**
   * Get the badge string for the current permission mode
   * @returns {string} Badge string (empty if no special mode)
   */
  getBadge() {
    // Stub implementation - returns empty badge
    // Full implementation will return mode-specific badges
    return this.badge;
  }

  /**
   * Get the current permission mode
   * @returns {string} Current mode name
   */
  getMode() {
    return this.mode;
  }

  /**
   * Set the permission mode
   * @param {string} mode - Mode to set
   */
  setMode(mode) {
    this.mode = mode;
  }
}

module.exports = { PermissionMode };
