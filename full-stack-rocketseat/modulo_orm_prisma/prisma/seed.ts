import { prisma } from '@/database/prisma'

async function seed(){

  await prisma.user.createMany({

    data: [
      {
        name: "Joaquim Silva",
        email: "joaquimsilva1@gmail.com"
      },
      {
        name: "Fernanda Klipper",
        email: "fernandakplipper@gmail.com"
      },
      {
        name: "intelbras",
        email: "intelbrascameras@gmail.com"
      }
    ]
  }
)}

seed().then(() => {
  console.log("Database seeded!")
  prisma.$disconnect()
})