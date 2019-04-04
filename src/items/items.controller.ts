import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Req,
  Res,
  Param,
} from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { Request, Response } from 'express';
import { identity } from 'rxjs';

@Controller('items')
export class ItemsController {
  // example of using response and request from express
  @Get()
  findAllWithReqRes(@Req() req: Request, @Res() res: Response): Response {
    console.log(req.url);
    return res.send('hello baby');
  }

  @Get()
  findAll(): string {
    return 'GET all items!';
  }

  // example of accessing param
  @Get(':id')
  findOne(@Param() param): string {
    return `item: ${param.id}`;
  }
  /** 
   alternative of above
   @Get('id')
   findOne(@Param('id') id): string {
     return `item: ${id}`;
    }
  */

  // example of using data tranfer object (imported)
  @Post()
  create(@Body() createItemDto: CreateItemDto): string {
    return `Name: ${createItemDto.name} Desc: ${createItemDto.description}`;
  }

  // example of delete
  @Delete(':id')
  delete(@Param('id') id): string {
    return `Deleted: ${id}`;
  }

  @Put(':id')
  update(@Body() updateItemDto: CreateItemDto, @Param('id') id): string {
    return `Updated ${id} - Name ${updateItemDto.name}`;
  }
}
