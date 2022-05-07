// Moves user to the desired section of the webpage
const scrollTo = (id: string) => {
  const yOffset = -64; // We want to offset by the height of the navbar: 64px
  const element = document.getElementById(id);
  if (!(element === null)) {
    const y =
      element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
};

export default scrollTo;
