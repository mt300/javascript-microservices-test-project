"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DogController = void 0;
const common_1 = require("@nestjs/common");
const dog_service_1 = require("./dog.service");
const dog_dto_1 = require("./dog.dto");
let DogController = class DogController {
    constructor(dogService) {
        this.dogService = dogService;
    }
    getDogs() {
        return this.dogService.getDogs();
    }
    insertDogs(dog) {
        return this.dogService.insertDog(dog);
    }
    async getDogById(id) {
        return this.dogService.getDogById(id);
    }
    async deleteDogById(id) {
        return this.dogService.deleteDogById(id);
    }
    async updateDogById(id, query) {
        const propertyName = query.property_name;
        const propertyValue = query.property_value;
        return this.dogService.updateDogById(id, propertyName, propertyValue);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DogController.prototype, "getDogs", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dog_dto_1.DogDto]),
    __metadata("design:returntype", void 0)
], DogController.prototype, "insertDogs", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DogController.prototype, "getDogById", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DogController.prototype, "deleteDogById", null);
__decorate([
    common_1.Put(':id'),
    __param(0, common_1.Param('id')), __param(1, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], DogController.prototype, "updateDogById", null);
DogController = __decorate([
    common_1.Controller('dog'),
    __metadata("design:paramtypes", [dog_service_1.DogService])
], DogController);
exports.DogController = DogController;
//# sourceMappingURL=dog.controller.js.map