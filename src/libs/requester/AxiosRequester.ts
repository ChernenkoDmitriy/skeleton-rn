import Axios from "axios";
import Toast from "react-native-toast-message";
import { IRequester } from ".";
import { userModel } from "../../entities/user/User";

class AxiosRequester implements IRequester {
    private static instance: AxiosRequester;

    constructor() {
        if (AxiosRequester.instance) {
            return AxiosRequester.instance;
        }
        AxiosRequester.instance = this;
    }

    private serverError = (status: number) => {
        if (status >= 500) {
            Toast.show({ type: 'error', text1: 'Error', text2: 'Server error', visibilityTime: 2000, });
        }
    }

    postFormData = async (url: string, data: FormData) => {
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: { 'Accept': '*/*', 'Content-Type': 'multipart/form-data', 'authorization': `Bearer ${userModel?.token}` },
                body: data,
            });
            const result = await response.json()
            return { data: result, status: response.status };
        } catch (error: any) {
            this.serverError(error?.status);
            console.warn('AxiosRequester -> postFormData: ', error);
            return error?.response || {};
        }
    }

    post = async (url: string, data?: object, headers?: object, timeoutMS?: number): Promise<any> => {
        try {
            const config: any = {
                method: 'POST',
                headers: {
                    'Cache-Control': 'no-cache',
                    'Content-Type': 'application/json',
                    'authorization': `Bearer ${userModel?.token}`
                },
                url,
                timeout: timeoutMS || 60000
            };
            headers && (config.headers = headers);
            data && (config.data = JSON.stringify(data));
            const response = await Axios(config);
            return response;
        } catch (error: any) {
            this.serverError(error?.status);
            console.warn('AxiosRequester -> post: ', error);
            return error?.response || {};
        }
    }

    get = async (url: string, params?: object, headers?: object, timeoutMS?: number): Promise<any> => {
        try {
            const config: any = {
                method: 'GET',
                headers: {
                    'Cache-Control': 'no-cache',
                    'Content-Type': 'application/json',
                    'authorization': `Bearer ${userModel?.token}`
                },
                url,
                timeout: timeoutMS || 60000
            };
            headers && (config.headers = headers);
            params && (config.params = params);
            const response = await Axios(config);
            return response;
        } catch (error: any) {
            this.serverError(error?.status);
            console.warn('AxiosRequester -> get: ', error);
            return error?.response || {};
        }
    }

}

export const requester = new AxiosRequester();
