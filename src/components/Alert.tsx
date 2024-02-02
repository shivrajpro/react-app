import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  closeClicked: any;
}

const Alert = ({ children, closeClicked }: Props) => {
  return (
    <>
      {/* {children} */}
      <div className="alert alert-primary" role="alert">
        <div
          className="alert alert-warning alert-dismissible fade show"
          role="alert"
        >
          <strong>Holy guacamole!</strong> You should check in on some of those
          fields below.
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
            onClick={closeClicked}
          ></button>
        </div>
      </div>
    </>
  );
};

export default Alert;
