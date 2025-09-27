-- AlterTable
ALTER TABLE "public"."Category" ALTER COLUMN "type" SET DEFAULT 'icon';

-- AlterTable
ALTER TABLE "public"."Transaction" ALTER COLUMN "updateAt" DROP DEFAULT;
