// Moves user to the desired section of the webpage
const scrollTo = (id: string) => {
  const element = document.getElementById(id);
  if (!(element === null)) {
    element.scrollIntoView({ block: 'center', behavior: 'smooth' });
  }
}

export default scrollTo;
