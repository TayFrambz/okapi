const express = require('express');

const app = express();

const router = express.Router();

const approval = {
    "status": 200,
    "message": "Ok"
}

router.get('/test', (req, res) => {
    res.send(approval)
});

app.use(router);

app.listen(3000, () => console.log("Server started at port 3000"));

//teste002