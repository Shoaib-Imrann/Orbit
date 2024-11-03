import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import * as Sentry from "@sentry/react";

const dsn = import.meta.env.VITE_SENTRY_DSN;

if(dsn){
Sentry.init({
  dsn: dsn,
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration(),
    Sentry.feedbackIntegration({
      colorScheme: "dark",
    }),
  ],
  tracesSampleRate: 1.0,
  tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
});
}

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);



// If you want to use Sentry for this project, please follow these steps:
//  1. Create a .env file in the root directory of the project.
//  2. Inside the .env file, include the following keys:
//     SENTRY_AUTH_TOKEN="given_by_sentry_after_setup"
//     VITE_SENTRY_ORG="your_org_name_here"
//     VITE_SENTRY_DSN="your_dsn_here"
