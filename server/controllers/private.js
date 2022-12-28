export function getPrivateData(req, res, next) {
    res.status(200).json({
        success: true,
        status: `ACCESSED`,
        data: "You got access to the private data in this route."
    });
}