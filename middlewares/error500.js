module.exports = ((error, req, res, next) => {
    console.error(error.stack);
    res.status(500).send('Qualcosa è andato storto!');
});
