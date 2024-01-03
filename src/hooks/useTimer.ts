import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useAppState } from '@react-native-community/hooks'

export const useTimer = (initialTimeSeconds: number, runInBackground: boolean = false) => {
    const [timerSeconds, setTimerSeconds] = useState(initialTimeSeconds);
    const [running, setRunning] = useState(false);
    const currentAppState = useAppState()
    const timer = useRef<NodeJS.Timeout | null>();
    const backgroundIn = useRef<number>();

    useEffect(() => {
        if (running && currentAppState === 'active' && !timer.current && (timerSeconds > 0)) {
            timer.current = setInterval(() => { setTimerSeconds(prev => prev + 1) }, 1000);
        } else {
            timer.current && clearInterval(timer.current);
            timer.current = null;
            setRunning(false);
        }
    }, [running, currentAppState]);

    useEffect(() => {
        return () => { timer.current && clearInterval(timer.current) };
    }, []);

    useEffect(() => {
        if (currentAppState === 'active' && runInBackground) {
            const difference = Date.now() - (backgroundIn.current || 0);
            const secondsDif = Math.round(difference / 1000);
            setTimerSeconds(prev => (prev - secondsDif < 0) ? 0 : prev - secondsDif);
        } else if (backgroundIn.current) {
            backgroundIn.current = Date.now();
        }
    }, [currentAppState, runInBackground]);

    const reset = useCallback(() => {
        setTimerSeconds(initialTimeSeconds);
    }, []);

    const pause = useCallback(() => {
        setRunning(false);
    }, []);

    const resume = useCallback(() => {
        setRunning(true);
    }, []);

    const doubleNumber = (value: number) => {
        return value > 9 ? "" + value : "0" + value;
    }

    const timeString = useMemo(() => {
        const hours = Math.floor(timerSeconds / 3600);
        const minutes = Math.floor(timerSeconds / 60);
        const seconds = Math.floor(timerSeconds % 60);
        return initialTimeSeconds ? `${doubleNumber(hours)}:${doubleNumber(minutes)}:${doubleNumber(seconds)}` : null;
    }, [timerSeconds, initialTimeSeconds]);

    return { timerSeconds, timeString, reset, pause, resume };

}