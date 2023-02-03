import { useNavigation } from "@react-navigation/native";
import { useCallback, useMemo, useState } from "react";
import { userModel } from "../../../entities/user/User";

export const useAuthorization = () => {
    const user = userModel.user;
    const navigation = useNavigation<any>();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [securePasswordEntry, setSecurePasswordEntry] = useState(true);
    const [authorizationError, setAuthorizationError] = useState(false);

    const disabledButton = useMemo(() => (!(email && password)), [email, password]);

    const onGoToRegistration = useCallback(() => {
        setEmail('');
        setPassword('');
        navigation.navigate('RegistrationView');
    }, []);

    const onGoToRestorePassword = useCallback(() => {
        setEmail('');
        setPassword('');
        navigation.navigate('RestorePasswordView');
    }, []);

    return {
        email, password, securePasswordEntry, disabledButton, authorizationError,
        setEmail, setPassword, onGoToRegistration, onGoToRestorePassword
    };

}