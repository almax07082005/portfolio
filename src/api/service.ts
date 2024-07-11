import axios from 'axios';
import { ResponseBody } from '@/api/response-body';

export default class Service {
    static readonly ID_URL = 'https://fwd.innopolis.university/api/hw2';
    static readonly COMIC_URL = 'https://fwd.innopolis.university/api/comic';

    static getID(email: string): Promise<number> {
        return new Promise((resolve, reject) => {
            axios({
                method: 'get',
                baseURL: this.ID_URL,
                url: '',
                params: {
                    email: email
                }
            })
                .then(response => {
                    resolve(response.data as number);
                })
                .catch(error => {
                    reject(error);
                });
        });
    }

    static getComic(id: number): Promise<ResponseBody> {
        return new Promise((resolve, reject) => {
            axios({
                method: 'get',
                baseURL: this.COMIC_URL,
                url: '',
                params: {
                    id: id
                }
            })
                .then(response => {
                    resolve(response.data as ResponseBody);
                })
                .catch(error => {
                    reject(error);
                });
        });
    }
}
