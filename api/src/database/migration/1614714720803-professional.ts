import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class professional1614714720803 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'Professional',
      columns: [
        {
          name: 'id',
          type: 'integer',
          isPrimary: true,
          isNullable: true,
          isGenerated: true,
          generationStrategy: 'increment',
        },

        {
          name: 'name',
          type: 'varchar',
          isNullable: false,
        },

        {
          name: 'born',
          type: 'varchar',
        },

        {
          name: 'activity',
          type: 'varchar',
          isNullable: false,
        },

        {
          name: 'email',
          type: 'varchar',
          isNullable: false,
          isUnique: true,
        },

        {
          name: 'whatsapp',
          type: 'varchar',
          isNullable: false,
          isUnique: true,
        },

        {
          name: 'country',
          type: 'varchar',
        },

        {
          name: 'state',
          type: 'varchar',
          isNullable: false,
        },

        {
          name: 'city',
          type: 'varchar',
          isNullable: false,
        },

        {
          name: 'district',
          type: 'varchar',
          isNullable: false,
        },

        {
          name: 'street',
          type: 'varchar',
          isNullable: false,
        },

        {
          name: 'complement',
          type: 'varchar',
        },
        {
          name: 'number',
          type: 'varchar',
          isNullable: false,
        },

        {
          name: 'bio',
          type: 'varchar',
        },

        {
          name: 'days',
          type: 'varchar',
        },

        {
          name: 'hours',
          type: 'varchar',
        },

        {
          name: 'userName',
          type: 'varchar',
          isNullable: false,
          isUnique: true,
        },

        {
          name: 'password',
          type: 'varchar',
          isNullable: false,
        },
      ],
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('Professional');
  }
}
