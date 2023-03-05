import { Divider } from "@mui/material";
import React from "react";
import img from "../img/imgMentalSupport.jpg";
import { mentalSupportDiscription } from "../utils/constants";

const MentalSupport = () => {
  const blockStyle = {
    display: "flex",
    flexDirection: "row",
    paddingTop: "20px",
    paddingBottom: "20px",
  };
  const dividerStyle = {
    height: "1px",
    background: "var(--gradient-primary)",
  };
  const discription =
    "Группа поддержка — это пространство, где каждый человек может обсудить любую, беспокоящую его тему с другими участниками, выговориться, почувствовать себя услышанным, получить от других обратную связь о тревожащей его ситуации. ";
  const discription2 =
    "Если вы испытываете беспокойство в связи с происходящими политическими событиями или личными обстоятельствами, вы можете присоединиться к группе поддержке, рассказать о беспокоящей вас ситуации.";
  const discription3 =
    "Если вас беспокоит та или иная ситуация, вы можете рассказать об этой ситуации (устно на видеовстрече или в письменном виде) и попросить у других участников группы, чтобы они дали вам обратную связь. Вы сами можете сказать о том, какого именно отклика вы ждете в первую очередь. ";
  const discription4 =
    "Другие участники могут просто выразить вам поддержку, сочувствие, подтвердить, что они понимают вас и что эмоции и реакции, которые у вас возникают в этой ситуации совершенно нормальны.";
  const discription5 =
    "В тяжелом эмоциональном состоянии мы склонны фокусировать свое внимание на проблемах и негативе, в то время как позитивные аспекты ситуации часто не замечаются. Вы можете попросить других участников, чтобы они помогли вам обратить внимание на собственные сильные стороны, позитивные качества, ресурсы, обстоятельства, подкрепляющие надежду, оптимизм и веру в себя.";
  const discription6 =
    "Вы можете попросить других участников группы, чтобы они поделились своим опытом, каким образом они справлялись в подобных ситуациях. ";
  const discription7 =
    "Вы можете попросить поделиться определенной информацией, например, где можно найти квалифицированного специалиста.";
  return (
    <div className="pageStyle">
      <p className="title-h4">Зачем нужна группа поддержки?</p>
      <br />
      <div style={blockStyle}>
        <p
          className="title-text"
          style={{
            width: "50%",
          }}
        >
          {discription}
        </p>
        <p
          className="title-text"
          style={{
            width: "50%",
          }}
        >
          {discription2}
        </p>
      </div>
      <img
        src={img}
        alt="Логотип Сила Любви"
        style={{
          paddingTop: "20px",
          paddingBottom: "20px",
          width: "100%",
          height: "580px",
          borderRadius: "10px",
        }}
      />
      <br />
      <div style={blockStyle}>
        <p className="title-h4" style={{ width: "50%" }}>
          Как работает группа поддержки?
        </p>
        <p className="title-text" style={{ width: "50%" }}>
          {discription3}
        </p>
      </div>
      <Divider sx={dividerStyle} />
      {mentalSupportDiscription().map((item, index) => (
        <div key={index}>
          <div style={blockStyle} >
            <p className="title-title" style={{ width: "50%" }}>
              {item.title}
            </p>
            <p className="title-text" style={{ width: "50%" }}>
              {item.discription}
            </p>
          </div>
          <Divider sx={{...dividerStyle, opacity: '0.4'}} />
        </div>
      ))}
    </div>
  );
};

export default MentalSupport;
