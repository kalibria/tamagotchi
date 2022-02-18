import React from 'react';

const isValid = (text) => {
    const regexp = new RegExp(/^[\sA-z-]+$/);

    return regexp.test(text)
}

export default isValid;