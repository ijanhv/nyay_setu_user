import { useRouter } from 'next/router'
import { useContract, useNFT } from '@thirdweb-dev/react'
import Image from 'next/image'
import Loader from '@/components/Loader'
import ProgressTracker from '@/components/ProgressTracker'


const Heading = ({ title }: { title: string}) => {
  return (
    <div className="flex items-center gap-2 my-3">
    <div className='bg-primary h-7 w-2 rounded-lg' />
    <h4 className='text-xl font-bold '>{title}</h4>
    </div>
  )

  }

const CaseDetailsPage = () => {
  const router = useRouter()
  const { caseId } = router.query
  const token = caseId?.toString().split('-')[0]

  const { contract: caseCollection } = useContract("0xef26fB5eC61c546d2A6e05662FeB696ea3a01171")
  const { data: nft, isLoading, error } = useNFT(caseCollection, token)
  // @ts-ignore
  const caseDetails = nft?.metadata?.properties

  if(isLoading) return <Loader />


  return (
    <div className='flex flex-col gap-3 m'>
      <div className='flex justify-between '>
        <h1 className='heading'><span>Case Details</span></h1>
        
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-6 my-5'>
        <div className='space-y-6'>
 
            <div className='relative h-[400px] w-full rounded-md  '>
              <Image src={'/case.png'} alt='Case Image' fill className='object-cover rounded-lg' />
            </div>
            
            <Heading title='Case Description' />
         
            {/* @ts-ignore */}
            <p className='text-sm md:text-base text-justify'>{caseDetails?.caseDescription}</p>
            <div className=' mt-5 flex justify-between'>
              {/* @ts-ignore */}
              <p>{caseDetails?.createdAt}</p>
              {/* @ts-ignore */}
              <p>Status:&nbsp;<span className='font-bold'>{caseDetails?.status}</span></p>
            </div>
        
        </div>
        <div className=''>
          <div className='space-y-4'>
            {/* @ts-ignore */}
            <ProgressTracker status={caseDetails?.status} />
            <div className='border p-3 rounded-md felx flex-col '>
              <Heading title='Case Details' />
              <div>

                  
                <h4 className='text-lg font-semibold underline'> Plaintiff Details</h4>
      
             
                <div className='gap-y-2 grid grid-cols-1 lg:grid-cols-2 py-2'>
                  {/* @ts-ignore */}
                  <p><span className='font-bold'>Name:</span>&nbsp;{caseDetails?.plaintiff?.name}</p>
                  {/* @ts-ignore */}
                  <p><span className='font-bold'>Phone:</span>&nbsp;{caseDetails?.plaintiff?.contact}</p>
                  {/* @ts-ignore */}
                  <p><span className='font-bold'>Email:</span>&nbsp;{caseDetails?.plaintiff?.email}</p>
                  {/* @ts-ignore */}
                  <p><span className='font-bold'>Lawyer Name:</span>&nbsp;{caseDetails?.plaintiff?.lawyerName}</p>
                  {/* @ts-ignore */}
                  <p><span className='font-bold'>Lawyer Email:</span>&nbsp;{caseDetails?.plaintiff?.lawyerEmail}</p>
                  {/* @ts-ignore */}
                  <p><span className='font-bold'>Address:</span>&nbsp;{caseDetails?.plaintiff?.address}</p>
                </div>
              </div>

              <div>
                <h4 className='text-lg font-semibold underline'>Defendant Details</h4>
                <div className='gap-y-2 grid grid-cols-1 lg:grid-cols-2 py-2'>
                  {/* @ts-ignore */}
                  <p><span className='font-bold'>Name:</span>&nbsp;{caseDetails?.defendant?.name}</p>
                  {/* @ts-ignore */}
                  <p><span className='font-bold'>Phone:</span>&nbsp;{caseDetails?.defendant?.contact}</p>
                  {/* @ts-ignore */}
                  <p><span className='font-bold'>Email:</span>&nbsp;{caseDetails?.defendant?.email}</p>
                  {/* @ts-ignore */}
                  <p><span className='font-bold'>Lawyer Name:</span>&nbsp;{caseDetails?.defendant?.lawyerName}</p>
                  {/* @ts-ignore */}
                  <p><span className='font-bold'>Lawyer Email:</span>&nbsp;{caseDetails?.defendant?.lawyerEmail}</p>
                  {/* @ts-ignore */}
                  <p><span className='font-bold'>Address:</span>&nbsp;{caseDetails?.defendant?.address}</p>
                  {/* @ts-ignore */}
                </div>
              </div>

              <div>
                <h4 className='text-lg font-semibold underline'>Documents</h4>
                <div className='gap-y-2 grid grid-cols-2 py-2'>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CaseDetailsPage