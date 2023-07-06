import {
  __toESM,
  require_jsx_dev_runtime
} from "/build/_shared/chunk-56THQXCK.js";

// app/routes/watches/params/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Boundaries() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: "Params" }, void 0, false, {
      fileName: "app/routes/watches/params/index.tsx",
      lineNumber: 4,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
      "When you name a route segment with $ like",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("code", { children: "routes/users/$userId.js" }, void 0, false, {
        fileName: "app/routes/watches/params/index.tsx",
        lineNumber: 7,
        columnNumber: 9
      }, this),
      ", the $ segment will be parsed from the URL and sent to your loaders and actions by the same name."
    ] }, void 0, true, {
      fileName: "app/routes/watches/params/index.tsx",
      lineNumber: 5,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: "Errors" }, void 0, false, {
      fileName: "app/routes/watches/params/index.tsx",
      lineNumber: 10,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "When a route throws an error in it's action, loader, or component, Remix automatically catches it, won't even try to render the component, but it will render the route's ErrorBoundary instead. If the route doesn't have one, it will bubble up to the routes above it until it hits the root." }, void 0, false, {
      fileName: "app/routes/watches/params/index.tsx",
      lineNumber: 11,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "So be as granular as you want with your error handling." }, void 0, false, {
      fileName: "app/routes/watches/params/index.tsx",
      lineNumber: 17,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: "Not Found" }, void 0, false, {
      fileName: "app/routes/watches/params/index.tsx",
      lineNumber: 18,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
      "(and other",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#client_error_responses", children: "client errors" }, void 0, false, {
        fileName: "app/routes/watches/params/index.tsx",
        lineNumber: 21,
        columnNumber: 9
      }, this),
      ")"
    ] }, void 0, true, {
      fileName: "app/routes/watches/params/index.tsx",
      lineNumber: 19,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
      "Loaders and Actions can throw a ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("code", { children: "Response" }, void 0, false, {
        fileName: "app/routes/watches/params/index.tsx",
        lineNumber: 27,
        columnNumber: 41
      }, this),
      " instead of an error and Remix will render the CatchBoundary instead of the component. This is great when loading data from a database isn't found. As soon as you know you can't render the component normally, throw a 404 response and send your app into the catch boundary. Just like error boundaries, catch boundaries bubble, too."
    ] }, void 0, true, {
      fileName: "app/routes/watches/params/index.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/watches/params/index.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}
export {
  Boundaries as default
};
//# sourceMappingURL=/build/routes/watches/params/index-KUZJARGH.js.map
