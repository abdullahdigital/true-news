import React from 'react'
import { useInView } from 'react-intersection-observer';

const NewsItems =(props)=> {
 
    let {title,description,imageUrl,newsUrl,date,author,source} =props;
    const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.1,
    });

    return (
      <div ref={ref} className={`group p-3 w-full transition-opacity duration-700 ${inView ? 'opacity-100' : 'opacity-0'}`}>
        <div className="rounded-[var(--radius-lg)] elevate-sm overflow-hidden h-full flex flex-col border border-[var(--border-color)] bg-[var(--surface-color)]">
          <div className="absolute top-3 right-3 z-10">
            <span className="bg-[var(--accent-color)] text-white text-xs font-semibold px-2.5 py-1 rounded-full elevate-sm">{source}</span>
          </div>
          <div className="h-40">
            <img src={!imageUrl ? 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1200&auto=format&fit=crop' : imageUrl} className="w-full h-full object-cover" alt={title || 'News image'} />
          </div>
          <div className="p-4 flex flex-col flex-grow">
            <h5 className="text-lg font-semibold mb-2 text-[var(--text-color)] line-clamp-2 min-h-[3.25rem]">{title}</h5>
            <p className="text-[var(--neutral-600)] text-sm mb-4 flex-grow line-clamp-3 min-h-[4.75rem]">{description}</p>
            <p className="text-[var(--neutral-500)] text-xs mb-4">By {!author ? 'Unknown' : author} on {new Date(date).toUTCString()}</p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="inline-flex items-center justify-center brand-gradient text-white font-semibold py-2.5 px-5 rounded-[var(--radius-md)] transition-transform duration-300 group-hover:translate-y-[-2px]">Read More</a>
          </div>
        </div>
      </div>
    )
  
}

export default NewsItems
