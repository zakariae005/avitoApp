
import User from "@/database/user.model";
import { connnectToDB } from "../mongoose";
import { CreateUserParams, DeleteUserParams, UpdateUserParams } from "./shared";
import { revalidatePath } from "next/cache";
import Annonce from "@/database/annonce.model";

export async function getUserById(params:any) {
    try {
        connnectToDB()
        const { userId } = params
        const user = await User.findOne({ clerkId: userId })
        return user
    } catch (error) {
        console.log(error); 
    }
}

export async function createUser(userData: CreateUserParams) {
    try {
        connnectToDB()
        const newUser = await User.create(userData)
        return newUser
    } catch (error) {
        console.log(error);
        
    }
}

export async function updateUser(params: UpdateUserParams) {
    try {
        connnectToDB()
        const { clerkId, updateData, path } = params
        await User.findOneAndUpdate({ clerkId }, updateData, { new: true } )
        revalidatePath(path)
    } catch (error) {
        console.log(error);
        
    }
}

export async function deleteUser(params:DeleteUserParams) {
    try {
        connnectToDB()
        const { clerkId } = params

        const user = await User.findOneAndDelete({ clerkId })

        if (!user) {
            throw new Error('User not found')
        }

        await Annonce.deleteMany({ author: user._id})

        const deletedUser = await User.findByIdAndDelete(user._id)

        return deletedUser
    } catch (error) {
        console.log(error);
    }
}