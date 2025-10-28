import React from 'react';

const CloudIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-5.78-1.028.5.5 0 0 1-.29.293M15.75 9.75v-4.5a3.75 3.75 0 0 0-7.5 0v4.5" />
    </svg>
);

export default CloudIcon;