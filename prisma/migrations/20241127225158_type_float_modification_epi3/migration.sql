/*
  Warnings:

  - You are about to alter the column `qtdAtual` on the `EPI` table. The data in that column could be lost. The data in that column will be cast from `Decimal` to `Int`.
  - You are about to alter the column `qtdMinima` on the `EPI` table. The data in that column could be lost. The data in that column will be cast from `Decimal` to `Int`.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_EPI" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "categoria" TEXT NOT NULL,
    "ca" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "qtdMinima" INTEGER NOT NULL,
    "qtdAtual" INTEGER NOT NULL
);
INSERT INTO "new_EPI" ("ca", "categoria", "id", "nome", "qtdAtual", "qtdMinima", "tipo") SELECT "ca", "categoria", "id", "nome", "qtdAtual", "qtdMinima", "tipo" FROM "EPI";
DROP TABLE "EPI";
ALTER TABLE "new_EPI" RENAME TO "EPI";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
