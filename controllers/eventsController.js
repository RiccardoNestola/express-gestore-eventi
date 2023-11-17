
function index  (req, res)  {
    res.type("json").send({
        message: "Hello World! index",
    });
};

function store (req, res)  {
    res.type("json").send({
        message: "Hello World! store",
    });
};

function update (req, res)  {
    res.send('update: ' + req.params.event);
};



module.exports = {
    index,
    store,
    update
};
