import {
  require_ssr
} from "/build/_shared/chunk-V4P7LV3Q.js";
import {
  Link,
  init_esm,
  useLoaderData
} from "/build/_shared/chunk-5KNBGYPJ.js";
import {
  __toESM,
  require_jsx_dev_runtime
} from "/build/_shared/chunk-56THQXCK.js";

// app/routes/demos/protected.tsx
var import_ssr = __toESM(require_ssr());
init_esm();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Protected() {
  const data = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "Protected" }, void 0, false, {
      fileName: "app/routes/demos/protected.tsx",
      lineNumber: 20,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: [
      "You're in! UserId is ",
      data.userId
    ] }, void 0, true, {
      fileName: "app/routes/demos/protected.tsx",
      lineNumber: 21,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "https://mytcreative.com", children: "mytCreative" }, void 0, false, {
      fileName: "app/routes/demos/protected.tsx",
      lineNumber: 22,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/demos/protected.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
}
export {
  Protected as default
};
//# sourceMappingURL=/build/routes/demos/protected-IUK43S4Y.js.map
