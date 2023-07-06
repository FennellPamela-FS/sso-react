import {
  Outlet,
  init_esm
} from "/build/_shared/chunk-5KNBGYPJ.js";
import {
  __toESM,
  require_jsx_dev_runtime
} from "/build/_shared/chunk-56THQXCK.js";

// app/routes/demos/about.tsx
init_esm();

// app/styles/demos/about.css
var about_default = "/build/_assets/about-CNRDHDBF.css";

// app/routes/demos/about.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var meta = () => {
  return {
    title: "About Remix"
  };
};
var links = () => {
  return [{ rel: "stylesheet", href: about_default }];
};
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "about", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "about__intro", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: "About Us" }, void 0, false, {
      fileName: "app/routes/demos/about.tsx",
      lineNumber: 20,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
      "Ok, so this page isn't really ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("em", { children: "about us" }, void 0, false, {
        fileName: "app/routes/demos/about.tsx",
        lineNumber: 22,
        columnNumber: 41
      }, this),
      ", but we did want to show you a few more things Remix can do."
    ] }, void 0, true, {
      fileName: "app/routes/demos/about.tsx",
      lineNumber: 21,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
      "Did you notice that things look a little different on this page? The CSS that we import in the route file and include in its",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("code", { children: "links" }, void 0, false, {
        fileName: "app/routes/demos/about.tsx",
        lineNumber: 28,
        columnNumber: 11
      }, this),
      " export is only included on this route and its children."
    ] }, void 0, true, {
      fileName: "app/routes/demos/about.tsx",
      lineNumber: 25,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
      "Wait a sec...",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("em", { children: "its children" }, void 0, false, {
        fileName: "app/routes/demos/about.tsx",
        lineNumber: 32,
        columnNumber: 24
      }, this),
      "? To understand what we mean by this,",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "https://remix.run/tutorial/4-nested-routes-params", children: "read all about nested routes in the docs" }, void 0, false, {
        fileName: "app/routes/demos/about.tsx",
        lineNumber: 34,
        columnNumber: 11
      }, this),
      "."
    ] }, void 0, true, {
      fileName: "app/routes/demos/about.tsx",
      lineNumber: 31,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("hr", {}, void 0, false, {
      fileName: "app/routes/demos/about.tsx",
      lineNumber: 39,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
      fileName: "app/routes/demos/about.tsx",
      lineNumber: 40,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/demos/about.tsx",
    lineNumber: 19,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/demos/about.tsx",
    lineNumber: 18,
    columnNumber: 5
  }, this);
}
export {
  Index as default,
  links,
  meta
};
//# sourceMappingURL=/build/routes/demos/about-2WZYXS7R.js.map
