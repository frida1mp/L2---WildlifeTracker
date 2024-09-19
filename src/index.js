// src/index.js

// Export all the relevant classes from different files
import { Observation } from './modules/observation'
import { Species } from './modules/species'
import { Location } from './modules/location'

// Export everything as part of a single object, so it can be imported easily
export default {
  Observation,
  Species,
  Location
}
