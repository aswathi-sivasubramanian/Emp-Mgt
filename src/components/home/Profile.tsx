import React from 'react';
import ProfieImg from '../../images/Profile.jpg';
import { Card,Box,Text, Theme } from '@radix-ui/themes';
const Profile: React.FC = () => {
  return (
    <div className='mt-6 ml-6'>
        <div className='mt-16 ml-16 '>
      <img
        src={ProfieImg}
        alt="Profile"
        className=" rounded-full h-40 w-40 "
      />
       </div>
      <Theme appearance="light">
      <Card style={{ maxWidth: 240,marginLeft:"26px",marginTop:"10px" }}>
 
    
    <Box className='ml-7'>
      <Text as="div" size="2" weight="bold">
        Teodros Girmay    <span className='text-neutral-500'>
        11006
      </span>
      </Text>
      <Text as="div" size="2"  >
        Software Developer
      </Text>
      <Text  as="div" size="2">Onboard Date:09/07/2023 </Text>
   <Text  as="div" size="2">Contact No:9003477209 </Text>

    </Box>
  
</Card>
</Theme>
     
</div>
  );
};

export default Profile;
