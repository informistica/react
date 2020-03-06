import React, { Component } from 'react'
const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
      </tr>
    </thead>
  )
}
/*
Passiamo i props come parametro e mappiamo l'array per restituire una riga (e relativo indice) della tabella per ogni oggetto dell'array. Questa mappa sarà contenuta nella variabile rows, che restituiremo come espressione.
*/ 
const TableBody = props => {
  const rows = props.characterData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.job}</td>
         <td>
    <button onClick={() => props.removeCharacter(index)}>Delete</button>
  </td>
      </tr>
    )
  })

  return <tbody>{rows}</tbody>
}

/*
Dato che il nostro componente Table è in realtà costituito da due componenti semplici più piccoli, passeremo i dati al TableBody, ancora una volta attraverso i props.
*/
const Table = props => {
  const { characterData, removeCharacter } = props
  return (
    <table className="table">
      <TableHeader />
      <TableBody characterData={characterData} removeCharacter={removeCharacter} />
    </table>
  )
}
export default Table