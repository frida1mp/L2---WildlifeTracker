/**
 * @file Observation class
 * @module src/Observation
 * @author Frida Pedersén <fp222ni@student.lnu.se>
 */

import { Location } from './location'
import { Species } from './species'

/**
 * Represents a observation class.
 *
 *
 */
export class Observation {
  /**
   * Constructor.
   *
   * @param {Species} species - Species that has been observed.
   * @param {Location} location - Location of observation.
   * @param {Date} date - Date of the obeservation.
   */
  constructor (species, location, date) {
    this.species = species
    this.location = location
    this.date = date
  }

  /**
   * Gets the species.
   *
   * @returns {Species} - returns the species object.
   */
  getSpecies () {
    return this.species
  }

  /**
   * Gets the species.
   *
   * @returns {Location} - returns the location object.
   */
  getLocation () {
    return this.location
  }

  /**
   * Gets the species.
   *
   * @returns {Date} - returns the date.
   */
  getDate () {
    return this.date
  }

  /**
   * Converts the observation data into JSON.
   *
   * @returns {object} - the observation data in JSON.
   */
  toObject () {
    return {
      species: this.species.getSpeciesName(),
      habitat: this.species.getHabitat(),
      location: {
        longitude: this.location.getLongitude(),
        latitude: this.location.getLatitude()
      },
      date: this.date.toISOString()
    }
  }
}
