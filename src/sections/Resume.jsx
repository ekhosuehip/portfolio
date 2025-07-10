import { abilities } from "../constants"
import { motion } from 'framer-motion';
import {  Tabs, TabsList, TabsTrigger, TabsContent } from "../components/Tabs"
const Resume = () => {
  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{
        opacity: 1,
        transition: {delay: 2.4, duration: 0.4, ease: "easeIn"},
      }}
      className="m-h-[86vh] flex justify-center items-center py-12 xl:py-0"
    >
      <div className="mx-auto">
        <Tabs>
          <TabsList>
            <TabsTrigger value="account"></TabsTrigger>
            <TabsTrigger value="account"></TabsTrigger>
            <TabsTrigger value="account"></TabsTrigger>
            <TabsTrigger value="account"></TabsTrigger>
          </TabsList>
          <TabsContent></TabsContent>
          <TabsContent></TabsContent>
        </Tabs>
      </div>

    </motion.div>
  )
}

export default Resume
