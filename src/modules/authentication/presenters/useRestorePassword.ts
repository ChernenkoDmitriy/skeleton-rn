import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useCallback, useEffect, useState } from "react";
import { Keyboard } from "react-native";
import { appStateModel } from "../../../entities/appState/AppStateModel";
import { useUiContext } from "../../../UIProvider";
import { restorePasswordUseCase } from "../useCases/restorePasswordUseCase";

export const useRestorePassword = () => {
    const { t } = useUiContext();
    const navigation = useNavigation<StackNavigationProp<any>>();
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');

    useEffect(() => {
        setEmailError('');
    }, [email]);

    const onGoToAuthorization = useCallback(() => {
        setEmail('');
        navigation.navigate('AuthorizationView');
    }, []);

    const onRestorePassword = async () => {
        Keyboard.dismiss();
        appStateModel.isLoading = true;
        const response = await restorePasswordUseCase(email);
        if (response.isError) {
            setEmailError(t('notValidEmail'));
        } else {
            navigation.goBack();
        }
        appStateModel.isLoading = false;
    }

    return { email, emailError, onRestorePassword, onGoToAuthorization, setEmail };

}