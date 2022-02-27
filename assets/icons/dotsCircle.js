import React from 'react';

export default function DotsCircle(props) {
    return (
        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-primary dark:bg-primary  text-white dark:text-white rounded-full flex-shrink-0">
                                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                       strokeWidth="2.5"
                                       className="w-3 h-3" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                  </svg>
                              </span>
    );
}

