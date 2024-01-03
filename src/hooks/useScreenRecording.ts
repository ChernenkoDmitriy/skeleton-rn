import { useEffect } from "react"
import { CaptureProtection } from 'react-native-capture-protection';

const WHITE_LIST: string[] = [

]

export const useScreenRecording = (email: string = '') => {

    useEffect(() => {
        if (!WHITE_LIST.includes(email)) {
            CaptureProtection.preventScreenRecord();
            CaptureProtection.preventScreenshot();
        } else {
            CaptureProtection.allowScreenshot();
            CaptureProtection.allowScreenRecord();
        }
    }, [email]);

}