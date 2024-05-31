const apiKey = "fc73ab4b8ee68ca19bbd3c13c8d98110";
const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=es-ES&page=1`;
const cartelera = document.getElementById('cartelera');

fetch(apiUrl)
.then(res => res.json())
.then(data => {
  data.results.forEach(element => {
    const div = document.createElement('div');
    div.innerHTML = `
      <img  class="card-img-top p-1" src="https://image.tmdb.org/t/p/w500${element.poster_path}" alt="${element.original_title}" />
      <div class="card-body">
      <p class="card-text" style="max-height:200px; overflow:auto">${element.overview}</p>
    `;
    cartelera.appendChild(div);
    div.setAttribute("class", "card m-1");
    div.setAttribute("style", "width: 18rem;");
  })
});