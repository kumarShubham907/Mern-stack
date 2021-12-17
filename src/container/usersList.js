import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DeleteDatalist, getData, SaveDatalist } from '../redux/action/action'
import EditList from './editList'
import ReadList from './readList'
import { Card, Container, List, UnList, GlobalStyle } from './styled'

const UserList = () => {
    const dispatch = useDispatch()
    const initialList = useSelector(state => state.SetDataList?.dataIn)
    const [handleEditData, sethandleEditData] = useState({})
    const [isEditable, setisEditable] = useState(null)

    useEffect(() => {
        dispatch(getData())
    }, [dispatch])

    const deletedData = (id) => {
        const filteredData = initialList.filter((data) => data.id !== id)
        dispatch(DeleteDatalist(filteredData))
    }

    const editlist = (index) => {
        setisEditable(index)
        const findingList = initialList.find(data => data.id === index)
        const { email, name, phone } = findingList;
        sethandleEditData({ name, email, phone })
    }

    const inputHandler = (e) => {
        const { value, name } = e.target
        sethandleEditData({ ...handleEditData, [name]: value })
    }

    const savelist = (id) => {

        const savedDataList = initialList.map((data) => {
            if (data.id === id) return { ...data, name: handleEditData.name, phone: handleEditData.phone, email: handleEditData.email }
            return data
        })

        dispatch(SaveDatalist(savedDataList), setisEditable(null))
    }

    const cancellist = () => setisEditable(null)

    return (
        <>
            <GlobalStyle />
            <Container>
                <Card >
                    <UnList>
                        <List>ID</List>
                        <List>Name</List>
                        <List>Email</List>
                        <List>Phone</List>
                        <List>Edit</List>
                        <List>Delete</List>
                    </UnList>
                    {
                        initialList?.map((data, index) => {
                            return (
                                <>
                                    {
                                        isEditable === data.id ?
                                            <EditList handleEditData={handleEditData} savelist={savelist} inputHandler={inputHandler} data={data} index={index} cancellist={cancellist} /> :
                                            <ReadList index={index} data={data} deletedData={deletedData} editlist={editlist} />
                                    }
                                </>
                            )
                        })
                    }
                </Card>
            </Container>

        </>
    )
}

export default UserList
