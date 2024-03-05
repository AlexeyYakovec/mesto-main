// buttons
const addButton = document.querySelector(".profile__add-button");
const editButton = document.querySelector(".profile__edit");

// Container and photo template (Контейнер и шаблон для фото)
const photoContainer = document.querySelector(".photo-grid");
const photoTemplate = document.querySelector("#photo-grid-template");

// popap
const popupProfile = document.querySelector(".popup_type_profile");
const popupPhoto = document.querySelector(".popup_type_photo");
const closeProfileButton = document.querySelector(".popup_close");
const closePhotoButton = document.querySelector(".popup_close");

const popupModal = document.querySelector(".popup_type_modal");
const modalClose = popupModal.querySelector(".popup__close");
const modalSrc = popupModal.querySelector(".popup__pic");
const modalTitle = popupModal.querySelector(".popup__pic-caption");

// profile form
const formProfile = document.querySelector(".form_type_profile");
const nameInput = document.querySelector(".form__input_type_name");
const jobInput = document.querySelector(".form__input_type_job");
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__job");

// photo
const formPhoto = document.querySelector(".form_type_photo");
const inputList = Array.from(formPhoto.querySelectorAll(".form__input"));
const buttonElement = formPhoto.querySelector(".form__submit");
const photoTitleInput = document.querySelector(".form__input_type_title");
const photoLinkInput = document.querySelector(".form__input_type_src");

function addPhoto(name, link) {
  const newPhoto = photoTemplate.content
    .querySelector(".photo-grid__item")
    .cloneNode(true);

  const photoSrc = newPhoto.querySelector(".photo-grid__pic");
  const photoTitle = newPhoto.querySelector(".photo-grid__title");

  const deleteButton = newPhoto.querySelector(".photo-grid__delete");
  const likeButton = newPhoto.querySelector(".photo-grid__like");

  photoTitle.textContent = name;
  photoSrc.alt = name;
  photoSrc.src = link;

  return newPhoto;
}

// Подгружаем первые карточки (из initial-cards.js)
initialCards.forEach((item) => {
  const newCard = addPhoto(item.name, item.link);
  photoContainer.append(newCard);
});
