interface Validator {
    (formState: any): boolean;
}

const emailRegEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const passwordRegEx = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

const validateEmail: Validator = (formState: any): boolean => {
    const { email } = formState;
    return emailRegEx.test(email.toLowerCase());
};

const validatePassword: Validator = (formState: any): boolean => {
    const { password } = formState;
    return passwordRegEx.test(password);
};

const currentValidatorsUsed: Validator[] = [validateEmail, validatePassword];

export function validateForm(currentFormState: any): boolean {
    return currentValidatorsUsed
        .map(validator => validator(currentFormState))
        .every(validatorResult => Boolean(validatorResult));
}
