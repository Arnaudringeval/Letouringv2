function  cache()
  {
    if (document.getElementById('changer').innerHTML == 'vidéo')
    {
      document.getElementById('changer').innerHTML = 'texte';
      document.getElementById('intro').style.display= 'none';
    }
    else
    {
      document.getElementById('changer').innerHTML = 'vidéo'
      document.getElementById('intro').style.display= 'block'
    }
  }