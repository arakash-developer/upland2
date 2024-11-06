import React from 'react'
import Container from './Container'
import { GoDotFill } from "react-icons/go";



const Bannar = () => {
    return (
        <div className="h-[873px] bg-[url('../public/bannar.png')] bg-cover bg-bottom">
            <Container className='flex justify-between items-center'>
                <div className="left pt-[256px]">
                    <div className="flex gap-x-[15px] items-center">
                        <div className="flex gap-x-1">
                            <GoDotFill className='text-[#FF6231]' />
                            <GoDotFill className='text-[#FF6231]' />
                        </div>
                        <p className='font-medium text-xs leading-[170%] uppercase text-[#FF6231]'>trendy application</p>
                    </div>
                    <h1>work faster with powerful tools</h1>
                    <p>Laboris culpa ea incididunt dolore ipsum tempor duis do ullamco eiusmod officia magna ad id.</p>
                    <button type='button'>Learn more</button>
                </div>
                <div className="right">
                    b
                </div>
            </Container>
        </div>
    )
}

export default Bannar