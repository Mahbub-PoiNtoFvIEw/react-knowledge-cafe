import profile_img from '../../assets/images/profile.png';
const Header = () => {
    return (
        <header className='flex justify-between items-center border-b-2 py-4 max-w-6xl mx-auto'>
            <h1 className='text-4xl font-bold'>Knowledge Cafe</h1>
            <img src={profile_img} alt="" />
        </header>
    );
};

export default Header;