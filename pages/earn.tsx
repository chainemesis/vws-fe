"use Client";

import Card from '@/app/components/common/card';

import Button from '@mui/material/Button';

function Earn() {
    return(
        <>
            <div className="px-2 py-3 flex bg-[#453209] items-center">
                <img src="/images/avatar.png" alt="AvatarImg" className=' w-10 h-10'></img>
                <div className=' text-sm font-medium text-white ml-3'>VWS</div>
                <Button variant="contained" sx={{paddingY: '8px', fontSize: '12px', paddingX: '8px', marginLeft: 'auto', borderRadius: '20px', textTransform: 'none', background: '#4C432D'}}>Choose exchange</Button>
            </div>
            <div className='mt-10 px-2 text-white'>
                <div className='text-xl font-medium '>
                    VWS Tasks list
                </div>
                <Card title="Join our Mexc" price='1000' link="https://www.mexc.com/ru-RU/register?inviteCode=mexc-Magik" img="/images/mexc-logo-big.png"></Card>
                <Card title="Join our Gate" price='1000' link="https://www.gate.io/signup/11024473" img="/images/gate-io.webp"></Card>
                <Card title="Join our Bitmart" price='1000' link="https://www.bitmart.com/register-referral/en?r=TxcR8r" img="/images/bitmart.png"></Card>
                <Card title="Join our Bingc" price='1000' link="https://bingx.com/invite/E5RZZM" img="/images/bingx.svg"></Card>
                <Card title="Join our Getgems" price='1000' link="http://getgems.io/virtualsworlds" img="/images/getgem.png"></Card>
                <Card title="Join our Twitter" price='1000' link=" http://x.com/VirtualsWorlds" img="/images/twitter.png"></Card>
            </div>
        </>
    )
}

export default Earn;
