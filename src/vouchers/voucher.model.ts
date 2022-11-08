import  *  as mongoose from "mongoose";
export const VoucherSchema = new mongoose.Schema({
    createdAt:{type:String, required: false, default: Date().toString()},
    hotline: { type: String, required: false },
    website: { type: String, required: false },
    description: { type: String, required: false },
    content: { type: String, required: false },
    effectiveDate: { type: String, required: false },
    expirationDate: { type: String, required: false },
    number: { type: Number, required: false },
});
export interface Voucher extends mongoose.Document {
        createdAt: string,
        id: string,
        updatedAt: string,
        hotline: string,
        website: string,
        description: string,
        content: string,
        effectiveDate: string,
        expirationDate: string,
        price: number
        
}
