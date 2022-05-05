import React, { useEffect, useState } from "react";
import Notices from "./Components/Notices";
import "css/NoticeClimate.css";

import getNotices from "services/getNotices";
import { useContextLanguage } from "context/languageContext";
import cookies from "cookie.js";

const NoticeClimate = () => {
  const { language } = useContextLanguage();

  const [notices, setNotices] = useState("");

  useEffect(() => {
    const getNotice = async () => {
      const location = cookies.get("location");
      const notices = await getNotices(language, location.countryCode);
      setNotices(notices);
    };
    getNotice();
  }, [language]);
  return (
    <div className="container">
      {notices ? <Notices notices={notices}></Notices> : ""}
    </div>
  );
};

export default NoticeClimate;
