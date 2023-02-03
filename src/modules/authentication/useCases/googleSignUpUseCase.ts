import { appStateModel } from "../../../entities/appState/AppStateModel";
import { userModel } from "../../../entities/user/User";
import { userService } from "../../../entities/user/UserService";
import { googleSignInModule } from "../../../libs/google/googleSignIn/GoogleSignInModule";

export const googleSignUpUseCase = async () => {
    try {
        appStateModel.isLoading = true;
        const isSignedIn = await googleSignInModule.isSignedIn();
        if (!isSignedIn) {
            const googleUser = await googleSignInModule.signIn();
            if (!googleUser) {
                return { isError: true, message: '', data: null };;
            }
        }
        const tokens = await googleSignInModule.getTokens();
        const response = await userService.signUpGoogle(tokens.accessToken);
        if (!response?.isError) {
            userModel.token = response.data.token;
            userModel.user = response.data.user;
        }
        return response;
    } catch (error) {
        console.warn('googleSignInUseCase: ', error);
        return { isError: true, message: '', data: null };
    } finally {
        appStateModel.isLoading = false;
    }
}
