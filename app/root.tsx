import CSS from "./css/app.css";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import Header from "./header";
import Footer from "./footer";

export function links() {
  return [{ rel: "stylesheet", href: CSS }]
}

export default function App() {
  return (
    <html lang="en" className="dark">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="font-body bg-black">
        <div className="grid justify-items-center h-screen">
          <div className="grid lg:grid-cols-12 justify-items-center">
            <div className="lg:col-start-4 lg:col-span-6">
              <Header />
              <Outlet />
            </div>
          </div>
          <Footer />
        </div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
