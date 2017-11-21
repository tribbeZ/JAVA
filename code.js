function renderMovie(movie){
    document.getElementById("movietitle").innerText = movie.title;
    document.getElementById("description").innerText = movie.description;
    document.getElementById("picture").src = movie.image;
    for (let i = 0; i < movie.actors.length; i++) {
        let actors = movie.actors[i];
        document.getElementById("actors").innerHTML += "<li>" + actors + "</li>";
    }
}
  
  
  renderMovie(movieData);