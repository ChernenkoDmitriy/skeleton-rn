import { userModel } from "../../../entities/user/User";
import { userService } from "../../../entities/user/UserService";
import { IResponse } from "../../../libs/requester/IRequester/IResponse";

export const signUpUseCase = async (email: string, password: string, first_name: string, last_name: string): Promise<IResponse> => {
    try {
        const response = await userService.signUp(email, password, first_name, last_name);
        if (!response?.isError) {
            userModel.token = response.data.token;
            userModel.user = response.data.user;
        }
        return response;
    } catch (error) {
        console.warn('signUpUseCase: ', error);
        return { isError: true, message: '', data: null };
    }
}
