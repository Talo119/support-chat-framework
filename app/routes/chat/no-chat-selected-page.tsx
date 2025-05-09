import { MessageSquare } from 'lucide-react';

const NoChatSelectedPage = () => {
  return (
    <div className="flex-1 flex items-center justify-center">
        <div className="text-muted-foreground">
          <div className="flex flex-col items-center gap-2">
            <MessageSquare size={48} />
            <h2 className="text-xl font-medium">No hay chat seleccionado</h2>
            <p>Selecciona un chat para comenzar una conversación</p>
          </div>
        </div>
    </div>
  )
}

export default NoChatSelectedPage;