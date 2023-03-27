import { useState } from "react";

export const useStorage = (key, initialValue) => {
    // const key = useId();
    const [state, setState] = useState(() => {
        const persistedStateSerialized = sessionStorage.getItem(key);
        if (persistedStateSerialized) {
            const persistedState = JSON.parse(persistedStateSerialized);

           return persistedState;
        }

        return initialValue;
    });

    const setLocalStorageState = (value) => {
        setState(value);

        sessionStorage.setItem(key, JSON.stringify(value));
    };

    return [
        state,
        setLocalStorageState,
    ];
};
