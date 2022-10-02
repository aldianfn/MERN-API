exports.createProduct = (req, res, next) => {
    res.json(
        {
            message : "Create product success!",
            data: {
                id: 1,
                name: "Product 1",
                price: 30000
            }
        }
    );
    next();
};

exports.getAllProducts = (req, res, next) => {
    res.json(
        {
            message: "Get all products success!",
            data: {
                id: 1,
                name: "Product 1",
                price: 30000
            }
        }
    );
    next();
}