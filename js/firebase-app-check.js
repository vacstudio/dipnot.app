// Firebase App Check bootstrap for the account-deletion endpoints.
//
// The account-deletion Cloud Functions (submitAccountDeletionRequest,
// confirmAccountDeletionRequest) are plain HTTP onRequest handlers that
// REQUIRE a valid App Check token in the `X-Firebase-AppCheck` header in
// production — they reject requests without one. Because they are not
// callable functions, the token must be attached manually to each fetch.
//
// This module is the single place landing initialises Firebase. It is an
// ES module loaded with <script type="module"> (the rest of the site uses
// plain IIFE scripts; only the deletion pages need this). Other module
// scripts import getAppCheckToken() from here.
//
// All values below are PUBLIC client config — the web apiKey identifies the
// Firebase project, it does not authorise anything. Safe to ship in source.
//
// Firebase JS SDK is pinned to 11.6.1 from Google's gstatic CDN. ES module
// imports can't carry an SRI hash today, so this is the one CDN dependency
// on the site without subresource integrity (gstatic is Google's own CDN).
// Bump the version in BOTH import URLs together when updating.
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import {
  initializeAppCheck,
  ReCaptchaEnterpriseProvider,
  getToken,
} from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app-check.js";

// "Dipnot Landing Page" web app (appId …e55962), registered with App Check
// (reCAPTCHA Enterprise) 2026-06-01. Config pulled from the Firebase console.
const firebaseConfig = {
  apiKey: "AIzaSyCMde0m-88HChTa7dK4hV8i3_cZbvlTmpg",
  authDomain: "dipnotapp.firebaseapp.com",
  projectId: "dipnotapp",
  storageBucket: "dipnotapp.firebasestorage.app",
  messagingSenderId: "579105552455",
  appId: "1:579105552455:web:6cf0dfcd33645135e55962",
  measurementId: "G-YSQJLFK4HZ",
};

// Public reCAPTCHA Enterprise site key (provided by FirebaseFunctions).
const RECAPTCHA_SITE_KEY = "6LcchwctAAAAAKXJ_ubcd0VpAzcsfYSC9A84-4te";

const app = initializeApp(firebaseConfig);
const appCheck = initializeAppCheck(app, {
  provider: new ReCaptchaEnterpriseProvider(RECAPTCHA_SITE_KEY),
  isTokenAutoRefreshEnabled: true,
});

// Returns a fresh App Check token to attach as `X-Firebase-AppCheck`.
// `false` = don't force-refresh; the SDK serves a cached token until it
// nears expiry. Throws if the token can't be obtained (e.g. reCAPTCHA
// blocked) — callers surface that as a user-facing error.
export async function getAppCheckToken() {
  const { token } = await getToken(appCheck, false);
  return token;
}
