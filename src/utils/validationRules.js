const validationRules = {
    nameValidationRules : {
        required: {
            rule: /[A-Za-z0-9.!#$%&'*+\-/=?^_`{|}~]+/,
            message: 'Please write only correct symbols'
        },
        max: {
            rule: /^.{0,25}$/,
            message: 'Maximum 25 symbols'
        },
        min: {
            rule: /^.{2,25}$/,
            message: 'Minimum 2 symbols'
        }
    }, 
    commentValidationRules : {
        required: {
            rule: /[A-Za-z0-9.!#$%&'*+-/=?^_`{|}~]/,
            message: 'Please write only correct symbols'
        },
        max: {
            rule: /^.{0,225}$/,
            message: 'Maximum 225 symbols'
        },
        min: {
            rule: /^.{5,255}$/,
            message: 'Minimum 5 symbols'
        }
    }
};

export const validation = (title, text) => {
    for (const rule in validationRules[title + 'ValidationRules']) {
        if (!validationRules[title + 'ValidationRules'][rule].rule.test(text)) {
            return validationRules[title + 'ValidationRules'][rule].message;
        }
    }

    return '';
};