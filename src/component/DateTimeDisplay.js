import React from 'react';
import styles from './styles.module.css'

const DateTimeDisplay = ({ value, type, isDanger }) => {
  return (
    <div className={isDanger ? styles.countdown_danger : styles.countdown}>
      <p>{value}</p>
      <span>{type}</span>
    </div>
  );
};

export default DateTimeDisplay;
