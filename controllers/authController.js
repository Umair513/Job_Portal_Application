import userModel from "../models/userModel.js"

export const registerController = async (req, res, next) => {
    try {
        const {name, email, password} = req.body
        if(!name){
           next("name is required")        
        }
        if(!email){
            next("email is required")        
        }
        if(!password){
            next("password is required")        
        }

        const existingUser = await userModel.findOne({email})
        if(existingUser){
            next("email already registered")
        }

        const user = await userModel.create({name, email, password})
        res.status(201).send({
            success: true,
            message: "User registered successfully",
            user
        })

    } catch (error) {
        next(error)       
        
    }
}