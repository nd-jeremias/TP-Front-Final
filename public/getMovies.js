const apiKey = "13ee2b3b1810d881d34a3d2f4351f448"
const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=es-ES&page=1`;
const apiUrlDiscover = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=es-ES&page=1&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200`
const cartelera = document.getElementById('cartelera');
const aclamadas = document.getElementById('aclamadas');

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

fetch(apiUrlDiscover)
.then(res => res.json())
 .then(data => {
  const dataSliced = data.results.slice([4], [8])
  console.log(dataSliced)
    dataSliced.forEach(element => {
      const div = document.createElement('div');
      div.innerHTML = `
        <img  class="card-img-top p-1" src="https://image.tmdb.org/t/p/w500${element.poster_path}" alt="${element.original_title}" />
        <div class="card-body">
        <p class="card-text" style="max-height:200px; overflow:auto">${element.overview}</p>
      `;
      aclamadas.appendChild(div);
      div.setAttribute("class", "card m-1");
      div.setAttribute("style", "width: 18rem;");
    })
});