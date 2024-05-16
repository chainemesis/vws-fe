import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

interface CardProps {
    title : string,
    price : string,
    link : string,
    img : string
}

function Card({title, price, link, img } : CardProps) {
    return (
        <>
            <div className='mt-5 bg-[#272A2F] px-2 py-2 flex flex-row rounded-md'>
                <img src={img} alt='mexc' className='w-14 h-14'/>
                <div className='text-md font-normal flex flex-col space-y-1 ml-3'>
                    <p><a href={link} target='_blank'>{title}</a></p>
                    <div className='flex space-x-2 items-center'>
                        <img src='/images/dollar-icon.svg' alt='dollar' className='w-5 h-5'/>
                        <div>+{price}</div>
                    </div>
                </div>
                <div className='ml-auto flex items-center'><ArrowForwardIosIcon /></div>
            </div>
        </>
    )
}

export default Card;