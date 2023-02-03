import { IStorage, storage } from "../libs/storage";


class Links {
    private _urls = {
        APP_VERSIONS: '',
    };


    constructor(private storage: IStorage) {
        this.load();
    }

    private load = async () => {
        this.storage.get('LINKS')
            .then(data => { if (data) { this._urls = data; } })
            .catch(error => console.warn('LINKS -> load: ', error));
    }

    setLinks = (data: { [key: string]: string }) => {
        if (data) {
            this.storage.set('LINKS', data);
            this._urls = data as unknown as any;
        }
    }

    get appVersions() { return this._urls.APP_VERSIONS; };

}

export const links = new Links(storage);