function fetchComicId(email) {
    const url = new URL('https://fwd.innopolis.university/api/hw2');
    url.search = new URLSearchParams({ email });

    return fetch(url)
        .then(response => response.text())
        .then(text => text)
        .catch(error => console.error(error));
}

function fetchComicDetails(id) {
    const url = new URL('https://fwd.innopolis.university/api/comic');
    url.search = new URLSearchParams({ id });

    return fetch(url)
        .then(response => response.json())
        .catch(error => console.error(error));
}

async function action() {
    const id = await fetchComicId(document.getElementById('email').value);
    json = await fetchComicDetails(id);
    document.getElementById('comic-title').innerText = json.title;
    document.getElementById('comic-image').src = json.img;
    document.getElementById('comic-date').innerText = json.year;
}

document.getElementById('comic-button').addEventListener('click', action);
action();
