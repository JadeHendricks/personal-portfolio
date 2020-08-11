$('.navigation-menu a').on('click', function(e) {
    if (this.hash) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $(this.hash).offset().top - 65
        }, 800);
    }
});

const getGithubInformation = async () => {
    const res = await fetch('https://api.github.com/users/JadeHendricks/repos');
    const data = await res.json();
    const repos = document.getElementById('repos');

    repos.innerHTML = `${data.map(repo => `<a href='${repo.html_url}'>${repo.name}</a>`)}`
}

getGithubInformation();
