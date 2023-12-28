import { Edge } from "react-native-safe-area-context";
import { TInsets } from "./TInsets";
import { ViewStyle } from "react-native";

export interface IScreenContainer {
    headerComponent?: React.ReactNode;
    edges?: Edge[];
    insets?: TInsets[];
    children: React.ReactNode;
    scrollEnabled?: boolean;
    keyboardShouldPersistTaps?: boolean;
    isKeyboardAvoiding?: boolean;
    isScreenLoading?: boolean;
    isLoading?: boolean;
    rootContainerBackground?: string;
    containerBackground?: string;
    rootContainerStyle?: ViewStyle;
    containerStyle?: ViewStyle;
    contentContainerStyle?: ViewStyle;
}