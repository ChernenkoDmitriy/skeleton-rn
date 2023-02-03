import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useEffect } from "react";
import { appStateModel } from "../../../entities/appState/AppStateModel";
import { userModel } from "../../../entities/user/User";

export const useLaunchApp = () => {
    const navigation = useNavigation<StackNavigationProp<any>>();
    userModel;

    useEffect(() => {
        setTimeout(() => {
            const user = userModel.user;
            const isShowForceUpdate = appStateModel.isShowForceUpdate;
            const destination = user ? 'TabNavigator' : 'AuthorizationView';
            if (!isShowForceUpdate) {
                navigation.reset({ index: 0, routes: [{ name: destination }], });
            }
        }, 1500);
    }, []);

}
