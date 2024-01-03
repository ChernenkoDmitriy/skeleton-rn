import { useCallback, useEffect, useRef, useState } from "react";
import { useAppState } from '@react-native-community/hooks'

export const useSpendTimeTimer = (isActive: boolean = true) => {
    const [spendTimeSeconds, setSpendTimeSeconds] = useState(0);
    const [running, setRunning] = useState(isActive);
    const currentAppState = useAppState()
    const timer = useRef<NodeJS.Timeout | null>();

    useEffect(() => {
        if (running && currentAppState === 'active' && !timer.current) {
            timer.current = setInterval(() => { setSpendTimeSeconds(prev => prev + 1) }, 1000);
        } else {
            timer.current && clearInterval(timer.current);
            timer.current = null;
        }
    }, [running, currentAppState]);

    useEffect(() => {
        return () => { timer.current && clearInterval(timer.current) };
    }, []);

    const reset = useCallback(() => {
        setSpendTimeSeconds(0);
    }, []);

    const pause = useCallback(() => {
        setRunning(false);
    }, []);

    const resume = useCallback(() => {
        setRunning(true);
    }, []);

    return { spendTimeSeconds, reset, pause, resume };

}