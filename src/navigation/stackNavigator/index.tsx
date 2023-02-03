import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { observer } from 'mobx-react';
import { LaunchAppView } from '../../modules/launchApp/ui';
import { AuthorizationView } from '../../modules/authentication/ui/Authorization';
import { RegistrationView } from '../../modules/authentication/ui/Registration';
import { RestorePasswordView } from '../../modules/authentication/ui/RestorePassword';
import { VersionControlView } from '../../modules/versionControl/ui';
import { useVersionControl } from '../../modules/versionControl/presenters/useVersionControl';
import { TabNavigator } from '../tabNavigator';

const Stack = createStackNavigator();

export const StackNavigator: FC = observer(() => {
    useVersionControl();

    return (
        <Stack.Navigator initialRouteName='LaunchAppView' screenOptions={{ headerShown: false }} detachInactiveScreens={false} >
            <Stack.Screen name='LaunchAppView' component={LaunchAppView} />
            <Stack.Screen name='VersionControlView' component={VersionControlView} />
            <Stack.Screen name='AuthorizationView' component={AuthorizationView} />
            <Stack.Screen name='RegistrationView' component={RegistrationView} />
            <Stack.Screen name='RestorePasswordView' component={RestorePasswordView} />
            <Stack.Screen name='TabNavigator' component={TabNavigator} />
        </Stack.Navigator >
    );
}) 