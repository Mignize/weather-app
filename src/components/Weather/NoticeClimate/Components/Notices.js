import React from "react";

const Notices = (props) => {
  const { notices } = props;

  return (
    <div className="container-notices-wrap">
      {notices
        ? notices.map((notice, index) => {
            if (!notice.author || notice.author.slice(0, 5) === "https" || notice.author === "Autor") {
              notice.author = notice.rights;
            }
            return (
              <a
                className="container-notice"
                key={index}
                id={`number${index}`}
                href={notice.link}
                target="_blank"
                rel="noreferrer"
              >
                <div className="header-notice">
                  <div className="source">
                    {notice.author}:{` ${notice.topic}`}
                  </div>
                  <span className="notice-title">
                    {notice.title}
                    <br></br>
                  </span>
                </div>
                <div className="container-description">
                  <img
                    className="notice-image"
                    src={notice.media}
                    alt={notice.title}
                  ></img>
                </div>
              </a>
            );
          })
        : ""}
    </div>
  );
};

export default Notices;
