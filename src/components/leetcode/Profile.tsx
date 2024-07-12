import { motion } from 'framer-motion';

interface ProfileProps {
  image: string;
  fullName: string;
  username: string;
  badgeImg?: string;
  rank: string;
}

const Profile: React.FC<ProfileProps> = ({ image, fullName, username, badgeImg, rank }) => {
  const index = 0; // Assuming you might use this for animations or unique rendering logic

  return (
    <div className="mt-4 mb-2">
      <div className="flex justify-center gap-2">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, type: "spring", stiffness: 110, delay: (index % 4) * 0.2 + 0.2 }}
        >
          <div className="relative flex h-20 w-[70px] shrink-0 flex-nowrap">
            <img src={image} alt="Avatar" className="h-[70px] w-[70px] rounded-lg object-cover" />
          </div>
        </motion.div>

        {/* Name/username/rank*/}
        <div className="flex flex-col">
          {/* fullname */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, type: "spring", stiffness: 110, delay: (index % 4) * 0.3 + 0.2 }}
          >
            <div className="flex items-center">
              <p className="break-all text-sm font-semibold text-[#FFFEFE]">{fullName}</p>
            </div>
          </motion.div>

          {/* username */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, type: "spring", stiffness: 110, delay: (index % 4) * 0.2 + 0.3 }}
          >
            <div className="flex items-center flex-nowrap">
              <p className="text-xs text-[#9FA1A4]">{username}</p>
              {badgeImg && (
                <div className="ml-1">
                  <img src={badgeImg} className="h-[14px] w-[14px]" alt="Badge" />
                </div>
              )}
            </div>
          </motion.div>

          {/* rank */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, type: "spring", stiffness: 110, delay: (index % 4) * 0.3 + 0.3 }}
          >
            <p className="flex mt-3 items-end space-x-[5px] text-base">
              <span className="text-sm text-[#9FA1A4]">Rank</span>
              <span className="text-sm font-medium text-[#FFFFF8]">{rank}</span>
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
