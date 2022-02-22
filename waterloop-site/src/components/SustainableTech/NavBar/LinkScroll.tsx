// Moves user to the desired section of the webpage
function scrollDown(id : string){
  const element = document.getElementById(id);
  if (element === null){
    console.log('location doesnt exist');
    return;
  }
  element.scrollIntoView({ block: 'center',  behavior: 'smooth' });
}

export default scrollDown;