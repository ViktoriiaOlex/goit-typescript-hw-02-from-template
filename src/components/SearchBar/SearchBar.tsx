import { Field, Form, Formik } from "formik";
import { Toaster, toast } from "react-hot-toast";

import css from "./SearchBar.module.css";

interface SearchBarProps {
  onSubmit: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  const handleSubmit = (
    values: { query: string },
    {
      resetForm,
      setSubmitting,
    }: { resetForm: () => void; setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    if (!values.query || values.query.trim() === "") {
      notify();
      setSubmitting(false);
      return;
    }

    const results = values.query;
    onSubmit(results);
    resetForm();
    setSubmitting(false);
  };

  const notify = () => {
    toast.error("Sorry, there is no search query!", {
      duration: 5000,
      position: "top-right",
      style: {
        background: "#ff0",
        color: "#212121",
      },
    });
  };

  return (
    <header>
      <Formik initialValues={{ query: "" }} onSubmit={handleSubmit}>
        {({ isSubmitting }) => (
          <Form className={css.form}>
            <Field
              className={css.input}
              type="text"
              name="query"
              autoComplete="off"
              placeholder="Search images and photos"
              autoFocus
            />
            <button type="submit" disabled={isSubmitting}>
              Search
            </button>
          </Form>
        )}
      </Formik>
      <Toaster />
    </header>
  );
};

export default SearchBar;
