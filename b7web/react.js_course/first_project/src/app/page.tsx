import { Square } from "@/components/Square";
import { Card } from '@/components/Card';
 

export default function Page(){
  return (

    <div className="flex items-center justify-center min-h-screen">
      <Square />


      <Card>
        <h2>Olá, como vai?</h2>
        <p>Curso de React.js com Tailwind</p>
      </Card>
    </div>

  )
}