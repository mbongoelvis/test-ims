import profilePlaceholder from "../../public/profile-placeholder.jpeg"

export const UserProfile = () => {
  return (
    <div className='flex items-center gap-2 mt-4'>
      <div className='w-[50px] h-[50px] rounded-full overflow-hidden'>
        <img src={profilePlaceholder} className='object-cover w-full h-full' alt="profile placeholder" />
      </div>
      <div className='flex md:hidden lg:flex flex-col'>
        <p className='text-white font-semibold'>mbongo elvis</p>
        <p className='text-sm text-white opacity-60'>@manager</p>
      </div>
    </div>
  );
}
