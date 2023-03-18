import { useEffect, useCallback } from "react";
import { RequestOptions, useInterstitialAd } from "react-native-google-mobile-ads";
import { appStateModel } from "../entities/appState/AppStateModel";

export const useAdds = (addId: string, requestOptions: RequestOptions = {}) => {
    const { isLoaded: isAddLoaded, isClosed: isAddClosed, load, show } = useInterstitialAd(addId, {
        requestNonPersonalizedAdsOnly: true,
        ...requestOptions
    });

    useEffect(() => { load(); }, [load]);
    useEffect(() => { isAddClosed && load(); }, [isAddClosed]);

    const showAdds = useCallback(async () => {
        if (appStateModel.subscriptionStatus !== 'active' && isAddLoaded) {
            show();
        }
    }, [isAddLoaded]);

    return { isAddLoaded, isAddClosed, load, showAdds };
};