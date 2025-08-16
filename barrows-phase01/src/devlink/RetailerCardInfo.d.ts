import * as React from "react";
import * as Types from "./types";

declare function RetailerCardInfo(props: {
  as?: React.ElementType;
  bottomImage?: Types.Asset.Image;
  topImage?: Types.Asset.Image;
  logo?: Types.Asset.Image;
  product?: React.ReactNode;
}): React.JSX.Element;
