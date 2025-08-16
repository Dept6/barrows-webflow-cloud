"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Navigation.module.css";

export function Navigation({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className={_utils.cx(_styles, "nav")} tag="div">
      <_Builtin.Link
        className={_utils.cx(_styles, "home-link-mobi")}
        button={false}
        block="inline"
        options={{
          href: "#",
        }}
      >
        <_Builtin.Image
          className={_utils.cx(_styles, "image", "mobi")}
          loading="lazy"
          width="auto"
          height="auto"
          alt=""
          src="https://cdn.prod.website-files.com/6850126bae0232269c4a1dcc/6850126bae0232269c4a1dff_Logo-stacked.svg"
        />
      </_Builtin.Link>
      <_Builtin.Link
        className={_utils.cx(_styles, "home-link")}
        button={false}
        block="inline"
        options={{
          href: "#",
        }}
      >
        <_Builtin.Image
          className={_utils.cx(_styles, "image")}
          loading="lazy"
          width="auto"
          height="auto"
          alt=""
          src="https://cdn.prod.website-files.com/6850126bae0232269c4a1dcc/6850126bae0232269c4a1dee_bcs-logo.svg"
        />
      </_Builtin.Link>
      <_Builtin.Block
        className={_utils.cx(_styles, "nav-contact-wrap")}
        tag="div"
      >
        <_Builtin.Link
          className={_utils.cx(_styles, "nav-main-button")}
          button={true}
          block=""
          options={{
            href: "#",
          }}
        >
          {"Connect With Us"}
        </_Builtin.Link>
      </_Builtin.Block>
    </_Component>
  );
}
