import React, { useState, useEffect } from 'react';
import NewsItem from './NewsItem';
import Loading from './Loading';
import PropTypes from 'prop-types';

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [totalResults, setTotalResults] = useState(0);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)}- News Times`;
    updateNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updateNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    props.setProgress(30);
    let data = await fetch(url);
    let parsedData = await data.json();
    props.setProgress(70);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
  };

  useEffect(() => {
    updateNews();
    // eslint-disable-next-line
  }, [page]);

  const handlePrev = () => {
    setPage(page - 1);
  };

  const handleNext = () => {
    setPage(page + 1);
  };

  return (
    <>
      <h3 className='flex items-center justify-center from-stone-950 text-4xl m-2 mt-28'>
        Top Headlines- {capitalizeFirstLetter(props.category)}
      </h3>

      {loading && <Loading />}

      <div className='min-w-20 flex items-center justify-center m-12 mb-0 lg:w-4/5 lg:mx-auto flex-col'>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4'>
          {!loading && articles.map((element) => (
            <NewsItem
              key={element.url}
              title={element.title ? element.title.slice(0, 45) : ''}
              description={element.description ? element.description.slice(0, 84) : ''}
              imgUrl={element.urlToImage}
              url={element.url}
              author={element.author}
              publishedAt={element.publishedAt}
            />
          ))}
        </div>

        <div className='flex justify-between w-10/12 m-6'>
          <button 
            disabled={page <= 1}
            type='button' 
            className='bg-red-300 text-white font-light uppercase py-2 px-3 rounded-lg text-center align-middle shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/400 focus:opacity-[0.85] focus:shadow-none text-sm'
            onClick={handlePrev}
          >
            Previous
          </button>
          <button 
            disabled={page + 1 > Math.ceil(totalResults / props.pageSize)} 
            type='button' 
            className='bg-red-300 text-white font-light uppercase py-2 px-3 rounded-lg text-center align-middle shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/400 focus:opacity-[0.85] focus:shadow-none text-sm'
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

News.defaultProps = {
  country: 'in',
  pageSize: 15,
  category: 'general'
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
  apiKey: PropTypes.string.isRequired,
  setProgress: PropTypes.func.isRequired
};

export default News;
