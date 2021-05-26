import { Body, Controller , Delete, Get, Param, Post,Put, Query} from '@nestjs/common';
import { DogService } from './dog.service';
import { DogDto} from './dog.dto';
import { query } from 'express';

@Controller('dog')
export class DogController {
    constructor (private dogService: DogService){}

    @Get()
    public getDogs(){
        return this.dogService.getDogs();
    }

    @Post()
    public insertDogs(@Body() dog: DogDto) {
        return this.dogService.insertDog(dog);
    }
   
    @Get(':id')
    public async getDogById(@Param('id') id:number){
        return this.dogService.getDogById(id);
     }

    @Delete(':id')
    public async deleteDogById(@Param('id') id:number){
        return this.dogService.deleteDogById(id);
     }

    @Put(':id')
    public async updateDogById(@Param('id') id: number, @Query() query){
        const propertyName = query.property_name;
        const propertyValue = query.property_value;
        return this.dogService.updateDogById(id, propertyName, propertyValue);    

    }

}
