<script>
  let { data } = $props();
  const { siteInfo, JSONLD } = data;
</script>

<article>
  <header>&nbsp;</header>
  <div class="name-position-service">
    <h1 class="name">
      {siteInfo.founder.firstName}
      {siteInfo.founder.lastName}
    </h1>
    <h2 class="position">{siteInfo.position}</h2>
    <h3 class="service">{siteInfo.meta.description}</h3>
  </div>
  <div class="contacts">
    <a href="tel:{siteInfo.contacts.telephone}" class="tel" target="_blank"
      >{siteInfo.contacts.telephone}</a
    >

    <a href="mailto:{JSONLD.email}" class="mailto" target="_blank"
      >@{siteInfo.founder.firstName.toLowerCase()}.{siteInfo.founder.lastName.toLowerCase()}</a
    >
  </div>
  <footer>located in Germany</footer>
</article>

<style>
  article {
    container: article / inline-size;
    display: grid;
    grid-template-columns: 5dvw 1fr 5dvw;
    grid-template-rows: auto 2fr 1fr auto;
    grid-template-areas:
      ". header ."
      ". name-position-service ."
      ". contacts ."
      ". footer .";
    row-gap: var(--row-gap);

    justify-self: center;
    width: 40rem;
    max-width: 40rem;

    background-color: var(--article-background-color);
    border-radius: var(--article-border-radius);
    padding: var(--article-padding);
    filter: var(--article-filter);

    & > header {
      grid-area: header;
    }

    & > .name-position-service {
      grid-area: name-position-service;
      container: name-position-service / inline-size;

      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 3fr 1fr 2fr;
      grid-template-areas:
        "name"
        "position"
        "service";
      row-gap: var(--row-gap);

      & > :is(h1, h2, h3) {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0;
      }

      & > .name {
        grid-area: name;
        align-items: end;
        font-variation-settings:
          "opsz" var(--name-opsz),
          "wght" var(--name-wght);
        font-size: var(--name-font-size);
      }

      & > .position {
        grid-area: position;
        font-variation-settings:
          "opsz" var(--position-opsz),
          "wght" var(--position-wght);
        font-size: var(--position-font-size);
      }

      & > .service {
        grid-area: service;
        font-variation-settings:
          "opsz" var(--service-opsz),
          "wght" var(--service-wght);
        font-size: var(--service-font-size);
      }
    }

    & > .contacts {
      grid-area: contacts;
      container: contacts / inline-size;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-auto-rows: 1fr;
      grid-template-areas: "tel mailto";
      column-gap: var(--column-gap);

      margin: 0;

      & > a {
        display: flex;
        align-items: center;
        justify-content: center;

        text-decoration: none;
      }

      & > :is(a, a:visited) {
        color: var(--color);
      }

      & > .tel {
        grid-area: tel;
        justify-content: end;
        font-variation-settings:
          "opsz" var(--tel-opsz),
          "wght" var(--tel-wght);
        font-size: var(--tel-font-size);
      }

      & > .mailto {
        grid-area: mailto;
        justify-content: start;
        font-variation-settings:
          "opsz" var(--mailto-opsz),
          "wght" var(--mailto-wght);
        font-size: var(--mailto-font-size);
      }
    }

    & > footer {
      grid-area: footer;
      color: var(--footer-color);
      font-variant-caps: all-petite-caps;
    }

    & > :is(header, footer) {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  @media (orientation: portrait) and (max-width: 430px) {
    article {
      width: 100dvw;
      max-width: 100dvw;
      height: 100dvh;
      max-height: 100dvh;
      grid-template-rows: auto 3fr 1fr auto;
      background-color: transparent;
      filter: none;
      padding: 0;

      & > .name-position-service {
        grid-template-rows: 1fr auto 1fr;

        & > .name {
          font-size: calc(var(--name-font-size) * 0.8);
        }

        & > .service {
          align-items: start;
          padding-top: 5dvh;
        }
      }

      & > .contacts {
        column-gap: 0;

        & > .tel {
          font-size: calc(var(--tel-font-size) * 0.8);
          justify-content: center;
        }
        & > .mailto {
          font-size: calc(var(--mailto-font-size) * 0.8);
          justify-content: center;
        }
      }
    }
  }

  @media (orientation: landscape) and (max-width: 844px) {
    article {
      width: 100dvw;
      max-width: 100dvw;
      height: 100dvh;
      max-height: 100dvh;
      grid-template-columns: auto 1fr auto;
      grid-template-rows: auto 3fr 1fr auto;
      filter: none;
      background-color: transparent;
      padding: 0;

      & > .name-position-service {
        grid-template-rows: 1fr auto 1fr;

        & > .name {
          align-items: center;
        }
      }
    }
  }
</style>
