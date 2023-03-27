import { useState } from 'react';

export const useForm = (initialValues, onSubmitHandler) => {
    const [formValues, setFormValues] = useState(initialValues);

    const onChangeHandler = (e) => {
        setFormValues(state => ({...state, [e.target.name]: e.target.value}));

    }
    const onSubmit = (e) => {
        e.preventDefault();

        onSubmitHandler(formValues);

        setFormValues(initialValues);
    }

    // const changeValues = (newValues) => {
    //     // TODO: Validate newValues shape (like initialValues)
        
    //     setFormValues(newValues);
    // };

        return {
            formValues,
            onChangeHandler,
            onSubmit,
        }
} 





// //  where i can use import and useForm() call

//         import { useForm } from './useForm';

//         const {formValues, onChangeHandler} = useForm({
//             text: '',
//         })