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

  function  affiche()
  {
    if (document.getElementById('montrer').innerHTML == 'montrer')
    {
      document.getElementById('montrer').innerHTML = 'cacher';
      document.getElementById('article1').style.display= 'block';
    }
    else
    {
      document.getElementById('montrer').innerHTML = 'montrer'
      document.getElementById('article1').style.display= 'none'
    }
  }