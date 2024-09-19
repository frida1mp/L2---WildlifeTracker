/**
 * @file Species class
 * @module src/species
 * @author Frida Pedersén <fp222ni@student.lnu.se>
 */
/**
 * Represents a species class.
 *
 *
 */
export class Species {
  /**
   * Constructor.
   *
   * @param {string} speciesName - Name of the species
   * @param {string} habitat - Habitat of species
   */
  constructor (speciesName, habitat) {
    this.name = speciesName
    this.habitat = habitat
  }

  /**
   * Gets the species.
   *
   * @returns {string} - returns the name as string.
   */
  getSpeciesName () {
    return this.name
  }

  /**
   * Gets the species.
   *
   * @returns {string} - returns the habitat as string.
   */
  getHabitat () {
    return this.habitat
  }
}
