import { useNavigation } from '@react-navigation/native';
import { useCallback, useEffect, useState } from 'react';
import { Keyboard } from 'react-native';
import { appStateModel } from '../../../entities/appState/AppStateModel';
import { userModel } from '../../../entities/user/User';
import { useUiContext } from '../../../UIProvider';
import { googleSignUpUseCase } from '../useCases/googleSignUpUseCase';
import { signUpUseCase } from '../useCases/signUpUseCase';

export const useRegistration = () => {
    const { t } = useUiContext();
    const user = userModel.user;
    const navigation = useNavigation<any>();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [securePasswordEntry, setSecurePasswordEntry] = useState(true);
    const [firstNameError, setFirstNameError] = useState<string | undefined>(undefined);
    const [lastNameError, setLastNameError] = useState<string | undefined>(undefined);
    const [emailError, setEmailError] = useState<string | undefined>(undefined);
    const [passwordError, setPasswordError] = useState<string | undefined>(undefined);

    const onGoToAuthorization = useCallback(() => {
        navigation.navigate('AuthorizationView');
    }, []);

    return {
        firstNameError,
        lastNameError,
        emailError,
        passwordError,
        email,
        password,
        securePasswordEntry,
        firstName,
        lastName,
        onGoToAuthorization
    };
};
