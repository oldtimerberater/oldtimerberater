<article>
  <header>oldtimer sourcing</header>
  <div id="content">
    <h1>Andrey<br />Paymushin</h1>
    <h2 class="title">oldtimer sourcing<br />& parts finder</h2>
    <dl>
      <dt>T</dt>
      <dd>+49 000 1234568</dd>

      <dt>E</dt>
      <dd>andrei.paymushin@oldtimer.de</dd>
    </dl>
  </div>
  <footer>based in Germany</footer>
</article>

<style>
  header,
  footer,
  h1,
  h2 {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  article {
    display: grid;
    grid-template-columns: 20vw auto 20vw;
    grid-template-rows: 1fr 8fr 1fr 1fr;
    grid-template-areas:
      ". header ."
      ". content ."
      ". . ."
      ". footer .";

    height: 100vh;

    & > header {
      grid-area: header;
    }

    & > #content {
      grid-area: content;
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 4fr 2fr 1fr 2fr;
      grid-template-areas:
        "h1"
        "h2"
        "."
        "contacts";
      row-gap: 1vh;

      & > h1 {
        grid-area: h1;
        font-size: 400%;
        align-items: end;
      }

      & > h2 {
        grid-area: h2;
        align-items: start;
      }

      & > dl {
        grid-area: contacts;
        display: grid;
        grid-template-columns: auto 1fr;
        width: 25vw;
        justify-self: center;
        align-items: center;
        border-top: 1px solid gray;

        & > dt {
          font-weight: 400;
        }

        & > dd {
          font-weight: 400;
          margin-inline-start: 4vw;
        }
      }
    }

    & > footer {
      grid-area: footer;
    }
  }
</style>
