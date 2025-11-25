import { a as attr } from './attributes-DIZVxfKf.js';
import { e as escape_html } from './escaping-CqgfEcN3.js';

const dateOptions = {
  year: "numeric",
  month: "long",
  day: "numeric",
  timeZone: "UTC"
};
const dateFormat = new Intl.DateTimeFormat(void 0, dateOptions);
function get_time_remaining(target_time) {
  let now = (/* @__PURE__ */ new Date()).getTime();
  let difference = target_time - now;
  const days = Math.floor(difference / (1e3 * 60 * 60 * 24));
  const hours = Math.floor(difference % (1e3 * 60 * 60 * 24) / (1e3 * 60 * 60));
  const minutes = Math.floor(difference % (1e3 * 60 * 60) / (1e3 * 60));
  const seconds = Math.floor(difference % (1e3 * 60) / 1e3);
  return days + "d : " + hours + "h : " + minutes + "m : " + seconds + "s ";
}
const SvelteDate = globalThis.Date;
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const defaultDate = "Nov 20, 2025";
    const defaultTime = "19:30:00";
    let targetDate = defaultDate;
    let targetTime = defaultTime;
    let displayDate = new SvelteDate(new Date(targetDate));
    let newDateTime = (/* @__PURE__ */ new Date(targetDate + " " + targetTime)).getTime();
    let timeRemaining = "";
    setInterval(
      function() {
        timeRemaining = get_time_remaining(newDateTime);
      },
      1e3
    );
    $$renderer2.push(`<div class="main svelte-1uha8ag"><h1>Cool Cats Countdown</h1> <div class="countdown svelte-1uha8ag">${escape_html(timeRemaining)} <br/> <div class="svelte-1uha8ag">${escape_html(dateFormat.format(displayDate))} <br/> <form><input type="date"${attr("value", targetDate)}/> <input type="time"${attr("value", targetTime)}/> <button type="submit">Confirm</button></form></div></div> <div></div></div>`);
  });
}

export { _page as default };
//# sourceMappingURL=_page.svelte-CzFdbUGu.js.map
