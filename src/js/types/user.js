import PropTypes from 'prop-types';

export const userDetails = PropTypes.shape({
  id: PropTypes.string,
  name: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.array,
});
