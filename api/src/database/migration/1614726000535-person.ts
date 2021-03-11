import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class person1614726000535 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'Person',
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
        },

        {
          name: 'contact',
          type: 'varchar',
          isNullable: false,
        },

        {
          name: 'city',
          type: 'varchar',
        },

        {
          name: 'district',
          type: 'varchar',
        },

        {
          name: 'street',
          type: 'varchar',
        },

        {
          name: 'complement',
          type: 'varchar',
        },

        {
          name: 'number',
          type: 'varchar',
        },

        {
          name: 'help',
          type: 'varchar',
        },

        {
          name: 'lat',
          type: 'decimal',
        },

        {
          name: 'long',
          type: 'decimal',
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
      ]
      
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('Person');
  }
}
