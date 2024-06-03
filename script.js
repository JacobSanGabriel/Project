<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Website</title>
    <style>
        /* CSS styles */
        button {
            background-color: #007bff;
            color: #fff;
            border: none;
            padding: 10px 20px;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <header>
        <h1>Welcome to My Website</h1>
    </header>
    <section>
        <h2>About Us</h2>
        <p>This is where you can introduce your website.</p>
        <button id="clickMe">Click Me</button>
        <p id="message"></p>
    </section>
    <footer>
        <p>&copy; 2024 Your Website</p>
    </footer>
    <script>
        // JavaScript code
        document.getElementById("clickMe").addEventListener("click", function() {
            document.getElementById("message").textContent = "Button clicked!";
        });
    </script>
</body>
</html>