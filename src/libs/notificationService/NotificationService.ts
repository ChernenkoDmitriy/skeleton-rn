import { FirebaseMessaging, IMessaging } from "./firebase";
import { notificationHandler } from "./pushNotification/NotificationHandler";
import { IRestPost, requester } from "../requester";
import { ILinks, links } from "../../utils/Links";
import { IResponse } from "../requester/IRequester/IResponse";

class NotificationService {
    private static instance: NotificationService;

    _notificationHandler = notificationHandler;
    _messaging!: IMessaging;

    constructor(private requester: IRestPost, private links: ILinks,) {
        if (NotificationService.instance) {
            return NotificationService.instance;
        }
        this._messaging = new FirebaseMessaging();
        NotificationService.instance = this;
    }

    removeAllDeliveredNotifications = () => {
        this._notificationHandler.removeAllDeliveredNotifications();
    }

    register = async (userId: number) => {
        const token = await this._messaging.getFCMToken();
        const response = await this.requester.post(this.links.REGISTER_FCM_TOKEN, { userId, token });
        const result = this.processingResponse(response);
        return result;
    }

    deleteToken = async () => {
        const token = await this._messaging.getFCMToken();
        await this._messaging.removeFCMToken();
        const response = await this.requester.post(this.links.DELETE_FCM_TOKEN, { token });
        const result = this.processingResponse(response);
        return result;
    }

    subscribe = () => {
        const unsubscribe = this._messaging?.subscribeAppWithFCM(this.onReceiveNotification);
        return unsubscribe;
    }

    private onReceiveNotification = (notification: any, _type: string) => {
        try {
            if (notification) {
                const { title, body } = notification?.data;
                this._notificationHandler.createLocalNotification(title, body, notification?.data);
            };
        } catch (error) {
            console.warn('NotificationService -> onReceiveNotification: ', error);
        }
    }

    private processingResponse = (response: any): IResponse => {
        let result: any = { isError: true, message: '' };
        if (response?.status < 400) {
            result = { isError: false, data: response.data, message: '' };
        } else if (response.error === 'validation') {
            result = { isError: true, message: response?.messages };
        } else {
            result = { isError: true, message: response?.message };
        }
        return result;
    }

}
export const notificationService = new NotificationService(requester, links);
