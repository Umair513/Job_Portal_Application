import jobsModel from "../models/jobsModel.js"

export const createJobController = async (req, res, next) => {
    const {company, position} = req.body
    if(!company || !position){
        next("please provide all fields")
    }
    req.body.createdBy = req.user.userId
    const job = await jobsModel.create(req.body)
    res.status(201).json({job})
}

export const getAllJobsController =async (req, res, next) => {
    const jobs = await jobsModel.find({createdBy: req.user.userId})
    res.status(200).json({
        totalJobs: jobs.length,
        jobs
    })
}

export const updateJobController = async(req, res, next) => {
    const {id} = req.params
    // if(id){
    //     next(`id getted from req.params is ${id}`)
    // }
    const {company, position} = req.body
    if(!company || !position){
        next("please provide all fields")
    }
    const job = await jobsModel.findOne({_id: id})
    if(!job){
        next(`no jobs found with this id ${id}`)
    }
    if(req.user.userId !== job.createdBy.toString()){
        // return
        next("you are not authorized to update this job")
    }
    const updateJob = await jobsModel.findOneAndUpdate({_id:id}, req.body, {
        new:true,
        runValidators:true
    })
    res.status(200).json({updateJob})
}


export const deleteJobController = async(req, res, next) => {
    const {id} = req.params
    const job = await jobsModel.findOne({_id: id})
    if(!job){
        next(`no jobs found with this id ${id}`)
    }
    if(!req.user.userId === job.createdBy.toString()){
        next("you are not authorized to delete this job")
    }
    await job.deleteOne()
    res.status(200).json({message: "job deleted successfully"})
}