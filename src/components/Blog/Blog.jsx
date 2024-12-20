import PropTypes from 'prop-types';
import { IoBookmarksOutline } from "react-icons/io5";

const Blog = ({blog, handleAddToBookmark, handleMarkAsRead}) => {
    const {id, author, author_img, title, cover_img, reading_time, posted_date, has_tag} = blog;
    return (
        <div className='mb-10 space-y-4'>
            <img className='w-full h-72 rounded-lg' src={cover_img} alt={`Cover picture of the title ${title}`} />
            <div className='flex justify-between my-6'>
                <div className='flex gap-4'>
                    <img className='h-14 w-14 rounded-full' src={author_img} alt="" />
                    <div>
                        <h3 className='text-2xl font-bold'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min Read</span>
                    <button onClick={()=>handleAddToBookmark(blog)} className='ml-4 text-red-600'><IoBookmarksOutline></IoBookmarksOutline></button>
                </div>
            </div>
            <h2 className='text-4xl font-bold'> {title}</h2>
            <p>
                {
                    has_tag.map((hash, idx) => <span key={idx}><a>#{hash}</a></span>)
                }
            </p>
            <button onClick={()=>handleMarkAsRead(id, reading_time)} className='text-purple-700 font-bold underline'>Mark As Read</button>
        </div>
    );
};

Blog.propTypes ={
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func.isRequired,
}

export default Blog;