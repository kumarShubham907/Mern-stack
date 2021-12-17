import React from 'react'
import { List, UnList, ButtonStyed } from './styled'
const ReadList = (props) => {
    const {
        data,
        deletedData,
        editlist,
        index
    } = props

    const {
        id,
        name,
        email,
        phone
    } = data
    return (
        <>
            <UnList key={id} UnOrderLine="#111">
                <List>{index + 1}</List>
                <List>{name}</List>
                <List>{email}</List>
                <List>{phone}</List>
                <List><ButtonStyed onClick={() => editlist(id)} btnName="Edit" color="#111" border="blue" bghover="#6344e4" colorhover="#fff"></ButtonStyed></List>
                <List><ButtonStyed onClick={() => deletedData(id)} btnName="Delete" color="#fff" bg="#6344e4" bghover="none" borderhover="#6344e4" colorhover="#000"></ButtonStyed></List>
            </UnList>
        </>
    )
}

export default ReadList
