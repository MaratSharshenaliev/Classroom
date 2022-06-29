import React from 'react';
import spinner from './spinner.module.css'

const Spinner = () => {
    return (

            <div className="loader">
                <svg className={spinner.spinner} viewBox="0 0 50 50">
                    <circle className={spinner.path} cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
                </svg>
            </div>
    )
};

export default Spinner;