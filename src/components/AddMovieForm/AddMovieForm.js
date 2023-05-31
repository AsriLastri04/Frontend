import styles from "./AddMovieForm.module.css";
import { nanoid } from "nanoid";
import React, { useState } from "react";
import Error from "../Error/Error";
import Button from "../ui/Button/Button";

function AddMovieForm(props) {
  const { movies, setMovies } = props;
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    poster: "",
    type: "",
  });
  /* todo */

  const { title, date, poster, type } = formData;

  const [error, setError] = useState({
    isTitleError: false,
    isDateError: false,
    isposterError: false,
    isTypeError: false,
  });

  // membuat funsi untuk handle semua input form
  const { isTitleError, isDateError, isImageError, isTypeError } = error;

  function handleChange(e) {
    // Destructing name dan value.
    const { name, value } = e.target;

    /**
     * Mengupdate state berupa object:
     * - Menggunakan spread operator:
     * - Update property berdasarkan apapun nilai name.
     */
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function validate() {
    if (title === "") {
      setError({ ...error, isTitleError: true });
      return false;
    } else if (date === "") {
      setError({ ...error, isDateError: true, isTitleError: false });
      return false;
    } else if (poster === "") {
      setError({ ...error, isImageError: true, isDateError: false });
      return false;
    } else if (type === "") {
      setError({ ...error, istypeError: true, isImageError: false });
      return false;
    } else
      setError({
        ...error,
        isTitleError: false,
        isDateError: false,
        isImageError: false,
        isTypeError: false,
      });
    return true;
  }

  function addMovie() {
    const newMovie = {
      id: nanoid(),
      title: title,
      year: date,
      poster: poster,
      type: type,
    };

    setMovies([...movies, newMovie]);
    validate() && addMovie();
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
                id="title"
                value={title}
                onChange={handleChange}
                className={styles.label__judul}
                type="text"
                name="title"
              />
              {isTitleError ? <Error> Title Wajib diisi </Error> : ""}
            </label>

            <label className={styles.label}>
              Year
              <input
                id="date"
                value={date}
                onChange={handleChange}
                className={styles.label__Year}
                type="text"
                name="date"
              />
              {isDateError ? <Error> Date Wajib diisi </Error> : ""}
            </label>
            <div className={styles.label}>
              Picture
              <input
                id="poster"
                value={poster}
                onChange={handleChange}
                className={styles.label__select}
                type="text"
                name="poster"
              />
              {isImageError ? <Error> Picture Wajib diisi </Error> : ""}
            </div>
            <div className={styles.label}>
              <label htmlFor="type"> Genre </label>
              <select
                value={type}
                onChange={handleChange}
                name="type"
                id="type"
                className={styles.label__select}
              >
                <option value="">Pilih Genre</option>
                <option value="Action">Action</option>
                <option value="Drama">Drama</option>
                <option value="Horor">Horor</option>
                <option value="Comedy">Comedy</option>
                <option value="Romance">Romance</option>
              </select>
              {isTypeError ? <Error> Type Wajib diisi </Error> : ""}
            </div>

            <Button onClick={addMovie}>Add Movie Form</Button>
          </form>
        </div>
      </section>
    </div>
  );
}
export default AddMovieForm;
