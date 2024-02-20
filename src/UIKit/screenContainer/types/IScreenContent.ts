import { IScreenContainer } from "./IScreenContainer";

type OmitParams = 'headerComponent' | 'edges' | 'scrollEnabled' | 'isKeyboardAvoiding' | 'rootContainerBackground' | 'rootContainerStyle'

export interface IScreenContent extends Omit<IScreenContainer, OmitParams> { }