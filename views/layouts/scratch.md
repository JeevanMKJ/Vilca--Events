<html>
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Bulma Navigation Tutorial</title>
    {{! <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.6.2/css/bulma.min.css"
    /> }}
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css"
    />
    <script
      defer
      src="https://use.fontawesome.com/releases/v5.0.6/js/all.js"
    ></script>
    <style>
      body { font-family: "Rokkitt", sans-serif; }
    </style>
  </head>
  <body>
    <nav class="navbar is-primary">
      <div class="container">
        <div class="navbar-brand">
          {{! <a class="navbar-item" href="/" style="font-weight:bold;">

          </a> }}
          <a class="navbar-item is-size-1 has-text-weight-semibold" href="/">
            <h1>Vilca Events</h1>
          </a>
          <div class="navbar-item" id="google_translate_element"></div>
          <script type="text/javascript">
            function googleTranslateElementInit() { new
            google.translate.TranslateElement( { pageLanguage: 'en' },
            'google_translate_element' ); }
          </script>
          <script
            type="text/javascript"
            src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          >
          </script>

          <span class="navbar-burger burger" data-target="navMenu">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navMenu" class="navbar-menu">
          <div class="navbar-end">
            <a href="/" class="navbar-item is-active">Vilca Events</a>
            <a href="/dashboard" class="navbar-item">My Events</a>
            <a href="/create" class="navbar-item">Create an Event</a>
            <a href="#" class="navbar-item">Shop</a>
            <a href="#" class="navbar-item">Examples</a>
          </div>
        </div>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            {{#if loggedIn}}

              <a
                class="button is-outlined js-modal-trigger"
                id="logout"
                data-target="modal-js-example"
              >
                <strong>Logout</strong>
              </a>
            {{else}}
              <a href="/login" class="button is-outlined" id="login">
                <strong>Login</strong>
              </a>
            {{/if}}
          </div>
        </div>
      </div>
    </nav>
    <main class="container container-fluid mt-5">
      {{{body}}}
    </main>
    {{#if loggedIn}}
      <script src="/js/logout.js"></script>
      <div id="modal-js-example" class="modal">
        <div class="modal-background"></div>

        <div class="modal-content">
          <div class="box">
            <p class="is-size-4 is-flex is-justify-content-center">Thanks for
              visiting! See ya soon!</p>
          </div>
        </div>

        <button class="modal-close is-large" aria-label="close"></button>
      </div>
    {{/if}}
    <script
      src="https://kit.fontawesome.com/2908dfc8c0.js"
      crossorigin="anonymous"
    ></script>
    <script type="text/javascript">
      (function() { var burger = document.querySelector('.burger'); var nav =
      document.querySelector('#'+burger.dataset.target);
      burger.addEventListener('click', function(){
      burger.classList.toggle('is-active'); nav.classList.toggle('is-active');
      }); })();
    </script>
  </body>
</html>