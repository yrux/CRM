<!DOCTYPE html>
<html>

<head>
  <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900" rel="stylesheet">
  <link href="https://cdn.jsdelivr.net/npm/@mdi/font@6.x/css/materialdesignicons.min.css" rel="stylesheet">
  <link href="/css/app.css" rel="stylesheet">
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">
</head>

<body class="">
  <div id="app">
    <v-app>
      <adminbar></adminbar>
      <v-main>
        <v-container class="mt-5">
          <router-view />
        </v-container>
      </v-main>
    </v-app>
  </div>
  <script src="/js/app.js"></script>
</body>

</html>