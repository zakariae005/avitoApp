import { Schema, model, models, Document } from "mongoose";

export interface IAnnonce extends Document {
    title: string,
    description: string,
    price: number,
    category: string,
    imageUrl: string, 
    author: Schema.Types.ObjectId
    createdAt: Date
}

const AnnonceSchema = new Schema ({
    title: { type: String, required: true},
    description: { type: String, required: true},
    price: { type: Number, default: 0},
    category: { type: String, required: true},
    imageUrl: { type: String, required: true},
    author: { type: Schema.Types.ObjectId, ref: 'User'},
    createdAt: { type: Date, default: Date.now},
})

const Annonce = models.Annonce || model('Annonce', AnnonceSchema)
export default Annonce