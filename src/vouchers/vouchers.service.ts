import { Injectable ,NotFoundException} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Voucher } from "./voucher.model";
@Injectable()
export class VouchersService {
    private vouchers: Voucher[] = [];
    constructor(@InjectModel('Voucher') private readonly voucherModel:Model<Voucher>,){}
    async insertVoucher(
        hotline: string,
        website: string,
        description: string,
        content: string,
        effectiveDate: string,
        expirationDate: string,
        price: number){
            const newVoucher = new this.voucherModel ({
                hotline,
                website,
                description,
                content,
                effectiveDate,
                expirationDate,
                price});
            const result = await newVoucher.save();
            console.log(result);
            return result.id as string;
    }
    
    async getVouchers() {
        const Vouchers = await this.voucherModel.find().exec();
        return Vouchers.map(vou => ({
          id: vou.id,
          description: vou.description,
          price: vou.price,
        }));
      }
    
      async getSingleVoucher(voucherId: string) {
        const voucher = await this.findVoucher(voucherId);
        return {
          id: voucher.id,
          description: voucher.description,
          price: voucher.price,
          createdAt: voucher.createdAt,
        };
      }
    
      async updateVoucher(
        voucherId: string,
        desc: string,
        price: number,
      ) {
        const updatedVoucher = await this.findVoucher(voucherId);
        if (desc) {
          updatedVoucher.description = desc;
        }
        if (price) {
          updatedVoucher.price = price;
        }
        updatedVoucher.save();
      }
    
      async deleteVoucher(vouId: string) {
        const result = await this.voucherModel.deleteOne({_id: vouId}).exec();
        if (result.deletedCount === 0) {
          throw new NotFoundException('Could not find Voucher.');
        }
        console.log(result);
      }
    
      private async findVoucher(id: string): Promise<Voucher> {
        let voucher;
        try {
          voucher = await this.voucherModel.findById(id).exec();
        } catch (error) {
          throw new NotFoundException('Could not find Voucher.');
        }
        if (!voucher) {
          throw new NotFoundException('Could not find Voucher.');
        }
        return voucher;
      }
    }