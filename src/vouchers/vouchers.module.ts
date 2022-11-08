import { Module } from '@nestjs/common';
import { VouchersController } from './vouchers.controller'
import { VouchersService } from './vouchers.service';
import { MongooseModule } from '@nestjs/mongoose';
import { VoucherSchema } from './voucher.model';
@Module({
    imports: [MongooseModule.forFeature([
        {
            name:"Voucher",schema:VoucherSchema,
        }
    ])],
    controllers:[VouchersController],
    providers:[VouchersService]
})
export class VouchersModule {}
