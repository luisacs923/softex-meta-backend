-- CreateTable
CREATE TABLE "Colaborador" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "cbo" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Servico" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "categoria" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Prestador" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "email" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Cliente" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "email" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Material" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "categoria" TEXT NOT NULL,
    "unidade_medida" TEXT NOT NULL,
    "quantidade_minima" REAL NOT NULL,
    "quantidade_atual" REAL NOT NULL
);

-- CreateTable
CREATE TABLE "EPI" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "categoria" TEXT NOT NULL,
    "ca" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "quantidade_minima" REAL NOT NULL,
    "quantidade_atual" REAL NOT NULL
);

-- CreateTable
CREATE TABLE "EntregaEpi" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "data_entrega" DATETIME NOT NULL,
    "data_devolucao" DATETIME,
    "observacao" TEXT NOT NULL,
    "id_epi" INTEGER NOT NULL,
    "id_colaborador" INTEGER NOT NULL,
    CONSTRAINT "EntregaEpi_id_epi_fkey" FOREIGN KEY ("id_epi") REFERENCES "EPI" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "EntregaEpi_id_colaborador_fkey" FOREIGN KEY ("id_colaborador") REFERENCES "Colaborador" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ContratoGeral" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "descricao_servico" TEXT NOT NULL,
    "responsavel" TEXT NOT NULL,
    "data_inicio" DATETIME NOT NULL,
    "data_fim" DATETIME NOT NULL,
    "valor" REAL NOT NULL,
    "id_prestador" INTEGER NOT NULL,
    "id_cliente" INTEGER NOT NULL,
    "id_servico" INTEGER NOT NULL,
    CONSTRAINT "ContratoGeral_id_prestador_fkey" FOREIGN KEY ("id_prestador") REFERENCES "Prestador" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ContratoGeral_id_cliente_fkey" FOREIGN KEY ("id_cliente") REFERENCES "Cliente" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ContratoGeral_id_servico_fkey" FOREIGN KEY ("id_servico") REFERENCES "Servico" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ContratoColaborador" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "data_inicio" DATETIME NOT NULL,
    "data_fim" DATETIME NOT NULL,
    "quantidade_horas" REAL NOT NULL,
    "valor_hora" REAL NOT NULL,
    "id_contrato_geral" INTEGER NOT NULL,
    "id_colaborador" INTEGER NOT NULL,
    CONSTRAINT "ContratoColaborador_id_contrato_geral_fkey" FOREIGN KEY ("id_contrato_geral") REFERENCES "ContratoGeral" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ContratoColaborador_id_colaborador_fkey" FOREIGN KEY ("id_colaborador") REFERENCES "Colaborador" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "MaterialContrato" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "quantidade_solicitada" REAL NOT NULL,
    "quantidade_utilizada" REAL,
    "quantidade_devolvida" REAL,
    "data_entrega" DATETIME NOT NULL,
    "data_devolucao" DATETIME,
    "observacao" TEXT NOT NULL,
    "id_contrato_geral" INTEGER NOT NULL,
    "id_material" INTEGER NOT NULL,
    CONSTRAINT "MaterialContrato_id_contrato_geral_fkey" FOREIGN KEY ("id_contrato_geral") REFERENCES "ContratoGeral" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "MaterialContrato_id_material_fkey" FOREIGN KEY ("id_material") REFERENCES "Material" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
