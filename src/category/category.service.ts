import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoryService {
    async getMany(){
        return [{
            id: '37373',
            createdAt: new Date(),
            updatedAt: new Date(),
            name: 'Category'
        }]
    }
    async get(){}
    async create(){}
    async update(){}
    async delete(){}
}
