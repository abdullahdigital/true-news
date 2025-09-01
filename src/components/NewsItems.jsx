import React from 'react'
import { useInView } from 'react-intersection-observer';

const NewsItems =(props)=> {
 
    let {title,description,imageUrl,newsUrl,date,author,source} =props;
    const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.1,
    });

    return (
        <div ref={ref} className={`p-3 w-full sm:w-full lg:w-full xl:w-full transition-opacity duration-1000 ${inView ? 'opacity-100' : 'opacity-0'}`}>
        <div className="bg-white dark:bg-[var(--card-background)] rounded-xl shadow-lg overflow-hidden h-full flex flex-col transform transition-transform duration-300 hover:scale-105 hover:shadow-xl border border-[var(--border-color)]">
      <div className='absolute top-2 right-2 flex justify-end'>
        <span className="bg-[var(--accent-color)] text-white text-xs font-semibold px-2.5 py-1 rounded-full shadow-md">{source}</span>
        </div>
        <div className="h-32">
  <img src={!imageUrl?'https://www.livemint.com/lm-img/img/2023/07/21/600x338/pain_killer_1689910685525_1689910685699.JPG':imageUrl} className="w-full h-full object-cover rounded-t-xl" alt="..."/>
</div>
        <div className="p-4 flex flex-col flex-grow">
          <h5 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">{title}</h5>
          <p className="text-gray-700 dark:text-gray-300 text-base mb-4 flex-grow">{description}</p>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4"><small>By {!author?'Unknown':author} on {new Date(date).toUTCString()}</small></p>
          <a rel='noreferrer' href={newsUrl} target="_blank" className="inline-block bg-[var(--accent-color)] hover:bg-[var(--accent-dark)] text-white font-bold py-2.5 px-5 rounded-lg transition duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">Read More</a>
        </div>
      </div>
      </div>
    )
  
}

export default NewsItems
