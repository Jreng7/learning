import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
   // await knex("table_name").del();

    // Inserts seed entries
    await knex("courses").insert([
        { name: "Java" },
        { name: "TypeScript" },
        { name: "Spring Boot" },
        { name: "SQLite" },
        { name: "Docker" },

    ]);
};
