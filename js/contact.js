(() => {
  const T = "vgwdtciadyl.ko@emuvbgy";
  const M = [16, 7, 6, 10, 4, 13];
  const A = [7, 10, 10, 15, 1, 15, 3, 10, 9, 11, 7, 11, 3, 15, 0, 14, 1, 16, 7, 6, 10, 11, 5, 13, 16];
  const build = (ix) => ix.map((i) => T[i]).join("");
  const link = document.getElementById("contact-link");
  if (!link) return;
  link.addEventListener("click", (e) => {
    e.preventDefault();
    if (!e.isTrusted) return;
    const address = build(A);
    const text = document.createElement("span");
    text.id = "contact-address";
    text.textContent = address;
    link.replaceWith(text);
    location.href = build(M) + ":" + address;
  });
})();
