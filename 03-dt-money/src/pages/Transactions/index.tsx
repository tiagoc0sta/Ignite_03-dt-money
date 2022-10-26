import { useContext, useEffect, useState } from "react";
import { Header } from "../../compponents/Header";
import { Summary } from "../../compponents/Summary";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { SearchForm } from "./components/SearchForm";
import { PriceHighLight, TransactionsContainer, TransactionsTable } from "./styles";



export function Transactions () {
  const { transactions } = useContext(TransactionsContext);

  return (
    <div>
      <Header/>
      <Summary/>      

     <TransactionsContainer>
     <SearchForm/>
      <TransactionsTable>
        <table>
            <tbody>
              {transactions.map(transaction => {
                return (
                  <tr key={transaction.id}>
                    <td width="58%">{transaction.description}</td>
                  
                    <td>
                      <PriceHighLight variant={transaction.type}>
                        {transaction.price}
                      </PriceHighLight>
                      </td>                
                    <td>{transaction.category}</td>
                    <td>{transaction.createdAt}</td>
                  </tr>
                )
              })}             

                      
            </tbody>
          </table>
      </TransactionsTable>       
     </TransactionsContainer>
        
      
    </div>
  )
}