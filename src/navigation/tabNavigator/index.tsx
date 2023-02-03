import React, { FC } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeView } from '../../modules/home/ui';

const Tab = createBottomTabNavigator();

export const TabNavigator: FC = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeView} />
            <Tab.Screen name="Settings" component={HomeView} />
        </Tab.Navigator>
    );
}