import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {

    await knex("products").del();


    await knex("products").insert([

        { name: "Nhoque quatro queijos", price: 45 },
        { name: "Isca de Frango", price: 60 },
        { name: "Tilápia com alcaparras", price: 100 },
        { name: "Bolinho de mandioca", price: 75 },
        { name: "Caldo de palmito", price: 65 },
        { name: "Strognoff de carne", price: 40 },
        { name: "Pastel de pizza G", price: 24.80 },
        { name: "Suco de laranja 1L", price: 17.50 },
        { name: "Refrigerante Coca-Cola", price: 14.20 },
        
    ]);
};
