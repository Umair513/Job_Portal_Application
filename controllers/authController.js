import userModel from "../models/userModel.js"

export const registerController = async (req, res) => {
    try {
        const {name, email, password} = req.body
        if(!name){
            return res.status(400).send({
                success: false,
                message: "Please Provide name"
            })        
        }
        if(!email){
            return res.status(400).send({
                success: false,
                message: "Please Provide email"
            })        
        }
        if(!password){
            return res.status(400).send({
                success: false,
                message: "Please Provide password"
            })        
        }

        const existingUser = await userModel.findOne({email})
        if(existingUser){
            return res.status(200).send({
                success: false,
                message: "User already exists"
            })
        }

        const user = await userModel.create({name, email, password})
        res.status(201).send({
            success: true,
            message: "User registered successfully",
            user
        })

    } catch (error) {
        console.log(error)
        res.status(400).send({
            success: false,
            message: "An error occurred while registering user. Please try again.",
            error,
        })
    }
}