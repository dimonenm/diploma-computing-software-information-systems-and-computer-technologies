import { Module } from '@nestjs/common';
import { CallbackModule } from './callBack/callBack.module';

@Module({
  imports: [CallbackModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
