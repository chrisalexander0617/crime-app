import React, {useEffect} from 'react'
import {Dashboard} from '../dashboard/Dashboard'
import {AppBar} from '../../components/global/AppBar'

export const Home = () => {
    useEffect(()=>{
        console.log('Home.js')
    })
    return (
        <>
            <Dashboard />
        </>
    )
}