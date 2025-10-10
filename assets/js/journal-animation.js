/* Journal SVG Mouse Animation with GSAP */
(function () {
  const mouse = {
    x: 0,
    prevX: 0,
  };

  const journals = document.querySelectorAll('[id^="journal"]');

  journals.forEach((icon) => {
    icon.addEventListener("mousemove", (e) => {
      mouse.prevX = mouse.x;
      mouse.x = e.x;

      let mouseEntryRotation;

      // Determine which x coordinate side the mouse entered from
      if (mouse.x > mouse.prevX) {
        mouseEntryRotation = 5;
      } else if (mouse.x < mouse.prevX) {
        mouseEntryRotation = -5;
      } else {
        mouseEntryRotation = 0;
      }

      initJournalAnimation(mouseEntryRotation, icon);
    });
  });

  function initJournalAnimation(mouseEntryRotation, journal) {
    // Check if GSAP is available
    if (typeof gsap === "undefined") {
      console.warn("GSAP not loaded, journal animation disabled");
      return;
    }

    // Get journal SVG elements
    gsap.to(journal, {
      rotation: mouseEntryRotation,
      duration: 0.5,
      transformOrigin: "50% 50%",
    });
  }
})();
