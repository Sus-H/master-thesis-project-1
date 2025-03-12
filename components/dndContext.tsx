import { createContext, useContext, useState } from 'react';
 
const DnDContext = createContext<[string | null, (_: any) => void]>([null, (_: any) => {}]);
 
export const DnDProvider = ({ children }) => {
  const [type, setType] = useState<string | null>(null);
 
  return (
    <DnDContext.Provider value={[type, setType]}>
      {children}
    </DnDContext.Provider>
  );
}
 
export default DnDContext;
 
export const useDnD = () => {
  return useContext(DnDContext);
}