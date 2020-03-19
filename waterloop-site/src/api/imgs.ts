/**
 * This is the client library for the /imgs endpoint on the server
 */

export interface Image {
  url: string,
  name: string,
  desc: string
}

interface GeeseNamesResponse {
  geese: PastGeeseData[]
}
interface PastGeeseData {
  name: string;
  filename: string;
  desc: string;
}

export const getGeese = async () => {
  // TODO Fix this up for PROD
  let baseUrl
  if (process.env.NODE_ENV === 'development') {
    baseUrl = 'http://localhost:3030'
  }

  let response: Image[] = []

  try{
    const geeseNamesData = await fetch(`${baseUrl}/pgimgs`);
    const geeseNamesJson: GeeseNamesResponse = await geeseNamesData.json();
    const geese = geeseNamesJson.geese;

    for (let gooseIndex = 0; gooseIndex < geese.length; ++gooseIndex) {
      response.push({
        url: `${baseUrl}/pgimgs/${geese[gooseIndex].filename}`,
        name: geese[gooseIndex].name,
        desc: geese[gooseIndex].desc
      })
    }
    return {geese: response}
  } catch(e) {
    console.warn(e)
    // console.warn(`${baseUrl}/imgs/goose1.png`)
  }
  return {geese: []}
}
