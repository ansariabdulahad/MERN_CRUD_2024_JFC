const zodValidation = (schema) => async (req, res, next) => {
    try {
        const parseBody = await schema.parseAsync(req.body);
        req.body = parseBody;
        next();
    } catch (error) {
        const middlewareError = {
            status: 401,
            success: false,
            message: error.errors[0].message,
            error: `Zod validation error for path: ${error.errors[0].path}`
        }
        next(middlewareError);
    }
}

module.exports = zodValidation;