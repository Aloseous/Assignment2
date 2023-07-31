import UserListData from '../models/userModel.js'

export const getUserData = async(req, res) =>{

    try {
        const userList = await UserListData.find({});
        res.status(200).json({result: userList})
    } catch (error) {
        res.status(400).json({message: error.message});
    }    
}


export const postUsers = async (req, res) =>{          
    const userData = await UserListData.findById(req.body._id);
    console.log('userData -->', userData)
    if(userData === undefined){
        res.status(400)
        throw new Error('Id Not Found');        
    }
    try {
        const findUser = await UserListData.findByIdAndUpdate(req.body._id, req.body, {new:true});
    } catch (error) {
        console.log('error-->',error)
        res.status(400).json({message: error.message});
    }

    }

 