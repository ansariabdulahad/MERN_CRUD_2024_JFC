const create = async (req, res) => {
    try {
        res.status(200).json({
            success: true,
            message: "created successfully"
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error in creating request"
        });
    }
}

const read = async (req, res) => {
    try {
        res.status(200).json({
            success: true,
            message: "reading successfully"
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error in reading request"
        });
    }
}

const update = async (req, res) => {
    try {
        res.status(200).json({
            success: true,
            message: "updating successfully"
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error in updating request"
        });
    }
}

const deleting = async (req, res) => {
    try {
        res.status(200).json({
            success: true,
            message: "deleting successfully"
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error in deleting request"
        });
    }
}

module.exports = { create, read, update, deleting };