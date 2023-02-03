import { MobXRepository } from "../../repository/MobXRepository";

export interface IAppStateModel {
    isLoading: boolean;
    isConnected: boolean | null;
    isShowRecommendedUpdate: boolean;
    isShowForceUpdate: boolean;
}

class AppStateModel implements IAppStateModel {
    private isLoadingRepository = new MobXRepository(false);
    private isConnectedRepository = new MobXRepository(false);
    private isShowRecommendedUpdateRepository = new MobXRepository(false);
    private isShowForceUpdateRepository = new MobXRepository(false);

    get isShowRecommendedUpdate() {
        return this.isShowRecommendedUpdateRepository.data || false;
    }

    set isShowRecommendedUpdate(data: boolean) {
        this.isShowRecommendedUpdateRepository.save(data);
    }

    get isShowForceUpdate() {
        return this.isShowForceUpdateRepository.data || false;
    }

    set isShowForceUpdate(data: boolean) {
        this.isShowForceUpdateRepository.save(data);
    }

    get isLoading() {
        return this.isLoadingRepository.data || false;
    }

    set isLoading(data: boolean) {
        this.isLoadingRepository.save(data);
    }

    get isConnected() {
        return this.isConnectedRepository.data || true;
    }

    set isConnected(data: boolean) {
        this.isConnectedRepository.save(data);
    }

}

export const appStateModel = new AppStateModel();
