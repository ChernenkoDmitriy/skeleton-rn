import { useEffect } from "react";
import { Platform } from "react-native";
import { Purchase, useIAP } from "react-native-iap";
import { appStateModel } from "../entities/appState/AppStateModel";
import { requester } from "../libs/requester";
import { loggerModel } from "../UIKit/logger/entity/loggerModel";
import { links } from "../utils/Links";

export const useCheckSubscription = (subId: string) => {
    const { connected, initConnectionError, purchaseHistory, getPurchaseHistory } = useIAP();

    useEffect(() => {
        if (connected) {
            getPurchaseHistory();
        }
    }, [connected]);

    useEffect(() => {
        if (initConnectionError) {
            console.warn('useCheckIsPro -> initConnectionError: ', initConnectionError);
            loggerModel.add('error', 'useCheckIsPro -> initConnectionError: ', JSON.stringify(initConnectionError));
        };
    }, [initConnectionError]);

    useEffect(() => {
        loggerModel.add('library', 'useCheckIsPro -> purchaseHistory: ', JSON.stringify(purchaseHistory));
        console.log('useCheckIsPro -> purchaseHistory: ', purchaseHistory);
        if (purchaseHistory) {
            const purchase = purchaseHistory?.find(item => item.productId === subId);
            checkReceipt(purchase);
        };
    }, [purchaseHistory]);

    const setSubscriptionStatus = (isSubscriptionActive?: boolean) => {
        if (isSubscriptionActive) {
            appStateModel.subscriptionStatus = 'active';
        } else if (typeof isSubscriptionActive === 'boolean') {
            appStateModel.subscriptionStatus = 'noSubscriptions';
        }
    }

    const checkReceipt = async (purchase?: Purchase) => {
        try {
            if (purchase) {
                const body = {
                    productId: purchase?.productId,
                    token: purchase?.purchaseToken,
                    appType: Platform.OS,
                };
                loggerModel.add('library', 'useCheckIsPro -> checkReceipt: ', JSON.stringify(body));
                console.log('useCheckIsPro -> checkReceipt: ', body);
                const result = await requester.post(links.checkReceipt, body);
                setSubscriptionStatus(result?.data.isSubscriptionActive);
            };
        } catch (error) {
            console.warn('useCheckIsPro -> checkReceipt: ', error);
            loggerModel.add('error', 'useCheckIsPro -> checkReceipt: ', JSON.stringify(error));
        }
    };
};

