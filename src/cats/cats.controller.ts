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

@Controller('cats')
export class CatsController {
  @Post()
  create(@Body() createCatDto: CreateCatDto): string {
    return 'this action adds a new cat';
  }

  @Get()
  findAll(@Req() request: Request): Observable<any[]> {
    return of([]);
  }

  @Get('/:id')
  findOne(@Param() params): string {
    return `This action return a #${params.id} cat`;
  }

  @Put('/:id')
  update(@Param() id: string, @Body() updateCatDto: UpdateCatDto) {
    return `This action updates a #{id} cat`;
  }

  @Delete('/:id')
  remove(@Param() id: string) {
    return `This action remove a #${id} cat`;
  }
}
