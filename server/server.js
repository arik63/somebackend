const express = require('express');
const app = express();
const port = 3003;

// Backend: נתיב API שמחזיר הודעה
app.get('/api/hello', (req, res) => {
  res.json({ message: "Hello World מה-Server!" });
});

// Frontend: מגיש דף HTML פשוט
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="he" dir="rtl">
    <head>
      <meta charset="UTF-8">
      <title>Hello World Full Stack</title>
      <style>
        body {
          font-family: system-ui, sans-serif;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
          background-color: #f4f4f9;
        }
        .card {
          background: white;
          padding: 2rem;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
          text-align: center;
        }
        h1 { color: #333; }
        p { color: #007bff; font-weight: bold; }
      </style>
    </head>
    <body>
      <div class="card">
        <h1>Frontend: Hello World!</h1>
        <p id="response">טוען נתונים מה-Backend...</p>
      </div>

      <script>
        // פנייה מ-Frontend ל-Backend
        fetch('/api/hello')
          .then(res => res.json())
          .then(data => {
            document.getElementById('response').innerText = data.message;
          })
          .catch(err => {
            document.getElementById('response').innerText = 'שגיאה בטעינת הנתונים';
          });
      </script>
    </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`השרת רץ בכתובת: http://localhost:${port}`);
});
