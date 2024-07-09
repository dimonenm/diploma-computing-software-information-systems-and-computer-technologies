import { Module } from '@nestjs/common';
import { CallBackService } from './callBack.service';
import { CallBackController } from './callBack.controller';
import { PrismaService } from 'src/prisma.service'

@Module({
  controllers: [CallBackController],
  providers: [CallBackService, PrismaService],
})
export class CallbackModule {}
