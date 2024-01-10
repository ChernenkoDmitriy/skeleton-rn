import { EventArg, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useEffect, useRef } from "react";

type TEvent = EventArg<"beforeRemove", true, {
    action: Readonly<{
        type: string;
        payload?: object | undefined;
        source?: string | undefined;
        target?: string | undefined;
    }>;
}>;

export const useGoBack = (callback: (e: TEvent) => void, params: any[]) => {
    const navigation = useNavigation<NativeStackNavigationProp<any>>();
    const unsubscribe = useRef(() => { });

    useEffect(() => {
        unsubscribe.current();
        unsubscribe.current = navigation.addListener('beforeRemove', callback);
    }, [navigation, ...params]);

    return unsubscribe;
};