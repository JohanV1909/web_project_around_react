
import { useState } from "react";

type CardProps = {
  name: string;
  link: string;
};

function Card({ name, link }: CardProps) {
  const [isLiked, setIsLiked] = useState<boolean>(false);

  return (
    <li className="card">
      <img
        className="card__image"
        src={link}
        alt={name}
      />

      <div className="card__description">
        <h2 className="card__title">{name}</h2>

        <button
          className={`card__like-button ${isLiked ? "card__like-button_is-active" : ""}`}
          type="button"
          aria-label="Me gusta"
          onClick={() => setIsLiked(!isLiked)}
        />
      </div>
    </li>
  );
}

export default Card;
