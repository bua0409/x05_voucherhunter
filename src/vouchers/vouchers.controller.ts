import {   
    Controller,
    Post,
    Body,
    Get,
    Param,
    Patch,
    Delete,
} from '@nestjs/common';
import { Voucher } from './voucher.model';

import { VouchersService } from './vouchers.service';

@Controller('vouchers')
export class VouchersController {

    constructor (private readonly vouchersService: VouchersService){}
    @Post()
    async addVoucher(
        @Body('hotline') hotline:string,
        @Body('website') website:string,
        @Body('description') description:string,
        @Body('content') content:string,
        @Body('effectiveDate') effectiveDate:string,
        @Body('expirationDate') expirationDate:string,
        @Body('price') price:number,
     ){

        const generatedId = await this.vouchersService.insertVoucher(hotline,website,description,content,effectiveDate,expirationDate,price);
        return {id:generatedId};

    }
    @Get()
    async getAllVouchers() {
        const vouchers = await this.vouchersService.getVouchers();
        return vouchers;
    }
    @Get(':id')
    getSingleVoucher(@Param("id") voucherID: string) {
        return this.vouchersService.getSingleVoucher(voucherID)
    }
    @Patch(':id')
    updateVoucher(
      @Param('id') vouId: string,
      @Body('updatedAt') vouUpAt :string,
      @Body('hotline') vouHotline: string,
      @Body('website') vouWebsite: string,
      @Body('description') vouDesc: string,
      @Body('content') vouContent: string,
      @Body('effectiveDate') vouEfDate: string,
      @Body('expirationDate') vouExDate: string,
      @Body('price') vouPrice: number,
    ) {
        vouUpAt = Date().toString();
      this.vouchersService.updateVoucher(vouId,vouUpAt,vouHotline,vouWebsite,vouDesc,vouContent,vouEfDate,vouExDate,vouPrice);
      return null;
    }
    @Delete(':id')
    async removeVoucher(
        @Param('id') vouID: string,
    ){
        await this.vouchersService.deleteVoucher(vouID);
        return null;
    }
}
