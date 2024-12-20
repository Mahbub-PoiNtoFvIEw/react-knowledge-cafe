import propTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks, readingTime}) => {
    // const {title} = bookmarks;
    console.log(readingTime)
    return (
        <div className="md:w-1/3 ml-4">
            <h3 className='font-bold text-center bg-slate-500 rounded-xl p-4'>Spend Time On Reading : {readingTime}</h3>
            <div>
                <h2 className='text-2xl font-bold text-center my-2'>BookMarked Blogs: {bookmarks.length}</h2>
                {
                    bookmarks.map((bookmark, idx) => 
                    <Bookmark 
                        key={idx} 
                        bookmark={bookmark}
                    ></Bookmark>)
                }
            </div>
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: propTypes.array,
    readingTime: propTypes.number,
}

export default Bookmarks;