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
    <h2 class="position">{siteInfo.position}</h2>
    <h3 class="service">{siteInfo.meta.description}</h3>
  </div>
  <div class="contacts">
    <a href="tel:{siteInfo.contacts.telephone}" class="tel" target="_blank"
      >{siteInfo.contacts.telephone}</a
    >

    <a href="mailto:{siteInfo.contacts.email}" class="mailto" target="_blank"
      >{siteInfo.contacts.email}</a
    >
  </div>
  <footer>located in Germany</footer>
</article>

<style>
  article {
    container: article / inline-size;
    display: grid;
    grid-template-columns: 1dvw 1fr 1dvw;
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
        font-variation-settings: "opsz" var(--name-opsz);
      }

      & > .position {
        grid-area: position;
      }

      & > .service {
        grid-area: service;
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
      }

      & > .mailto {
        grid-area: mailto;
        justify-content: start;
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

  @media (orientation: portrait) and (max-width: 390px) {
    article {
      width: 100dvw;
      max-width: 100dvw;
      height: 100dvh;
      max-height: 100dvh;

      background-color: yellow;
    }
  }

  @media (orientation: landscape) and (max-width: 844px) {
    article {
      width: 100dvw;
      max-width: 100dvw;
      height: 100dvh;
      max-height: 100dvh;

      background-color: brown;
    }
  }
</style>
