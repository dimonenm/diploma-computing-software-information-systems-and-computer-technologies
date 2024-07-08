import { Injectable } from '@nestjs/common';
import { CreateCallBackDto } from './dto/create-callBack.dto';
import { PrismaService } from '../prisma.service';

@Injectable()
export class CallBackService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateCallBackDto) {
    const callBackItem: CreateCallBackDto = {
      name: dto.name,
      phone: dto.phone
    };
    return await this.prisma.callBack.create({
      data: callBackItem
    });
  }

  async findAll() {
    return await this.prisma.callBack.findMany({});
  }
}
