import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const BodySection = ({ title, children }) => {
    return (
        <div className={css(styles.bodySection)}>
            <h2>{title}</h2>
            {children}
        </div>
    );
};

BodySection.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node,
};

const styles = StyleSheet.create({
    bodySection: {
        paddingLeft: '2rem'
    },
});

export default BodySection;
