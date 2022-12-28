import Hotel from "../models/Hotel.js";
import Room from "../models/Room.js";
import ErrorResponse from "../utils/errorResponse.js";


export function getAPI(req, res) {
    res.status(200).json({ message: `Welcome to Camunited API` });
}

export function getCamunitedAPI(req, res) {
    res.status(200).json({
        message: `Welcome to Camunited Team API! ;)`
    })
}

export async function postHotel(req, res, next) {
    const { username } = req.user;

    function setProps(request, username) {
        request.postBy = username;

        return request;
    }

    try {
        if (!req.body) {
            return next(new ErrorResponse(`Please provide a detail of your target hotel!`, 400));
        } else {
            const request = setProps(req.body, username);
            const hotel = new Hotel(request);

            try {
                const data = await hotel.save();

                await res.status(201).json({
                    success: true,
                    status: `CREATED`,
                    message: `Hotel created successfully with Username : ${username}`,
                    data: data,
                });
            } catch (error) {
                next(new ErrorResponse(`Something went wrong on create a new hotel! Error: ${error}`, 400));
            }
        }
    } catch (error) {
        console.log(`Error: ${error}`);
        next(error);
    }
}

export async function updateHotel(req, res, next) {
    const params = req.params.id;
    const request = req.body;
    try {
        const hotel = await Hotel.findByIdAndUpdate(params, { $set: request}, {new: true});

        if (!hotel) {
            return next(new ErrorResponse(`Hotel with given ID: [${params}] not found!`, 400));
        } else {
            await res.status(201).json({
                success: true,
                status: `UPDATED`,
                message: `Hotel updated successfully with given ID : ${params}`,
                data: hotel,
            });
        }
    } catch (error) {
        console.log(`Error: ${error}`);
        next(error);
    }
}

export async function deleteHotel(req, res, next) {
    const params = req.params.id;
    try {
        const hotel = await Hotel.findByIdAndDelete(params);

        if (!hotel) {
            return next(new ErrorResponse(`Hotel with given ID: [${params}] not found!`, 400));
        } else {
            await res.status(201).json({
                success: true,
                status: `DELETED`,
                message: `Hotel deleted successfully with given ID : ${params}`,
                data: hotel,
            });
        }
    } catch (error) {
        console.log(`Error: ${error}`);
        next(error);
    }
}

export async function findHotels(req, res, next) {
    try {
        const hotel = await Hotel.find();

        if (!hotel) {
            return next(new ErrorResponse(`There are no hotel documents`, 404));
        } else {
            await res.status(200).json({
                success: true,
                status: `FOUNDED`,
                message: `All Hotels are found successfully`,
                data: hotel,
            });
        }
    } catch (error) {
        console.log(`Error: ${error}`);
        next(error);
    }
}

export async function findHotel(req, res, next) {
    const params = req.params.id;
    try {
        const hotel = await Hotel.findById(params);

        if (!hotel) {
            return next(new ErrorResponse(`Hotel with given ID: [${params}] not found!`, 400));
        } else {
            await res.status(200).json({
                success: true,
                status: `FOUNDED`,
                message: `Hotel Founded successfully with given ID : ${params}`,
                data: hotel,
            });
        }
    } catch (error) {
        console.log(`Error: ${error}`);
        next(error);
    }
}

export async function countByCity(req, res, next) {
    const cities = req.query.cities.split(",");

    try {
        const list = await Promise.all(cities.map(city => {
            return Hotel.countDocuments({city: city});
        }));

        await res.status(200).json({
            success: true,
            status: `QUERIED`,
            message: `Query results are found successfully! Query: ${cities}`,
            data: list,
        });
    } catch (error) {
        console.log(`Error: ${error}`);
        next(error);
    }
}

export async function countByType(req, res, next) {
    const types = req.query.types.split(",");

    try {
        const list = await Promise.all(types.map(type => {
            return Hotel.countDocuments({type: type});
        }));

        await res.status(200).json({
            success: true,
            status: `QUERIED`,
            message: `Query results are found successfully! Query: ${types}`,
            data: list,
        });
    } catch (error) {
        console.log(`Error: ${error}`);
        next(error);
    }
}

export async function postRoom(req, res, next) {
    const { username } = req.user;
    const params = req.params.hotelid;

    function setProps(request, username) {
        request.postBy = username;

        return request;
    }

    try {
        const request = setProps(req.body, username);
        const room = new Room(request);

        const data = await room.save();

        try {
            await Hotel.findByIdAndUpdate(params, {$push: {rooms: room._id }});

            await res.status(201).json({
                success: true,
                status: `CREATED`,
                message: `Rooom created successfully with given Hotel ID : ${params}`,
                data: data,
            });
        } catch (error) {
            console.log(`Error: ${error}`);
            next(new ErrorResponse(`Something went wrong on create a new room! Error: ${error}`, 400));
        }
    } catch (error) {
        console.log(`Error: ${error}`);
        next(error);
    }
}

export async function updateRoom(req, res, next) {
    const params = req.params.id;
    const request = req.body;
    try {
        const room = await Room.findByIdAndUpdate(params, { $set: request}, {new: true});

        if (!room) {
            return next(new ErrorResponse(`Room with given ID: [${params}] not found!`, 400));
        } else {
            await res.status(201).json({
                success: true,
                status: `UPDATED`,
                message: `Room updated successfully with given ID : ${params}`,
                data: room,
            });
        }
    } catch (error) {
        console.log(`Error: ${error}`);
        next(error);
    }
}

export async function deleteRoom(req, res, next) {
    const hotelid = req.params.hotelid;
    const params = req.params.id;
    try {
        const room = await Room.findByIdAndDelete(params);

        if (!room) {
            return next(new ErrorResponse(`Room with given ID: [${params}] not found!`, 400));
        } else {
            await Hotel.findByIdAndUpdate(hotelid, {$pull: {rooms: params }});

            await res.status(201).json({
                success: true,
                status: `DELETED`,
                message: `Room deleted successfully with given ID : ${params}`,
                data: room,
            });
        }
    } catch (error) {
        console.log(`Error: ${error}`);
        next(error);
    }
}

export async function findRooms(req, res, next) {
    try {
        const room = await Room.find();

        if (!room) {
            return next(new ErrorResponse(`There are no room documents`, 404));
        } else {
            await res.status(200).json({
                success: true,
                status: `FOUNDED`,
                message: `All Rooms are found successfully`,
                data: room,
            });
        }
    } catch (error) {
        console.log(`Error: ${error}`);
        next(error);
    }
}

export async function findRoom(req, res, next) {
    const params = req.params.id;
    try {
        const room = await Room.findById(params);

        if (!room) {
            return next(new ErrorResponse(`Room with given ID: [${params}] not found!`, 400));
        } else {
            await res.status(200).json({
                success: true,
                status: `FOUNDED`,
                message: `Room Founded successfully with given ID : ${params}`,
                data: room,
            });
        }
    } catch (error) {
        console.log(`Error: ${error}`);
        next(error);
    }
}