import { useMemo, useEffect } from "react";
import { useIAP, SubscriptionOffer, PurchaseResult } from "react-native-iap";
import { appStateModel } from "../entities/appState/AppStateModel";
import { loggerModel } from "../UIKit/logger/entity/loggerModel";

export const useSubscription = (setSubscriptionOffers: (value?: SubscriptionOffer[]) => void, productIds: string[], subId: string, currentOffer: SubscriptionOffer) => {
    const {
        connected,
        initConnectionError,
        subscriptions,
        currentPurchaseError,
        currentPurchase,
        finishTransaction,
        getSubscriptions,
        requestSubscription,
    } = useIAP();

    const subscription = useMemo(() => subscriptions?.find(item => item.productId === subId), [subscriptions, productIds]);

    useEffect(() => {
        if (connected) {
            getSubscriptions({ skus: productIds });
        }
    }, [connected]);

    useEffect(() => {
        if (initConnectionError) {
            loggerModel.add('error', 'useSubscription: initConnectionError: ', JSON.stringify(initConnectionError))
            console.warn('useSubscription: initConnectionError: ', initConnectionError);
        }
    }, [initConnectionError]);

    useEffect(() => {
        const offers = subscription?.subscriptionOfferDetails?.map(item => ({ sku: subscription.productId, offerToken: item.offerToken }))
        setSubscriptionOffers(offers);
    }, [subscription]);

    useEffect(() => {
        if (!currentPurchaseError) {
            finishSubscription()
        } else {
            loggerModel.add('error', 'currentPurchaseError: ', JSON.stringify(initConnectionError))
            console.log('currentPurchaseError: ', currentPurchaseError.message);
        };
    }, [currentPurchase, currentPurchaseError]);

    const checkSubscriptionResult = (transactionResult: PurchaseResult) => {
        if (transactionResult?.code === 'OK') {
            loggerModel.add('response', 'checkSubscriptionResult -> transactionResult: ', JSON.stringify(transactionResult));
            appStateModel.subscriptionStatus = 'active';
        };
    }

    const finishSubscription = async (): Promise<void> => {
        try {
            if (currentPurchase?.transactionReceipt) {
                const transactionResult = await finishTransaction({ purchase: currentPurchase, isConsumable: false }) as PurchaseResult;
                checkSubscriptionResult(transactionResult);
            };
        } catch (error) {
            loggerModel.add('error', 'finishSubscription: ', JSON.stringify(initConnectionError))
            console.log('finishSubscription: ', error);
        }
    };

    const onPurchase = async () => {
        if (subscription && currentOffer) {
            await requestSubscription({ sku: subscription?.productId, subscriptionOffers: [currentOffer] });
        }
    };

    return { onPurchase };
}