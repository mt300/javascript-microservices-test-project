export declare class DogService {
    private dogs;
    getDogs(): {
        id: number;
        race: string;
        color: string;
        age: number;
    }[];
    insertDog(dog: any): number;
    getDogById(id: number): Promise<any>;
    deleteDogById(id: number): Promise<any>;
    updateDogById(id: number, propertyName: string, propertyValue: string): Promise<any>;
}
