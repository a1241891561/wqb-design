import React, { FC, useState } from "react";
import classNames from "classnames";

export enum AlertType {
  Primary = "primary",
  Default = "default",
  Danger = "danger",
  Warning = "warning",
}

interface BaseAlertProps {
  className?: string;
  type?: AlertType;
  message: React.ReactNode;
  description?: React.ReactNode;
  closable?: boolean;
}

const Alert: FC<BaseAlertProps> = (props) => {
  const {
    className,
    type = AlertType.Default,
    message,
    description,
    closable = false,
  } = props;

  const [visible, setVisible] = useState(true);

  const classes = classNames("alert", className, {
    ["alert-" + type]: true,
  });

  return (
    <>
      {visible ? (
        <div className={classes}>
          <div
            className={classNames("title", {
              "big-title": description,
            })}
          >
            <div className={classNames("message")}>{message}</div>
            {closable && (
              <div
                onClick={() => {
                  setVisible(false);
                }}
                className="close"
              ></div>
            )}
          </div>
          <div className={classNames("description")}>{description}</div>
        </div>
      ) : null}
    </>
  );
};

export default Alert;
