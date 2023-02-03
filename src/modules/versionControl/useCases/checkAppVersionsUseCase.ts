import { Platform } from "react-native";
import { requester } from "../../../libs/requester";
import semver from 'semver';
import { getVersion } from 'react-native-device-info';
import { storage } from "../../../libs/storage";
import { appStateModel } from "../../../entities/appState/AppStateModel";
import { links } from "../../../utils/Links";

const isIOS = Platform.OS === 'ios';

const getMinimalAndRecommendedVersion = async (): Promise<{ minimalVersion: string, recommendedVersion: string }> => {
    try {
        let minimalVersion = '';
        let recommendedVersion = '';
        const response = await requester.get(links.appVersions);
        if (response.data) {
            minimalVersion = isIOS ? response.data.minimalVersionIOS : response.data.minimalVersionAndroid;
            recommendedVersion = isIOS ? response.data.recommendedVersionIOS : response.data.recommendedVersionAndroid;
        }
        return { minimalVersion, recommendedVersion };
    } catch (error) {
        console.warn('getMinAndRecommendedVersion: ', error);
        return { minimalVersion: '', recommendedVersion: '' };
    }
}

export const checkAppVersions = async () => {
    try {
        const { minimalVersion, recommendedVersion } = await getMinimalAndRecommendedVersion();
        const skippedVersion = await storage.get('RECOMMENDED_VERSION');
        const currentVersion = getVersion();
        const isValid = semver.valid(minimalVersion) && semver.valid(recommendedVersion);
        if (isValid) {
            const isShowRecommendedUpdate = recommendedVersion === skippedVersion ? false : semver.gt(recommendedVersion, currentVersion);
            const isShowForceUpdate = semver.gt(minimalVersion, currentVersion);
            appStateModel.isShowRecommendedUpdate = isShowRecommendedUpdate;
            appStateModel.isShowForceUpdate = isShowForceUpdate;
        }
    } catch (error) {
        console.warn('getAppVersions: ', error);
    }
}
