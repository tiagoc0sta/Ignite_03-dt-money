import { createContext, ReactNode, useEffect, useState } from "react";

interface Transaction {
  id: number;
  description: string;
  type: 'income' | 'outcome';
  category: string;
  price: number;
  createdAt: string;
}


interface TransactionContextType {
  transactions: Transaction[]; 
}

interface TransactionsProviderProps {
  children: ReactNode; 
}

export  const TransactionsContext = createContext({} as TransactionContextType );

export function TransactionsProvider({children}: TransactionsProviderProps) {
  const  [transactions, setTransactions ] = useState<Transaction[]>([]) /*estado - usado para armazenar e acessar informações dentro do react para serem consumidar pela interface*/

  async function loadTransactions() {
    const response = await fetch('http://localhost:3000/transactions')
    const data = await response.json();

    console.log(data);
    setTransactions(data);
  }  
useEffect(() => {
  loadTransactions()       
}, [])


  return (
    <TransactionsContext.Provider value={{transactions}} >
      {children}
    </TransactionsContext.Provider>
  )
}

