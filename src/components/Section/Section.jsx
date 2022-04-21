import PropTypes from 'prop-types';

const Section = ({ title, children }) => {
    return (
        <section>
            <h1>{title}</h1>
            {children}
        </section>
    );
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
}

export default Section;