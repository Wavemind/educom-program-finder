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
