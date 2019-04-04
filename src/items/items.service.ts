import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';

@Injectable()
export class ItemsService {
  private readonly items: Item[] = [
    {
      id: '1123412341',
      name: 'item one',
      qty: 100,
      description: 'this is item one',
    },
    {
      id: '8409528093458',
      name: 'item two',
      qty: 50,
      description: 'this is item two',
    },
  ];

  findAll(): Item[] {
    return this.items;
  }

  findOne(id: string): Item {
    return this.items.find(item => item.id === id);
  }
}
