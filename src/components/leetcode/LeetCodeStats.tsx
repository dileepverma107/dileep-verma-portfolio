"use client";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, Box, Typography } from "@mui/material";
import { MdKeyboardArrowUp } from "react-icons/md";
import Profile from "./Profile";
import SocialLinks from "./SocialIcons";
import Circle from "./ProgressCircle";
import Questions from "./Questions";
import SkeletonCard from './SkeletonCard';
import { getUserProfile } from '../server/LeetCodeApi';

export default function LeetCodeStats() {
    const [showStats, setShowStats] = useState(false);
    const [userProfile, setUserProfile] = useState<any>(null);
    const [loading, setLoading] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (cardRef.current && !cardRef.current.contains(e.target as Node)) {
                setShowStats(false);
            }
        };

        if (showStats) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [showStats]);

    const toggleStats = async () => {
        setShowStats((prev) => !prev);
        if (!showStats) {
            setLoading(true);
            const username = 'dileepverma107';
            const profileData = await getUserProfile(username);
            setUserProfile(profileData);
            setLoading(false);
        }
    };

    return (
        <>
            {showStats && (
                <motion.div
                    className="fixed inset-0 z-30 flex items-center justify-center backdrop-blur-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                >
                    <Box display="flex" flexDirection="column" alignItems="center" sx={{ px: { xs: 2, sm: 0 } }}>
                        <Card
                            sx={{
                                background: `linear-gradient(135deg, #141414, #292829)`,
                                width: { xs: "100%", sm: "571px" },
                                height: "60px",
                                position: "relative",
                                marginBottom: "8px",
                            }}
                        >
                            <CardContent>
                                <Box display="flex" alignItems="center" justifyContent="center">
                                    <img
                                        src="./leetcodebutton.png"
                                        alt="User Avatar"
                                        style={{ marginRight: '16px', height: '24px' }}
                                    />
                                    <Typography
                                        variant="h6"
                                        component="div"
                                        sx={{
                                            textAlign: "center",
                                            color: "#FFFEFE",
                                            fontSize: "0.875rem",
                                            fontWeight: "500",
                                            fontFamily: "'Roboto', sans-serif",
                                        }}
                                    >
                                        LeetCode Profile Statistics
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>
                        {loading ? (
                            <SkeletonCard />
                        ) : (
                            <Card
                                ref={cardRef}
                                sx={{
                                    backgroundColor: "#292829",
                                    width: { xs: "100%", sm: "571px" },
                                    height: { xs: "auto", sm: "334px" },
                                    position: "relative",
                                    padding: { xs: 2, sm: 0 },
                                }}
                            >
                                <CardContent>
                                    <Box
                                        display="flex"
                                        flexDirection={{ xs: "column", sm: "row" }}
                                        justifyContent="space-between"
                                        alignItems="center"
                                    >
                                        <Profile 
                                            image={userProfile?.matchedUser?.profile?.userAvatar ?? ''} 
                                            fullName="Dileep Kumar Verma" 
                                            username={userProfile?.matchedUser?.username ?? ''} 
                                            rank={userProfile?.matchedUser?.profile?.ranking ?? 'N/A'} 
                                            badgeImg="./50dayleetcode.gif"
                                        />
                                        <SocialLinks />
                                    </Box>
                                    <motion.div
                                        className="my-4"
                                        initial={{ width: 0 }}
                                        animate={{ width: "100%" }}
                                        transition={{ duration: 1, ease: "easeInOut" }}
                                    >
                                        <hr style={{ borderTop: "1px solid white" }} />
                                    </motion.div>
                                    <Box
                                        display="flex"
                                        flexDirection={{ xs: "column", sm: "row" }}
                                        justifyContent="space-between"
                                        mb={2}
                                    >
                                        <Box
                                            flex="1"
                                            display="flex"
                                            justifyContent="center"
                                            alignItems="center"
                                        >
                                            <div style={{ margin: "0 auto" }}>
                                                <Circle total={userProfile?.allQuestionsCount?.[0]?.count ?? 0} value={userProfile?.matchedUser?.submitStats?.acSubmissionNum?.[0]?.count ?? 0} />
                                            </div>
                                        </Box>
                                        <Box
                                            flex="1"
                                            display="flex"
                                            flexDirection="column"
                                            alignItems="center"
                                        >
                                            <div className="mt-8">
                                                <Questions
                                                    type={userProfile?.matchedUser?.submitStats?.acSubmissionNum?.[1]?.difficulty ?? 'N/A'}
                                                    solved={userProfile?.matchedUser?.submitStats?.acSubmissionNum?.[1]?.count ?? 0}
                                                    total={userProfile?.allQuestionsCount?.[1]?.count ?? 0}
                                                    beats={userProfile?.matchedUser?.problemsSolvedBeatsStats?.[0]?.percentage ?? 0}
                                                    line="bg-[#2db55d26]"
                                                    line2="bg-[#01B8A2]"
                                                />
                                                <Questions
                                                    type={userProfile?.matchedUser?.submitStats?.acSubmissionNum?.[2]?.difficulty ?? 'N/A'}
                                                    solved={userProfile?.matchedUser?.submitStats?.acSubmissionNum?.[2]?.count ?? 0}
                                                    total={userProfile?.allQuestionsCount?.[2]?.count ?? 0}
                                                    beats={userProfile?.matchedUser?.problemsSolvedBeatsStats?.[1]?.percentage ?? 0}
                                                    line="bg-[#ffb80026]"
                                                    line2="bg-[#FFC11F]"
                                                />
                                                <Questions
                                                    type={userProfile?.matchedUser?.submitStats?.acSubmissionNum?.[3]?.difficulty ?? 'N/A'}
                                                    solved={userProfile?.matchedUser?.submitStats?.acSubmissionNum?.[3]?.count ?? 0}
                                                    total={userProfile?.allQuestionsCount?.[3]?.count ?? 0}
                                                    beats={userProfile?.matchedUser?.problemsSolvedBeatsStats?.[2]?.percentage ?? 0}
                                                    line="bg-[#ef474326]"
                                                    line2="bg-[#EF4642]"
                                                />
                                            </div>
                                        </Box>
                                    </Box>
                                </CardContent>
                            </Card>
                        )}
                    </Box>
                </motion.div>
            )}

           <button
                onClick={toggleStats}
                className="fixed bg-gray-700 hover:bg-gray-800 text-white rounded-full shadow-lg z-40 flex items-center justify-center"
                style={{ width: '3rem', height: '3rem', top: '87%', left: '50%', transform: 'translate(-50%, -50%)' }}
            >
                <img src="./leetcodebutton.png" alt="LeetCode Data" className="h-6 w-6" />
            </button>


        </>
    );
}
