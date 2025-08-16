"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Footer.module.css";

export function Footer({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className={_utils.cx(_styles, "footer")} tag="div">
      <_Builtin.Image
        className={_utils.cx(_styles, "image-8")}
        loading="lazy"
        width="auto"
        height="auto"
        data-reveal-image="true"
        alt=""
        src="https://cdn.prod.website-files.com/6850126bae0232269c4a1dcc/6850126bae0232269c4a1dff_Logo-stacked.svg"
      />
      <_Builtin.Block className={_utils.cx(_styles, "location-wrap")} tag="div">
        <_Builtin.Block
          className={_utils.cx(_styles, "location-block")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "sub05")}
            tag="div"
            id="location-name"
          >
            {"New York"}
          </_Builtin.Block>
          <_Builtin.Block className={_utils.cx(_styles, "sub04")} tag="div">
            {"920 Broadway "}
            <br />
            {"3rd Floor "}
            <br />
            {"New York"}
            <br />
            {"NY10010"}
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "sub05")}
            tag="div"
            data-timezone="America/New_York"
          >
            {"06:21"}
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block className={_utils.cx(_styles, "seperator")} tag="div" />
        <_Builtin.Block
          className={_utils.cx(_styles, "location-block")}
          tag="div"
        >
          <_Builtin.Block className={_utils.cx(_styles, "sub05")} tag="div">
            {"London"}
          </_Builtin.Block>
          <_Builtin.Block className={_utils.cx(_styles, "sub04")} tag="div">
            {"23 Lonsdale "}
            <br />
            {"RoadLondon "}
            <br />
            {"NW6 6RA"}
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "sub05")}
            tag="div"
            data-timezone="Europe/London"
          >
            {"06:21"}
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block className={_utils.cx(_styles, "seperator")} tag="div" />
        <_Builtin.Block
          className={_utils.cx(_styles, "location-block")}
          tag="div"
        >
          <_Builtin.Block className={_utils.cx(_styles, "sub05")} tag="div">
            {"Cape Town"}
          </_Builtin.Block>
          <_Builtin.Block className={_utils.cx(_styles, "sub04")} tag="div">
            {"25 Bell Cres"}
            <br />
            {"Westlake"}
            <br />
            {"Cape Town"}
            <br />
            {"7945"}
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "sub05")}
            tag="div"
            data-timezone="Africa/Johannesburg"
          >
            {"06:21"}
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block className={_utils.cx(_styles, "seperator")} tag="div" />
        <_Builtin.Block
          className={_utils.cx(_styles, "location-block")}
          tag="div"
        >
          <_Builtin.Block className={_utils.cx(_styles, "sub05")} tag="div">
            {"Durban"}
          </_Builtin.Block>
          <_Builtin.Block className={_utils.cx(_styles, "sub04")} tag="div">
            {"Pran 4A Pranpark "}
            <br />
            {"20 Mzimkhulu Drive "}
            <br />
            {"La Mercy"}
            <br />
            {"Durban"}
            <br />
            {"4405"}
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "sub05")}
            tag="div"
            data-timezone="Africa/Johannesburg"
          >
            {"06:21"}
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block className={_utils.cx(_styles, "footer-code")} tag="div">
        <_Builtin.HtmlEmbed value="%3Cscript%3E%0Afunction%20updateTimes()%20%7B%0A%20%20%20%20const%20now%20%3D%20new%20Date()%3B%0A%20%20%20%20%0A%20%20%20%20%2F%2F%20Find%20all%20elements%20with%20timezone%20data%20attribute%0A%20%20%20%20const%20timeElements%20%3D%20document.querySelectorAll('%5Bdata-timezone%5D')%3B%0A%20%20%20%20%0A%20%20%20%20timeElements.forEach(element%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20try%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20const%20timezone%20%3D%20element.getAttribute('data-timezone')%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20if%20(timezone)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20const%20localTime%20%3D%20new%20Date(now.toLocaleString(%22en-US%22%2C%20%7BtimeZone%3A%20timezone%7D))%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20Format%20time%20with%20seconds%20(24-hour%20format)%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20const%20timeString%20%3D%20localTime.toLocaleTimeString('en-GB'%2C%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20hour%3A%20'2-digit'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20minute%3A%20'2-digit'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20second%3A%20'2-digit'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20hour12%3A%20false%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20element.textContent%20%3D%20timeString%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%20catch%20(error)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20console.error(%60Error%20updating%20timezone%3A%60%2C%20error)%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%7D)%3B%0A%7D%0A%0A%2F%2F%20Update%20times%20immediately%0AupdateTimes()%3B%0A%0A%2F%2F%20Update%20every%20second%0AsetInterval(updateTimes%2C%201000)%3B%0A%3C%2Fscript%3E" />
      </_Builtin.Block>
    </_Component>
  );
}
