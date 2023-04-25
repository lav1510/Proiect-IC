const app = require("./app");
const { PORT } = process.env;

// Enable CORS for all routes
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });

const startApp = () => {
    app.listen(PORT,'192.168.56.1', () => {
        console.log(`Auth Backend running on port ${PORT}`);
    });
};

startApp();