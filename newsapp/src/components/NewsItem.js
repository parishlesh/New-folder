import React from 'react';

export default function NewsItem(props) {

    let { title, description, imgUrl, url, author, publishedAt } = props;
    return (
        <div className='flex m-5 min-w-64 max-w-72'>
            <div className="flex w-full bg-white flex-col rounded-xl text-black shadow-md relative gap-3">
                <div className="img relative flex bg-red-400 h-40 w-auto mx-4 mt-6 rounded-xl overflow-hidden bg-clip-border">
                    {imgUrl !== null ? (
                        <img src={imgUrl} alt="" className='w-full' />
                    ) : (
                        <img src="https://s.france24.com/media/display/e6279b3c-db08-11ee-b7f5-005056bf30b7/w:1280/p:16x9/news_en_1920x1080.jpg" alt="" className='w-full' />
                    )}
                </div>
                <hr className='my-4 mx-8' />
                <div className="p-6 pb-0 pt-1">
                    <div className="title">
                        <h2 className='font-sans text-l font-semibold leading-snug tracking-normal'>{title}...</h2>
                    </div>
                    <div className="description">
                        <p className='block font-sans text-base font-light leading-relaxed text-inherit antialiased'>
                            {description}...
                        </p>
                        <p className='text-sm text-gray-400 font-sans mt-2 mb-0'>By {!author ? 'Unknown' : author} on {new Date(publishedAt).toGMTString()}</p>
                    </div>
                </div>
                <div className="pt-0 p-6">
                    <a href={url} rel="noreferrer" target='_blank'>
                        <button type='button' className='bg-red-300 text-white font-light uppercase py-1 px-2 rounded-lg text-center align-middle shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/400 focus:opacity-[0.85] focus:shadow-none text-sm'>
                            Read more...
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );

}