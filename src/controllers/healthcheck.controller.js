// logic of application goes in this file
import {ApiResponse} from "../utils/api-response.js"
import {asyncHandler} from "../utils/async-handler.js"

// a way of error handling
/*
const healthCheck = async (req, res, next) => {
    try {
        const user = await getUserFromDB()
        res
        .status(200)
        .json(
            new ApiResponse(200, {message: "Server is running"})
        );
    } catch (error) {
        next(err)
    }
}
*/

// more prefered way of handling error
const healthCheck = asyncHandler(async (req, res) => {
    res.status(200).json(
        new ApiResponse(200, {message: "Server is running"})
    );
})



export {healthCheck};