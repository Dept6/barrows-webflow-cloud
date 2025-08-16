import * as React from "react";
import * as Types from "./types";

declare function RetailPartnerCard(props: {
  as?: React.ElementType;
  before?: Types.Asset.Image;
  product?: React.ReactNode;
  after?: Types.Asset.Image;
  logo?: Types.Asset.Image;
}): React.JSX.Element;
