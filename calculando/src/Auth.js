export const IsAuthenticated = () => {

  if(localStorage.getItem('user')) {
    return true; 
  }else {
    return false;
  };
}
