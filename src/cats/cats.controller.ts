import {
  Controller,
  Get,
  Req,
  Post,
  Param,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { Request } from 'express';
import { Observable, of } from 'rxjs';
import { CreateCatDto } from './dto/create-cat.dto';
import { updateExpression } from '@babel/types';
import { UpdateCatDto } from './dto/update-cat.dto';
import { Cat } from './interface/cat.interface';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}
  @Post()
  create(@Body() createCatDto: CreateCatDto) {
    return this.catsService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Get('/:id')
  findOne(@Param() params): string {
    return `This action return a #${params.id} cat`;
  }

  //   @Put('/:id')
  //   update(@Param() id: string, @Body() updateCatDto: UpdateCatDto) {
  //     return `This action updates a #{id} cat`;
  //   }

  //   @Delete('/:id')
  //   remove(@Param() id: string) {
  //     return `This action remove a #${id} cat`;
  //   }
}
