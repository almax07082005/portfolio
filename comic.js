function fetchComicId(email) {
    const url = new URL('https://fwd.innopolis.university/api/hw2');
    url.search = new URLSearchParams({email});

    return fetch(url)
        .then(response => response.text())
        .catch(error => console.error(error));
}

function fetchComicDetails(id) {
    const url = new URL('https://fwd.innopolis.university/api/comic');
    url.search = new URLSearchParams({id});

    return fetch(url)
        .then(response => response.json())
        .catch(error => console.error(error));
}

async function action() {
    const id = await fetchComicId(document.getElementById('email').value);
    json = await fetchComicDetails(id);
    document.getElementById('comic-title').textContent = json.safe_title;
    document.getElementById('comic-image').src = json.img;

    const day = json.day;
    const month = json.month;
    const year = json.year;

    const uploadDate = new Date(year, month - 1, day);
    document.getElementById('comic-date').textContent = uploadDate.toLocaleDateString();
}

document.getElementById("comic-button").addEventListener("click", action);
document.getElementById("email").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("comic-button").click();
    }
});
