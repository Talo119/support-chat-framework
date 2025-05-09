import { User } from 'lucide-react';

const NoContactSelected = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center p-4 text-center text-muted-foreground">
      <div className="h-20 w-20 rounded-full bg-muted flex items-center justify-center mb-4">
        <User className="h-10 w-10" />
      </div>
      <h3 className="font-medium mb-2">No Contact Selected</h3>
      <p className="text-sm">
        Select a contact from the list to view their information
      </p>
    </div>
  )
}

export default NoContactSelected;
