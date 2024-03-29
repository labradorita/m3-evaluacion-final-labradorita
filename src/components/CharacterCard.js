import React from "react";
import PropTypes from "prop-types";
import "../stylesheets/characterCard.scss";

const CharacterCard = props => {
  const { name, species, image } = props;
  return (
    <div className="card">
      <div className="card__img">
        <img src={image} alt={name}></img>
      </div>
      <section className="card__text">
        <h2 className="card__name">{name}</h2>
        <h3 className="card__species"> {species}</h3>
      </section>
    </div>
  );
};
export default CharacterCard;

CharacterCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired
};
