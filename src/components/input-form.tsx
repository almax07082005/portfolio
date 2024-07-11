'use client';

import { useState } from 'react';
import Service from '@/api/service';

export default function InputForm() {
    const [email, setEmail] = useState('');
    const [id, setId] = useState(0);

    return (
        <div>
            <form>
                <label>Email:</label>
                <input id="email" placeholder="i.ivanov@innopolis.university" onChange={(e) => setEmail(e.target.value)} />
                <button type="button" id="comic-button"
                        onClick={() => {
                            Service.getID(email)
                                .then(response => {
                                    setId(response);
                                })
                                .catch(error => {
                                    console.log(error);
                                });
                            Service.getComic(id)
                                .then(response => {
                                    (document.getElementById('comic-image') as HTMLElement).setAttribute('src', response.img);
                                    (document.getElementById('comic-title') as HTMLElement).textContent = response.safe_title;
                                    (document.getElementById('comic-date') as HTMLElement).textContent = new Date(response.year, response.month - 1, response.day).toLocaleDateString();
                                })
                                .catch(error => {
                                    console.log(error);
                                })
                        }}
                >Get Comic</button>
            </form>
            <img id="comic-image" src="" alt="Comic" />
            <h2 id="comic-title"></h2>
            <p id="comic-date"></p>
        </div>
    );
};
