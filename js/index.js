const app = "I don't do much.";
const token = "b4ce24a722207e488403e56976054f840d38a835"

fetch ('https://api.github.com/karibeari/repos', {
  headers: {Authorization: `token ${token}`}
})
  .then(response => response.json())
  .then(json => console.log(json));
