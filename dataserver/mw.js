module.exports = (req, res, next) => {
    var reauth = req.header('K-REAUTH');
    if (!reauth || reauth != 'edouard') {
        res.status(403);
        res.end();
    }
    else
        next();
  }