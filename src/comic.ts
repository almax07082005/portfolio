import { __awaiter, __generator } from "tslib";
import { formatDistanceToNow } from 'date-fns';

async function fetchComicId(email: string): Promise<string> {
    const url = new URL('https://fwd.innopolis.university/api/hw2');
    url.search = new URLSearchParams({ email }).toString();

    try {
        const response = await fetch(url);
        return await response.text();
    } catch (error) {
        console.error(error);
        return '';
    }
}

async function fetchComicDetails(id: string): Promise<any> {
    const url : URL = new URL('https://fwd.innopolis.university/api/comic');
    url.search = new URLSearchParams({ id }).toString();

    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.error(error);
        return {} as JSON;
    }
}

async function action(): Promise<void> {
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const id = await fetchComicId(email);
    const json = await fetchComicDetails(id);

    (document.getElementById('comic-title') as HTMLElement).textContent = json.safe_title;
    (document.getElementById('comic-image') as HTMLImageElement).src = json.img;

    const { day, month, year } = json;
    const uploadDate = new Date(year, month - 1, day);
    (document.getElementById('comic-date') as HTMLElement).textContent = uploadDate.toLocaleDateString();
    (document.getElementById('date-fns') as HTMLElement).textContent = formatDistanceToNow(uploadDate);
}

(document.getElementById("comic-button") as HTMLButtonElement).addEventListener("click", action);
(document.getElementById("email") as HTMLInputElement).addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        (document.getElementById("comic-button") as HTMLButtonElement).click();
    }
});
