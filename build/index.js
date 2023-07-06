var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => entry_server_default
});
var import_stream = require("stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3, handleRequest = (request, responseStatusCode, responseHeaders, remixContext) => (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
  request,
  responseStatusCode,
  responseHeaders,
  remixContext
) : handleBrowserRequest(
  request,
  responseStatusCode,
  responseHeaders,
  remixContext
), entry_server_default = handleRequest, handleBotRequest = (request, responseStatusCode, responseHeaders, remixContext) => new Promise((resolve, reject) => {
  let didError = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 42,
      columnNumber: 7
    }, this),
    {
      onAllReady: () => {
        let body = new import_stream.PassThrough();
        responseHeaders.set("Content-Type", "text/html"), resolve(
          new import_node.Response(body, {
            headers: responseHeaders,
            status: didError ? 500 : responseStatusCode
          })
        ), pipe(body);
      },
      onShellError: (error) => {
        reject(error);
      },
      onError: (error) => {
        didError = !0, console.error(error);
      }
    }
  );
  setTimeout(abort, ABORT_DELAY);
}), handleBrowserRequest = (request, responseStatusCode, responseHeaders, remixContext) => new Promise((resolve, reject) => {
  let didError = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 82,
      columnNumber: 7
    }, this),
    {
      onShellReady: () => {
        let body = new import_stream.PassThrough();
        responseHeaders.set("Content-Type", "text/html"), resolve(
          new import_node.Response(body, {
            headers: responseHeaders,
            status: didError ? 500 : responseStatusCode
          })
        ), pipe(body);
      },
      onShellError: (error) => {
        reject(error);
      },
      onError: (error) => {
        didError = !0, console.error(error);
      }
    }
  );
  setTimeout(abort, ABORT_DELAY);
});

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  CatchBoundary: () => CatchBoundary,
  ErrorBoundary: () => ErrorBoundary,
  default: () => root_default,
  links: () => links,
  loader: () => loader,
  meta: () => meta
});
var import_react2 = require("@remix-run/react"), React = __toESM(require("react")), import_ssr = require("@clerk/remix/ssr.server"), import_remix = require("@clerk/remix");

// app/styles/demos/remix.css
var remix_default = "/build/_assets/remix-I2EMLONC.css";

// app/styles/global.css
var global_default = "/build/_assets/global-UYZBJO5E.css";

// app/styles/dark.css
var dark_default = "/build/_assets/dark-XZHWBIDZ.css";

// app/root.tsx
var import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), links = () => [
  { rel: "stylesheet", href: global_default },
  {
    rel: "stylesheet",
    href: dark_default,
    media: "(prefers-color-scheme: dark)"
  },
  { rel: "stylesheet", href: remix_default }
], meta = () => ({
  charset: "utf-8",
  viewport: "width=device-width,initial-scale=1"
}), loader = (args) => (0, import_ssr.rootAuthLoader)(args);
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Document, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 69,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 68,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 67,
    columnNumber: 5
  }, this);
}
var root_default = (0, import_remix.ClerkApp)(App);
function Document({
  children,
  title
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      title ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("title", { children: title }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 87,
        columnNumber: 18
      }, this) : null,
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 88,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 89,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 86,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { children: [
      children,
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(RouteChangeAnnouncement, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 93,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 94,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 95,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 96,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 91,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 85,
    columnNumber: 5
  }, this);
}
function Layout({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "remix-app", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("header", { className: "remix-app__header", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "container remix-app__header-content", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Link, { to: "/", title: "Remix", className: "remix-app__header-home-link", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(RemixLogo, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 108,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 107,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("nav", { "aria-label": "Main navigation", className: "remix-app__header-nav", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Link, { to: "/", children: "Home" }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 113,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 112,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "https://remix.run/docs", children: "Remix Docs" }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 116,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 115,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "https://github.com/remix-run/remix", children: "GitHub" }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 119,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 118,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_remix.SignedOut, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_remix.SignInButton, { mode: "modal" }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 123,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 122,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_remix.SignedIn, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_remix.SignOutButton, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 126,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 125,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/root.tsx",
          lineNumber: 121,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 111,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 110,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 106,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 105,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "remix-app__main", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "container remix-app__main-content", children }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 134,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 133,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("footer", { className: "remix-app__footer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "container remix-app__footer-content", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: "\xA9 You!" }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 138,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 137,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 136,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 104,
    columnNumber: 5
  }, this);
}
function CatchAll() {
  let caught = (0, import_react2.useCatch)(), message;
  switch (caught.status) {
    case 401:
      message = /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: "Oops! Looks like you tried to visit a page that you do not have access to." }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 152,
        columnNumber: 9
      }, this);
      break;
    case 404:
      message = /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: "Oops! Looks like you tried to visit a page that does not exist." }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 160,
        columnNumber: 9
      }, this);
      break;
    default:
      throw new Error(caught.data || caught.statusText);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Document, { title: `${caught.status} ${caught.statusText}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Layout, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { children: [
      caught.status,
      ": ",
      caught.statusText
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 171,
      columnNumber: 9
    }, this),
    message
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 170,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 169,
    columnNumber: 5
  }, this);
}
var CatchBoundary = (0, import_remix.ClerkCatchBoundary)(CatchAll);
function ErrorBoundary({ error }) {
  return console.error(error), /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Document, { title: "Error!", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { children: "There was an error" }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 188,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: error.message }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 189,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("hr", {}, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 190,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: "Hey, developer, you should replace this with what you want your users to see." }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 191,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 187,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 186,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 185,
    columnNumber: 5
  }, this);
}
function RemixLogo(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
    "svg",
    {
      viewBox: "0 0 659 165",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      "aria-labelledby": "remix-run-logo-title",
      role: "img",
      width: "106",
      height: "30",
      fill: "currentColor",
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("title", { id: "remix-run-logo-title", children: "Remix Logo" }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 215,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { d: "M0 161V136H45.5416C53.1486 136 54.8003 141.638 54.8003 145V161H0Z M133.85 124.16C135.3 142.762 135.3 151.482 135.3 161H92.2283C92.2283 158.927 92.2653 157.03 92.3028 155.107C92.4195 149.128 92.5411 142.894 91.5717 130.304C90.2905 111.872 82.3473 107.776 67.7419 107.776H54.8021H0V74.24H69.7918C88.2407 74.24 97.4651 68.632 97.4651 53.784C97.4651 40.728 88.2407 32.816 69.7918 32.816H0V0H77.4788C119.245 0 140 19.712 140 51.2C140 74.752 125.395 90.112 105.665 92.672C122.32 96 132.057 105.472 133.85 124.16Z" }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 216,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { d: "M229.43 120.576C225.59 129.536 218.422 133.376 207.158 133.376C194.614 133.376 184.374 126.72 183.35 112.64H263.478V101.12C263.478 70.1437 243.254 44.0317 205.11 44.0317C169.526 44.0317 142.902 69.8877 142.902 105.984C142.902 142.336 169.014 164.352 205.622 164.352C235.83 164.352 256.822 149.76 262.71 123.648L229.43 120.576ZM183.862 92.6717C185.398 81.9197 191.286 73.7277 204.598 73.7277C216.886 73.7277 223.542 82.4317 224.054 92.6717H183.862Z" }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 217,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { d: "M385.256 66.5597C380.392 53.2477 369.896 44.0317 349.672 44.0317C332.52 44.0317 320.232 51.7117 314.088 64.2557V47.1037H272.616V161.28H314.088V105.216C314.088 88.0638 318.952 76.7997 332.52 76.7997C345.064 76.7997 348.136 84.9917 348.136 100.608V161.28H389.608V105.216C389.608 88.0638 394.216 76.7997 408.04 76.7997C420.584 76.7997 423.4 84.9917 423.4 100.608V161.28H464.872V89.5997C464.872 65.7917 455.656 44.0317 424.168 44.0317C404.968 44.0317 391.4 53.7597 385.256 66.5597Z" }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 218,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { d: "M478.436 47.104V161.28H519.908V47.104H478.436ZM478.18 36.352H520.164V0H478.18V36.352Z" }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 219,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { d: "M654.54 47.1035H611.788L592.332 74.2395L573.388 47.1035H527.564L568.78 103.168L523.98 161.28H566.732L589.516 130.304L612.3 161.28H658.124L613.068 101.376L654.54 47.1035Z" }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 220,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/root.tsx",
      lineNumber: 203,
      columnNumber: 5
    },
    this
  );
}
var RouteChangeAnnouncement = React.memo(() => {
  let [hydrated, setHydrated] = React.useState(!1), [innerHtml, setInnerHtml] = React.useState(""), location = (0, import_react2.useLocation)();
  React.useEffect(() => {
    setHydrated(!0);
  }, []);
  let firstRenderRef = React.useRef(!0);
  return React.useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = !1;
      return;
    }
    let pageTitle = location.pathname === "/" ? "Remix demo home page" : document.title;
    setInnerHtml(`Navigated to ${pageTitle}`);
  }, [location.pathname]), hydrated ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
    "div",
    {
      "aria-live": "assertive",
      "aria-atomic": !0,
      id: "route-change-region",
      style: {
        border: "0",
        clipPath: "inset(100%)",
        clip: "rect(0 0 0 0)",
        height: "1px",
        margin: "-1px",
        overflow: "hidden",
        padding: "0",
        position: "absolute",
        width: "1px",
        whiteSpace: "nowrap",
        wordWrap: "normal"
      },
      children: innerHtml
    },
    void 0,
    !1,
    {
      fileName: "app/root.tsx",
      lineNumber: 258,
      columnNumber: 5
    },
    this
  ) : null;
});
RouteChangeAnnouncement.displayName = "RouteChangeAnnouncement";

// app/routes/prayer/watches/index.tsx
var watches_exports = {};
__export(watches_exports, {
  default: () => Boundaries
});
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime");
function Boundaries() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h2", { children: "Params" }, void 0, !1, {
      fileName: "app/routes/prayer/watches/index.tsx",
      lineNumber: 4,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: [
      "When you name a route segment with $ like",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("code", { children: "routes/users/$userId.js" }, void 0, !1, {
        fileName: "app/routes/prayer/watches/index.tsx",
        lineNumber: 7,
        columnNumber: 9
      }, this),
      ", the $ segment will be parsed from the URL and sent to your loaders and actions by the same name."
    ] }, void 0, !0, {
      fileName: "app/routes/prayer/watches/index.tsx",
      lineNumber: 5,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h2", { children: "Errors" }, void 0, !1, {
      fileName: "app/routes/prayer/watches/index.tsx",
      lineNumber: 10,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: "When a route throws an error in it's action, loader, or component, Remix automatically catches it, won't even try to render the component, but it will render the route's ErrorBoundary instead. If the route doesn't have one, it will bubble up to the routes above it until it hits the root." }, void 0, !1, {
      fileName: "app/routes/prayer/watches/index.tsx",
      lineNumber: 11,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: "So be as granular as you want with your error handling." }, void 0, !1, {
      fileName: "app/routes/prayer/watches/index.tsx",
      lineNumber: 17,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h2", { children: "Not Found" }, void 0, !1, {
      fileName: "app/routes/prayer/watches/index.tsx",
      lineNumber: 18,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: [
      "(and other",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#client_error_responses", children: "client errors" }, void 0, !1, {
        fileName: "app/routes/prayer/watches/index.tsx",
        lineNumber: 21,
        columnNumber: 9
      }, this),
      ")"
    ] }, void 0, !0, {
      fileName: "app/routes/prayer/watches/index.tsx",
      lineNumber: 19,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: [
      "Loaders and Actions can throw a ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("code", { children: "Response" }, void 0, !1, {
        fileName: "app/routes/prayer/watches/index.tsx",
        lineNumber: 27,
        columnNumber: 41
      }, this),
      " instead of an error and Remix will render the CatchBoundary instead of the component. This is great when loading data from a database isn't found. As soon as you know you can't render the component normally, throw a 404 response and send your app into the catch boundary. Just like error boundaries, catch boundaries bubble, too."
    ] }, void 0, !0, {
      fileName: "app/routes/prayer/watches/index.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/prayer/watches/index.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

// app/routes/prayer/watches/$id.tsx
var id_exports = {};
__export(id_exports, {
  CatchBoundary: () => CatchBoundary2,
  ErrorBoundary: () => ErrorBoundary2,
  default: () => ParamDemo,
  loader: () => loader2,
  meta: () => meta2
});
var import_node2 = require("@remix-run/node"), import_react3 = require("@remix-run/react"), import_jsx_dev_runtime4 = require("react/jsx-dev-runtime"), loader2 = async ({ params }) => {
  if (params.id === "this-record-does-not-exist")
    throw new Response("Not Found", { status: 404 });
  if (params.id === "shh-its-a-secret")
    throw (0, import_node2.json)({ webmasterEmail: "hello@remix.run" }, { status: 401 });
  return params.id === "kaboom" && lol(), (0, import_node2.json)({ param: params.id });
};
function ParamDemo() {
  let data = (0, import_react3.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h1", { children: [
    "The param is ",
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("i", { style: { color: "red" }, children: data.param }, void 0, !1, {
      fileName: "app/routes/prayer/watches/$id.tsx",
      lineNumber: 45,
      columnNumber: 20
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/prayer/watches/$id.tsx",
    lineNumber: 44,
    columnNumber: 5
  }, this);
}
function CatchBoundary2() {
  let caught = (0, import_react3.useCatch)(), message;
  switch (caught.status) {
    case 401:
      message = /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: [
        "Looks like you tried to visit a page that you do not have access to. Maybe ask the webmaster (",
        caught.data.webmasterEmail,
        ") for access."
      ] }, void 0, !0, {
        fileName: "app/routes/prayer/watches/$id.tsx",
        lineNumber: 60,
        columnNumber: 9
      }, this);
      break;
    case 404:
      message = /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "Looks like you tried to visit a page that does not exist." }, void 0, !1, {
        fileName: "app/routes/prayer/watches/$id.tsx",
        lineNumber: 68,
        columnNumber: 9
      }, this);
      break;
    default:
      message = /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: [
        "There was a problem with your request!",
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("br", {}, void 0, !1, {
          fileName: "app/routes/prayer/watches/$id.tsx",
          lineNumber: 75,
          columnNumber: 11
        }, this),
        caught.status,
        " ",
        caught.statusText
      ] }, void 0, !0, {
        fileName: "app/routes/prayer/watches/$id.tsx",
        lineNumber: 73,
        columnNumber: 9
      }, this);
      break;
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h2", { children: "Oops!" }, void 0, !1, {
      fileName: "app/routes/prayer/watches/$id.tsx",
      lineNumber: 84,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: message }, void 0, !1, {
      fileName: "app/routes/prayer/watches/$id.tsx",
      lineNumber: 85,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "(Isn't it cool that the user gets to stay in context and try a different link in the parts of the UI that didn't blow up?)" }, void 0, !1, {
      fileName: "app/routes/prayer/watches/$id.tsx",
      lineNumber: 86,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/prayer/watches/$id.tsx",
    lineNumber: 83,
    columnNumber: 5
  }, this);
}
function ErrorBoundary2({ error }) {
  return console.error(error), /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h2", { children: "Error!" }, void 0, !1, {
      fileName: "app/routes/prayer/watches/$id.tsx",
      lineNumber: 100,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: error.message }, void 0, !1, {
      fileName: "app/routes/prayer/watches/$id.tsx",
      lineNumber: 101,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "(Isn't it cool that the user gets to stay in context and try a different link in the parts of the UI that didn't blow up?)" }, void 0, !1, {
      fileName: "app/routes/prayer/watches/$id.tsx",
      lineNumber: 102,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/prayer/watches/$id.tsx",
    lineNumber: 99,
    columnNumber: 5
  }, this);
}
var meta2 = ({ data }) => ({
  title: data ? `Param: ${data.param}` : "Oops..."
});

// app/routes/prayer/protected.tsx
var protected_exports = {};
__export(protected_exports, {
  default: () => Protected,
  loader: () => loader3
});
var import_ssr2 = require("@clerk/remix/ssr.server"), import_node3 = require("@remix-run/node"), import_node4 = require("@remix-run/node"), import_react4 = require("@remix-run/react"), import_jsx_dev_runtime5 = require("react/jsx-dev-runtime"), loader3 = async (args) => {
  let { userId } = await (0, import_ssr2.getAuth)(args);
  return userId ? (0, import_node3.json)({ userId }) : (0, import_node4.redirect)("/demos/signin");
};
function Protected() {
  let data = (0, import_react4.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h1", { children: "Protected" }, void 0, !1, {
      fileName: "app/routes/prayer/protected.tsx",
      lineNumber: 20,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h2", { children: [
      "You're in! UserId is ",
      data.userId
    ] }, void 0, !0, {
      fileName: "app/routes/prayer/protected.tsx",
      lineNumber: 21,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("a", { href: "https://mytcreative.com", target: "_blank", rel: "noreferrer", children: "mytCreative" }, void 0, !1, {
      fileName: "app/routes/prayer/protected.tsx",
      lineNumber: 22,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/prayer/protected.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
}

// app/routes/demos/protected.tsx
var protected_exports2 = {};
__export(protected_exports2, {
  default: () => Protected2,
  loader: () => loader4
});
var import_ssr3 = require("@clerk/remix/ssr.server"), import_node5 = require("@remix-run/node"), import_node6 = require("@remix-run/node"), import_react5 = require("@remix-run/react"), import_jsx_dev_runtime6 = require("react/jsx-dev-runtime"), loader4 = async (args) => {
  let { userId } = await (0, import_ssr3.getAuth)(args);
  return userId ? (0, import_node5.json)({ userId }) : (0, import_node6.redirect)("/demos/signin");
};
function Protected2() {
  let data = (0, import_react5.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h1", { children: "Protected" }, void 0, !1, {
      fileName: "app/routes/demos/protected.tsx",
      lineNumber: 20,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h2", { children: [
      "You're in! UserId is ",
      data.userId
    ] }, void 0, !0, {
      fileName: "app/routes/demos/protected.tsx",
      lineNumber: 21,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("a", { href: "https://mytcreative.com", target: "_blank", rel: "noreferrer", children: "mytCreative" }, void 0, !1, {
      fileName: "app/routes/demos/protected.tsx",
      lineNumber: 22,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/demos/protected.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
}

// app/routes/prayer/actions.tsx
var actions_exports = {};
__export(actions_exports, {
  action: () => action,
  default: () => ActionsDemo,
  meta: () => meta3
});
var import_node7 = require("@remix-run/node"), import_react6 = require("@remix-run/react"), import_react7 = require("react"), import_jsx_dev_runtime7 = require("react/jsx-dev-runtime"), meta3 = () => ({
  title: "Actions Demo"
}), action = async ({ request }) => {
  let answer = (await request.formData()).get("answer");
  return !answer || typeof answer != "string" ? (0, import_node7.json)("Come on, at least try!", { status: 400 }) : answer !== "egg" ? (0, import_node7.json)(`Sorry, ${answer} is not right.`, { status: 400 }) : (0, import_node7.redirect)("/demos/correct");
};
function ActionsDemo() {
  let actionMessage = (0, import_react6.useActionData)(), answerRef = (0, import_react7.useRef)(null);
  return (0, import_react7.useEffect)(() => {
    actionMessage && answerRef.current && answerRef.current.select();
  }, [actionMessage]), /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "remix__page", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("main", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h2", { children: "Actions!" }, void 0, !1, {
        fileName: "app/routes/prayer/actions.tsx",
        lineNumber: 53,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { children: "This form submission will send a post request that we handle in our `action` export. Any route can export an action to handle data mutations." }, void 0, !1, {
        fileName: "app/routes/prayer/actions.tsx",
        lineNumber: 54,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react6.Form, { method: "post", className: "remix__form", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h3", { children: "Post an Action" }, void 0, !1, {
          fileName: "app/routes/prayer/actions.tsx",
          lineNumber: 60,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("i", { children: "What is more useful when it is broken?" }, void 0, !1, {
          fileName: "app/routes/prayer/actions.tsx",
          lineNumber: 62,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/prayer/actions.tsx",
          lineNumber: 61,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("label", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: "Answer:" }, void 0, !1, {
            fileName: "app/routes/prayer/actions.tsx",
            lineNumber: 65,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("input", { ref: answerRef, name: "answer", type: "text" }, void 0, !1, {
            fileName: "app/routes/prayer/actions.tsx",
            lineNumber: 66,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/prayer/actions.tsx",
          lineNumber: 64,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("button", { children: "Answer!" }, void 0, !1, {
          fileName: "app/routes/prayer/actions.tsx",
          lineNumber: 69,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/prayer/actions.tsx",
          lineNumber: 68,
          columnNumber: 11
        }, this),
        actionMessage ? /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("b", { children: actionMessage }, void 0, !1, {
          fileName: "app/routes/prayer/actions.tsx",
          lineNumber: 73,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/prayer/actions.tsx",
          lineNumber: 72,
          columnNumber: 13
        }, this) : null
      ] }, void 0, !0, {
        fileName: "app/routes/prayer/actions.tsx",
        lineNumber: 59,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/prayer/actions.tsx",
      lineNumber: 52,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("aside", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h3", { children: "Additional Resources" }, void 0, !1, {
        fileName: "app/routes/prayer/actions.tsx",
        lineNumber: 80,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("ul", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: [
          "Guide:",
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("a", { href: "https://remix.run/guides/data-writes", children: "Data Writes" }, void 0, !1, {
            fileName: "app/routes/prayer/actions.tsx",
            lineNumber: 84,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/prayer/actions.tsx",
          lineNumber: 82,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: [
          "API:",
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("a", { href: "https://remix.run/route/action", children: "Route Action Export" }, void 0, !1, {
            fileName: "app/routes/prayer/actions.tsx",
            lineNumber: 88,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/prayer/actions.tsx",
          lineNumber: 86,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: [
          "API:",
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("a", { href: "https://remix.run/hooks/use-action-data", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("code", { children: "useActionData" }, void 0, !1, {
            fileName: "app/routes/prayer/actions.tsx",
            lineNumber: 93,
            columnNumber: 15
          }, this) }, void 0, !1, {
            fileName: "app/routes/prayer/actions.tsx",
            lineNumber: 92,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/prayer/actions.tsx",
          lineNumber: 90,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/prayer/actions.tsx",
        lineNumber: 81,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/prayer/actions.tsx",
      lineNumber: 79,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/prayer/actions.tsx",
    lineNumber: 51,
    columnNumber: 5
  }, this);
}

// app/routes/prayer/correct.tsx
var correct_exports = {};
__export(correct_exports, {
  default: () => NiceWork
});
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
function NiceWork() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h1", { children: "You got it right!" }, void 0, !1, {
    fileName: "app/routes/prayer/correct.tsx",
    lineNumber: 2,
    columnNumber: 10
  }, this);
}

// app/routes/demos/actions.tsx
var actions_exports2 = {};
__export(actions_exports2, {
  action: () => action2,
  default: () => ActionsDemo2,
  meta: () => meta4
});
var import_node8 = require("@remix-run/node"), import_react8 = require("@remix-run/react"), import_react9 = require("react"), import_jsx_dev_runtime9 = require("react/jsx-dev-runtime"), meta4 = () => ({
  title: "Actions Demo"
}), action2 = async ({ request }) => {
  let answer = (await request.formData()).get("answer");
  return !answer || typeof answer != "string" ? (0, import_node8.json)("Come on, at least try!", { status: 400 }) : answer !== "egg" ? (0, import_node8.json)(`Sorry, ${answer} is not right.`, { status: 400 }) : (0, import_node8.redirect)("/demos/correct");
};
function ActionsDemo2() {
  let actionMessage = (0, import_react8.useActionData)(), answerRef = (0, import_react9.useRef)(null);
  return (0, import_react9.useEffect)(() => {
    actionMessage && answerRef.current && answerRef.current.select();
  }, [actionMessage]), /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "remix__page", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("main", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("h2", { children: "Actions!" }, void 0, !1, {
        fileName: "app/routes/demos/actions.tsx",
        lineNumber: 53,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { children: "This form submission will send a post request that we handle in our `action` export. Any route can export an action to handle data mutations." }, void 0, !1, {
        fileName: "app/routes/demos/actions.tsx",
        lineNumber: 54,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react8.Form, { method: "post", className: "remix__form", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("h3", { children: "Post an Action" }, void 0, !1, {
          fileName: "app/routes/demos/actions.tsx",
          lineNumber: 60,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("i", { children: "What is more useful when it is broken?" }, void 0, !1, {
          fileName: "app/routes/demos/actions.tsx",
          lineNumber: 62,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/demos/actions.tsx",
          lineNumber: 61,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("label", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { children: "Answer:" }, void 0, !1, {
            fileName: "app/routes/demos/actions.tsx",
            lineNumber: 65,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("input", { ref: answerRef, name: "answer", type: "text" }, void 0, !1, {
            fileName: "app/routes/demos/actions.tsx",
            lineNumber: 66,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/demos/actions.tsx",
          lineNumber: 64,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("button", { children: "Answer!" }, void 0, !1, {
          fileName: "app/routes/demos/actions.tsx",
          lineNumber: 69,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/demos/actions.tsx",
          lineNumber: 68,
          columnNumber: 11
        }, this),
        actionMessage ? /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("b", { children: actionMessage }, void 0, !1, {
          fileName: "app/routes/demos/actions.tsx",
          lineNumber: 73,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/demos/actions.tsx",
          lineNumber: 72,
          columnNumber: 13
        }, this) : null
      ] }, void 0, !0, {
        fileName: "app/routes/demos/actions.tsx",
        lineNumber: 59,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/demos/actions.tsx",
      lineNumber: 52,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("aside", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("h3", { children: "Additional Resources" }, void 0, !1, {
        fileName: "app/routes/demos/actions.tsx",
        lineNumber: 80,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("ul", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("li", { children: [
          "Guide:",
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("a", { href: "https://remix.run/guides/data-writes", children: "Data Writes" }, void 0, !1, {
            fileName: "app/routes/demos/actions.tsx",
            lineNumber: 84,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/demos/actions.tsx",
          lineNumber: 82,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("li", { children: [
          "API:",
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("a", { href: "https://remix.run/route/action", children: "Route Action Export" }, void 0, !1, {
            fileName: "app/routes/demos/actions.tsx",
            lineNumber: 88,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/demos/actions.tsx",
          lineNumber: 86,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("li", { children: [
          "API:",
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("a", { href: "https://remix.run/hooks/use-action-data", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("code", { children: "useActionData" }, void 0, !1, {
            fileName: "app/routes/demos/actions.tsx",
            lineNumber: 93,
            columnNumber: 15
          }, this) }, void 0, !1, {
            fileName: "app/routes/demos/actions.tsx",
            lineNumber: 92,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/demos/actions.tsx",
          lineNumber: 90,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/demos/actions.tsx",
        lineNumber: 81,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/demos/actions.tsx",
      lineNumber: 79,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/demos/actions.tsx",
    lineNumber: 51,
    columnNumber: 5
  }, this);
}

// app/routes/demos/correct.tsx
var correct_exports2 = {};
__export(correct_exports2, {
  default: () => NiceWork2
});
var import_jsx_dev_runtime10 = require("react/jsx-dev-runtime");
function NiceWork2() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("h1", { children: "You got it right!" }, void 0, !1, {
    fileName: "app/routes/demos/correct.tsx",
    lineNumber: 2,
    columnNumber: 10
  }, this);
}

// app/routes/prayer/params.tsx
var params_exports = {};
__export(params_exports, {
  default: () => Boundaries2,
  meta: () => meta5
});
var import_react10 = require("@remix-run/react"), import_jsx_dev_runtime11 = require("react/jsx-dev-runtime"), meta5 = () => ({
  title: "Boundaries Demo"
});
function Boundaries2() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "remix__page", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("main", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react10.Outlet, {}, void 0, !1, {
      fileName: "app/routes/prayer/params.tsx",
      lineNumber: 12,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/prayer/params.tsx",
      lineNumber: 11,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("aside", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("h2", { children: "Click these Links" }, void 0, !1, {
        fileName: "app/routes/prayer/params.tsx",
        lineNumber: 16,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("ul", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react10.Link, { to: ".", children: "Start over" }, void 0, !1, {
          fileName: "app/routes/prayer/params.tsx",
          lineNumber: 19,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/prayer/params.tsx",
          lineNumber: 18,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react10.Link, { to: "one", children: [
          "Param: ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("i", { children: "one" }, void 0, !1, {
            fileName: "app/routes/prayer/params.tsx",
            lineNumber: 23,
            columnNumber: 22
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/prayer/params.tsx",
          lineNumber: 22,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/prayer/params.tsx",
          lineNumber: 21,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react10.Link, { to: "two", children: [
          "Param: ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("i", { children: "two" }, void 0, !1, {
            fileName: "app/routes/prayer/params.tsx",
            lineNumber: 28,
            columnNumber: 22
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/prayer/params.tsx",
          lineNumber: 27,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/prayer/params.tsx",
          lineNumber: 26,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react10.Link, { to: "this-record-does-not-exist", children: "This will be a 404" }, void 0, !1, {
          fileName: "app/routes/prayer/params.tsx",
          lineNumber: 32,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/prayer/params.tsx",
          lineNumber: 31,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react10.Link, { to: "shh-its-a-secret", children: "And this will be 401 Unauthorized" }, void 0, !1, {
          fileName: "app/routes/prayer/params.tsx",
          lineNumber: 35,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/prayer/params.tsx",
          lineNumber: 34,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react10.Link, { to: "kaboom", children: "This one will throw an error" }, void 0, !1, {
          fileName: "app/routes/prayer/params.tsx",
          lineNumber: 38,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/prayer/params.tsx",
          lineNumber: 37,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/prayer/params.tsx",
        lineNumber: 17,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/prayer/params.tsx",
      lineNumber: 15,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/prayer/params.tsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
}

// app/routes/prayer/params/index.tsx
var params_exports2 = {};
__export(params_exports2, {
  default: () => Boundaries3
});
var import_jsx_dev_runtime12 = require("react/jsx-dev-runtime");
function Boundaries3() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_jsx_dev_runtime12.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("h2", { children: "Params" }, void 0, !1, {
      fileName: "app/routes/prayer/params/index.tsx",
      lineNumber: 4,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { children: [
      "When you name a route segment with $ like",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("code", { children: "routes/users/$userId.js" }, void 0, !1, {
        fileName: "app/routes/prayer/params/index.tsx",
        lineNumber: 7,
        columnNumber: 9
      }, this),
      ", the $ segment will be parsed from the URL and sent to your loaders and actions by the same name."
    ] }, void 0, !0, {
      fileName: "app/routes/prayer/params/index.tsx",
      lineNumber: 5,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("h2", { children: "Errors" }, void 0, !1, {
      fileName: "app/routes/prayer/params/index.tsx",
      lineNumber: 10,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { children: "When a route throws an error in it's action, loader, or component, Remix automatically catches it, won't even try to render the component, but it will render the route's ErrorBoundary instead. If the route doesn't have one, it will bubble up to the routes above it until it hits the root." }, void 0, !1, {
      fileName: "app/routes/prayer/params/index.tsx",
      lineNumber: 11,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { children: "So be as granular as you want with your error handling." }, void 0, !1, {
      fileName: "app/routes/prayer/params/index.tsx",
      lineNumber: 17,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("h2", { children: "Not Found" }, void 0, !1, {
      fileName: "app/routes/prayer/params/index.tsx",
      lineNumber: 18,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { children: [
      "(and other",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("a", { href: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#client_error_responses", children: "client errors" }, void 0, !1, {
        fileName: "app/routes/prayer/params/index.tsx",
        lineNumber: 21,
        columnNumber: 9
      }, this),
      ")"
    ] }, void 0, !0, {
      fileName: "app/routes/prayer/params/index.tsx",
      lineNumber: 19,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { children: [
      "Loaders and Actions can throw a ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("code", { children: "Response" }, void 0, !1, {
        fileName: "app/routes/prayer/params/index.tsx",
        lineNumber: 27,
        columnNumber: 41
      }, this),
      " instead of an error and Remix will render the CatchBoundary instead of the component. This is great when loading data from a database isn't found. As soon as you know you can't render the component normally, throw a 404 response and send your app into the catch boundary. Just like error boundaries, catch boundaries bubble, too."
    ] }, void 0, !0, {
      fileName: "app/routes/prayer/params/index.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/prayer/params/index.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

// app/routes/prayer/params/$id.tsx
var id_exports2 = {};
__export(id_exports2, {
  CatchBoundary: () => CatchBoundary3,
  ErrorBoundary: () => ErrorBoundary3,
  default: () => ParamDemo2,
  loader: () => loader5,
  meta: () => meta6
});
var import_node9 = require("@remix-run/node"), import_react11 = require("@remix-run/react"), import_jsx_dev_runtime13 = require("react/jsx-dev-runtime"), loader5 = async ({ params }) => {
  if (params.id === "this-record-does-not-exist")
    throw new Response("Not Found", { status: 404 });
  if (params.id === "shh-its-a-secret")
    throw (0, import_node9.json)({ webmasterEmail: "hello@remix.run" }, { status: 401 });
  return params.id === "kaboom" && lol(), (0, import_node9.json)({ param: params.id });
};
function ParamDemo2() {
  let data = (0, import_react11.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("h1", { children: [
    "The param is ",
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("i", { style: { color: "red" }, children: data.param }, void 0, !1, {
      fileName: "app/routes/prayer/params/$id.tsx",
      lineNumber: 45,
      columnNumber: 20
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/prayer/params/$id.tsx",
    lineNumber: 44,
    columnNumber: 5
  }, this);
}
function CatchBoundary3() {
  let caught = (0, import_react11.useCatch)(), message;
  switch (caught.status) {
    case 401:
      message = /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", { children: [
        "Looks like you tried to visit a page that you do not have access to. Maybe ask the webmaster (",
        caught.data.webmasterEmail,
        ") for access."
      ] }, void 0, !0, {
        fileName: "app/routes/prayer/params/$id.tsx",
        lineNumber: 60,
        columnNumber: 9
      }, this);
      break;
    case 404:
      message = /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", { children: "Looks like you tried to visit a page that does not exist." }, void 0, !1, {
        fileName: "app/routes/prayer/params/$id.tsx",
        lineNumber: 68,
        columnNumber: 9
      }, this);
      break;
    default:
      message = /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", { children: [
        "There was a problem with your request!",
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("br", {}, void 0, !1, {
          fileName: "app/routes/prayer/params/$id.tsx",
          lineNumber: 75,
          columnNumber: 11
        }, this),
        caught.status,
        " ",
        caught.statusText
      ] }, void 0, !0, {
        fileName: "app/routes/prayer/params/$id.tsx",
        lineNumber: 73,
        columnNumber: 9
      }, this);
      break;
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_jsx_dev_runtime13.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("h2", { children: "Oops!" }, void 0, !1, {
      fileName: "app/routes/prayer/params/$id.tsx",
      lineNumber: 84,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", { children: message }, void 0, !1, {
      fileName: "app/routes/prayer/params/$id.tsx",
      lineNumber: 85,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", { children: "(Isn't it cool that the user gets to stay in context and try a different link in the parts of the UI that didn't blow up?)" }, void 0, !1, {
      fileName: "app/routes/prayer/params/$id.tsx",
      lineNumber: 86,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/prayer/params/$id.tsx",
    lineNumber: 83,
    columnNumber: 5
  }, this);
}
function ErrorBoundary3({ error }) {
  return console.error(error), /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_jsx_dev_runtime13.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("h2", { children: "Error!" }, void 0, !1, {
      fileName: "app/routes/prayer/params/$id.tsx",
      lineNumber: 100,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", { children: error.message }, void 0, !1, {
      fileName: "app/routes/prayer/params/$id.tsx",
      lineNumber: 101,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", { children: "(Isn't it cool that the user gets to stay in context and try a different link in the parts of the UI that didn't blow up?)" }, void 0, !1, {
      fileName: "app/routes/prayer/params/$id.tsx",
      lineNumber: 102,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/prayer/params/$id.tsx",
    lineNumber: 99,
    columnNumber: 5
  }, this);
}
var meta6 = ({ data }) => ({
  title: data ? `Param: ${data.param}` : "Oops..."
});

// app/routes/prayer/signin.tsx
var signin_exports = {};
__export(signin_exports, {
  default: () => LogIn
});
var import_remix3 = require("@clerk/remix"), import_jsx_dev_runtime14 = require("react/jsx-dev-runtime");
function LogIn() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_remix3.SignIn, {}, void 0, !1, {
    fileName: "app/routes/prayer/signin.tsx",
    lineNumber: 4,
    columnNumber: 10
  }, this);
}

// app/routes/demos/params.tsx
var params_exports3 = {};
__export(params_exports3, {
  default: () => Boundaries4,
  meta: () => meta7
});
var import_react12 = require("@remix-run/react"), import_jsx_dev_runtime15 = require("react/jsx-dev-runtime"), meta7 = () => ({
  title: "Boundaries Demo"
});
function Boundaries4() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "remix__page", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("main", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_react12.Outlet, {}, void 0, !1, {
      fileName: "app/routes/demos/params.tsx",
      lineNumber: 12,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/demos/params.tsx",
      lineNumber: 11,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("aside", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("h2", { children: "Click these Links" }, void 0, !1, {
        fileName: "app/routes/demos/params.tsx",
        lineNumber: 16,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("ul", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_react12.Link, { to: ".", children: "Start over" }, void 0, !1, {
          fileName: "app/routes/demos/params.tsx",
          lineNumber: 19,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/demos/params.tsx",
          lineNumber: 18,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_react12.Link, { to: "one", children: [
          "Param: ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("i", { children: "one" }, void 0, !1, {
            fileName: "app/routes/demos/params.tsx",
            lineNumber: 23,
            columnNumber: 22
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/demos/params.tsx",
          lineNumber: 22,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/demos/params.tsx",
          lineNumber: 21,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_react12.Link, { to: "two", children: [
          "Param: ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("i", { children: "two" }, void 0, !1, {
            fileName: "app/routes/demos/params.tsx",
            lineNumber: 28,
            columnNumber: 22
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/demos/params.tsx",
          lineNumber: 27,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/demos/params.tsx",
          lineNumber: 26,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_react12.Link, { to: "this-record-does-not-exist", children: "This will be a 404" }, void 0, !1, {
          fileName: "app/routes/demos/params.tsx",
          lineNumber: 32,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/demos/params.tsx",
          lineNumber: 31,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_react12.Link, { to: "shh-its-a-secret", children: "And this will be 401 Unauthorized" }, void 0, !1, {
          fileName: "app/routes/demos/params.tsx",
          lineNumber: 35,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/demos/params.tsx",
          lineNumber: 34,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_react12.Link, { to: "kaboom", children: "This one will throw an error" }, void 0, !1, {
          fileName: "app/routes/demos/params.tsx",
          lineNumber: 38,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/demos/params.tsx",
          lineNumber: 37,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/demos/params.tsx",
        lineNumber: 17,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/demos/params.tsx",
      lineNumber: 15,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/demos/params.tsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
}

// app/routes/demos/params/index.tsx
var params_exports4 = {};
__export(params_exports4, {
  default: () => Boundaries5
});
var import_jsx_dev_runtime16 = require("react/jsx-dev-runtime");
function Boundaries5() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_jsx_dev_runtime16.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("h2", { children: "Params" }, void 0, !1, {
      fileName: "app/routes/demos/params/index.tsx",
      lineNumber: 4,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("p", { children: [
      "When you name a route segment with $ like",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("code", { children: "routes/users/$userId.js" }, void 0, !1, {
        fileName: "app/routes/demos/params/index.tsx",
        lineNumber: 7,
        columnNumber: 9
      }, this),
      ", the $ segment will be parsed from the URL and sent to your loaders and actions by the same name."
    ] }, void 0, !0, {
      fileName: "app/routes/demos/params/index.tsx",
      lineNumber: 5,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("h2", { children: "Errors" }, void 0, !1, {
      fileName: "app/routes/demos/params/index.tsx",
      lineNumber: 10,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("p", { children: "When a route throws an error in it's action, loader, or component, Remix automatically catches it, won't even try to render the component, but it will render the route's ErrorBoundary instead. If the route doesn't have one, it will bubble up to the routes above it until it hits the root." }, void 0, !1, {
      fileName: "app/routes/demos/params/index.tsx",
      lineNumber: 11,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("p", { children: "So be as granular as you want with your error handling." }, void 0, !1, {
      fileName: "app/routes/demos/params/index.tsx",
      lineNumber: 17,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("h2", { children: "Not Found" }, void 0, !1, {
      fileName: "app/routes/demos/params/index.tsx",
      lineNumber: 18,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("p", { children: [
      "(and other",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("a", { href: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#client_error_responses", children: "client errors" }, void 0, !1, {
        fileName: "app/routes/demos/params/index.tsx",
        lineNumber: 21,
        columnNumber: 9
      }, this),
      ")"
    ] }, void 0, !0, {
      fileName: "app/routes/demos/params/index.tsx",
      lineNumber: 19,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("p", { children: [
      "Loaders and Actions can throw a ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("code", { children: "Response" }, void 0, !1, {
        fileName: "app/routes/demos/params/index.tsx",
        lineNumber: 27,
        columnNumber: 41
      }, this),
      " instead of an error and Remix will render the CatchBoundary instead of the component. This is great when loading data from a database isn't found. As soon as you know you can't render the component normally, throw a 404 response and send your app into the catch boundary. Just like error boundaries, catch boundaries bubble, too."
    ] }, void 0, !0, {
      fileName: "app/routes/demos/params/index.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/demos/params/index.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

// app/routes/demos/params/$id.tsx
var id_exports3 = {};
__export(id_exports3, {
  CatchBoundary: () => CatchBoundary4,
  ErrorBoundary: () => ErrorBoundary4,
  default: () => ParamDemo3,
  loader: () => loader6,
  meta: () => meta8
});
var import_node10 = require("@remix-run/node"), import_react13 = require("@remix-run/react"), import_jsx_dev_runtime17 = require("react/jsx-dev-runtime"), loader6 = async ({ params }) => {
  if (params.id === "this-record-does-not-exist")
    throw new Response("Not Found", { status: 404 });
  if (params.id === "shh-its-a-secret")
    throw (0, import_node10.json)({ webmasterEmail: "hello@remix.run" }, { status: 401 });
  return params.id === "kaboom" && lol(), (0, import_node10.json)({ param: params.id });
};
function ParamDemo3() {
  let data = (0, import_react13.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("h1", { children: [
    "The param is ",
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("i", { style: { color: "red" }, children: data.param }, void 0, !1, {
      fileName: "app/routes/demos/params/$id.tsx",
      lineNumber: 45,
      columnNumber: 20
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/demos/params/$id.tsx",
    lineNumber: 44,
    columnNumber: 5
  }, this);
}
function CatchBoundary4() {
  let caught = (0, import_react13.useCatch)(), message;
  switch (caught.status) {
    case 401:
      message = /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("p", { children: [
        "Looks like you tried to visit a page that you do not have access to. Maybe ask the webmaster (",
        caught.data.webmasterEmail,
        ") for access."
      ] }, void 0, !0, {
        fileName: "app/routes/demos/params/$id.tsx",
        lineNumber: 60,
        columnNumber: 9
      }, this);
      break;
    case 404:
      message = /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("p", { children: "Looks like you tried to visit a page that does not exist." }, void 0, !1, {
        fileName: "app/routes/demos/params/$id.tsx",
        lineNumber: 68,
        columnNumber: 9
      }, this);
      break;
    default:
      message = /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("p", { children: [
        "There was a problem with your request!",
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("br", {}, void 0, !1, {
          fileName: "app/routes/demos/params/$id.tsx",
          lineNumber: 75,
          columnNumber: 11
        }, this),
        caught.status,
        " ",
        caught.statusText
      ] }, void 0, !0, {
        fileName: "app/routes/demos/params/$id.tsx",
        lineNumber: 73,
        columnNumber: 9
      }, this);
      break;
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_jsx_dev_runtime17.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("h2", { children: "Oops!" }, void 0, !1, {
      fileName: "app/routes/demos/params/$id.tsx",
      lineNumber: 84,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("p", { children: message }, void 0, !1, {
      fileName: "app/routes/demos/params/$id.tsx",
      lineNumber: 85,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("p", { children: "(Isn't it cool that the user gets to stay in context and try a different link in the parts of the UI that didn't blow up?)" }, void 0, !1, {
      fileName: "app/routes/demos/params/$id.tsx",
      lineNumber: 86,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/demos/params/$id.tsx",
    lineNumber: 83,
    columnNumber: 5
  }, this);
}
function ErrorBoundary4({ error }) {
  return console.error(error), /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_jsx_dev_runtime17.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("h2", { children: "Error!" }, void 0, !1, {
      fileName: "app/routes/demos/params/$id.tsx",
      lineNumber: 100,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("p", { children: error.message }, void 0, !1, {
      fileName: "app/routes/demos/params/$id.tsx",
      lineNumber: 101,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("p", { children: "(Isn't it cool that the user gets to stay in context and try a different link in the parts of the UI that didn't blow up?)" }, void 0, !1, {
      fileName: "app/routes/demos/params/$id.tsx",
      lineNumber: 102,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/demos/params/$id.tsx",
    lineNumber: 99,
    columnNumber: 5
  }, this);
}
var meta8 = ({ data }) => ({
  title: data ? `Param: ${data.param}` : "Oops..."
});

// app/routes/demos/signin.tsx
var signin_exports2 = {};
__export(signin_exports2, {
  default: () => LogIn2
});
var import_remix4 = require("@clerk/remix"), import_jsx_dev_runtime18 = require("react/jsx-dev-runtime");
function LogIn2() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_remix4.SignIn, {}, void 0, !1, {
    fileName: "app/routes/demos/signin.tsx",
    lineNumber: 4,
    columnNumber: 10
  }, this);
}

// app/routes/prayer/about.tsx
var about_exports = {};
__export(about_exports, {
  default: () => Index,
  links: () => links2,
  meta: () => meta9
});
var import_react14 = require("@remix-run/react");

// app/styles/demos/about.css
var about_default = "/build/_assets/about-CNRDHDBF.css";

// app/routes/prayer/about.tsx
var import_jsx_dev_runtime19 = require("react/jsx-dev-runtime"), meta9 = () => ({
  title: "About Remix"
}), links2 = () => [{ rel: "stylesheet", href: about_default }];
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "about", children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "about__intro", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("h2", { children: "About Us" }, void 0, !1, {
      fileName: "app/routes/prayer/about.tsx",
      lineNumber: 20,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("p", { children: [
      "Ok, so this page isn't really ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("em", { children: "about us" }, void 0, !1, {
        fileName: "app/routes/prayer/about.tsx",
        lineNumber: 22,
        columnNumber: 41
      }, this),
      ", but we did want to show you a few more things Remix can do."
    ] }, void 0, !0, {
      fileName: "app/routes/prayer/about.tsx",
      lineNumber: 21,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("p", { children: [
      "Did you notice that things look a little different on this page? The CSS that we import in the route file and include in its",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("code", { children: "links" }, void 0, !1, {
        fileName: "app/routes/prayer/about.tsx",
        lineNumber: 28,
        columnNumber: 11
      }, this),
      " export is only included on this route and its children."
    ] }, void 0, !0, {
      fileName: "app/routes/prayer/about.tsx",
      lineNumber: 25,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("p", { children: [
      "Wait a sec...",
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("em", { children: "its children" }, void 0, !1, {
        fileName: "app/routes/prayer/about.tsx",
        lineNumber: 32,
        columnNumber: 24
      }, this),
      "? To understand what we mean by this,",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("a", { href: "https://remix.run/tutorial/4-nested-routes-params", children: "read all about nested routes in the docs" }, void 0, !1, {
        fileName: "app/routes/prayer/about.tsx",
        lineNumber: 34,
        columnNumber: 11
      }, this),
      "."
    ] }, void 0, !0, {
      fileName: "app/routes/prayer/about.tsx",
      lineNumber: 31,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("hr", {}, void 0, !1, {
      fileName: "app/routes/prayer/about.tsx",
      lineNumber: 39,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_react14.Outlet, {}, void 0, !1, {
      fileName: "app/routes/prayer/about.tsx",
      lineNumber: 40,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/prayer/about.tsx",
    lineNumber: 19,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/prayer/about.tsx",
    lineNumber: 18,
    columnNumber: 5
  }, this);
}

// app/routes/prayer/about/index.tsx
var about_exports2 = {};
__export(about_exports2, {
  default: () => AboutIndex
});
var import_react15 = require("@remix-run/react"), import_jsx_dev_runtime20 = require("react/jsx-dev-runtime");
function AboutIndex() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("p", { children: [
      "You are looking at the index route for the ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("code", { children: "/about" }, void 0, !1, {
        fileName: "app/routes/prayer/about/index.tsx",
        lineNumber: 7,
        columnNumber: 52
      }, this),
      " URL segment, but there are nested routes as well!"
    ] }, void 0, !0, {
      fileName: "app/routes/prayer/about/index.tsx",
      lineNumber: 6,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("strong", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_react15.Link, { to: "whoa", children: "Check out one of them here." }, void 0, !1, {
      fileName: "app/routes/prayer/about/index.tsx",
      lineNumber: 12,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/prayer/about/index.tsx",
      lineNumber: 11,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/prayer/about/index.tsx",
      lineNumber: 10,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/prayer/about/index.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/routes/prayer/about/whoa.tsx
var whoa_exports = {};
__export(whoa_exports, {
  default: () => Whoa
});
var import_react16 = require("@remix-run/react"), import_jsx_dev_runtime21 = require("react/jsx-dev-runtime");
function Whoa() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("p", { children: [
      "Whoa, this is a nested route! We render the ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("code", { children: "/about" }, void 0, !1, {
        fileName: "app/routes/prayer/about/whoa.tsx",
        lineNumber: 7,
        columnNumber: 53
      }, this),
      " layout route component, and its ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("code", { children: "Outlet" }, void 0, !1, {
        fileName: "app/routes/prayer/about/whoa.tsx",
        lineNumber: 8,
        columnNumber: 34
      }, this),
      " renders our route component. \u{1F92F}"
    ] }, void 0, !0, {
      fileName: "app/routes/prayer/about/whoa.tsx",
      lineNumber: 6,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("strong", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_react16.Link, { to: "..", children: [
      "Go back to the ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("code", { children: "/about" }, void 0, !1, {
        fileName: "app/routes/prayer/about/whoa.tsx",
        lineNumber: 14,
        columnNumber: 28
      }, this),
      " index."
    ] }, void 0, !0, {
      fileName: "app/routes/prayer/about/whoa.tsx",
      lineNumber: 13,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/prayer/about/whoa.tsx",
      lineNumber: 12,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/prayer/about/whoa.tsx",
      lineNumber: 11,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/prayer/about/whoa.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/routes/demos/about.tsx
var about_exports3 = {};
__export(about_exports3, {
  default: () => Index2,
  links: () => links3,
  meta: () => meta10
});
var import_react17 = require("@remix-run/react");
var import_jsx_dev_runtime22 = require("react/jsx-dev-runtime"), meta10 = () => ({
  title: "About Remix"
}), links3 = () => [{ rel: "stylesheet", href: about_default }];
function Index2() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "about", children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "about__intro", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("h2", { children: "About Us" }, void 0, !1, {
      fileName: "app/routes/demos/about.tsx",
      lineNumber: 20,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("p", { children: [
      "Ok, so this page isn't really ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("em", { children: "about us" }, void 0, !1, {
        fileName: "app/routes/demos/about.tsx",
        lineNumber: 22,
        columnNumber: 41
      }, this),
      ", but we did want to show you a few more things Remix can do."
    ] }, void 0, !0, {
      fileName: "app/routes/demos/about.tsx",
      lineNumber: 21,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("p", { children: [
      "Did you notice that things look a little different on this page? The CSS that we import in the route file and include in its",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("code", { children: "links" }, void 0, !1, {
        fileName: "app/routes/demos/about.tsx",
        lineNumber: 28,
        columnNumber: 11
      }, this),
      " export is only included on this route and its children."
    ] }, void 0, !0, {
      fileName: "app/routes/demos/about.tsx",
      lineNumber: 25,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("p", { children: [
      "Wait a sec...",
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("em", { children: "its children" }, void 0, !1, {
        fileName: "app/routes/demos/about.tsx",
        lineNumber: 32,
        columnNumber: 24
      }, this),
      "? To understand what we mean by this,",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("a", { href: "https://remix.run/tutorial/4-nested-routes-params", children: "read all about nested routes in the docs" }, void 0, !1, {
        fileName: "app/routes/demos/about.tsx",
        lineNumber: 34,
        columnNumber: 11
      }, this),
      "."
    ] }, void 0, !0, {
      fileName: "app/routes/demos/about.tsx",
      lineNumber: 31,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("hr", {}, void 0, !1, {
      fileName: "app/routes/demos/about.tsx",
      lineNumber: 39,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_react17.Outlet, {}, void 0, !1, {
      fileName: "app/routes/demos/about.tsx",
      lineNumber: 40,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/demos/about.tsx",
    lineNumber: 19,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/demos/about.tsx",
    lineNumber: 18,
    columnNumber: 5
  }, this);
}

// app/routes/demos/about/index.tsx
var about_exports4 = {};
__export(about_exports4, {
  default: () => AboutIndex2
});
var import_react18 = require("@remix-run/react"), import_jsx_dev_runtime23 = require("react/jsx-dev-runtime");
function AboutIndex2() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("p", { children: [
      "You are looking at the index route for the ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("code", { children: "/about" }, void 0, !1, {
        fileName: "app/routes/demos/about/index.tsx",
        lineNumber: 7,
        columnNumber: 52
      }, this),
      " URL segment, but there are nested routes as well!"
    ] }, void 0, !0, {
      fileName: "app/routes/demos/about/index.tsx",
      lineNumber: 6,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("strong", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_react18.Link, { to: "whoa", children: "Check out one of them here." }, void 0, !1, {
      fileName: "app/routes/demos/about/index.tsx",
      lineNumber: 12,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/demos/about/index.tsx",
      lineNumber: 11,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/demos/about/index.tsx",
      lineNumber: 10,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/demos/about/index.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/routes/demos/about/whoa.tsx
var whoa_exports2 = {};
__export(whoa_exports2, {
  default: () => Whoa2
});
var import_react19 = require("@remix-run/react"), import_jsx_dev_runtime24 = require("react/jsx-dev-runtime");
function Whoa2() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("p", { children: [
      "Whoa, this is a nested route! We render the ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("code", { children: "/about" }, void 0, !1, {
        fileName: "app/routes/demos/about/whoa.tsx",
        lineNumber: 7,
        columnNumber: 53
      }, this),
      " layout route component, and its ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("code", { children: "Outlet" }, void 0, !1, {
        fileName: "app/routes/demos/about/whoa.tsx",
        lineNumber: 8,
        columnNumber: 34
      }, this),
      " renders our route component. \u{1F92F}"
    ] }, void 0, !0, {
      fileName: "app/routes/demos/about/whoa.tsx",
      lineNumber: 6,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("strong", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_react19.Link, { to: "..", children: [
      "Go back to the ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("code", { children: "/about" }, void 0, !1, {
        fileName: "app/routes/demos/about/whoa.tsx",
        lineNumber: 14,
        columnNumber: 28
      }, this),
      " index."
    ] }, void 0, !0, {
      fileName: "app/routes/demos/about/whoa.tsx",
      lineNumber: 13,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/demos/about/whoa.tsx",
      lineNumber: 12,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/demos/about/whoa.tsx",
      lineNumber: 11,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/demos/about/whoa.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index3,
  loader: () => loader7,
  meta: () => meta11
});
var import_node11 = require("@remix-run/node"), import_react20 = require("@remix-run/react"), import_jsx_dev_runtime25 = require("react/jsx-dev-runtime"), loader7 = async () => (0, import_node11.json)({
  resources: [
    {
      name: "Remix Docs",
      url: "https://remix.run/docs"
    },
    {
      name: "React Router Docs",
      url: "https://reactrouter.com/docs"
    },
    {
      name: "Remix Discord",
      url: "https://discord.gg/VBePs6d"
    }
  ],
  demos: [
    {
      to: "demos/actions",
      name: "Actions"
    },
    {
      to: "demos/about",
      name: "Nested Routes, CSS loading/unloading"
    },
    {
      to: "demos/params",
      name: "URL Params and Error Boundaries"
    },
    { to: "demos/protected", name: "Protected route" }
  ],
  prayers: [
    {
      to: "prayer/actions",
      name: "Actions"
    },
    {
      to: "prayer/about",
      name: "Nested Routes, CSS loading/unloading"
    },
    {
      to: "prayer/params",
      name: "URL Params and Error Boundaries"
    },
    { to: "prayer/protected", name: "Protected route" }
  ]
}), meta11 = () => ({
  title: "Remix Starter",
  description: "Welcome to remix!"
});
function Index3() {
  let data = (0, import_react20.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "remix__page", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("main", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("h2", { children: "Welcome to Remix!" }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 80,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("p", { children: "We're stoked that you're here. \u{1F973}" }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 81,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("p", { children: "Feel free to take a look around the code to see how Remix does things, it might be a bit different than what you\u2019re used to. When you're ready to dive deeper, we've got plenty of resources to get you up-and-running quickly." }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 82,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("p", { children: [
        "Check out all the demos in this starter, and then just delete the",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("code", { children: "app/routes/demos" }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 90,
          columnNumber: 11
        }, this),
        " and ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("code", { children: "app/styles/demos" }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 90,
          columnNumber: 45
        }, this),
        " ",
        "folders when you're ready to turn this into your next project."
      ] }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 88,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/index.tsx",
      lineNumber: 79,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("aside", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("h2", { children: "Demos In This App" }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 95,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("ul", { children: data.demos.map((demo) => /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("li", { className: "remix__page__resource", children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_react20.Link, { to: demo.to, prefetch: "intent", children: demo.name }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 99,
        columnNumber: 15
      }, this) }, demo.to, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 98,
        columnNumber: 13
      }, this)) }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 96,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("h2", { children: "Prayer Watches In This App" }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 105,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("ul", { children: data.prayers.map((prayer) => /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("li", { className: "remix__page__resource", children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_react20.Link, { to: prayer.to, prefetch: "intent", children: prayer.name }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 109,
        columnNumber: 15
      }, this) }, prayer.to, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 108,
        columnNumber: 13
      }, this)) }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 106,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("h2", { children: "Resources" }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 115,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("ul", { children: data.resources.map((resource) => /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("li", { className: "remix__page__resource", children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("a", { href: resource.url, children: resource.name }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 119,
        columnNumber: 15
      }, this) }, resource.url, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 118,
        columnNumber: 13
      }, this)) }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 116,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/index.tsx",
      lineNumber: 94,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/index.tsx",
    lineNumber: 78,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "f6152358", entry: { module: "/build/entry.client-KUCINIGF.js", imports: ["/build/_shared/chunk-5KNBGYPJ.js", "/build/_shared/chunk-56THQXCK.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-LEI7RNPX.js", imports: ["/build/_shared/chunk-D5EZEAYJ.js", "/build/_shared/chunk-V4P7LV3Q.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !0, hasErrorBoundary: !0 }, "routes/demos/about": { id: "routes/demos/about", parentId: "root", path: "demos/about", index: void 0, caseSensitive: void 0, module: "/build/routes/demos/about-FQZOAXSC.js", imports: ["/build/_shared/chunk-3TZ5REOX.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/demos/about/index": { id: "routes/demos/about/index", parentId: "routes/demos/about", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/demos/about/index-FM6YTZBJ.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/demos/about/whoa": { id: "routes/demos/about/whoa", parentId: "routes/demos/about", path: "whoa", index: void 0, caseSensitive: void 0, module: "/build/routes/demos/about/whoa-X35COATA.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/demos/actions": { id: "routes/demos/actions", parentId: "root", path: "demos/actions", index: void 0, caseSensitive: void 0, module: "/build/routes/demos/actions-TIWTNLSO.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/demos/correct": { id: "routes/demos/correct", parentId: "root", path: "demos/correct", index: void 0, caseSensitive: void 0, module: "/build/routes/demos/correct-E67IXMFJ.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/demos/params": { id: "routes/demos/params", parentId: "root", path: "demos/params", index: void 0, caseSensitive: void 0, module: "/build/routes/demos/params-4CWKK52I.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/demos/params/$id": { id: "routes/demos/params/$id", parentId: "routes/demos/params", path: ":id", index: void 0, caseSensitive: void 0, module: "/build/routes/demos/params/$id-HUFEJV7I.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !0, hasErrorBoundary: !0 }, "routes/demos/params/index": { id: "routes/demos/params/index", parentId: "routes/demos/params", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/demos/params/index-PTDYWVRH.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/demos/protected": { id: "routes/demos/protected", parentId: "root", path: "demos/protected", index: void 0, caseSensitive: void 0, module: "/build/routes/demos/protected-SEJ5KFOE.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/demos/signin": { id: "routes/demos/signin", parentId: "root", path: "demos/signin", index: void 0, caseSensitive: void 0, module: "/build/routes/demos/signin-Q4M4UQUH.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-VU7DWLXF.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/prayer/about": { id: "routes/prayer/about", parentId: "root", path: "prayer/about", index: void 0, caseSensitive: void 0, module: "/build/routes/prayer/about-76IRVFU5.js", imports: ["/build/_shared/chunk-3TZ5REOX.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/prayer/about/index": { id: "routes/prayer/about/index", parentId: "routes/prayer/about", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/prayer/about/index-7QOB3XZM.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/prayer/about/whoa": { id: "routes/prayer/about/whoa", parentId: "routes/prayer/about", path: "whoa", index: void 0, caseSensitive: void 0, module: "/build/routes/prayer/about/whoa-5ZUCOYGA.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/prayer/actions": { id: "routes/prayer/actions", parentId: "root", path: "prayer/actions", index: void 0, caseSensitive: void 0, module: "/build/routes/prayer/actions-KXJWYXAX.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/prayer/correct": { id: "routes/prayer/correct", parentId: "root", path: "prayer/correct", index: void 0, caseSensitive: void 0, module: "/build/routes/prayer/correct-BATKTI35.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/prayer/params": { id: "routes/prayer/params", parentId: "root", path: "prayer/params", index: void 0, caseSensitive: void 0, module: "/build/routes/prayer/params-JIOYP3SA.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/prayer/params/$id": { id: "routes/prayer/params/$id", parentId: "routes/prayer/params", path: ":id", index: void 0, caseSensitive: void 0, module: "/build/routes/prayer/params/$id-CTSNUL76.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !0, hasErrorBoundary: !0 }, "routes/prayer/params/index": { id: "routes/prayer/params/index", parentId: "routes/prayer/params", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/prayer/params/index-M3GB4TQR.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/prayer/protected": { id: "routes/prayer/protected", parentId: "root", path: "prayer/protected", index: void 0, caseSensitive: void 0, module: "/build/routes/prayer/protected-JRVXNVK4.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/prayer/signin": { id: "routes/prayer/signin", parentId: "root", path: "prayer/signin", index: void 0, caseSensitive: void 0, module: "/build/routes/prayer/signin-NMNKYUG7.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/prayer/watches/$id": { id: "routes/prayer/watches/$id", parentId: "root", path: "prayer/watches/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/prayer/watches/$id-BEN5N4IL.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !0, hasErrorBoundary: !0 }, "routes/prayer/watches/index": { id: "routes/prayer/watches/index", parentId: "root", path: "prayer/watches", index: !0, caseSensitive: void 0, module: "/build/routes/prayer/watches/index-WUPI7ZL6.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, cssBundleHref: void 0, url: "/build/manifest-F6152358.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { unstable_cssModules: !1, unstable_cssSideEffectImports: !1, unstable_vanillaExtract: !1, v2_errorBoundary: !1, v2_meta: !1, v2_routeConvention: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/prayer/watches/index": {
    id: "routes/prayer/watches/index",
    parentId: "root",
    path: "prayer/watches",
    index: !0,
    caseSensitive: void 0,
    module: watches_exports
  },
  "routes/prayer/watches/$id": {
    id: "routes/prayer/watches/$id",
    parentId: "root",
    path: "prayer/watches/:id",
    index: void 0,
    caseSensitive: void 0,
    module: id_exports
  },
  "routes/prayer/protected": {
    id: "routes/prayer/protected",
    parentId: "root",
    path: "prayer/protected",
    index: void 0,
    caseSensitive: void 0,
    module: protected_exports
  },
  "routes/demos/protected": {
    id: "routes/demos/protected",
    parentId: "root",
    path: "demos/protected",
    index: void 0,
    caseSensitive: void 0,
    module: protected_exports2
  },
  "routes/prayer/actions": {
    id: "routes/prayer/actions",
    parentId: "root",
    path: "prayer/actions",
    index: void 0,
    caseSensitive: void 0,
    module: actions_exports
  },
  "routes/prayer/correct": {
    id: "routes/prayer/correct",
    parentId: "root",
    path: "prayer/correct",
    index: void 0,
    caseSensitive: void 0,
    module: correct_exports
  },
  "routes/demos/actions": {
    id: "routes/demos/actions",
    parentId: "root",
    path: "demos/actions",
    index: void 0,
    caseSensitive: void 0,
    module: actions_exports2
  },
  "routes/demos/correct": {
    id: "routes/demos/correct",
    parentId: "root",
    path: "demos/correct",
    index: void 0,
    caseSensitive: void 0,
    module: correct_exports2
  },
  "routes/prayer/params": {
    id: "routes/prayer/params",
    parentId: "root",
    path: "prayer/params",
    index: void 0,
    caseSensitive: void 0,
    module: params_exports
  },
  "routes/prayer/params/index": {
    id: "routes/prayer/params/index",
    parentId: "routes/prayer/params",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: params_exports2
  },
  "routes/prayer/params/$id": {
    id: "routes/prayer/params/$id",
    parentId: "routes/prayer/params",
    path: ":id",
    index: void 0,
    caseSensitive: void 0,
    module: id_exports2
  },
  "routes/prayer/signin": {
    id: "routes/prayer/signin",
    parentId: "root",
    path: "prayer/signin",
    index: void 0,
    caseSensitive: void 0,
    module: signin_exports
  },
  "routes/demos/params": {
    id: "routes/demos/params",
    parentId: "root",
    path: "demos/params",
    index: void 0,
    caseSensitive: void 0,
    module: params_exports3
  },
  "routes/demos/params/index": {
    id: "routes/demos/params/index",
    parentId: "routes/demos/params",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: params_exports4
  },
  "routes/demos/params/$id": {
    id: "routes/demos/params/$id",
    parentId: "routes/demos/params",
    path: ":id",
    index: void 0,
    caseSensitive: void 0,
    module: id_exports3
  },
  "routes/demos/signin": {
    id: "routes/demos/signin",
    parentId: "root",
    path: "demos/signin",
    index: void 0,
    caseSensitive: void 0,
    module: signin_exports2
  },
  "routes/prayer/about": {
    id: "routes/prayer/about",
    parentId: "root",
    path: "prayer/about",
    index: void 0,
    caseSensitive: void 0,
    module: about_exports
  },
  "routes/prayer/about/index": {
    id: "routes/prayer/about/index",
    parentId: "routes/prayer/about",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: about_exports2
  },
  "routes/prayer/about/whoa": {
    id: "routes/prayer/about/whoa",
    parentId: "routes/prayer/about",
    path: "whoa",
    index: void 0,
    caseSensitive: void 0,
    module: whoa_exports
  },
  "routes/demos/about": {
    id: "routes/demos/about",
    parentId: "root",
    path: "demos/about",
    index: void 0,
    caseSensitive: void 0,
    module: about_exports3
  },
  "routes/demos/about/index": {
    id: "routes/demos/about/index",
    parentId: "routes/demos/about",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: about_exports4
  },
  "routes/demos/about/whoa": {
    id: "routes/demos/about/whoa",
    parentId: "routes/demos/about",
    path: "whoa",
    index: void 0,
    caseSensitive: void 0,
    module: whoa_exports2
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
