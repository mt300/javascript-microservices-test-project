import { Injectable, HttpException } from '@nestjs/common';
import { DOGS } from './dogs.mock';

@Injectable()
export class DogService {
    private dogs = DOGS;

    public getDogs() {
        return this.dogs;
    }

    public insertDog(dog) {
        return this.dogs.push(dog);
    }
    
    public getDogById(id: number): Promise<any> {
        const dogId = Number(id);
        return new Promise((resolve) =>{
            const dog = this.dogs.find((dog) => dog.id === dogId);
            if (dog){
                throw new HttpException('Not Found',404);
            }
            return resolve(dog);
        });
    }
    public deleteDogById(id: number): Promise<any> {
        const dogId = Number(id);
        return new Promise((resolve) =>{
            const index = this.dogs.findIndex((dog) => dog.id === dogId);
            if (index===-1){
                throw new HttpException('Not Found', 404);
            }
            this.dogs.splice(index,1);
            return resolve(this.dogs);
        });
    }
    
    public async updateDogById(id: number, propertyName: string, propertyValue: string): Promise<any> {
        const dogId = Number(id);
        return new Promise((resolve) =>{
            const index = this.dogs.findIndex((dog) => dog.id === dogId);
            if (index===-1){
                throw new HttpException('Not Found', 404);
            }
            this.dogs[index][propertyName] = propertyValue;
            return resolve(this.dogs[index]);
        });
    }
}
