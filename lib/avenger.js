
export function getAllDataIds(data) {
  return data.map(a => {
    return {
      params: {
        id: a.show.id.toString()
      }
    }
  })
}

export  function  getAvengerData(id, data) {
  return data.find(d => d.show.id.toString() === id)
}
