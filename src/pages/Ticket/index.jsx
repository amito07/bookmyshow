import React from 'react'
import Header from '../../components/Header'
import TicketCard from './TicketCard'

const Ticket = () => {
  return (
    <>
    <Header />
    <div className='flex flex-row justify-around'>
        <div>
            <section>
                <h1 className='font-bold'>Select Date</h1>
            </section>


        </div>
        <h1>Card</h1>
    </div>
    </>
  )
}

export default Ticket