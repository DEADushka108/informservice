import PropTypes from 'prop-types';

export const userDetails = PropTypes.shape({
  id: PropTypes.number,
  name: PropTypes.string,
  surname: PropTypes.string,
  patronym: PropTypes.string,
  position: PropTypes.string,
  birthdate: PropTypes.string,
  gender: PropTypes.string,
  startDay: PropTypes.string,
  endDate: PropTypes.string,
  driverLicence: PropTypes.bool,
});
