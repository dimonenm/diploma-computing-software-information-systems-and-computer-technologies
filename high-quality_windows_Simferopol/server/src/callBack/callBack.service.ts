import { Injectable } from '@nestjs/common';
import { CreateCallBackDto } from './dto/create-callBack.dto';
import { PrismaService } from '../prisma.service';

@Injectable()
export class CallBackService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return await this.prisma.callBack.findMany();
  }

  create(dto: CreateCallBackDto) {
    const callBackItem: CreateCallBackDto = {
      name: dto.name,
      phoneNumber: dto.phoneNumber,
    };
    return this.prisma.callBack.create({
      data: callBackItem,
    });
  }

  async deleteById(id: string) {
    return await this.prisma.callBack.delete({ where: { id } });
  }
}
