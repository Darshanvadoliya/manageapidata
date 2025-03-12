import React from 'react'

function Table({ td }) {
    return (
        <>
            {td?.map((value) => {
                return(
                    <td>{value}</td>
                )
            })}
        </>
    )
}

export default Table