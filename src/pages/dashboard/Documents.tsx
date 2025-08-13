import DashBoardCard from '@/components/DashBoardCard'
import { FaUser } from 'react-icons/fa6'

export const Documents = () => {
  return (
    <div>
      <div className='bg-white w-full h-screen flex flex-row gap-4'>
      <DashBoardCard
        topLabel="Total Users"
        number={20}
        bottomLabel="Users registered"
        icon={<FaUser />}
        iconBgColor="bg-[rgba(59,130,246,0.2)]"
        iconColor="text-dprimary"
        showFCFA={true}
      />
      <DashBoardCard
        topLabel="Total Users"
        number={20}
        bottomLabel="Users registered"
        icon={<FaUser />}
        iconBgColor="bg-[rgba(59,130,246,0.2)]"
        iconColor="text-dprimary"
        showFCFA={true}
      />
      <DashBoardCard
        topLabel="Total Users"
        number={20}
        bottomLabel="Users registered"
        icon={<FaUser />}
        iconBgColor="bg-[rgba(59,130,246,0.2)]"
        iconColor="text-dprimary"
        showFCFA={true}
      />
    </div>
    </div>
  )
}
