import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateUserTable1686142875469 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'user',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
          },
          {
            name: 'name',
            type: 'text',
          },
          {
            name: 'surname',
            type: 'text',
          },
          {
            name: 'email',
            type: 'text',
            isUnique: true,
          },
          {
            name: 'blogDescription',
            type: 'text',
          },
          {
            name: 'password',
            type: 'text',
          },
          {
            name: 'logo',
            type: 'bytea',
            isNullable: true,
          },
          {
            name: 'background',
            type: 'bytea',
            isNullable: true,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('user');
  }
}
