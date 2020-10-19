// Inspired by and derived from https://rangle.io/blog/simplifying-controlled-inputs-with-hooks/
import {useState} from 'react';

const useInput = (initialValue) => {
    const [value, setValue] = useState(initialValue);
    return {
        value,
        setValue,
        reset: () => setValue(initialValue),
        formAttrs: {
            value,
            onChange: (e) => setValue(e.target.value)
        }
    };
}

export default useInput;
