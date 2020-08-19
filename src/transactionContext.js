import React,{ createContext, useReducer } from "react"
import TransactionReducer from './transactionReducer';

const initialTransactions = [
    

]

export const TransactionContext = createContext(initialTransactions);

export const TransactionProvider = ({children})=> {
    let [state, dispatch] = useReducer(TransactionReducer, initialTransactions);

    function addTransaction(transObj){
        dispatch({
            type: "ADD_TRANSACTION",
            payload: { 
                amount: transObj.amount, 
                desc: transObj.desc 
            },
        })
    }
    function deleteTransaction(index) { 
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: index
        })
    }
   

   
    return(
        <TransactionContext.Provider value={{
            transactions: state,
            addTransaction,
            deleteTransaction
        }}>
            {children}
        </TransactionContext.Provider>
    )
}