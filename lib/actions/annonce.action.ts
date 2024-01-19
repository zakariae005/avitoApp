'use server'
import Annonce from "@/database/annonce.model";
import { connnectToDB } from "../mongoose";
import { CreateAnnonceParams, GetAnnonecesParams } from "./shared";
import { revalidatePath } from "next/cache";
import User from "@/database/user.model";


export async function getAnnonces(params: GetAnnonecesParams) {
    try {
        connnectToDB()
        const annonces = await Annonce.find({})
        .populate({ path: "author", model: User })
        .sort({ createdAt: -1 })
        return { annonces }
    } catch (error) {
        console.log(error);
    }
}

export async function createAnnonce(params: CreateAnnonceParams) {
    try {
        connnectToDB()
        const { title, description, price, category, imageUrl, author,  path } = params
        const newAnnonce = await Annonce.create({ title, description, price, category, imageUrl, author })
        revalidatePath(path)
        return { newAnnonce }
    } catch (error) {
        console.log(error);
    }
}