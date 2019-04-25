const token = '8d329254bc78cd7c56e4a5db17c4ae19ddfb7da1';
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
})
  .then(res => res.json())
  .then(json => console.log(json));
