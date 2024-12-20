import propTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div className='bg-slate-300 p-4 m-4 rounded-xl'>
            <h2 className='text-xl font-bold'>{title}</h2>
        </div>
    );
};

Bookmark.propTypes ={
    bookmark: propTypes.object
}

export default Bookmark;