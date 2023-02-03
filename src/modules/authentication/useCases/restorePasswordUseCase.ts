import { userService } from "../../../entities/user/UserService";

export const restorePasswordUseCase = async (email: string) => {
    try {
        const response = await userService.restorePassword(email); 
        return response;
    } catch (error) {
        console.warn('restorePasswordUseCase: ', error);
        return { isError: true, message: '', data: null };
    }
}