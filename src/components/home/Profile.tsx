import React from "react";
import ProfieImg from "../../images/Profile.jpg";
import { Card, Box, Text, Theme } from "@radix-ui/themes";
const Profile: React.FC = () => {
  return (
    
    <div className="mt-6  gap-8 flex">
    
      <div>      <div className="mt-16 ml-16 ">
        <img
          src={ProfieImg}
          alt="Profile"
          className=" rounded-full h-28 w-28 "
        />
      </div>
      <Theme appearance="light">
        <Card style={{ maxWidth: 240, marginLeft: "26px", marginTop: "10px" }}>
          <Box className="ml-7" >
            <Text as="div" size="2" weight="bold">
              Teodros Girmay  <span className="text-neutral-500">11006</span>
            </Text>
            <Text as="div" size="2">
              Software Developer
            </Text>
            <Text as="div" size="2">
              Onboard Date:09/07/2023{" "}
            </Text>
            <Text as="div" size="2">
              Contact No:9003477209{" "}
            </Text>
            <Text as="div" size="2">
              Skills:React.js,Django,AWS
            </Text>
            <Text as="div" size="2">
              
            </Text>
          </Box>
        </Card>
        </Theme>
        </div>
<div >
        <Theme appearance="light">
        <Box
          style={{
            height: "130px",
            width: "130px",
            marginLeft: "",
            marginTop: "10px",
            borderRadius: "50%",
            border: "5px solid #254980",
            textAlign: "center",
          }}
        >
          <Text
            as="div"
            size="8"
            style={{ fontWeight: "bolder", marginTop: "20px" }}
          >
            13{" "}
          </Text>
          <Text as="div" size="2" weight={"medium"}>
            Projects
          </Text>
          <Text as="div" size="2" weight={"medium"}>
            Assigned
          </Text>
        </Box>
        
        </Theme>
        </div>
        
        <div className="w-64 h-32 border rounded border-customGrey font-medium  text-xs leading-5 p-6 bg-customGrey "><p>PROJECTS COMPLETED</p><p>PROJECTS PENDING</p><p>IN PROGRESS</p><p>ISSUES</p></div>
       
    </div>
  );
};

export default Profile;
