// Create web server
// 1. Create a web server
// 2. Create a router
// 3. Create a route
// 4. Create a controller
// 5. Create a view
// 6. Create a model
// 7. Create a database
// 8. Connect to the database
// 9. Create a schema
// 10. Create a model
// 11. Create a controller
// 12. Create a view
// 13. Create a route
// 14. Create a router
// 15. Create a web server

// 1. Create a web server
const express = require('express');
const app = express();
const port = 3000;

// 2. Create a router
const router = express.Router();

// 3. Create a route
router.route('/').get(function(req, res) {
    res.send('Comments');
});

// 4. Create a controller
// 5. Create a view
// 6. Create a model
// 7. Create a database
// 8. Connect to the database
// 9. Create a schema
// 10. Create a model
// 11. Create a controller
// 12. Create a view
// 13. Create a route
// 14. Create a router
// 15. Create a web server

// 14. Create a router
app.use('/comments', router);

// 15. Create a web server
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});