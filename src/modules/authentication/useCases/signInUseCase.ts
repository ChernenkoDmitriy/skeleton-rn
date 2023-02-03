import { userModel } from "../../../entities/user/User";
import { userService } from "../../../entities/user/UserService";

export const signInUseCase = async (email: string, password: string) => {
    try {
        const response = await userService.signIn(email, password);
        if (!response?.isError) {
            userModel.token = response.data.token;
            userModel.user = response.data.user;
        }
        return response;
    } catch (error) {
        console.warn('signInUseCase: ', error);
        return { isError: true, message: '', data: null };
    }
};
