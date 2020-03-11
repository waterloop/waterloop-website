/**
 * This is the client library for the /imgs endpoint on the server
 */

export const getGeese = async () => {
  // TODO Fix this up for PROD
  let baseUrl
  if (process.env.NODE_ENV === 'development') {
    baseUrl = 'http://localhost:3030'
  }
  try{
    const goose1 = await fetch(`${baseUrl}/pgimgs/goose1.png`);
    const goose2 = await fetch(`${baseUrl}/pgimgs/goose2.png`);
    const goosex = await fetch(`${baseUrl}/pgimgs/goosex.png`);
    return {goose1: await getImageUrl(goose1), goose2: await getImageUrl(goose2), goosex: await getImageUrl(goosex)}
  } catch(e) {
    //console.warn(e)
    console.warn(`${baseUrl}/imgs/goose1.png`)
  }
  return {goose1: '', goose2: '', goosex: ''}
}

const getImageUrl = async (response: Response) => {
  const blob = await response.blob()
  return URL.createObjectURL(blob)
}
