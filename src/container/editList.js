import React from 'react'
import {List, UnList, ButtonStyed,Input} from './styled'
const EditList = (props) => {

   const { 
        inputHandler,
        savelist,
        data,
        index,
        handleEditData,
        cancellist
    } = props

    return (
        <div>
        
             <UnList UnOrderLine="#111">
                <List>{index+1}</List>
                <List><Input placeholder='Enter your name' name="name" value={handleEditData.name} onChange={inputHandler}/></List>
                <List><Input placeholder='Enter your email' name="email" value={handleEditData.email} onChange={inputHandler}/></List>
                <List><Input placeholder='Enter your phoneNo' name="phone" value={handleEditData.phone} onChange={inputHandler}/></List>
                <List><ButtonStyed onClick={()=>savelist(data.id)} btnName="Save" color="#111" border="blue" bghover="#6344e4" colorhover="#fff"></ButtonStyed></List>
                <List><ButtonStyed onClick={()=>cancellist()} btnName="Cancel" color="#fff" bg="#6344e4" bghover="none" borderhover="#6344e4" colorhover="#000"></ButtonStyed></List>
            </UnList>
        </div>
    )
}

export default EditList
