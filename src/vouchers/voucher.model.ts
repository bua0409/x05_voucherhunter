import  *  as mongoose from "mongoose";
export const VoucherSchema = new mongoose.Schema({
    createdAt:{type:String, required: false, default: Date().toString()},
    updatedAt:{type:String, required: false, default:"no update version"},
    hotline: { type: String, required: false },
    website: { type: String, required: false },
    description: { type: String, required: false },
    content: { type: String, required: false },
    effectiveDate: { type: String, required: false },
    expirationDate: { type: String, required: false },
    number: { type: Number, required: false },
});
export interface Voucher extends mongoose.Document {
        id: string,
        createdAt: string,
        updatedAt: string,
        hotline: string,
        website: string,
        description: string,
        content: string,
        effectiveDate: string,
        expirationDate: string,
        price: number
        
}
