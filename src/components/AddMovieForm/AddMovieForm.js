import styles from "./AddMovieForm.module.css";
import { nanoid } from "nanoid";
import { useState } from "react";
import Error from "../Error/Error";
function AddMovieForm(props) {
  const { movies, setMovies } = props;

  const [title, setTitle] = useState("");
  const [isTitleError, setIsTitleError] = useState(false);
  const [date, setDate] = useState("");
  const [isDateError, setIsDateError] = useState(false);
  const [select, setSelect] = useState("");
  const [image, setImage] = useState("");
  const [isImageError, setIsImageError] = useState(false);

  function handleInputChange(event) {
    setTitle(event.target.value);
  }
  function handleInputDate(event) {
    setDate(event.target.value);
  }
  function handleInputImage(event) {
    setImage(event.target.value);
  }
  function handleInputSelect(event) {
    setSelect(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();

    if (title === "") {
      setIsTitleError(true);
      return;
    }
    if (date === "") {
      setIsDateError(true);
      return;
    } else if (image === "") {
      setIsImageError(true);
      return;
    }
    const newMovie = {
      id: nanoid(),
      title: title,
      year: date,
      type: "",
      poster: image,
    };
    setMovies([...movies, newMovie]);

    setIsTitleError(false);
    setIsDateError(false);
    setIsImageError(false);
  }

  return (
    <div className={styles.container}>
      <section className={styles.AddForm}>
        <div className={styles.AddForm__left}>
          <img
            className={styles.AddForm__gambar}
            src="https://picsum.photos/400/300"
            alt=""
          />
        </div>
        <div className={styles.AddForm__right}>
          <form className={styles.AddForm__form}>
            <h2 className={styles.AddForm__title}> Add Movie </h2>

            <label className={styles.label}>
              Title
              <input
                value={title}
                onChange={handleInputChange}
                className={styles.label__judul}
                type="text"
              />
              {isTitleError ? <Error> Title Wajib diisi </Error> : ""}
            </label>

            <label className={styles.label}>
              Year
              <input
                value={date}
                onChange={handleInputDate}
                className={styles.label__Year}
                type="text"
              />
              {isDateError ? <Error> Date Wajib diisi </Error> : ""}
            </label>
            <div>
              <label
                value={image}
                onChange={handleInputImage}
                className={styles.label}
              >
                Picture
                <input className={styles.label__select} type="text" />
                {isImageError ? <Error> Picture Wajib diisi </Error> : ""}
              </label>
            </div>
            <div className={styles.label}>
              <label for="type"> Genre </label>

              <select
                value={select}
                onChange={handleInputSelect}
                name="poster"
                id="poster"
                className={styles.label__select}
              >
                <option value="Action">Action</option>
                <option value="Drama">Drama</option>
                <option value="Horor">Horor</option>
                <option value="Comedy">Comedy</option>
                <option value="Romance">Romance</option>
              </select>
            </div>

            <button
              onClick={handleSubmit}
              className={styles.AddForm__button}
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default AddMovieForm;
