import React, { useEffect, useState } from "react";
import Notices from "./Components/Notices";
import "../../../css/NoticeClimate.css";

import getNotices from "../../../services/getNotices";
import { useContextLanguage } from "../../../context/languageContext";

const NoticeClimate = () => {
  const { language } = useContextLanguage();

  const [notices, setNotices] = useState("");

  useEffect(() => {
    const getNotice = async () => {
      const notices = await getNotices(language);
      setNotices(notices);
    };
    getNotice();
  }, [language]);
  return (
    <div className="container">
      {notices ? <Notices notices={notices.data.data}></Notices> : ""}
    </div>
  );
};

export default NoticeClimate;
