import css from "./ErrorMessage.module.css";

const ErrorMessage = () => {
    return (
      <div className={css.errorContainer}>
        <p>
          Oops! Something went wrong while fetching images. Please refresh the
          page and try again.
        </p>
      </div>
    );
  };
  
  export default ErrorMessage;