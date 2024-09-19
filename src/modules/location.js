/**
 * @file Location class
 * @module src/location
 * @author Frida Pedersén <fp222ni@student.lnu.se>
 */
/**
 * Represents a location class.
 *
 *
 */
export class Location {
  /**
   * Constructor.
   *
   * @param {string} longitude - Name of the species
   * @param {string} latitude - Habitat of species
   */
  constructor (longitude, latitude) {
    this.longitude = longitude
    this.latitude = latitude
  }

  /**
   * Gets the longitude of the location.
   *
   * @returns {string} - returns the longitude.
   */
  getLongitude () {
    return this.longitude
  }

  /**
   * Gets the latitude of the location.
   *
   * @returns {string} - returns the latitude.
   */
  getLatitude () {
    return this.latitude
  }
}
