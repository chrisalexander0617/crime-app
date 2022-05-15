import React, {useEffect} from 'react'
import {Dashboard} from '../../dashboard/Dashboard'

export const Home = () => {
    useEffect(()=>{
        console.log('Home.js')
    })
    return <Dashboard />
}