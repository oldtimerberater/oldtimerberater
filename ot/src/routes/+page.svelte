<script>
  let { data } = $props();
  const { siteInfo } = data;
</script>

<article>
  <header>&nbsp;</header>
  <div class="name-position-service">
    <h1 class="name">
      {siteInfo.founder.firstName}
      {siteInfo.founder.lastName}
    </h1>
    <h2 class="position">founder / CEO</h2>
    <h3 class="service">{siteInfo.meta.description}</h3>
  </div>
  <dl class="contacts">
    <dt>T</dt>
    <dd>
      <a href="tel:{siteInfo.contacts.telephone}" target="_blank"
        >{siteInfo.contacts.telephone}</a
      >
    </dd>

    <dt>E</dt>
    <dd>
      <a href="mailto:{siteInfo.contacts.email}" target="_blank"
        >{siteInfo.contacts.email}</a
      >
    </dd>
  </dl>
  <footer>&nbsp;</footer>
</article>

<style>
  :root {
    font-family: "Inter", sans-serif;
  }

  @supports (font-variation-settings: normal) {
    :root {
      font-family: "InterVariable", sans-serif;
      font-variation-settings:
        "wght" 100,
        "opsz" 14;
      font-feature-settings:
        "case" 0,
        "dlig" 0,
        "frac" 0,
        "dnom" 0,
        "numr" 0,
        "subs" 0,
        "sups" 0,
        "tnum" 0,
        "zero",
        "ss01",
        "ss02" 0,
        "ss03" 0,
        "ss04" 0,
        "ss05" 0,
        "ss06" 0,
        "ss07" 0,
        "ss08" 0,
        "cv01" 0,
        "cv02" 0,
        "cv03" 0,
        "cv04" 0,
        "cv05",
        "cv06",
        "cv07",
        "cv08" 0,
        "cv09" 0,
        "cv10" 0,
        "cv11",
        "cv12",
        "cv13",
        "cpsp",
        "c2sc" 0,
        "salt" 0,
        "aalt" 0,
        "calt",
        "ccmp",
        "locl",
        "kern";
    }
  }

  :root {
    /* global color scheme */
    --root-background-color: hsl(240deg 6.67% 97.06%);
    --root-color: hsl(0deg 0% 10.2%);
    --article-background-color: hsl(0deg 0% 100% / 0%);
    --filter-drop-shadow-color: hsl(0deg 0% 81.72%);
    --name-color: hsl(0deg 0% 27.57%);
    --position-color: var(--name-color);
    --service-color: var(--name-color);
    --header-footer-color: hsl(0deg 0% 47% / 1);

    /* global defaults (desktop-ish baseline) */
    --article-padding: 2.5vw;
    --article-padding-top: 0.5vw;
    --article-padding-bottom: var(--article-padding-top);
    --article-border-radius: 2px;
    --article-min-width: 40vw;
    --article-aspect-ratio: 5 / 3;
    --article-column-gap: 0.5vw;
    --article-row-gap: 1vh;
    --article-filter: drop-shadow(2px 4px 6px var(--filter-drop-shadow-color));
    --header-footer-margin-size: 2.5vh;

    /* global defaults applied */
    color: var(--root-color);
    background-color: var(--root-background-color);
  }

  article {
    container: article / inline-size;
    display: grid;
    grid-template-columns: var(--article-padding) 1fr var(--article-padding);
    grid-template-rows:
      var(--article-padding-top)
      auto
      3fr
      1fr
      auto
      var(--article-padding-bottom);
    grid-template-areas:
      ". . ."
      ". header ."
      ". name-position-service ."
      ". contacts ."
      ". footer ."
      ". . .";
    column-gap: var(--article-column-gap);
    row-gap: var(--article-row-gap);

    align-self: center;
    justify-self: center;
    aspect-ratio: var(--article-aspect-ratio);
    min-width: var(--article-min-width);
    border-radius: var(--article-border-radius);
    color: var(--color);

    background-color: var(--article-background-color);
    /* filter: var(--article-filter); */

    & > :is(header, footer) {
      display: flex;
      justify-content: center;
      align-items: center;
      text-transform: uppercase;
      font-variant: all-petite-caps;
      font-size: small;
      color: var(--header-footer-color);
    }

    & > header {
      grid-area: header;
      margin-bottom: var(--header-footer-margin-size);
    }

    & > .name-position-service {
      container: name-position-service / inline-size;
      grid-area: name-position-service;
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 2fr 1fr 2fr;
      grid-template-areas:
        "name"
        "position"
        "service";
      column-gap: var(--article-column-gap);
      row-gap: calc(var(--article-row-gap) * 0.75);

      & > :is(.name, .position, .service) {
        display: flex;
        justify-content: end;
        margin: 0;
      }

      & > .name {
        grid-area: name;
        display: flex;
        align-items: end;
        margin-bottom: calc(var(--header-footer-margin-size) * 0.35);
        font-variation-settings: "wght" 900;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        color: var(--name-color);
        user-select: all;
        pointer-events: all;
      }

      & > .position {
        grid-area: position;
        align-items: center;
        font-variation-settings: "wght" 600;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        color: var(--position-color);
      }

      & > .service {
        grid-area: service;
        align-items: start;
        margin-top: calc(var(--header-footer-margin-size) * 0.35);
        font-variation-settings: "wght" 300;
        letter-spacing: 0.05em;
        color: var(--service-color);
      }
    }

    & > .contacts {
      container: contacts / inline-size;
      grid-area: contacts;
      display: grid;
      grid-template-columns: auto 1fr;
      justify-content: stretch;
      align-items: center;
      margin: 0;
      width: 100%;
      justify-self: center;

      & > :is(dt, dd) {
        display: flex;
        align-items: center;
      }

      & > dt {
        grid-column: 1;
        aspect-ratio: 1 / 1;
        height: 100%;
        justify-content: center;
        color: var(--filter-drop-shadow-color);
        display: none;
      }

      & > dd {
        grid-column: 2;
        margin-inline-start: unset;
        /* border-bottom: 1px dotted var(--filter-drop-shadow-color); */
        justify-content: end;
      }

      & :is(a, a:visited) {
        text-decoration: none;
        color: var(--color);
        pointer-events: all;
      }
    }

    & > footer {
      grid-area: footer;
      margin-top: var(--header-footer-margin-size);
    }
  }

  /* =========================
   PHONE – PORTRAIT
   max-width: 600px & portrait
   ========================= */
  @media (max-width: 600px) and (orientation: portrait) {
    :root {
      --article-min-width: 90vw;
      --article-aspect-ratio: unset;
      --article-min-width: unset;
      --article-filter: none;
      --article-background-color: unset;
      --article-padding: 2.5vw;
      --article-padding-top: 4vw;
      --article-padding-bottom: 4vw;
      --article-column-gap: 2vw;
      --article-row-gap: 1.5vh;
      --header-footer-margin-size: 1.5vh;
      --article-row-gap: 3vh;
    }

    article {
      grid-template-columns: var(--article-padding) 1fr var(--article-padding);
      grid-template-rows: 2fr 1fr;
      grid-template-areas:
        ". name-position-service ."
        ". contacts ."
        ". contacts. ";

      & > :is(header, footer) {
        display: none;
      }

      & > .name-position-service {
        grid-template-columns: 1fr;
        grid-template-rows: 5fr 1fr 1fr;
        grid-template-areas:
          "name"
          "position"
          "service";
        column-gap: unset;

        & > :is(.name, .position, .service) {
          margin: 0;
          font-variation-settings:
            "wght" 100,
            "opsz" 28;
        }

        & > .name {
          font-size: 38px;
          align-items: end;
          letter-spacing: -0.07em;
        }

        & > .position {
          font-size: x-large;
          align-items: start;
        }

        & > .service {
          align-items: center;
        }
      }

      align-self: stretch;
      justify-self: stretch;
    }

    article > .contacts {
      width: 100%;
      justify-self: stretch;
    }
  }

  /* =========================
   PHONE – LANDSCAPE
   small height & landscape (rotated phone)
   ========================= */
  @media (max-height: 600px) and (orientation: landscape) {
    :root {
      --article-min-width: 85vw;
      --article-aspect-ratio: 5 / 3;
      --article-padding: 4vw;
      --article-padding-top: 3vw;
      --article-padding-bottom: 3vw;
      --article-column-gap: 2vw;
      --article-row-gap: 1.2vh;
      --header-footer-margin-size: 1.2vh;
    }

    article {
      align-self: center;
      justify-self: center;
    }

    article > .contacts {
      width: 90%;
      justify-self: center;
    }
  }

  /* =========================
   DESKTOP – PORTRAIT
   tall viewport & portrait (rotated monitor / tablet)
   ========================= */
  @media (min-height: 900px) and (min-width: 768px) and (orientation: portrait) {
    :root {
      --article-min-width: 55vw;
      --article-aspect-ratio: 3 / 4;
      --article-padding: 3vw;
      --article-padding-top: 2vw;
      --article-padding-bottom: 2vw;
      --article-column-gap: 1vw;
      --article-row-gap: 1.5vh;
      --header-footer-margin-size: 2vh;
    }

    article > .contacts {
      width: 60%;
      justify-self: center;
    }
  }

  /* =========================
   DESKTOP – LANDSCAPE
   wide viewport & landscape (classic desktop)
   ========================= */
  @media (min-width: 1024px) and (orientation: landscape) {
    :root {
      --article-min-width: 40vw;
      --article-aspect-ratio: 5 / 3;
      --article-padding: 2.5vw;
      --article-padding-top: 0.5vw;
      --article-padding-bottom: 0.5vw;
      --article-column-gap: 0.5vw;
      --article-row-gap: 1vh;
      --header-footer-margin-size: 2.5vh;
    }

    article > .contacts {
      width: 100%;
    }
  }
</style>
