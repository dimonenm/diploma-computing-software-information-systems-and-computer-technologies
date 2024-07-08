import { Controller, Get, Post, Body  } from '@nestjs/common';
import { CallBackService } from './callBack.service';
import { CreateCallBackDto } from './dto/create-callBack.dto';

@Controller('callback')
export class CallBackController {
  constructor(private readonly callBackService: CallBackService) {}

  @Post()
  create(@Body() createCallBackDto: CreateCallBackDto) {
    return this.callBackService.create(createCallBackDto);
  }

  @Get()
  findAll() {
    return this.callBackService.findAll();
  }
}
