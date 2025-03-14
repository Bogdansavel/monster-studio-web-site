var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import isbot from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { jsx } from "react/jsx-runtime";
var ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isbot(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links
});

// app/css/app.css
var app_default = "/build/_assets/app-EBZIYXWX.css";

// app/root.tsx
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "@remix-run/react";

// app/header.tsx
import { NavLink as NavLink2 } from "@remix-run/react";

// app/buttons/navButton.tsx
import { NavLink } from "@remix-run/react";
import { jsx as jsx2 } from "react/jsx-runtime";
function NavButton(props) {
  let baseStyle = " rounded-3xl";
  return /* @__PURE__ */ jsx2(NavLink, { to: props.to, reloadDocument: props.reloadDocument, className: ({ isActive }) => (isActive ? props.activeNavStyle : props.inactiveNavStyle) + baseStyle, children: /* @__PURE__ */ jsx2("li", { children: props.text }) });
}

// app/header.tsx
import { jsx as jsx3, jsxs } from "react/jsx-runtime";
function Header() {
  let activeNavs = [
    "bg-gradient-to-r from-blue-300 to-purple-500 hover:bg-gradient-to-r hover:from-blue-300 hover:to-purple-500 rounded-3xl",
    "bg-gradient-to-r from-purple-500 to-emerald-500 hover:bg-gradient-to-r hover:from-purple-500 hover:to-emerald-500 rounded-3xl",
    "bg-gradient-to-r from-emerald-500 to-yellow-300 hover:bg-gradient-to-r hover:from-emerald-500 hover:to-yellow-300 rounded-3xl"
  ], inactiveNavs = [
    "bg-white hover:bg-gradient-to-r hover:from-blue-300 hover:to-purple-500 rounded-3xl",
    "bg-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-emerald-500",
    "bg-white hover:bg-gradient-to-r hover:from-emerald-500 hover:to-yellow-300"
  ];
  return /* @__PURE__ */ jsxs("div", { className: "grid justify-items-center", children: [
    /* @__PURE__ */ jsx3(NavLink2, { to: "", children: /* @__PURE__ */ jsx3("img", { src: "Monster-studio-logo.png", className: "w-24 py-3", alt: "Monster studio logo" }) }),
    /* @__PURE__ */ jsxs("ul", { className: "flex justify-center rounded-3xl navbar gap-3", children: [
      /* @__PURE__ */ jsx3(NavButton, { activeNavStyle: activeNavs[0], inactiveNavStyle: inactiveNavs[0], text: "G\u0142\xF3wna", to: "", reloadDocument: !1 }),
      /* @__PURE__ */ jsx3(NavButton, { activeNavStyle: activeNavs[1], inactiveNavStyle: inactiveNavs[1], text: "Zapisy", to: "zapisy", reloadDocument: !0 }),
      /* @__PURE__ */ jsx3(NavButton, { activeNavStyle: activeNavs[2], inactiveNavStyle: inactiveNavs[2], text: "Info", to: "info", reloadDocument: !1 })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex gap-3", children: [
      /* @__PURE__ */ jsx3("a", { href: "https://www.instagram.com/monster.pole/", className: "w-5 pt-4", children: /* @__PURE__ */ jsx3("img", { src: "instlg.png", alt: "instagram logo" }) }),
      /* @__PURE__ */ jsx3("a", { href: "https://youtube.com/@Darth._.julder", className: "w-7 pt-4", children: /* @__PURE__ */ jsx3("img", { src: "youtubelg.png", alt: "youtube logo" }) })
    ] })
  ] });
}

// app/footer.tsx
import { jsx as jsx4, jsxs as jsxs2 } from "react/jsx-runtime";
function Footer() {
  return /* @__PURE__ */ jsx4("div", { className: "w-full grid grid-cols-12 items-end", children: /* @__PURE__ */ jsx4("div", { className: "rounded-t-2xl sm:rounded-t-[3rem] border-t-2 border-neutral-700 col-start-2 col-span-10 lg:col-start-5 lg:col-span-4 mt-3", children: /* @__PURE__ */ jsx4("div", { className: "grid grid-cols-12 h-20 text-white p-3 mt-1 text-xs", children: /* @__PURE__ */ jsx4("div", { className: "col-start-2 col-span-10", children: /* @__PURE__ */ jsxs2("div", { className: "grid grid-cols-2 text-neutral-500", children: [
    /* @__PURE__ */ jsxs2("div", { children: [
      "Krak\xF3w ",
      /* @__PURE__ */ jsx4("br", {}),
      "ul. Koletek 4/10"
    ] }),
    /* @__PURE__ */ jsxs2("div", { className: "text-right", children: [
      "+48794451272",
      /* @__PURE__ */ jsx4("br", {}),
      "monsterstudiopd@gmail.com"
    ] })
  ] }) }) }) }) });
}

// app/root.tsx
import { jsx as jsx5, jsxs as jsxs3 } from "react/jsx-runtime";
function links() {
  return [{ rel: "stylesheet", href: app_default }];
}
function App() {
  return /* @__PURE__ */ jsxs3("html", { lang: "en", className: "dark", children: [
    /* @__PURE__ */ jsxs3("head", { children: [
      /* @__PURE__ */ jsx5("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ jsx5("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
      /* @__PURE__ */ jsx5(Meta, {}),
      /* @__PURE__ */ jsx5(Links, {})
    ] }),
    /* @__PURE__ */ jsxs3("body", { className: "font-body bg-black", children: [
      /* @__PURE__ */ jsxs3("div", { className: "grid justify-items-center h-screen", children: [
        /* @__PURE__ */ jsx5("div", { className: "grid lg:grid-cols-12 justify-items-center", children: /* @__PURE__ */ jsxs3("div", { className: "lg:col-start-4 lg:col-span-6", children: [
          /* @__PURE__ */ jsx5(Header, {}),
          /* @__PURE__ */ jsx5(Outlet, {})
        ] }) }),
        /* @__PURE__ */ jsx5(Footer, {})
      ] }),
      /* @__PURE__ */ jsx5(ScrollRestoration, {}),
      /* @__PURE__ */ jsx5(Scripts, {}),
      /* @__PURE__ */ jsx5(LiveReload, {})
    ] })
  ] });
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index
});
import { Carousel } from "flowbite-react";
import { Flowbite as Flowbite2 } from "flowbite-react";

// app/activity.tsx
import { Modal } from "flowbite-react";
import { useState } from "react";
import { Flowbite } from "flowbite-react";
import { jsx as jsx6, jsxs as jsxs4 } from "react/jsx-runtime";
var customTheme = {
  modal: {
    content: {
      base: "relative w-full p-4 h-auto",
      inner: "relative rounded-lg shadow bg-zinc-900 flex flex-col max-h-[90vh]"
    },
    body: {
      base: "p-6 flex-1 overflow-auto text-black rounded-b-lg bg-gradient-to-r from-blue-300 to-purple-500",
      popup: "pt-0"
    },
    header: {
      base: "flex items-start justify-between rounded-t border-gray-600 border-b p-5",
      popup: "p-2 border-b-0",
      title: "text-xl font-medium text-gray-900 text-white",
      close: {
        base: "ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-600 hover:text-white",
        icon: "h-5 w-5"
      }
    },
    footer: {
      base: "flex items-center space-x-2 rounded-b p-6 border-gray-600",
      popup: "border-t"
    }
  }
};
function Activity(props) {
  let [openModal, setOpenModal] = useState(!1);
  return /* @__PURE__ */ jsxs4("div", { children: [
    /* @__PURE__ */ jsx6("a", { href: "#" + props.name, children: /* @__PURE__ */ jsxs4("div", { className: "grid justify-items-center text-white text-sm m-3", children: [
      /* @__PURE__ */ jsx6("img", { onClick: () => setOpenModal(!0), src: props.img, className: "w-28", alt: "activity pic" }),
      /* @__PURE__ */ jsx6("div", { onClick: () => setOpenModal(!0), className: "bg-zinc-900 px-5 py-3 mt-1 rounded-3xl text-center hover:bg-zinc-800", children: props.name })
    ] }) }),
    /* @__PURE__ */ jsx6(Flowbite, { theme: { theme: customTheme }, children: /* @__PURE__ */ jsxs4(Modal, { dismissible: !0, show: openModal, onClose: () => setOpenModal(!1), children: [
      /* @__PURE__ */ jsx6(Modal.Header, { children: props.name }),
      /* @__PURE__ */ jsx6(Modal.Body, { children: /* @__PURE__ */ jsx6("div", { className: "space-y-6", children: /* @__PURE__ */ jsx6("p", { className: "text-base leading-relaxed text-black", children: props.desc }) }) })
    ] }) })
  ] });
}

// app/routes/_index.tsx
import { jsx as jsx7, jsxs as jsxs5 } from "react/jsx-runtime";
var customTheme2 = {
  modal: {
    content: {
      base: "relative w-full p-4 h-auto",
      inner: "relative rounded-lg shadow bg-zinc-900 flex flex-col max-h-[90vh]"
    },
    body: {
      base: "p-4 flex-1 overflow-auto text-black rounded-b-lg",
      popup: "pt-0"
    },
    header: {
      base: "flex items-start justify-between rounded-t border-gray-600 border-b p-5",
      popup: "p-2 border-b-0",
      title: "text-xl font-medium text-gray-900 text-white",
      close: {
        base: "ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-600 hover:text-white",
        icon: "h-5 w-5"
      }
    },
    footer: {
      base: "flex items-center space-x-2 rounded-b p-6 border-gray-600",
      popup: "border-t"
    }
  }
}, ActivityClass = class {
  img;
  name;
  desc;
  constructor(img, name, desc) {
    this.img = img, this.name = name, this.desc = desc;
  }
};
function Index() {
  let activities = [
    new ActivityClass("stretch.png", "Stretching", "Zaj\u0119cia rozci\u0105gaj\u0105ce polegaj\u0105ce na poprawieniu zakresu ruchu danej partii cia\u0142a. Na zaj\u0119cia we\u017A ze soba top i leginsy."),
    new ActivityClass("balance.png", "Balance", "Na tych zaj\u0119ciach poznasz podstawy stania na r\u0119kach, przedramionach, barkach, oraz inne rodzaje balans\xF3w, z rur\u0105 i bez rury. To idealna okazja by odkry\u0107 nowe wymiary swojego cia\u0142a, wzmocni\u0107 i rozci\u0105gn\u0105\u0107 mi\u0119\u015Bnie oraz zdoby\u0107 umiej\u0119tno\u015Bci balansu i r\xF3wnowagi."),
    new ActivityClass("AerialHoop.png", "Aerial Hoop", "To zaj\u0119cia akrobatyki na podwieszonym kole. W Monstre musisz by\u0107 ubranym w kr\xF3tkie szorty i top."),
    new ActivityClass("pole exotic.png", "Pole Exotic", "Taniec w wysokich szpikach (szklankach) oko\u0142o 20 cm. Podczas zaj\u0119\u0107 wykonywane s\u0105 uk\u0142ady taneczne na rurce i obok niej. Je\u015Bli masz swoje buty \u015Bmia\u0142o we\u017A je ze soba oraz nakolanniki s\u0105 mile widziane."),
    new ActivityClass("pole dance.png", "Pole Dance", "Taniec z elementami akrobatyki uprawiany na rurce pionowej. Na zaj\u0119cia zabierz ze sob\u0105 najkr\xF3tsze spodenki i top."),
    new ActivityClass("mobility.png", "Mobility", "S\u0105 to \u0107wiczenia zwi\u0119kszaj\u0105ce zakresy ruch\xF3w w stawach i panowanie nad swoim cia\u0142em. Prosz\u0119 ubra\u0107 to w czym wygodne b\u0119dzie wykonywa\u0107  ruch\xF3w amplitudowych."),
    new ActivityClass("fitness pole.png", "Fitness pole", "Trening si\u0142owy wzmacniaj\u0105cy mi\u0119\u015Bni i kszta\u0142tuj\u0105cy sylwetk\u0119. Kiedy idziesz na rur\u0119 musisz mie\u0107 ze sob\u0105 szorty."),
    new ActivityClass("pole art.png", "Pole Art", "Pole art to i jest podstawa ta\u0144ca na rurce z elementami wykonywanymi r\xF3wniez obok niej. Na zajecia we\u017A ze soba nakolanniki oraz top z szortami."),
    new ActivityClass("aerial silks.png", "Aerial Silks", "To dyscyplina sportowa, kt\xF3ra polega na wykonywaniu figur i kombinacji na podwieszonej do sufitu szarfie. Prosz\u0119 ubra\u0107 co\u015B z d\u0142ugim  r\u0119kawem.")
  ], carouselImages = ["IMG_2955.JPEG", "IMG_6897.JPG", "IMG_6031.JPG", "IMG_6958.JPG", "IMG_6052.JPG"], ad = [
    "bg-gradient-to-r from-orange-500 to-amber-500 hover:bg-gradient-to-r hover:to-orange-500 hover:from-amber-500 rounded-3xl p-2 m-4"
  ];
  return /* @__PURE__ */ jsxs5("div", { className: "grid justify-items-center", children: [
    /* @__PURE__ */ jsx7("div", { className: "w-96 h-72 lg:h-[25rem] lg:w-[40rem] 2xl:h-[35rem] 2xl:w-[50rem] pt-4", children: /* @__PURE__ */ jsx7(Flowbite2, { theme: { theme: customTheme2 }, children: /* @__PURE__ */ jsx7(Carousel, { slideInterval: 7e3, children: carouselImages.map((image) => /* @__PURE__ */ jsx7("img", { src: image })) }) }) }),
    /* @__PURE__ */ jsxs5("div", { className: "grid grid-cols-12", children: [
      /* @__PURE__ */ jsx7("p", { className: "text-white py-4 col-start-2 col-span-10 2xl:col-start-4 2xl:col-span-6 text-center mt-3", children: "Z Monster studio b\u0119dziesz zawsze wysportowany i rozci\u0105gni\u0119ty po takich zaj\u0119ciach:" }),
      /* @__PURE__ */ jsx7("div", { className: "col-start-2 col-span-10 2xl:col-start-5 2xl:col-span-4", children: /* @__PURE__ */ jsx7("div", { className: "grid justify-items-center grid-cols-3", children: activities.map((activity) => /* @__PURE__ */ jsx7(Activity, { img: activity.img, name: activity.name, desc: activity.desc })) }) })
    ] })
  ] });
}

// app/routes/zapisy.tsx
var zapisy_exports = {};
__export(zapisy_exports, {
  default: () => Index2
});
import { useEffect, useState as useState3 } from "react";

// app/buttons/modalButton.tsx
import { Modal as Modal2 } from "flowbite-react";
import { useState as useState2 } from "react";
import { Flowbite as Flowbite3 } from "flowbite-react";
import { jsx as jsx8, jsxs as jsxs6 } from "react/jsx-runtime";
var customTheme3 = {
  modal: {
    content: {
      base: "relative w-full p-4 h-auto",
      inner: "relative rounded-lg shadow bg-zinc-900 flex flex-col max-h-[90vh]"
    },
    body: {
      base: "p-6 flex-1 overflow-auto text-black rounded-b-lg bg-gradient-to-r from-blue-300 to-purple-500",
      popup: "pt-0"
    },
    header: {
      base: "flex items-start justify-between rounded-t border-gray-600 border-b p-5",
      popup: "p-2 border-b-0",
      title: "text-xl font-medium text-gray-900 text-white",
      close: {
        base: "ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-600 hover:text-white",
        icon: "h-5 w-5"
      }
    },
    footer: {
      base: "flex items-center space-x-2 rounded-b p-6 border-gray-600",
      popup: "border-t"
    }
  }
};
function ModalButton(props) {
  let [openModal, setOpenModal] = useState2(!1);
  return /* @__PURE__ */ jsxs6("div", { children: [
    /* @__PURE__ */ jsx8("a", { href: "#" + props.name, children: /* @__PURE__ */ jsx8("div", { className: "text-white text-sm", children: /* @__PURE__ */ jsx8("div", { onClick: () => setOpenModal(!0), className: "bg-zinc-900 px-5 py-3 mt-1 rounded-3xl text-center hover:bg-zinc-800", children: props.name }) }) }),
    /* @__PURE__ */ jsx8(Flowbite3, { theme: { theme: customTheme3 }, children: /* @__PURE__ */ jsxs6(Modal2, { dismissible: !0, show: openModal, onClose: () => setOpenModal(!1), children: [
      /* @__PURE__ */ jsx8(Modal2.Header, { children: props.name }),
      /* @__PURE__ */ jsx8(Modal2.Body, { children: /* @__PURE__ */ jsx8("div", { className: "space-y-6", children: /* @__PURE__ */ jsx8("p", { className: "text-base leading-relaxed text-black", children: props.desc }) }) })
    ] }) })
  ] });
}

// app/routes/zapisy.tsx
import { jsx as jsx9, jsxs as jsxs7 } from "react/jsx-runtime";
var CennikPosition = class {
  name;
  desc;
  constructor(name, desc) {
    this.name = name, this.desc = desc;
  }
};
function Index2() {
  useEffect(() => {
    let script = document.createElement("script");
    script.text = "(function(i,s,o,g,r,a,m){i['FitsseyWidget']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','https://app.fitssey.com/assets/js/lb.widget.prod.js','lb');lb('init','Monster');", script.async = !0, document.body.appendChild(script);
  });
  let [openModal, setOpenModal] = useState3(!1), cenniks = [
    new CennikPosition("1 wej\u015Bcie - 60z\u0142", "Jednorazowe wej\u015Bcie na wybrane przez Ciebie zaj\u0119cie w grupie. Karnet jest aktywny przez 30 dni od dnia zakupu."),
    new CennikPosition("Karnet 4 - 220z\u0142", "Karnet obejmuje 4 wej\u015Bcia na grupowe zaj\u0119cia, aktywny przez 30 dni od dnia zakupu. 55zl za trening"),
    new CennikPosition("Karnet 6 - 300z\u0142", "Karnet obejmuje 6 wej\u015B\u0107 na grupowe zaj\u0119cia, aktywny przez 30 dni od dnia zakupu. 50zl za trening"),
    new CennikPosition("Karnet 8+1 - 330z\u0142", "Karnet \u0142\u0105czy w sobie 8 wej\u015B\u0107 na grupowe zaj\u0119cia i 1 wej\u015Bcie na open pole. Aktywny przez 30 dni od dnia zakupu. 41zl za trening"),
    new CennikPosition("Karnet 12 - 435z\u0142", "Karnet obejmuje 12 wej\u015B\u0107 na grupowe zaj\u0119cia, aktywny przez 30 dni od dnia zakupu. 36zl za trening"),
    new CennikPosition("Moooonster - 750z\u0142", "Karnet obejmuje 30 zaj\u0119\u0107 grupowych. Mo\u017Cliwo\u015B\u0107 zapisania si\u0119 maksymalnie na 7 trening\xF3w tygodniowo, aktywny przez 30 dni od dnia zakupu. 25zl za trening"),
    new CennikPosition("Open pole - 40z\u0142", "To jedne wersje bez trenera."),
    new CennikPosition("Personalne - 160z\u0142", "Jeden 60 minutowy  trening z trenerem face to face."),
    new CennikPosition("Impreza - od 1100z\u0142", "Masz urodziny, wiecz\xF3r panie\u0144ski albo po prostu chcesz imprezowa\u0107 z rurami i szampanem? To zapraszam do kontaktu 794451272."),
    new CennikPosition("Dziecki - 255z\u0142", "Karnet dla os\xF3b od 6 do 14 lat na 6 zaj\u0119\u0107 w grupie. On jest aktywny 30 dni od dnia zakupu.")
  ];
  return /* @__PURE__ */ jsxs7("div", { className: "grid w-full mt-5 gap-4 justify-items-center", children: [
    /* @__PURE__ */ jsxs7("div", { className: "grid w-96 py-5 text-white text-xl border-2 rounded-xl border-neutral-700 justify-items-center", children: [
      /* @__PURE__ */ jsx9("h1", { className: "text-3xl mb-5", children: /* @__PURE__ */ jsx9("b", { children: "Cennik" }) }),
      /* @__PURE__ */ jsx9("div", { className: "grid grid-cols-2 gap-4 justify-items-center", children: cenniks.map((cennik) => /* @__PURE__ */ jsx9(ModalButton, { name: cennik.name, desc: cennik.desc })) })
    ] }),
    /* @__PURE__ */ jsx9("div", { className: "text-neutral-500 text-sm p-5", children: /* @__PURE__ */ jsx9("p", { children: "Informujemy, \u017Ce anulacja zaj\u0119\u0107 grupowych jest mo\u017Cliwa do 24 godzin przed ich rozpocz\u0119ciem (r\xF3wnie\u017C listy rezerwowe). W takim wypadku wej\u015Bcie zostanie zwr\xF3cone na Twoje konto, a Ty b\u0119dziesz m\xF3g\u0142 je wykorzysta\u0107 w ramach Twojego karnetu. Je\u015Bli anulacja nast\u0105pi p\xF3\u017Aniej ni\u017C 24 godziny przed zaj\u0119ciami grupowymi, Twoje wej\u015Bcie przepada, a my nie b\u0119dziemy w stanie zaoferowa\u0107 Ci zwrotu lub mo\u017Cliwo\u015Bci skorzystania\xA0z niego w przysz\u0142o\u015Bci." }) }),
    /* @__PURE__ */ jsx9("div", { className: "w-full", children: /* @__PURE__ */ jsx9("lb-schedule-widget", {}) })
  ] });
}

// app/routes/info.tsx
var info_exports = {};
__export(info_exports, {
  default: () => Info
});
import { jsx as jsx10, jsxs as jsxs8 } from "react/jsx-runtime";
function Info() {
  return /* @__PURE__ */ jsx10("div", { className: "grid grid-cols-12 justify-items-center mt-5 text-white", children: /* @__PURE__ */ jsxs8("div", { className: "col-start-2 col-span-10 text-center", children: [
    /* @__PURE__ */ jsx10("h1", { className: "text-3xl mb-2", children: /* @__PURE__ */ jsx10("b", { children: "Lokalizacja" }) }),
    /* @__PURE__ */ jsx10("p", { children: "Adres: Krak\xF3w, ul. Koletek 4/10." }),
    /* @__PURE__ */ jsxs8("div", { children: [
      /* @__PURE__ */ jsx10("div", { className: "pt-3", children: /* @__PURE__ */ jsx10("video", { className: "rounded-3xl", width: "480", height: "480", poster: "videoPoster.png", controls: !0, controlsList: "nofullscreen", playsInline: !0, autoPlay: !0, loop: !0, preload: "", children: /* @__PURE__ */ jsx10("source", { src: "https://storage.googleapis.com/monster-studio-web-site_cloudbuild/MonsterVideo.mp4", type: "video/mp4" }) }) }),
      /* @__PURE__ */ jsx10("div", { className: "mt-5 h-96", children: /* @__PURE__ */ jsx10("iframe", { className: "w-full h-full rounded-3xl", src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212.36176321082417!2d19.939238736941796!3d50.0522710708242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165b6b8bc5f96f%3A0xc326ae93cfe14e78!2sKoletek%204%2C%2031-069%20Krak%C3%B3w!5e0!3m2!1sru!2spl!4v1703853598818!5m2!1sru!2spl", frameBorder: "0", allowFullScreen: !0, loading: "lazy" }) }),
      /* @__PURE__ */ jsx10("div", { className: "m-5", children: /* @__PURE__ */ jsx10("a", { href: "https://storage.googleapis.com/monster-studio-web-site_cloudbuild/REGULAMIN%20OBIEKTU%20MONSTER%20STUDIO.docx", children: "REGULAMIN OBIEKTU MONSTER STUDIO.docx" }) })
    ] })
  ] }) });
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-RZ2A5KME.js", imports: ["/build/_shared/chunk-ZEPT3PAS.js", "/build/_shared/chunk-3RVWVZ2O.js", "/build/_shared/chunk-DWFMXSZ6.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-5WLQEOCB.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-ARYEF2HU.js", imports: ["/build/_shared/chunk-Y7F4IOKB.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/info": { id: "routes/info", parentId: "root", path: "info", index: void 0, caseSensitive: void 0, module: "/build/routes/info-FZPNW5QE.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/zapisy": { id: "routes/zapisy", parentId: "root", path: "zapisy", index: void 0, caseSensitive: void 0, module: "/build/routes/zapisy-E3VO2ORL.js", imports: ["/build/_shared/chunk-Y7F4IOKB.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "d79fee8d", hmr: void 0, url: "/build/manifest-D79FEE8D.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "production", assetsBuildDirectory = "public/build", future = { v3_fetcherPersist: !1, v3_relativeSplatPath: !1, v3_throwAbortReason: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/zapisy": {
    id: "routes/zapisy",
    parentId: "root",
    path: "zapisy",
    index: void 0,
    caseSensitive: void 0,
    module: zapisy_exports
  },
  "routes/info": {
    id: "routes/info",
    parentId: "root",
    path: "info",
    index: void 0,
    caseSensitive: void 0,
    module: info_exports
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
