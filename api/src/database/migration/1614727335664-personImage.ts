import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class personImage1614727335664 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'PersonImage',
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
          name: 'path',
          type: 'varchar',
        },

        {
          name: 'person_id',
          type: 'integer',
        },

      ],

      foreignKeys: [
        {
          name: 'personImage',
          columnNames: ['person_id'],
          referencedTableName: 'Person',
          referencedColumnNames: ['id'],
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
      ],
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('PersonImage');
  }
}
