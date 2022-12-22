import { FaCaretRight } from "react-icons/fa";
import { GrDocumentText } from "react-icons/gr";
import LineBreak from "src/components/LineBreak";

import classes from "./styles/AboutMe.module.scss";

const aboutMe = [
  "Mình là một web developer, học tập tại trường ĐH Khoa Học Tự Nhiên, hiện đang sinh sống tại TPHCM.",
  "Có khả năng làm việc nhóm tốt, luôn cố gắng tiếp thu, tìm tòi, học hỏi cái mới.",
  "Ngoài ra mình cũng đam mê các trò chơi điện tử, đặc biệt là các blockchain game.",
];

const AboutMe = () => {
  return (
    <div className={classes.AboutMe}>
      <div className={classes.leftContent}>
        <h2>Về phía tôi</h2>
        <LineBreak />
      </div>
      <div className={classes.rightContent}>
        <ul>
          {aboutMe.map((about) => (
            <li key={about}>
              <FaCaretRight className={classes.icon} />
              <span>{about}</span>
            </li>
          ))}
        </ul>
        <div className={classes.action}>
          <a href='/files/vuvinhhien-cv-Eng.pdf' download className={classes.downloadCVButton}>
            <GrDocumentText />
            <span>Tải CV</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
