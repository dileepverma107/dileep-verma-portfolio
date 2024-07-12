import { motion } from 'framer-motion';
import { FaGlobe, FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

const SocialLinks = () => {
  const result = {
    website: { link: "https://example.com", text: "example.com" },
    github: { link: "https://github.com/dileepverma107", text: "GitHub" },
    twitter: { link: "https://www.linkedin.com/in/dileep-verma-35a319139/", text: "Twitter" },
    linkedin: { link: "https://www.linkedin.com/in/dileep-verma-35a319139/", text: "LinkedIn" }
  };
  const index = 0;

  function truncateText(text: string, maxLength: number) {
    if (text && text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    }
    return text;
  }

  return (
    <div className="mt-4 mb-2 flex flex-col justify-self-start space-y-2">
      {/*result.website.link && (
        <motion.div
          className="tooltip tooltip-top tooltip-rounded"
          data-tip={result.website.text}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, type: "spring", stiffness: 110, delay: (index % 4) * 0.1 + 0.3 }}
        >
          <a target="_blank" rel="noreferrer" href={result.website.link} className="flex items-center">
            <FaGlobe style={{ color: '#4a4a4a', marginRight: '5px' }} size={19} />
            <span className="text-sm text-[#BDBEC3]">{truncateText(result.website.text, 13)}</span>
          </a>
        </motion.div>
      )*/}
      {result.github.link && (
        <motion.div
          className="tooltip tooltip-left tooltip-rounded"
          data-tip={result.github.text}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, type: "spring", stiffness: 110, delay: (index % 4) * 0.2 + 0.2 }}
        >
          <a target="_blank" rel="noreferrer" href={result.github.link} className="flex items-center">
            <FaGithub style={{ color: '#EF4642', marginRight: '5px' }} size={19} />
            <span className="text-sm text-[#BDBEC3]">{truncateText(result.github.text, 13)}</span>
          </a>
        </motion.div>
      )}
      {result.twitter.link && (
        <motion.div
          className="tooltip tooltip-left tooltip-rounded"
          data-tip={result.twitter.text}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, type: "spring", stiffness: 110, delay: (index % 4) * 0.3 + 0.1 }}
        >
          <a target="_blank" rel="noreferrer" href={result.twitter.link} className="flex items-center">
            <FaTwitter style={{ color: '#1DA1F2', marginRight: '5px' }} size={19} />
            <span className="text-sm text-[#BDBEC3]">{truncateText(result.twitter.text, 13)}</span>
          </a>
        </motion.div>
      )}
      {result.linkedin.link && (
        <motion.div
          data-tip={result.linkedin.text}
          className="tooltip tooltip-bottom tooltip-rounded"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, type: "spring", stiffness: 110, delay: (index % 4) * 0.2 + 0.3 }}
        >
          <a target="_blank" rel="noreferrer" href={result.linkedin.link} className="flex items-center">
            <FaLinkedin style={{ color: '#0077B5', marginRight: '5px' }} size={19} />
            <span className="text-sm text-[#BDBEC3]">{truncateText(result.linkedin.text, 13)}</span>
          </a>
        </motion.div>
      )}
    </div>
  );
};

export default SocialLinks;
