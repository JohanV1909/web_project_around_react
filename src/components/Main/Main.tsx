
import Card from "../Card/Card";

const initialCards = [
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg",
  },
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
  },
];


export default function Main(): React.JSX.Element {
  return (
    <main className="content">
      <section className="profile page__section">
        <button
          className="profile__avatar-button"
          type="button"
          aria-label="Cambiar foto de perfil"
        >
          <img
            className="profile__image"
            src="/images/avatar.jpg"
            alt="Avatar"
          />
        </button>

        <div className="profile__info">
          <h1 className="profile__title">Jacques Cousteau</h1>

          <button
            aria-label="Editar perfil"
            className="profile__edit-button"
            type="button"
          />

          <p className="profile__description">
            Explorador
          </p>
        </div>

        <button
          aria-label="Agregar tarjeta"
          className="profile__add-button"
          type="button"
        />
      </section>

      <section className="cards page__section">
        <ul className="cards__list">
         
{initialCards.map((card) => (
  <Card
    key={card.name}
    name={card.name}
    link={card.link}
  />
))}

        </ul>
      </section>
    </main>
  );
}
