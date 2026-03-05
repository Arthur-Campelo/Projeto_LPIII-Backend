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
exports.Cores = exports.Status = exports.Perfil = void 0;
var typeorm_1 = require("typeorm");
var locadoraMotos_1 = __importDefault(require("./locadoraMotos"));
var organizadorEventosMotos_1 = __importDefault(require("./organizadorEventosMotos"));
var Perfil;
(function (Perfil) {
    Perfil["LOCADORA_MOTOS"] = "LocadoraMotos";
    Perfil["ORGANIZADOR_EVENTOS_MOTOS"] = "OrganizadorEventosMotos";
})(Perfil || (exports.Perfil = Perfil = {}));
;
var Status;
(function (Status) {
    Status["PENDENTE"] = "pendente";
    Status["ATIVO"] = "ativo";
})(Status || (exports.Status = Status = {}));
;
var Cores;
(function (Cores) {
    Cores["AMARELO"] = "yellow";
    Cores["ANIL"] = "indigo";
    Cores["AZUL"] = "blue";
    Cores["AZUL_PISCINA"] = "cyan";
    Cores["CINZA_ESCURO"] = "bluegray";
    Cores["LARANJA"] = "orange";
    Cores["ROSA"] = "pink";
    Cores["ROXO"] = "purple";
    Cores["VERDE"] = "green";
    Cores["VERDE_AZULADO"] = "teal";
})(Cores || (exports.Cores = Cores = {}));
;
var Usuário = /** @class */ (function (_super) {
    __extends(Usuário, _super);
    function Usuário() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, typeorm_1.PrimaryColumn)(),
        __metadata("design:type", String)
    ], Usuário.prototype, "cnpj", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "enum", enum: Perfil }),
        __metadata("design:type", String)
    ], Usuário.prototype, "perfil", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "enum", enum: Status, default: Status.PENDENTE }),
        __metadata("design:type", String)
    ], Usuário.prototype, "status", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Usuário.prototype, "nome", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Usuário.prototype, "email", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Usuário.prototype, "senha", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Usuário.prototype, "quest\u00E3o", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Usuário.prototype, "resposta", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "enum", enum: Cores }),
        __metadata("design:type", String)
    ], Usuário.prototype, "cor_tema", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return locadoraMotos_1.default; }, function (locadoraMotos) { return locadoraMotos.usuário; }),
        __metadata("design:type", locadoraMotos_1.default)
    ], Usuário.prototype, "locadoraMotos", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return organizadorEventosMotos_1.default; }, function (organizadorEventosMotos) { return organizadorEventosMotos.usuário; }),
        __metadata("design:type", organizadorEventosMotos_1.default)
    ], Usuário.prototype, "organizadorEventosMotos", void 0);
    __decorate([
        (0, typeorm_1.CreateDateColumn)(),
        __metadata("design:type", Date)
    ], Usuário.prototype, "data_cria\u00E7\u00E3o", void 0);
    Usuário = __decorate([
        (0, typeorm_1.Entity)()
    ], Usuário);
    return Usuário;
}(typeorm_1.BaseEntity));
exports.default = Usuário;
//# sourceMappingURL=usu%C3%A1rio.js.map