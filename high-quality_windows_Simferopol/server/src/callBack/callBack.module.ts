import { Module } from '@nestjs/common';
import { CallBackService } from './callBack.service';
import { CallBackController } from './callBack.controller';

@Module({
  controllers: [CallBackController],
  providers: [CallBackService],
})
export class CallbackModule {}
