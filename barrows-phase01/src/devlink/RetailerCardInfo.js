"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./RetailerCardInfo.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-2":{"id":"e-2","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"b859aa7c-a284-47ee-6c09-7222ffa3483a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"b859aa7c-a284-47ee-6c09-7222ffa3483a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1749302383688},"e-3":{"id":"e-3","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-3","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-11"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"b859aa7c-a284-47ee-6c09-7222ffa3483a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"b859aa7c-a284-47ee-6c09-7222ffa3483a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1749302383688},"e-8":{"id":"e-8","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-7","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-9"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"77280b87-74c7-7c57-2806-b6074cd24f6c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"77280b87-74c7-7c57-2806-b6074cd24f6c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1749927363008},"e-9":{"id":"e-9","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-8"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"77280b87-74c7-7c57-2806-b6074cd24f6c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"77280b87-74c7-7c57-2806-b6074cd24f6c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1749927363008},"e-10":{"id":"e-10","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-11"}},"mediaQueries":["main","medium","small","tiny"],"target":{"appliesTo":"ELEMENT","styleBlockIds":[],"id":"2270821b-a3f9-7fb4-e05f-cf5eb13710d8"},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1750069226603},"e-11":{"id":"e-11","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-3","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-10"}},"mediaQueries":["main","medium","small","tiny"],"target":{"appliesTo":"ELEMENT","styleBlockIds":[],"id":"2270821b-a3f9-7fb4-e05f-cf5eb13710d8"},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1750069226603}},"actionLists":{"a-2":{"id":"a-2","title":"retailer-reveal","actionItemGroups":[{"actionItems":[{"id":"a-2-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".top-image","selectorGuids":["b8e3790d-f8e6-890a-fb7f-25006f6a1829"]},"value":1,"unit":""}}]},{"actionItems":[{"id":"a-2-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":250,"target":{"useEventTarget":"CHILDREN","selector":".top-image","selectorGuids":["b8e3790d-f8e6-890a-fb7f-25006f6a1829"]},"value":0,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1749302400581},"a-3":{"id":"a-3","title":"retailer-reveal-out","actionItemGroups":[{"actionItems":[{"id":"a-3-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":250,"target":{"useEventTarget":"CHILDREN","selector":".top-image","selectorGuids":["b8e3790d-f8e6-890a-fb7f-25006f6a1829"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1749302400581},"a-7":{"id":"a-7","title":"retailer-reveal 2","actionItemGroups":[{"actionItems":[{"id":"a-7-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".top-image","selectorGuids":["b8e3790d-f8e6-890a-fb7f-25006f6a1829"]},"value":1,"unit":""}},{"id":"a-7-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".logo-overlay","selectorGuids":["6a23e29a-bb4a-311e-6e94-b72ef615c78d"]},"value":1,"unit":""}}]},{"actionItems":[{"id":"a-7-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":250,"target":{"useEventTarget":"CHILDREN","selector":".top-image","selectorGuids":["b8e3790d-f8e6-890a-fb7f-25006f6a1829"]},"value":0,"unit":""}},{"id":"a-7-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":250,"target":{"useEventTarget":"CHILDREN","selector":".logo-overlay","selectorGuids":["6a23e29a-bb4a-311e-6e94-b72ef615c78d"]},"value":0,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1749302400581},"a-8":{"id":"a-8","title":"retailer-reveal-out 2","actionItemGroups":[{"actionItems":[{"id":"a-8-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":250,"target":{"useEventTarget":"CHILDREN","selector":".top-image","selectorGuids":["b8e3790d-f8e6-890a-fb7f-25006f6a1829"]},"value":1,"unit":""}},{"id":"a-8-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":250,"target":{"useEventTarget":"CHILDREN","selector":".logo-overlay","selectorGuids":["6a23e29a-bb4a-311e-6e94-b72ef615c78d"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1749302400581}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function RetailerCardInfo({
  as: _Component = _Builtin.Block,
  bottomImage = "https://cdn.prod.website-files.com/6850126bae0232269c4a1dcc/6850126bae0232269c4a1e19_Tesco%202_Before.avif",
  topImage = "https://cdn.prod.website-files.com/6850126bae0232269c4a1dcc/6850126bae0232269c4a1e08_Tesco%202_After.avif",
  logo = "https://cdn.prod.website-files.com/6850126bae0232269c4a1dcc/6850126bae0232269c4a1ded_Logo%20Container.svg",
  product = "Item Name",
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "retail-card")}
      tag="div"
      data-reveal-blur="true"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "image-card01")}
        data-w-id="77280b87-74c7-7c57-2806-b6074cd24f6c"
        tag="div"
      >
        <_Builtin.Image
          className={_utils.cx(_styles, "bottom-image")}
          width="auto"
          height="auto"
          loading="lazy"
          alt="Real in store application"
          src={bottomImage}
        />
        <_Builtin.Image
          className={_utils.cx(_styles, "top-image")}
          width="auto"
          height="auto"
          loading="lazy"
          alt="Overlay in store application"
          src={topImage}
        />
      </_Builtin.Block>
      <_Builtin.Block className={_utils.cx(_styles, "div-block-19")} tag="div">
        <_Builtin.Image
          className={_utils.cx(_styles, "logo-overlay")}
          width="auto"
          height="auto"
          loading="lazy"
          alt="Logo"
          src={logo}
        />
        <_Builtin.Block
          className={_utils.cx(_styles, "sub04-small-line")}
          tag="div"
        >
          {product}
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
