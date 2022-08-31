const url = "https://api.github.com/users"
const userGitHub = "arydiane"

function getUserGitHub(){
    fetch(`${url}/${userGitHub}`)
        .then(response => response.json())
        .then(data => {     
            nameUser.textContent = data.login;
            followers.textContent = data.followers > 1 ? `${data.followers} Seguidores`: `${data.followers} Seguidor}`;
            following.textContent = `${data.following} Seguindo`;
            repository.textContent = data.public_repos> 1 ? `${data.public_repos} Repositórios` : `${data.public_repos} Repositório`;
            company.textContent = data.company === null ? `----` : `${data.company}`;
            locationUser.textContent = data.location === null ? `----` : `${data.location}`
        })
        .catch( error => console.error(error))
}

function generateColor() {

    const btn = document.getElementById('card-background')

    let r = Math.trunc( Math.random() * 255)
    let g = Math.trunc( Math.random() * 255)
    let b = Math.trunc( Math.random() * 255)

    btn.style.backgroundColor = `rgb(${r},${g},${b})`
}

getUserGitHub()