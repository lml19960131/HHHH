const app= express();

const appData = require('../data.json');
const seller = appData.seller;
const goods = appData.goods;
const ratings = appData.ratings;

const apiRoutes = express.Router();

apiRoutes.get('/seller', function (req,res) {
    res.json({
        errno:0,
        data:seller,
    })
});

apiRoutes.get('/goods', function (req,res) {
    res.json({
        errno:0,
        data:goods,
    })
});

apiRoutes.get('/ratings', function (req,res) {
    res.json({
        errno:0,
        data:ratings,
    })
});

app.use('/api',apiRoutes);