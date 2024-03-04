import userModel from "../models/userModel.js"

export const registerController = async (req, res, next) => {
    
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


        const user = await userModel.create({name, email, password})
        const token = user.createJWT()
        res.status(201).send({
            success: true,
            message: "User registered successfully",
            user:{
                name: user.name,
                lastName: user.lastName,
                email:user.email,
                location: user.location
            },
            token
        })

    
}