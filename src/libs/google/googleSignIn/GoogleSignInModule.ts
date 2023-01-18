import { GoogleSignin, statusCodes, User } from '@react-native-google-signin/google-signin';

interface IGoogleSignInModule {
    signIn: () => Promise<User | null>;
    isSignedIn: () => Promise<boolean>;
    getTokens: () => Promise<any>;
    getCurrentUser: () => Promise<User | null>;
}

GoogleSignin.configure({
    scopes: [
        "https://www.googleapis.com/auth/userinfo.profile",
        "https://www.googleapis.com/auth/userinfo.email",
        "https://www.googleapis.com/auth/drive.readonly",
        'https://www.googleapis.com/auth/spreadsheets'
    ]
});

class GoogleSignInModule implements IGoogleSignInModule {
    constructor() {

    }

    signIn = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            return userInfo;
        } catch (error: any) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                // user cancelled the login flow
            } else if (error.code === statusCodes.IN_PROGRESS) {
                // operation (e.g. sign in) is in progress already
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                // play services not available or outdated
                console.error('GoogleSignInModule -> signIn: PLAY_SERVICES_NOT_AVAILABLE');
            } else {
                // some other error happened
                console.error('GoogleSignInModule -> signIn: else');
            }
            console.error('GoogleSignInModule -> signIn: ', JSON.stringify(error));
            return null;
        }
    };

    getCurrentUser = async () => {
        const isSignedIn = await GoogleSignin.getCurrentUser();
        return isSignedIn;
    };

    isSignedIn = async () => {
        const isSignedIn = await GoogleSignin.isSignedIn();
        return isSignedIn;
    };

    getTokens = async () => {
        const isSignedIn = await GoogleSignin.getTokens();
        return isSignedIn;
    };

    signOut = async () => {
        try {
            await GoogleSignin.revokeAccess();
            await GoogleSignin.signOut();
        } catch (error) {
            console.error('GoogleSignInModule -> signOut: ', error);
        }
    };

}

export const googleSignInModule = new GoogleSignInModule();

const id = __DEV__
    ? '72193947478-kefcn6h9a64tfnvoqv6f6nkqo307e9d2.apps.googleusercontent.com'
    : '72193947478-c4kk8mtghqfvb82v854komp6jl1fcaul.apps.googleusercontent.com';

// export const googleSignInModule = new GoogleSignInModule(id);