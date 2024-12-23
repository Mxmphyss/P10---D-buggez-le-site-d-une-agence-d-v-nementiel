import PropTypes from "prop-types";
import { getMonth } from "../../helpers/Date";

import "./style.scss";

const EventCard = ({
  imageSrc,
  imageAlt,
  date = new Date(),
  title,
  label,
  small = false,
  ...props
<<<<<<< HEAD
}) => {

  console.log('imageSrc:', imageSrc);
  console.log('title:', title);
  console.log('label:', label);
  console.log("Props reçues par EventCard :", { imageSrc, imageAlt, date, title, label });

(
=======
}) => (
>>>>>>> e2d933c4405696e5abc2d05d8187441fb802cab3

    <div
      data-testid="card-testid"
      className={`EventCard${small ? " EventCard--small" : ""}`}
      {...props}
    >
      <div className="EventCard__imageContainer">
        <img data-testid="card-image-testid" src={imageSrc} alt={imageAlt} />
        <div className="EventCard__label">{label}</div>
      </div>
      <div className="EventCard__descriptionContainer">
        <div className="EventCard__title">{title}</div>
        <div className="EventCard__month">{getMonth(date)}</div>
      </div>
    </div>
  );
<<<<<<< HEAD
};
=======
>>>>>>> e2d933c4405696e5abc2d05d8187441fb802cab3

EventCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  imageAlt: PropTypes.string,
  date: PropTypes.instanceOf(Date).isRequired,
  title: PropTypes.string.isRequired,
  small: PropTypes.bool,
  label: PropTypes.string.isRequired,
};

EventCard.defaultProps = {
  imageAlt: "image",
  small: false,
}

export default EventCard;