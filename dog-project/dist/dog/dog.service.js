"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DogService = void 0;
const common_1 = require("@nestjs/common");
const dogs_mock_1 = require("./dogs.mock");
let DogService = class DogService {
    constructor() {
        this.dogs = dogs_mock_1.DOGS;
    }
    getDogs() {
        return this.dogs;
    }
    insertDog(dog) {
        return this.dogs.push(dog);
    }
    getDogById(id) {
        const dogId = Number(id);
        return new Promise((resolve) => {
            const dog = this.dogs.find((dog) => dog.id === dogId);
            if (dog) {
                throw new common_1.HttpException('Not Found', 404);
            }
            return resolve(dog);
        });
    }
    deleteDogById(id) {
        const dogId = Number(id);
        return new Promise((resolve) => {
            const index = this.dogs.findIndex((dog) => dog.id === dogId);
            if (index === -1) {
                throw new common_1.HttpException('Not Found', 404);
            }
            this.dogs.splice(index, 1);
            return resolve(this.dogs);
        });
    }
    async updateDogById(id, propertyName, propertyValue) {
        const dogId = Number(id);
        return new Promise((resolve) => {
            const index = this.dogs.findIndex((dog) => dog.id === dogId);
            if (index === -1) {
                throw new common_1.HttpException('Not Found', 404);
            }
            this.dogs[index][propertyName] = propertyValue;
            return resolve(this.dogs[index]);
        });
    }
};
DogService = __decorate([
    common_1.Injectable()
], DogService);
exports.DogService = DogService;
//# sourceMappingURL=dog.service.js.map