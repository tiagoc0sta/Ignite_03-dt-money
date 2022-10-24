import { Header } from "../../compponents/Header";
import { Summary } from "../../compponents/Summary";
import { SearchFormContainer } from "./components/SearchForm/styles";
import { PriceHighLight, TransactionsContainer, TransactionsTable } from "./styles";

export function Transactions () {
  return (
    <div>
      <Header/>
      <Summary/>
      <SearchFormContainer/>


     <TransactionsContainer>
      <TransactionsTable>
        <table>
            <tbody>
              <tr>
                <td width="50%">Desenvolvimento de site</td>
               
                <td>
                  <PriceHighLight variant="income">
                    R$ 12.000,00
                  </PriceHighLight>
                  </td>                
                <td>Venda</td>
                <td>13/04/2022</td>
              </tr>

              <tr>
                <td width="50%">Hamburger</td>
                <td>
                  <PriceHighLight variant="outcome">
                    - R$ 59,00
                  </PriceHighLight>
                </td>
                <td>Alimentação</td>
                <td>10/04/2022</td>
              </tr>          
            </tbody>
          </table>
      </TransactionsTable>       
     </TransactionsContainer>
        
      
    </div>
  )
}