import { IScreenContainer } from "./IScreenContainer";

type OmitParams = 'headerComponent' | 'edges' | 'scrollEnabled' | 'keyboardShouldPersistTaps' | 'isKeyboardAvoiding' | 'rootContainerBackground' | 'rootContainerStyle'

export interface IScreenContent extends Omit<IScreenContainer, OmitParams> { }