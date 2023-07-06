import {
  init_esm,
  useCatch,
  useLoaderData
} from "/build/_shared/chunk-5KNBGYPJ.js";
import {
  __toESM,
  require_jsx_dev_runtime
} from "/build/_shared/chunk-56THQXCK.js";

// app/routes/watches/params/$id.tsx
init_esm();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function ParamDemo() {
  const data = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: [
    "The param is ",
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", { style: { color: "red" }, children: data.param }, void 0, false, {
      fileName: "app/routes/watches/params/$id.tsx",
      lineNumber: 45,
      columnNumber: 20
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/watches/params/$id.tsx",
    lineNumber: 44,
    columnNumber: 5
  }, this);
}
function CatchBoundary() {
  const caught = useCatch();
  let message;
  switch (caught.status) {
    case 401:
      message = /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
        "Looks like you tried to visit a page that you do not have access to. Maybe ask the webmaster (",
        caught.data.webmasterEmail,
        ") for access."
      ] }, void 0, true, {
        fileName: "app/routes/watches/params/$id.tsx",
        lineNumber: 60,
        columnNumber: 9
      }, this);
      break;
    case 404:
      message = /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Looks like you tried to visit a page that does not exist." }, void 0, false, {
        fileName: "app/routes/watches/params/$id.tsx",
        lineNumber: 68,
        columnNumber: 9
      }, this);
      break;
    default:
      message = /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
        "There was a problem with your request!",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
          fileName: "app/routes/watches/params/$id.tsx",
          lineNumber: 75,
          columnNumber: 11
        }, this),
        caught.status,
        " ",
        caught.statusText
      ] }, void 0, true, {
        fileName: "app/routes/watches/params/$id.tsx",
        lineNumber: 73,
        columnNumber: 9
      }, this);
      break;
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: "Oops!" }, void 0, false, {
      fileName: "app/routes/watches/params/$id.tsx",
      lineNumber: 84,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: message }, void 0, false, {
      fileName: "app/routes/watches/params/$id.tsx",
      lineNumber: 85,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "(Isn't it cool that the user gets to stay in context and try a different link in the parts of the UI that didn't blow up?)" }, void 0, false, {
      fileName: "app/routes/watches/params/$id.tsx",
      lineNumber: 86,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/watches/params/$id.tsx",
    lineNumber: 83,
    columnNumber: 5
  }, this);
}
function ErrorBoundary({ error }) {
  console.error(error);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: "Error!" }, void 0, false, {
      fileName: "app/routes/watches/params/$id.tsx",
      lineNumber: 100,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: error.message }, void 0, false, {
      fileName: "app/routes/watches/params/$id.tsx",
      lineNumber: 101,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "(Isn't it cool that the user gets to stay in context and try a different link in the parts of the UI that didn't blow up?)" }, void 0, false, {
      fileName: "app/routes/watches/params/$id.tsx",
      lineNumber: 102,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/watches/params/$id.tsx",
    lineNumber: 99,
    columnNumber: 5
  }, this);
}
var meta = ({ data }) => {
  return {
    title: data ? `Param: ${data.param}` : "Oops..."
  };
};
export {
  CatchBoundary,
  ErrorBoundary,
  ParamDemo as default,
  meta
};
//# sourceMappingURL=/build/routes/watches/params/$id-T65JPBGX.js.map
