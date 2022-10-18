export interface StandardResponse {
    hasError: boolean;
    message: string;
}

export interface Validator {
    dispatch: (value: any) => StandardResponse;
}

export const StandardInitialResponse: StandardResponse = { hasError: false, message: '' };

export const validateNotEmpty: Validator = {
    dispatch: (value: any) => {
        console.log('value', value);

        if (value === '') {
            return { hasError: true, message: 'This field is required' };
        }
        return StandardInitialResponse;
    },
};

export function evaluate(validators: Validator[], value: any): StandardResponse {
    const response = validators.map(validator => validator.dispatch(value));
    const foundErrors = response.find((r: StandardResponse) => r.hasError === true);
    console.log('foundErrors', foundErrors);

    return foundErrors || StandardInitialResponse;
}
