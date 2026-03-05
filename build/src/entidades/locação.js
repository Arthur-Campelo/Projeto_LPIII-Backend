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
exports.Status = void 0;
var typeorm_1 = require("typeorm");
var organizadorEventosMotos_1 = __importDefault(require("./organizadorEventosMotos"));
var moto_1 = __importDefault(require("./moto"));
var Status;
(function (Status) {
    Status["PENDENTE"] = "Pendente";
    Status["CONFIRMADA"] = "Confirmada";
    Status["ATIVA"] = "Ativa";
    Status["CONCLU\u00CDDA"] = "Conclu\u00EDda";
    Status["CANCELADA"] = "Cancelada";
})(Status || (exports.Status = Status = {}));
;
var Locação = /** @class */ (function (_super) {
    __extends(Locação, _super);
    function Locação() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], Locação.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "enum", enum: Status }),
        __metadata("design:type", String)
    ], Locação.prototype, "status", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Number)
    ], Locação.prototype, "valor_di\u00E1ria", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Date)
    ], Locação.prototype, "data_sa\u00EDda", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Date)
    ], Locação.prototype, "data_retorno", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Boolean)
    ], Locação.prototype, "assegurado", void 0);
    __decorate([
        (0, typeorm_1.CreateDateColumn)(),
        __metadata("design:type", Date)
    ], Locação.prototype, "data_manifesta\u00E7\u00E3o", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return moto_1.default; }, function (moto) { return moto.locações; }, { onDelete: "CASCADE" }),
        __metadata("design:type", moto_1.default)
    ], Locação.prototype, "moto", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return organizadorEventosMotos_1.default; }, function (organizadorEventosMotos) { return organizadorEventosMotos.locações; }, { onDelete: "CASCADE" }),
        __metadata("design:type", organizadorEventosMotos_1.default)
    ], Locação.prototype, "organizadorEventosMotos", void 0);
    Locação = __decorate([
        (0, typeorm_1.Entity)()
    ], Locação);
    return Locação;
}(typeorm_1.BaseEntity));
exports.default = Locação;
//# sourceMappingURL=loca%C3%A7%C3%A3o.js.map