import { ICropedImage } from "../../libs/imagePicker/IImagePicker/ICropedImage";
import { IRestPost, requester } from "../../libs/requester";
import { IFormDataRequest } from "../../libs/requester/IRequester/IFormDataRequest";
import { IResponse } from "../../libs/requester/IRequester/IResponse";
import { ILinks, links } from "../../utils/Links";

class UserService {
    constructor(
        private requester: IRestPost & IFormDataRequest,
        private links: ILinks,
    ) { }

    signIn = async (email: string, password: string): Promise<IResponse> => {
        try {
            const response = await this.requester.post(this.links.AUTHORIZATION, { email, password });
            const result = this.processingResponse(response);
            return result;
        } catch (error) {
            console.warn('UserService -> signIn: ', this.links.AUTHORIZATION, { email, password }, error);
            return { isError: true, data: null, message: '' } as any;
        }
    }

    signInGoogle = async (token: string): Promise<IResponse> => {
        try {
            const response = await this.requester.post(this.links.AUTHORIZATION_GOOGLE, { token });
            const result = this.processingResponse(response);
            return result;
        } catch (error) {
            console.warn('UserService -> signIn: ', this.links.AUTHORIZATION, { token }, error);
            return { isError: true, data: null, message: '' } as any;
        }
    }

    signUp = async (email: string, password: string, first_name: string, last_name: string): Promise<IResponse> => {
        try {
            const response = await this.requester.post(this.links.REGISTRATION, { email, password, first_name, last_name });
            const result = this.processingResponse(response);
            return result;
        } catch (error) {
            console.warn('UserService -> signUp: ', this.links.REGISTRATION, { email, password, first_name, last_name }, error);
            return { isError: true, data: null, message: '' } as any;
        }
    }

    signUpGoogle = async (token: string): Promise<IResponse> => {
        try {
            const response = await this.requester.post(this.links.REGISTRATION_GOOGLE, { token });
            const result = this.processingResponse(response);
            return result;
        } catch (error) {
            console.warn('UserService -> signUp: ', this.links.REGISTRATION_GOOGLE, { token }, error);
            return { isError: true, data: null, message: '' } as any;
        }
    }

    changePassword = async (oldPassword: string, newPassword: string): Promise<IResponse> => {
        try {
            const response = await this.requester.post(this.links.CHANGE_PASSWORD, { oldPassword, newPassword });
            const result = this.processingResponse(response);
            return result;
        } catch (error) {
            console.warn('UserService -> changePassword: ', this.links.CHANGE_PASSWORD, { oldPassword, newPassword }, error);
            return { isError: true, data: null, message: '' } as any;
        }
    }

    findUsers = async (find_by: 'email' | 'name', value: string, offset: number = 0, limit: number = 20): Promise<IResponse> => {
        try {
            const response = await this.requester.post(this.links.FIND_USERS, { find_by, value, offset, limit });
            const result = this.processingResponse(response);
            return result;
        } catch (error) {
            console.warn('UserService -> findUsers: ', this.links.FIND_USERS, { find_by, value, offset, limit }, error);
            return { isError: true, data: null, message: '' } as any;
        }
    }

    setUserAvatar = async (avatar: ICropedImage) => {
        try {
            const formData = new FormData();
            // @ts-ignore
            formData.append('avatar', { name: 'photo.jpg', type: 'image/jpeg', uri: avatar.path });
            const response = await this.requester.postFormData(this.links.SET_USER_AVATAR, formData);
            const result = this.processingResponse(response);
            return result;
        } catch (error) {
            console.warn('UserServices -> setUserAvatar: ', this.links.SET_USER_AVATAR, error);
            return { isError: true, data: null, message: '' } as any;
        }
    }

    restorePassword = async (email: string): Promise<IResponse> => {
        try {
            const response = await this.requester.post(this.links.RESTORE_PASSWORD, { email });
            const result = this.processingResponse(response);
            return result;
        } catch (error) {
            console.warn('UserService -> restorePassword: ', this.links.REGISTRATION, { email }, error);
            return { isError: true, data: null, message: '' } as any;
        }
    }

    private processingResponse = (response: any): IResponse => {
        let result: any = { isError: true, message: '' };
        if (response?.status < 400) {
            result = { isError: false, data: response.data, message: '' };
        } else if (response?.data?.error === 'validation') {
            result = { isError: true, message: response?.data?.messages };
        } else {
            result = { isError: true, message: response?.data?.messages || response?.data?.message };
        }
        return result;
    }

}

export const userService = new UserService(requester, links);