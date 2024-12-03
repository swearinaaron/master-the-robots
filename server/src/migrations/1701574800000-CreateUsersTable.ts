import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUsersTable1701574800000 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "users",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
            generationStrategy: "uuid",
            default: "uuid_generate_v4()"
          },
          {
            name: "email",
            type: "varchar",
            isUnique: true
          },
          {
            name: "name",
            type: "varchar"
          },
          {
            name: "avatar",
            type: "varchar",
            isNullable: true
          },
          {
            name: "isAdmin",
            type: "boolean",
            default: false
          },
          {
            name: "createdAt",
            type: "timestamp",
            default: "now()"
          },
          {
            name: "updatedAt",
            type: "timestamp",
            default: "now()"
          }
        ]
      }),
      true
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("users");
  }
}