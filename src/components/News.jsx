import React, { useEffect, useState } from 'react';
import LoadingBar from 'react-top-loading-bar';
import NewsItems from './NewsItems';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';
import { setCache, getCache } from '../utils/cache';


const News =(props)=>{
    const [articles,setArticles]= useState([])
    const [loading,setLoading]= useState(true)
    const [page,setPage]= useState(1)
    const [totalResults,setTotalResults]= useState(0)
    const [apiError, setApiError] = useState(false)
    
const capitalizeFirstLetter=(string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1);
}

   

const updateNews=async ()=>{
     props.setProgress(0);
    const cacheKey = `news-${props.category}-page-1`;
    const cachedData = getCache(cacheKey);

    if (cachedData) {
        setArticles(cachedData.articles);
        setTotalResults(cachedData.totalResults);
        setLoading(false);
        props.setProgress(100);
        return;
    }

    const params = new URLSearchParams({
        country: 'us',
        category: props.category,
        apiKey: import.meta.env.VITE_REACT_APP_NEWS_API,
        pageSize: props.pageSize,
    });
    let url = `/api/news?${params.toString()}`
    setLoading(true);
    try {
        let data = await fetch(url);
        props.setProgress(30);
        let parsedData = await data.json();
        if (parsedData.status === 'error') {
            console.error('News API Error:', parsedData.message);
            setApiError(true);
        } else {
            setArticles(parsedData.articles);
            setTotalResults(parsedData.totalResults);
            setCache(cacheKey, { articles: parsedData.articles, totalResults: parsedData.totalResults });
        }
    } catch (error) {
        console.error('Error fetching news:', error);
        setApiError(true);
    } finally {
        setLoading(false);
        props.setProgress(100);
    }

   
}
useEffect(()=>{
   updateNews()
   document.title=`${capitalizeFirstLetter( props.category)} - NEWS Monkey`
   // eslint disable next line 
},[])

   
        





 

 const  fetchMoreData = async () => {
     const nextPage = page + 1;
     const cacheKey = `news-${props.category}-page-${nextPage}`;
     const cachedData = getCache(cacheKey);

     if (cachedData) {
         setArticles(articles.concat(cachedData.articles));
         setTotalResults(cachedData.totalResults);
         setPage(nextPage);
         return;
     }

     let url = `/api/news?country=${props.country}&category=${props.category}&page=${nextPage}&pageSize=${props.pageSize}`
     setPage(nextPage)
     
    try {
        let data = await fetch(url);
        let parsedData = await data.json();
        if (parsedData.status === 'error') {
            console.error('News API Error (fetchMoreData):', parsedData.message);
            setApiError(true);
        } else {
            setArticles(articles.concat(parsedData.articles));
            setTotalResults(parsedData.totalResults);
            setCache(cacheKey, { articles: parsedData.articles, totalResults: parsedData.totalResults });
        }
    } catch (error) {
        console.error('Error fetching more news:', error);
        setApiError(true);
    }
      };

        return (
            <>
                {props.showHeading && <h1 className='text-center text-3xl font-bold my-8 pt-16 text-[var(--text-color)]'>Top Headlines on {capitalizeFirstLetter( props.category)} Category</h1>}
                {loading && <Spinner/>}
                {apiError && (
                    <div className="text-center text-red-500 text-lg my-8">
                        <p>Oops! It seems we've hit our news API limit or encountered an error.</p>
                        <p>Please try again later or upgrade your plan if you need more requests.</p>
                    </div>
                )}
                {!apiError && (
                <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>}>
            <div className="container mx-auto px-4 py-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {articles.map((element) => {
                        return (
                            <NewsItems key={element.url} title={element.title ? element.title : ""} description={element.description?element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                        )
                    })}
                </div>
                </div>
                </InfiniteScroll>
                )}
            </>
          
        )
    
}


News.defaultProps={
    showHeading: true,
    country:'in',
    pageSize:8,
    category:'general',
}
News.propTypes={
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
    showHeading: PropTypes.bool,
}

export default News
