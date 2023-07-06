import {
  Link,
  init_esm,
  useLoaderData
} from "/build/_shared/chunk-5KNBGYPJ.js";
import {
  __toESM,
  require_jsx_dev_runtime
} from "/build/_shared/chunk-56THQXCK.js";

// app/routes/index.tsx
init_esm();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var meta = () => ({
  title: "Remix Starter",
  description: "Welcome to remix!"
});
function Index() {
  const data = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "remix__page", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: "Welcome to Remix!" }, void 0, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 80,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "We're stoked that you're here. \u{1F973}" }, void 0, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 81,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Feel free to take a look around the code to see how Remix does things, it might be a bit different than what you\u2019re used to. When you're ready to dive deeper, we've got plenty of resources to get you up-and-running quickly." }, void 0, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 82,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
        "Check out all the demos in this starter, and then just delete the",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("code", { children: "app/routes/demos" }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 90,
          columnNumber: 11
        }, this),
        " and ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("code", { children: "app/styles/demos" }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 90,
          columnNumber: 45
        }, this),
        " ",
        "folders when you're ready to turn this into your next project."
      ] }, void 0, true, {
        fileName: "app/routes/index.tsx",
        lineNumber: 88,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/index.tsx",
      lineNumber: 79,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("aside", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: "Demos In This App" }, void 0, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 95,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { children: data.demos.map((demo) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "remix__page__resource", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: demo.to, prefetch: "intent", children: demo.name }, void 0, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 99,
        columnNumber: 15
      }, this) }, demo.to, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 98,
        columnNumber: 13
      }, this)) }, void 0, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 96,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: "Prayer Watches In This App" }, void 0, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 105,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { children: data.prayers.map((prayer) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "remix__page__resource", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: prayer.to, prefetch: "intent", children: prayer.name }, void 0, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 109,
        columnNumber: 15
      }, this) }, prayer.to, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 108,
        columnNumber: 13
      }, this)) }, void 0, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 106,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: "Resources" }, void 0, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 115,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { children: data.resources.map((resource) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "remix__page__resource", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: resource.url, children: resource.name }, void 0, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 119,
        columnNumber: 15
      }, this) }, resource.url, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 118,
        columnNumber: 13
      }, this)) }, void 0, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 116,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/index.tsx",
      lineNumber: 94,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/index.tsx",
    lineNumber: 78,
    columnNumber: 5
  }, this);
}
export {
  Index as default,
  meta
};
//# sourceMappingURL=/build/routes/index-VU7DWLXF.js.map
