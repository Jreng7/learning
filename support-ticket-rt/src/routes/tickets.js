

export const tickets = [
  
  {
    method: "POST",
    url: "/ticket",
    controller: (req, res) => {
      res.end("Criado com sucesso!")
    }
  },

  {
    method: "GET",
    url: "/ticket",
    controller: (req, res) => {
      res.end("Criado com sucesso!")
    }
  },


  {
    method: "PUT",
    url: "/ticket/:id",
    controller: (req, res) => {
      res.end("Criado com sucesso!")
    }
  },


  {
    method: "DELETE",
    url: "/ticket/:id",
    controller: (req, res) => {
      res.end("Criado com sucesso!")
    }
  },













]