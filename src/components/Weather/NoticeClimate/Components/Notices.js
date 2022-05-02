import React from "react";
import { useTranslation } from "react-i18next";

const Notices = (props) => {
  const [t] = useTranslation("global");
  let filterImage = [];
  props.notices.map((notice) => {
    if (notice.image) {
      if (filterImage.length === 6) {
        return filterImage;
      } else {
        filterImage.push(notice);
      }
    }
    return filterImage;
  });
  return (
    <div className="container-notices-wrap">
      {filterImage.map((notice, index) => {
        return (
          <a
            className="container-notice"
            key={index}
            id={`number${index}`}
            href={notice.url}
            target="_blank"
            rel="noreferrer"
          >
            <div className="header-notice">
              <div className="source">
                {notice.source}:{" "}
                {notice.category === "general" ? t("weather") : notice.category}
              </div>
              <span className="notice-title">
                {notice.title}
                <br></br>
              </span>
            </div>
            <div className="container-description">
              <img
                className="notice-image"
                src={notice.image}
                alt={notice.title}
              ></img>
            </div>
          </a>
        );
      })}
    </div>
  );
};

export default Notices;
