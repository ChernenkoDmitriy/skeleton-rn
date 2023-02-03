import { IStorage, storage } from "../../libs/storage";
import { MobXRepository } from "../../repository/MobXRepository"
import { IUser } from "./IUser";

export interface IUserModel {
    token: string | null;
    user: IUser | null;
}

class UserModel implements IUserModel {
    private userStore = new MobXRepository<IUser>();
    private tokenStore = new MobXRepository<string | null>(null);

    constructor(private storage: IStorage) {
        this.loadUser();
    }

    private persistToken = (data: string | null) => {
        if (data) {
            this.storage.set('STORAGE_TOKEN', data);
        } else {
            this.storage.remove('STORAGE_TOKEN');
        }
    }

    private persistUser = (data: IUser | null) => {
        if (data) {
            this.storage.set('STORAGE_USER', data);
        } else {
            this.storage.remove('STORAGE_USER');
        }
    }

    private loadUser = () => {
        this.storage.get('STORAGE_USER')
            .then(data => { data && this.userStore.save(data); })
            .catch(error => console.warn('UserModel -> loadUser: ', error));
        this.storage.get('STORAGE_TOKEN')
            .then(data => { data && this.tokenStore.save(data); })
            .catch(error => console.warn('UserModel -> loadUser: ', error));
    }

    get token() {
        return this.tokenStore.data;
    }

    set token(data: string | null) {
        this.tokenStore.save(data);
        this.persistToken(data);
    }

    get user() {
        return this.userStore.data;
    }

    set user(data: IUser | null) {
        this.userStore.save(data);
        this.persistUser(data);
    }

    clear = () => {
        this.user = null;
        this.token = null;
    }

}

export const userModel = new UserModel(storage);
