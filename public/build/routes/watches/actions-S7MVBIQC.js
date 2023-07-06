import {
  Form,
  init_esm,
  useActionData
} from "/build/_shared/chunk-5KNBGYPJ.js";
import {
  __toESM,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-56THQXCK.js";

// app/routes/watches/actions.tsx
init_esm();
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var meta = () => ({
  title: "Actions Demo"
});
function ActionsDemo() {
  const actionMessage = useActionData();
  const answerRef = (0, import_react2.useRef)(null);
  (0, import_react2.useEffect)(() => {
    if (actionMessage && answerRef.current) {
      answerRef.current.select();
    }
  }, [actionMessage]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "remix__page", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: "Actions!" }, void 0, false, {
        fileName: "app/routes/watches/actions.tsx",
        lineNumber: 53,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "This form submission will send a post request that we handle in our `action` export. Any route can export an action to handle data mutations." }, void 0, false, {
        fileName: "app/routes/watches/actions.tsx",
        lineNumber: 54,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", className: "remix__form", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: "Post an Action" }, void 0, false, {
          fileName: "app/routes/watches/actions.tsx",
          lineNumber: 60,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", { children: "What is more useful when it is broken?" }, void 0, false, {
          fileName: "app/routes/watches/actions.tsx",
          lineNumber: 62,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/watches/actions.tsx",
          lineNumber: 61,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: "Answer:" }, void 0, false, {
            fileName: "app/routes/watches/actions.tsx",
            lineNumber: 65,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { ref: answerRef, name: "answer", type: "text" }, void 0, false, {
            fileName: "app/routes/watches/actions.tsx",
            lineNumber: 66,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/watches/actions.tsx",
          lineNumber: 64,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { children: "Answer!" }, void 0, false, {
          fileName: "app/routes/watches/actions.tsx",
          lineNumber: 69,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/watches/actions.tsx",
          lineNumber: 68,
          columnNumber: 11
        }, this),
        actionMessage ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", { children: actionMessage }, void 0, false, {
          fileName: "app/routes/watches/actions.tsx",
          lineNumber: 73,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/watches/actions.tsx",
          lineNumber: 72,
          columnNumber: 13
        }, this) : null
      ] }, void 0, true, {
        fileName: "app/routes/watches/actions.tsx",
        lineNumber: 59,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/watches/actions.tsx",
      lineNumber: 52,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("aside", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: "Additional Resources" }, void 0, false, {
        fileName: "app/routes/watches/actions.tsx",
        lineNumber: 80,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: [
          "Guide:",
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "https://remix.run/guides/data-writes", children: "Data Writes" }, void 0, false, {
            fileName: "app/routes/watches/actions.tsx",
            lineNumber: 84,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/watches/actions.tsx",
          lineNumber: 82,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: [
          "API:",
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "https://remix.run/route/action", children: "Route Action Export" }, void 0, false, {
            fileName: "app/routes/watches/actions.tsx",
            lineNumber: 88,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/watches/actions.tsx",
          lineNumber: 86,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: [
          "API:",
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "https://remix.run/hooks/use-action-data", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("code", { children: "useActionData" }, void 0, false, {
            fileName: "app/routes/watches/actions.tsx",
            lineNumber: 93,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "app/routes/watches/actions.tsx",
            lineNumber: 92,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/watches/actions.tsx",
          lineNumber: 90,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/watches/actions.tsx",
        lineNumber: 81,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/watches/actions.tsx",
      lineNumber: 79,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/watches/actions.tsx",
    lineNumber: 51,
    columnNumber: 5
  }, this);
}
export {
  ActionsDemo as default,
  meta
};
//# sourceMappingURL=/build/routes/watches/actions-S7MVBIQC.js.map
