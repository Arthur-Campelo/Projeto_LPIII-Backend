"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cor = void 0;
var typeorm_1 = require("typeorm");
var locadoraMotos_1 = __importDefault(require("./locadoraMotos"));
var loca__o_1 = __importDefault(require("./loca\u00E7\u00E3o"));
var Cor;
(function (Cor) {
    Cor["AMARELO"] = "yellow";
    Cor["AZUL"] = "blue";
    Cor["CINZA_ESCURO"] = "bluegray";
    Cor["LARANJA"] = "orange";
    Cor["ROSA"] = "pink";
    Cor["ROXO"] = "purple";
    Cor["VERDE"] = "green";
    Cor["VERDE_AZULADO"] = "teal";
})(Cor || (exports.Cor = Cor = {}));
;
var Motos = /** @class */ (function (_super) {
    __extends(Motos, _super);
    function Motos() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], Motos.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Motos.prototype, "marca", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Motos.prototype, "modelo", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Number)
    ], Motos.prototype, "ano", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Boolean)
    ], Motos.prototype, "usado", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Number)
    ], Motos.prototype, "dias_manuten\u00E7\u00E3o", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "enum", enum: Cor }),
        __metadata("design:type", String)
    ], Motos.prototype, "cor", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return locadoraMotos_1.default; }, function (locadoraMotos) { return locadoraMotos.motos; }, { onDelete: "CASCADE" }),
        __metadata("design:type", locadoraMotos_1.default)
    ], Motos.prototype, "locadoraMotos", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return loca__o_1.default; }, function (locação) { return locação.moto; }),
        __metadata("design:type", Array)
    ], Motos.prototype, "loca\u00E7\u00F5es", void 0);
    Motos = __decorate([
        (0, typeorm_1.Entity)()
    ], Motos);
    return Motos;
}(typeorm_1.BaseEntity));
exports.default = Motos;
//# sourceMappingURL=moto.js.map