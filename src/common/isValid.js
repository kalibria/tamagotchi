import React from 'react';

const isValid = (text) => {
    const regexp = new RegExp(/^[A-z]+$/);

    return regexp.test(text)
}

export default isValid;