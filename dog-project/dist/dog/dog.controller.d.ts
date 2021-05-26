import { DogService } from './dog.service';
import { DogDto } from './dog.dto';
export declare class DogController {
    private dogService;
    constructor(dogService: DogService);
    getDogs(): {
        id: number;
        race: string;
        color: string;
        age: number;
    }[];
    insertDogs(dog: DogDto): number;
    getDogById(id: number): Promise<any>;
    deleteDogById(id: number): Promise<any>;
    updateDogById(id: number, query: any): Promise<any>;
}
