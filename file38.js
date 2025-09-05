function runMiddlewares(req, res, middlewares) {
    let i = 0;
    const next = () => {
        const fn = middlewares[i++];
        if (fn) fn(req, res, next);
    };
    next();
}


const middlewares = [
    (req, res, next) => { console.log('Middleware 1'); next(); },
    (req, res, next) => { console.log('Middleware 2'); next(); },
    (req, res) => { console.log('End of chain'); }
];

runMiddlewares({}, {}, middlewares);
