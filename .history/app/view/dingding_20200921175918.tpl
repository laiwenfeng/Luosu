<!-- app/view/dingding.tpl -->
<html>
  <head>
    <title>DingDing</title>
  </head>
  <script src="../public/js/jQuery/jquery.min.js"></script>
  <script src="../public/js/xlsx/xlsx.core.min.js"></script>
  <body>
      {% foreach item in msg %}
          <a>{{ item }}</a>
      {% endfor %}
  </body>
</html>