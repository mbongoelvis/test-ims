// import React from 'react';

// export const Dashboard = () => {
//   return (
//     <div className='w-full h-screen'>Dashboard
//     </div>
//   )
// }

import { Modal } from '@/components/Modals/Modal'
import { QuickAcctions } from '@/components/QuickActions/QuickAcctions'
import React from 'react'

export const Dashboard = () => {
  return (
    <div>
      <QuickAcctions />
      <Modal icon={false} buttonIcon={false} btnName='Add Users' heading='Share this link' subHeading='Anyone with this link can view the document.' buttonName='Copy Link' >
        <p>Pass your component here</p>
      </Modal>

    </div>
  )
}
