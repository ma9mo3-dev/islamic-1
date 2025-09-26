document.addEventListener("DOMContentLoaded", () => {
  fetch("fallback.json")
    .then(res => res.json())
    .then(data => {
      const list = document.getElementById("nasheedList");
      data.forEach(nasheed => {
        const card = document.createElement("div");
        card.className = "nasheed-card";

        const title = document.createElement("div");
        title.className = "nasheed-title";
        title.textContent = nasheed.title;

        const audio = document.createElement("audio");
        audio.controls = true;
        audio.src = nasheed.url;

        card.appendChild(title);
        card.appendChild(audio);
        list.appendChild(card);
      });
    })
    .catch(err => {
      console.error("فشل تحميل الأناشيد:", err);
    });
});
