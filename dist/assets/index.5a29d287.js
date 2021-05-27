import { R as e, a as o, r as n } from "./vendor.987c2213.js";
function t() {
  return e.createElement(
    "div",
    { className: "App" },
    e.createElement(
      "header",
      { className: "App-header" },
      e.createElement("img", {
        src: "/assets/logo.ecc203fb.svg",
        className: "App-logo",
        alt: "logo",
      }),
      e.createElement(
        "p",
        null,
        "Edit ",
        e.createElement("code", null, "src/App.tsx"),
        " and save to reload."
      ),
      e.createElement(
        "a",
        {
          className: "App-link",
          href: "https://reactjs.org",
          target: "_blank",
          rel: "noopener noreferrer",
        },
        "Learn React"
      )
    )
  );
}
const r = Boolean(
  "localhost" === window.location.hostname ||
    "[::1]" === window.location.hostname ||
    window.location.hostname.match(
      /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
);
function a(e, o) {
  navigator.serviceWorker
    .register(e)
    .then((e) => {
      e.onupdatefound = () => {
        const n = e.installing;
        null != n &&
          (n.onstatechange = () => {
            "installed" === n.state &&
              (navigator.serviceWorker.controller
                ? (console.log(
                    "New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."
                  ),
                  o && o.onUpdate && o.onUpdate(e))
                : (console.log("Content is cached for offline use."),
                  o && o.onSuccess && o.onSuccess(e)));
          });
      };
    })
    .catch((e) => {
      console.error("Error during service worker registration:", e);
    });
}
const s = "__reload_for_sw",
  c = () => {
    o.render(
      e.createElement(n.exports.StrictMode, null, e.createElement(t, null)),
      document.getElementById("root")
    );
  };
c();
const i = () => {
  (window[s] = !0), c();
};
!(function (e) {
  if ("serviceWorker" in navigator) {
    if (
      new URL({}.PUBLIC_URL, window.location.href).origin !==
      window.location.origin
    )
      return;
    window.addEventListener("load", () => {
      const o = `${{}.PUBLIC_URL}/service-worker.js`;
      r
        ? ((function (e, o) {
            fetch(e, { headers: { "Service-Worker": "script" } })
              .then((n) => {
                const t = n.headers.get("content-type");
                404 === n.status ||
                (null != t && -1 === t.indexOf("javascript"))
                  ? navigator.serviceWorker.ready.then((e) => {
                      e.unregister().then(() => {
                        window.location.reload();
                      });
                    })
                  : a(e, o);
              })
              .catch(() => {
                console.log(
                  "No internet connection found. App is running in offline mode."
                );
              });
          })(o, e),
          navigator.serviceWorker.ready.then(() => {
            console.log(
              "This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA"
            );
          }))
        : a(o, e);
    });
  }
})({ onUpdate: i, onSuccess: i });
