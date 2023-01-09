import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useEffect } from "react";
import { appStateModel } from "../../../entities/appState/AppStateModel";
import { checkAppVersions } from "../useCases/checkAppVersionsUseCase";

export const useVersionControl = () => {
    const navigation = useNavigation<StackNavigationProp<any>>();
    const { isShowForceUpdate } = appStateModel;

    useEffect(() => {
        checkAppVersions();
    }, []);

    useEffect(() => {
        if (isShowForceUpdate) {
            navigation.reset({ index: 0, routes: [{ name: 'VersionControlView' }], });
        }
    }, [isShowForceUpdate]);

}