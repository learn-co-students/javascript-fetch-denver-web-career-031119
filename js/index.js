const app = "I don't do much.";

const token = '1ee9d2b9fcbc4cc111e8c4d2d585c81e3e770659';
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
})
  .then(res => res.json())
  .then(json => console.log(json));
