<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Segitiga Terbalik</title>
</head>
<body>
    <h2>Fadillah iqbal</h2>
  <pre id="segitiga"></pre>

  <script>
    function segitigaTerbalik(ukuran) {
      let output = '';

      for (let i = ukuran; i > 0; i -= 2) {
        for (let j = 1; j <= i; j++) {
          output += j;
        }
        output += '\n';
      }

      return output;
    }

    const segitiga = document.getElementById('segitiga');
    segitiga.textContent = segitigaTerbalik(10);
  </script>
</body>
</html>
