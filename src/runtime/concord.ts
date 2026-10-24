// --------------------------------------------------------------------------------------
// Concord Runtime
// --------------------------------------------------------------------------------------
// This script adds small UX tweaks for users with JavaScript enabled. In the spirit of
// progressive enhancement, sites will be fully functional without it.
//
// This script does the following:
// - Makes Sidebar fill available vertical space when Header is scrolled in/out of view
// - Enables use of the `if-js-enabled` and `if-js-disabled` utility classes
// --------------------------------------------------------------------------------------

(async function () {
  /////////////////////////////
  //       Initialize        //
  /////////////////////////////

  // Ensure we're in a browser environment and exit early if not
  if (typeof window === "undefined" || typeof document === "undefined") {
    console.warn(
      "The Concord Runtime script was loaded in a non-browser environment. It's designed to run exclusively in the browser, so it won't do anything here.",
    );
    return;
  }

  // Wait for document to be done loading before we continue
  await new Promise<void>((resolve) => {
    if (document.readyState !== "complete") {
      window.addEventListener("load", () => resolve());
    } else {
      resolve();
    }
  });

  /////////////////////////////
  //     Globals & Utils     //
  /////////////////////////////

  const $root = document.querySelector("html");
  const $app = document.querySelector<HTMLElement>(".cd-app");
  const $appBody = document.querySelector<HTMLElement>(".cd-app-body");
  const $appContent = document.querySelector<HTMLElement>(".cd-app-content");
  const $sidebarContent = document.querySelector<HTMLElement>(
    ".cd-app-sidebar-content",
  );

  const smallWidthMediaQuery = window.matchMedia("(width < 55rem)");

  const hasVerticalOverflow = () =>
    $app != null && $app.scrollHeight > $app.clientHeight;

  //////////////////////////////
  //   Define Enhancements    //
  //////////////////////////////

  const setJsEnabled = () => {
    if ($app) {
      $app.dataset.cdJsEnabled = "true";
    }
  };

  const setSidebarHeight = () => {
    // Ensure all necessary elements are present
    if (!$root || !$sidebarContent || !$appBody) {
      return;
    }

    // On narrow viewports (where sidebar is an overlay), remove the inline style for height
    if (smallWidthMediaQuery.matches) {
      $sidebarContent.style.height = "";
      return;
    }

    // On medium and wide viewports, resize the sidebar to fill available vertical space
    const start = Math.max(0, $appBody.getBoundingClientRect().top);
    const end = $root.clientHeight;
    const availableHeight = Math.floor(end - start);
    $sidebarContent.style.height = `${availableHeight}px`;
  };

  //////////////////////////////
  //  Set Up Listeners & Run  //
  //////////////////////////////

  // Resize listeners
  window.addEventListener("resize", setSidebarHeight);

  // Scroll listener
  $app?.addEventListener("scroll", () => {
    // Only resize the sidebar if the body content overflows the page. This
    // prevents weird behavior when the browser has elastic scrolling.
    if (hasVerticalOverflow()) setSidebarHeight();
  });

  // Run all enhancements on initial load
  setSidebarHeight();
  setJsEnabled();
})().catch(console.error);
