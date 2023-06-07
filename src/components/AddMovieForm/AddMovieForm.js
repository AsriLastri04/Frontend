import styles from "./AddMovieForm.module.css";

function AddMovieForm() {
    return (
        <div className={styles.container}>
            <section className={styles.AddForm}>
                <div className={styles.AddForm__left}>
                    <img className={styles.AddForm__gambar}src="https://picsum.photos/400/300" alt="" />
                </div>
                <div className={styles.AddForm__right}>
                    <form className={styles.AddForm__form}>
                        <h2 className={styles.AddForm__title}> Add Movie </h2>
                        <label className={styles.label}>Title <input className={styles.label__judul} type="text"  /></label>
                        <label className={styles.label}> Year <input className={styles.label__Year}type="date"  /></label>
                        <button className={styles.AddForm__button}type="submit">Submit</button>
                    </form>
                </div>
            </section>
        
      </div>
    )
}

export default AddMovieForm;
