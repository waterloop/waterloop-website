// Get team name by subbarray index
const getKeyByValue = (map: any, searchValue: any) => {
  for (let [key, value] of map.entries()) {
    if (value === searchValue){
      return key
    }
  }
}

export default getKeyByValue
