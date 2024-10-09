const errorMiddleware = async (err, req, res, next) => {
    const status = err.status || 500;
    const success = err.success || false;
    const message = err.message || "SERVER ERROR";
    const error = err.error || "Error from error middleware";

    res.status(status).json({
        success,
        message,
        error
    });
}

module.exports = errorMiddleware;