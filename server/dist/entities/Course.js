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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Course = void 0;
const typeorm_1 = require("typeorm");
let Course = class Course {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Course.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar' }),
    __metadata("design:type", String)
], Course.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text' }),
    __metadata("design:type", String)
], Course.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'image_url', type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], Course.prototype, "image_url", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'difficulty_level', type: 'varchar' }),
    __metadata("design:type", String)
], Course.prototype, "difficulty_level", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar' }),
    __metadata("design:type", String)
], Course.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'float' }),
    __metadata("design:type", Number)
], Course.prototype, "rating", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'students_count', type: 'integer', default: 0 }),
    __metadata("design:type", Number)
], Course.prototype, "students_count", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'udemy_url', type: 'varchar' }),
    __metadata("design:type", String)
], Course.prototype, "udemy_url", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'created_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], Course.prototype, "created_at", void 0);
Course = __decorate([
    (0, typeorm_1.Entity)("courses")
], Course);
exports.Course = Course;
