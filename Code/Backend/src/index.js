const app = require("./app");
const { PORT, IP } = process.env;

// Enable CORS for all routes
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });

app.post('http://${PORT}:5000/api/login', (req, res) => {
    console.log(`Incoming request: ${req.method} ${req.url}`);
    console.log(`Request body: ${JSON.stringify(req.body)}`);
    // Handle the request and send a response
  });

const startApp = () => {
    app.listen(PORT, IP, () => {
        console.log(`Auth Backend running on port ${PORT}, ip ${IP}` );
    });
};

startApp();