import React from 'react'

const Card = ({pd}) => {
  return (
        <div className="w-80 border rounded-2xl overflow-hidden shadow-md shadow-green-100 bg-black my-5">
            <img className="w-80 h-60" src={pd.image} alt="" />
            <div className="p-3">
             {/* <img className='rounded-2xl' src={pd.image} alt="Godzilla" /> */}
                <h1 className="text-2xl my-3 text-left text-white">{pd.title}</h1>
                <p className="text-slate-600 my-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ipsa
                in harum inventore cumque nihil, itaque, repudiandae cum nisi, iste quidem
                earum excepturi nostrum corrupti numquam cupiditate voluptatem distinctio
                iusto.
                </p>
                <span className='text-white my-3 text-2xl'>${pd.price}</span>
        </div>
    </div>
  )
}

export default Card