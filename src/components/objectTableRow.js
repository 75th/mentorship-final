import PropTypes from "prop-types"
import React from "react"

const ObjectTableRow = ({ label, value }) => {
  if (!label || !value) {
    return;
  }

  return (
    <tr><th>{label}</th><td>{value}</td></tr>
  );
};

ObjectTableRow.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string
}

export default ObjectTableRow
