/**
 * Formats input data if it is in a specific format: {'key': { 'value': value }}.
 * Removes properties with undefined values and maps over any arrays of values to ensure they are properly formatted.
 * @param {object} data - The data to be formatted
 * @returns {object} - Returns a new object that has been formatted according to the above specifications
 */
export default function (data) {
  const formattedData = {}

  Object.entries(data).forEach(([key, value]) => {
    if (value === undefined) {
      formattedData[key] = null
    } else if (Array.isArray(value)) {
      formattedData[key] = value.map(entry => entry.value || null)
    } else {
      formattedData[key] = value.value
    }
  })
  return formattedData
}
