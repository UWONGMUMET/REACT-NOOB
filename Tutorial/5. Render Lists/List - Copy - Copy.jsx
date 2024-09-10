import React from "react";
import PropTypes from "prop-types";
import "./List.css";

const List = ({ category, items }) => {
  const listItems = items.map(({ id, name, calories }) => (
    <li key={id}>
      {name}: <b>{calories}</b> calories
    </li>
  ));

  return (
    <div>
      <h3 className="list-category">{category}</h3>
      <ol className="list-items">{listItems}</ol>
    </div>
  );
};

List.propTypes = {
  category: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      calories: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default List;