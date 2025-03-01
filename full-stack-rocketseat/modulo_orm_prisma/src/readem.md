model User {    // Aqui o "User" é uma representação

  id String @id @default(uuid())
  name String
  email String @unique

  questions Question[]
  
  @@map("user")  // aqui é o nome da tabela que eu quero usar dentro do banco de dados.

}

model Question {
  
  id String @id @default(uuid())
  title String
  content String

  createdAt DateTime @default(now()) @map("created_at")
  updatedAt DateTime @updatedAt @map("updated_at")

  userId String

  user User @relation(fields: [userId], references: [id])

  @@map("questions")
  
}