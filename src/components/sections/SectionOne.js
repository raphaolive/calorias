import React from "react";
import Form from "../forms/Form";
import styles from './Sections.module.css'

const SectionOne = () => {
  return (
    <div className={styles['section-one']}>
        <Form />
    </div>
  );
};

export default SectionOne;
