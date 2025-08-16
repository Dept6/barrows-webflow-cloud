import * as React from "react";
import * as Types from "./types";

declare function RetailerCard(props: {
  as?: React.ElementType;
  logo?: Types.Asset.Image;
  reveal?: Types.Asset.Image;
  topImage?: Types.Asset.Image;
}): React.JSX.Element;
