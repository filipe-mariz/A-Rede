import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class professionalImage1614715873581 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'professionalImage',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    isPrimary: true,
                    isNullable: true,
                    isGenerated: true,
                    generationStrategy: 'increment'
                },

                {
                    name: 'path',
                    type: 'varchar'
                },

                {
                    name: 'professional_id',
                    type: 'integer'
                }
            ],
            foreignKeys: [
                {
                    name: 'professionalImage',
                    columnNames: ['professional_id'],
                    referencedTableName: 'Professional',
                    referencedColumnNames: ['id'],
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE'
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('professionalImage')
    }

}
