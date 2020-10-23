<!-- app/view/dingding.html -->
<html>
  <head>
    <title>DingDing</title>
  </head>
  <script src="../public/js/jQuery/jquery.min.js"></script>
  <script src="../public/js/xlsx/xlsx.core.min.js"></script>
  <body>
    <ul class="news-view view">
      {% for item in msg %}
          <a>{{ item }}</a>
      {% endfor %}
    </ul>
  </body>
</html>