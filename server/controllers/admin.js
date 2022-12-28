export function getAdminData(req, res, next) {
    res.status(200).json({
        success: true,
        status: `ACCESSED`,
        data: "You got access to the admin data in this route."
    });
}